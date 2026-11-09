import type { CSSProperties } from 'react';
import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/constants/brand';

// Lo que separa el precio del vehículo del precio para salir manejando (guías de
// financiación y patentamiento). Las proporciones son ilustrativas: no hay montos.
const partes = [
  { nombre: 'Precio del vehículo', ancho: 64 },
  { nombre: 'Flete y formularios', ancho: 11 },
  { nombre: 'Patentamiento', ancho: 15 },
  { nombre: 'Gastos de entrega', ancho: 10 },
];

export function PrecioFinal() {
  return (
    <section className="seccion precio-final" id="precio-final">
      <div className="contenedor">
        <div className="precio-cabeza">
          <h2 className="revela">El precio que importa es el final</h2>
          <p className="seccion-bajada">Además del precio del vehículo hay gastos de patentamiento, flete y formularios. Pedí siempre el precio final con todo incluido para comparar.</p>
        </div>
        <div className="barra-precio">
          <div className="barra-partes">
            {partes.map((parte, i) => (
              <div className="barra-parte" key={parte.nombre} style={{ flexGrow: parte.ancho, '--ancho': `${parte.ancho}%` } as CSSProperties} data-i={i}>
                <span className="barra-relleno" />
                <span className="barra-nombre">{parte.nombre}</span>
              </div>
            ))}
          </div>
          <div className="barra-llave">
            <svg viewBox="0 0 1000 40" preserveAspectRatio="none" aria-hidden="true" focusable="false">
              <path className="barra-llave-trazo" pathLength="1" d="M2 4 V18 Q2 26 12 26 H486 Q500 26 500 38 Q500 26 514 26 H988 Q998 26 998 18 V4" />
            </svg>
            <p>Precio final para salir manejando</p>
          </div>
          <p className="barra-nota">Proporciones ilustrativas.</p>
        </div>
        <div className="seccion-acciones">
          <a className="boton boton-noche" href={whatsappUrl('Hola, quiero el precio final con todo incluido de un 0 km.')} target="_blank" rel="noopener noreferrer">
            <MessageCircle size={18} strokeWidth={1.9} aria-hidden="true" /> Pedir el precio final
          </a>
          <Link className="enlace-guia" to="/guias/gastos-de-patentamiento" prefetch="intent">Qué incluye el patentamiento</Link>
        </div>
      </div>
    </section>
  );
}
