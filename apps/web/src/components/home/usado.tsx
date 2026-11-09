import { useId, useState } from 'react';
import { Link } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { whatsappUrl } from '@/constants/brand';
import { track } from '@/lib/track';

// Ficha del usado: lo que la persona completa solo arma el mensaje de WhatsApp.
// No se guarda nada en el sitio.
const anioActual = new Date().getFullYear();
const anios = Array.from({ length: 20 }, (_, i) => String(anioActual - i));
const kilometros = ['Menos de 30.000 km', 'Entre 30.000 y 80.000 km', 'Entre 80.000 y 150.000 km', 'Más de 150.000 km'];

function mensaje(marca: string, modelo: string, anio: string, km: string) {
  const auto = [marca.trim(), modelo.trim(), anio].filter(Boolean).join(' ');
  const partes = [auto && `tengo un ${auto}`, km && km.toLowerCase()].filter(Boolean);
  return partes.length
    ? `Hola, quiero entregar mi usado como parte de pago de un 0 km: ${partes.join(', con ')}.`
    : 'Hola, quiero entregar mi usado como parte de pago de un 0 km.';
}

export function Usado() {
  const uid = useId();
  const [marca, setMarca] = useState('');
  const [modelo, setModelo] = useState('');
  const [anio, setAnio] = useState('');
  const [km, setKm] = useState('');
  const texto = mensaje(marca, modelo, anio, km);

  return (
    <section className="seccion usado" id="usado">
      <div className="contenedor usado-grid">
        <div className="usado-texto">
          <h2 className="revela">Tu usado puede ser parte del pago</h2>
          <p className="seccion-bajada">Contanos marca, modelo, año y kilómetros, y lo sumamos a la propuesta de tu 0 km. También sirve como anticipo si vas a financiar.</p>
          <Link className="enlace-guia" to="/financiacion/usado-como-parte-de-pago" prefetch="intent">Cómo se toma el usado</Link>
        </div>
        <form className="ficha" onSubmit={evento => evento.preventDefault()} aria-label="Datos del usado">
          <div className="ficha-cabeza">
            <span>Ficha del usado</span>
            <span className="ficha-patente" aria-hidden="true">A· ··· ··</span>
          </div>
          <div className="ficha-campos">
            <label htmlFor={`${uid}-marca`}>Marca<input id={`${uid}-marca`} value={marca} onChange={e => setMarca(e.target.value)} placeholder="Ej.: Volkswagen" autoComplete="off" maxLength={30} /></label>
            <label htmlFor={`${uid}-modelo`}>Modelo<input id={`${uid}-modelo`} value={modelo} onChange={e => setModelo(e.target.value)} placeholder="Ej.: Gol Trend" autoComplete="off" maxLength={40} /></label>
            <label htmlFor={`${uid}-anio`}>Año
              <select id={`${uid}-anio`} value={anio} onChange={e => setAnio(e.target.value)}>
                <option value="">Elegí</option>
                {anios.map(a => <option key={a} value={a}>{a}</option>)}
              </select>
            </label>
            <label htmlFor={`${uid}-km`}>Kilómetros
              <select id={`${uid}-km`} value={km} onChange={e => setKm(e.target.value)}>
                <option value="">Elegí</option>
                {kilometros.map(k => <option key={k} value={k}>{k}</option>)}
              </select>
            </label>
          </div>
          <p className="ficha-vista" aria-live="polite">{texto}</p>
          <a className="boton boton-azul" href={whatsappUrl(texto)} target="_blank" rel="noopener noreferrer" onClick={() => track('click_whatsapp', { origen: 'usado' })}>
            <MessageCircle size={18} strokeWidth={1.9} aria-hidden="true" /> Enviar para tasar por WhatsApp
          </a>
        </form>
      </div>
    </section>
  );
}
