import { useRef, useState, type KeyboardEvent } from 'react';
import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/constants/brand';
import { track } from '@/lib/track';
import { Ruta3D } from './ruta-3d';

// Las tres formas de pago, con el mismo criterio que las guías de financiación.
// Sin precios, tasas ni cuotas: eso se informa vigente en la consulta.
const formas = [
  {
    id: 'contado',
    titulo: 'Contado',
    puntos: ['Te pasamos el precio final, con todo incluido.', 'Podés entregar tu usado como parte de pago.', 'La entrega depende del stock y del patentamiento.'],
    mensaje: 'Hola, quiero comprar un 0 km de contado y conocer el precio final.',
    guia: '/financiacion/comprar-0km-de-contado',
  },
  {
    id: 'prendario',
    titulo: 'Crédito prendario',
    puntos: ['Financiás una parte y el auto queda como garantía.', 'Sumás tu usado o un anticipo para bajar la cuota.', 'Te mostramos la tasa y el costo total vigentes.'],
    mensaje: 'Hola, quiero financiar un 0 km con crédito prendario.',
    guia: '/financiacion/credito-prendario',
  },
  {
    id: 'plan',
    titulo: 'Plan de ahorro',
    puntos: ['Pagás cuotas y el auto se adjudica por sorteo o licitación.', 'Podés licitar para adelantar la entrega.', 'Al retirarlo se pagan la adjudicación, la entrega y el patentamiento.'],
    mensaje: 'Hola, quiero información sobre planes de ahorro para un 0 km.',
    guia: '/financiacion/plan-de-ahorro',
  },
];

export function Hero() {
  const [activa, setActiva] = useState(0);
  const pestanas = useRef<(HTMLButtonElement | null)[]>([]);
  const forma = formas[activa];

  // Flechas izquierda y derecha para moverse entre pestañas, como indica ARIA.
  const alTeclear = (evento: KeyboardEvent<HTMLDivElement>) => {
    if (evento.key !== 'ArrowRight' && evento.key !== 'ArrowLeft') return;
    evento.preventDefault();
    const siguiente = (activa + (evento.key === 'ArrowRight' ? 1 : formas.length - 1)) % formas.length;
    setActiva(siguiente);
    pestanas.current[siguiente]?.focus();
  };

  return (
    <section className="portada" id="inicio">
      <div className="portada-fondo" aria-hidden="true" />
      <Ruta3D />
      <div className="portada-velo" aria-hidden="true" />
      <div className="contenedor portada-grid">
        <div className="portada-texto">
          <h1>Comprá tu 0 km con tu usado, en cuotas o de contado</h1>
          <p className="portada-bajada">Agencia multimarca en CABA y el AMBA. Te asesoramos para elegir la forma de pago y tomamos tu usado como parte de pago.</p>
        </div>
        <div className="pago">
          <div className="pago-pestanas" role="tablist" aria-label="Formas de pago" onKeyDown={alTeclear}>
            {formas.map((f, i) => (
              <button
                key={f.id}
                ref={el => { pestanas.current[i] = el; }}
                type="button"
                role="tab"
                id={`pestana-${f.id}`}
                aria-selected={i === activa}
                aria-controls="pago-panel"
                tabIndex={i === activa ? 0 : -1}
                className={i === activa ? 'is-activa' : ''}
                onClick={() => setActiva(i)}
              >
                {f.titulo}
              </button>
            ))}
            <span className="pago-indicador" style={{ transform: `translateX(${activa * 100}%)` }} aria-hidden="true" />
          </div>
          <div className="pago-panel" id="pago-panel" role="tabpanel" aria-labelledby={`pestana-${forma.id}`} key={forma.id}>
            <ul>{forma.puntos.map(p => <li key={p}>{p}</li>)}</ul>
            <div className="pago-acciones">
              <a className="boton boton-azul" href={whatsappUrl(forma.mensaje)} target="_blank" rel="noopener noreferrer" onClick={() => track('click_whatsapp', { origen: `portada:${forma.id}` })}>
                <MessageCircle size={18} strokeWidth={1.9} aria-hidden="true" /> Consultar por {forma.titulo.toLowerCase()}
              </a>
              <Link className="enlace-claro" to={forma.guia} prefetch="intent">Cómo funciona</Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
