import { useEffect } from 'react';

/*
 * Animaciones ligadas al desplazamiento (GSAP con ScrollTrigger, SplitText y DrawSVG).
 * Se cargan con la primera interacción (desplazar, tocar o usar el teclado) y solo si
 * la persona no pidió reducir el movimiento. Sin JavaScript todo se ve completo, y lo
 * que ya está en pantalla al iniciar no se toca, para que nada parpadee.
 */
export function Movimiento() {
  useEffect(() => {
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;
    let cancelado = false;
    let deshacer: (() => void) | undefined;

    let modulos: Promise<[typeof import('gsap'), typeof import('gsap/ScrollTrigger'), typeof import('gsap/SplitText'), typeof import('gsap/DrawSVGPlugin')]> | undefined;
    const cargar = () => modulos ??= Promise.all([
      import('gsap'),
      import('gsap/ScrollTrigger'),
      import('gsap/SplitText'),
      import('gsap/DrawSVGPlugin'),
    ]);

    const iniciar = async () => {
      const [{ gsap }, { ScrollTrigger }, { SplitText }, { DrawSVGPlugin }] = await cargar();
      if (cancelado) return;
      gsap.registerPlugin(ScrollTrigger, SplitText, DrawSVGPlugin);
      const pendiente = (el: Element | null): el is Element =>
        !!el && el.getBoundingClientRect().top > window.innerHeight * 0.9;
      const mm = gsap.matchMedia();

      const ctx = gsap.context(() => {
        gsap.utils.toArray<HTMLElement>('.revela').forEach(titulo => {
          if (!pendiente(titulo)) return;
          SplitText.create(titulo, {
            type: 'lines',
            mask: 'lines',
            autoSplit: true,
            onSplit: self => gsap.from(self.lines, {
              yPercent: 110,
              duration: 1,
              ease: 'expo.out',
              stagger: 0.08,
              scrollTrigger: { trigger: titulo, start: 'top 86%', once: true },
            }),
          });
        });

        // Precio final: las partes se suman una tras otra y la llave las abraza.
        const barra = document.querySelector('.barra-precio');
        if (pendiente(barra)) {
          gsap.timeline({ scrollTrigger: { trigger: barra, start: 'top 75%', once: true } })
            .from('.barra-relleno', { scaleX: 0, transformOrigin: 'left center', duration: 0.7, ease: 'power3.inOut', stagger: 0.28 })
            .from('.barra-nombre', { opacity: 0, y: 10, duration: 0.45, stagger: 0.28 }, '<0.25')
            .from('.barra-llave-trazo', { drawSVG: '50% 50%', duration: 0.9, ease: 'power2.inOut' }, '-=0.1')
            .from('.barra-llave p', { opacity: 0, y: 12, duration: 0.5 }, '-=0.35');
        }

        // Ficha del usado: entra con un leve giro en 3D.
        const ficha = document.querySelector('.ficha');
        if (pendiente(ficha)) {
          gsap.from(ficha, { rotationX: 18, rotationY: -14, y: 60, opacity: 0, transformPerspective: 1100, duration: 1.2, ease: 'expo.out', scrollTrigger: { trigger: ficha, start: 'top 80%', once: true } });
        }

        mm.add({ ancho: '(min-width: 760px)', angosto: '(max-width: 759px)' }, contexto => {
          const { ancho } = contexto.conditions as { ancho: boolean };
          gsap.fromTo('.pasos-avance', ancho ? { scaleX: 0 } : { scaleY: 0 }, {
            scaleX: 1,
            scaleY: 1,
            ease: 'none',
            scrollTrigger: { trigger: '.pasos', start: 'top 80%', end: 'bottom 70%', scrub: 0.5 },
          });
        });
      });

      document.fonts?.ready.then(() => ScrollTrigger.refresh());
      deshacer = () => { mm.revert(); ctx.revert(); };
    };

    const eventos = ['scroll', 'wheel', 'touchstart', 'pointerdown', 'keydown'] as const;
    // Si la primera interacción es un ancla con desplazamiento suave, armar ScrollTrigger
    // en el medio lo corta: los módulos se descargan ya, pero se arman cuando la página
    // deja de moverse.
    let quieto = 0;
    const alMoverse = () => {
      window.clearTimeout(quieto);
      quieto = window.setTimeout(() => {
        window.removeEventListener('scroll', alMoverse);
        if (!cancelado) void iniciar();
      }, 220);
    };
    const alInteractuar = () => {
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      void cargar();
      window.addEventListener('scroll', alMoverse, { passive: true });
      alMoverse();
    };
    eventos.forEach(evento => window.addEventListener(evento, alInteractuar, { passive: true }));
    return () => {
      cancelado = true;
      window.clearTimeout(quieto);
      window.removeEventListener('scroll', alMoverse);
      eventos.forEach(evento => window.removeEventListener(evento, alInteractuar));
      deshacer?.();
    };
  }, []);

  return null;
}
