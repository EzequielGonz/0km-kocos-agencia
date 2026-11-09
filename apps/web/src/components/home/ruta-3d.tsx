import { useEffect, useRef } from 'react';
import type { BufferAttribute } from 'three';

/*
 * Ruta de noche en 3D (Three.js): estelas de luz que vienen y van por los carriles,
 * luces de la banquina y la cámara que sigue apenas al puntero. Es abstracto, hecho en
 * código, sin modelos ni texturas. Se carga con la primera interacción (mover el mouse, tocar,
 * desplazar o usar el teclado), con WebGL y sin «reducir movimiento». En el celular usa menos estelas
 * y menos resolución. Se pausa cuando la portada no está a la vista o la pestaña está oculta.
 */
export function Ruta3D() {
  const lienzo = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = lienzo.current;
    if (!canvas) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    const prueba = document.createElement('canvas');
    if (!prueba.getContext('webgl2') && !prueba.getContext('webgl')) return;
    const movil = window.matchMedia('(max-width: 900px)').matches;

    let cancelado = false;
    let liberar: (() => void) | undefined;

    const iniciar = async () => {
      const THREE = await import('three');
      if (cancelado) return;

      const renderer = new THREE.WebGLRenderer({ canvas, antialias: true, alpha: true, powerPreference: 'low-power' });
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, movil ? 1.25 : 1.5));
      const escena = new THREE.Scene();
      escena.fog = new THREE.Fog(0x030a2e, 28, 190);
      const camara = new THREE.PerspectiveCamera(movil ? 68 : 52, 1, 0.1, 260);
      camara.position.set(0, 3.1, 10);

      // Calzada y líneas
      const calzada = new THREE.Mesh(new THREE.PlaneGeometry(30, 420), new THREE.MeshBasicMaterial({ color: 0x050d33 }));
      calzada.rotation.x = -Math.PI / 2;
      calzada.position.z = -190;
      escena.add(calzada);
      const bordes = new THREE.BufferGeometry().setFromPoints([
        new THREE.Vector3(-13, 0.01, 20), new THREE.Vector3(-13, 0.01, -400),
        new THREE.Vector3(13, 0.01, 20), new THREE.Vector3(13, 0.01, -400),
      ]);
      escena.add(new THREE.LineSegments(bordes, new THREE.LineBasicMaterial({ color: 0x2f6fd6, transparent: true, opacity: 0.55 })));

      // Trazos del carril central que avanzan hacia la cámara
      const trazoGeo = new THREE.PlaneGeometry(0.16, 3.2);
      trazoGeo.rotateX(-Math.PI / 2);
      const trazos = new THREE.InstancedMesh(trazoGeo, new THREE.MeshBasicMaterial({ color: 0x9cc6ff, transparent: true, opacity: 0.5 }), 48);
      const m = new THREE.Matrix4();
      const zTrazos = Array.from({ length: 48 }, (_, i) => -i * 8.5);
      escena.add(trazos);

      // Estelas: las que vienen (blancas y celestes) y las que se van (azules)
      type Estela = { x: number; y: number; z: number; largo: number; v: number };
      const N = movil ? 90 : 150;
      const estelaGeo = new THREE.BoxGeometry(0.09, 0.09, 1);
      const estelas = new THREE.InstancedMesh(estelaGeo, new THREE.MeshBasicMaterial({ transparent: true, opacity: 0.95, blending: THREE.AdditiveBlending, depthWrite: false }), N);
      const datos: Estela[] = [];
      const color = new THREE.Color();
      const paleta = { vienen: [0xffffff, 0xcfe6ff, 0x8fd3ff], van: [0x2f7bff, 0x1f5fe0, 0x6aa8ff] };
      for (let i = 0; i < N; i++) {
        const vienen = i % 2 === 0;
        const carril = vienen ? -2.5 - (i % 3) * 3 : 2.5 + (i % 3) * 3;
        datos.push({ x: carril + (Math.random() - 0.5) * 0.6, y: 0.35 + Math.random() * 0.35, z: -Math.random() * 380, largo: 6 + Math.random() * 14, v: (vienen ? 1 : -1) * (32 + Math.random() * 30) });
        const lista = vienen ? paleta.vienen : paleta.van;
        estelas.setColorAt(i, color.setHex(lista[i % lista.length]));
      }
      escena.add(estelas);

      // Luces de la banquina
      const P = movil ? 40 : 70;
      const posLuces = new Float32Array(P * 3);
      for (let i = 0; i < P; i++) {
        posLuces[i * 3] = i % 2 ? 15.5 : -15.5;
        posLuces[i * 3 + 1] = 5.2;
        posLuces[i * 3 + 2] = -Math.floor(i / 2) * 11;
      }
      const lucesGeo = new THREE.BufferGeometry();
      lucesGeo.setAttribute('position', new THREE.BufferAttribute(posLuces, 3));
      const luces = new THREE.Points(lucesGeo, new THREE.PointsMaterial({ color: 0xffe3a8, size: 0.45, transparent: true, opacity: 0.9, blending: THREE.AdditiveBlending, depthWrite: false }));
      escena.add(luces);

      const objetivo = new THREE.Vector3(0, 1.2, -60);
      const puntero = { x: 0, y: 0 };
      const alMover = (e: PointerEvent) => {
        puntero.x = e.clientX / window.innerWidth - 0.5;
        puntero.y = e.clientY / window.innerHeight - 0.5;
      };
      window.addEventListener('pointermove', alMover, { passive: true });

      const ajustar = () => {
        const { clientWidth: w, clientHeight: h } = canvas;
        if (!w || !h) return;
        renderer.setSize(w, h, false);
        camara.aspect = w / h;
        camara.updateProjectionMatrix();
      };
      ajustar();
      const observadorTam = new ResizeObserver(ajustar);
      observadorTam.observe(canvas);

      let visible = true;
      const observadorVis = new IntersectionObserver(([entrada]) => { visible = entrada.isIntersecting; }, { threshold: 0 });
      observadorVis.observe(canvas);

      const reloj = new THREE.Clock();
      const posicion = new THREE.Vector3();
      const escala = new THREE.Vector3(1, 1, 1);
      const giro = new THREE.Quaternion();
      let cuadro = 0;
      const animar = () => {
        cuadro = requestAnimationFrame(animar);
        if (!visible || document.hidden) { reloj.getDelta(); return; }
        const dt = Math.min(reloj.getDelta(), 0.05);
        for (let i = 0; i < N; i++) {
          const d = datos[i];
          d.z += d.v * dt;
          if (d.v > 0 && d.z > 18) d.z = -380;
          if (d.v < 0 && d.z < -380) d.z = 18;
          posicion.set(d.x, d.y, d.z);
          escala.set(1, 1, d.largo);
          m.compose(posicion, giro, escala);
          estelas.setMatrixAt(i, m);
        }
        estelas.instanceMatrix.needsUpdate = true;
        for (let i = 0; i < zTrazos.length; i++) {
          zTrazos[i] += 26 * dt;
          if (zTrazos[i] > 14) zTrazos[i] -= 48 * 8.5;
          m.makeTranslation(0, 0.02, zTrazos[i]);
          trazos.setMatrixAt(i, m);
        }
        trazos.instanceMatrix.needsUpdate = true;
        const lp = lucesGeo.attributes.position as BufferAttribute;
        for (let i = 0; i < P; i++) {
          let z = lp.getZ(i) + 26 * dt;
          if (z > 14) z -= (P / 2) * 11;
          lp.setZ(i, z);
        }
        lp.needsUpdate = true;
        camara.position.x += (puntero.x * 2.2 - camara.position.x) * 0.04;
        camara.position.y += (3.1 - puntero.y * 0.8 - camara.position.y) * 0.04;
        camara.lookAt(objetivo);
        renderer.render(escena, camara);
      };
      animar();
      canvas.classList.add('is-activa');

      liberar = () => {
        cancelAnimationFrame(cuadro);
        window.removeEventListener('pointermove', alMover);
        observadorTam.disconnect();
        observadorVis.disconnect();
        renderer.dispose();
        [calzada.geometry, bordes, trazoGeo, estelaGeo, lucesGeo].forEach(g => g.dispose());
      };
    };

    // Con la primera interacción (mover el mouse, tocar, desplazar o usar el teclado):
    // no compite con la carga ni con las mediciones de velocidad.
    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'pointermove', 'keydown'] as const;
    const arrancar = () => {
      eventos.forEach(e => window.removeEventListener(e, arrancar));
      if (!liberar && !cancelado) void iniciar();
    };
    eventos.forEach(e => window.addEventListener(e, arrancar, { passive: true, once: true }));

    return () => {
      cancelado = true;
      eventos.forEach(e => window.removeEventListener(e, arrancar));
      liberar?.();
    };
  }, []);

  return <canvas ref={lienzo} className="ruta-3d" aria-hidden="true" />;
}
