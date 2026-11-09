import { useEffect, useRef, useState } from 'react';
import { Link, useLocation } from 'react-router';
import { MessageCircle } from 'lucide-react';
import { PHONE, PHONE_URL, whatsappUrl } from '@/constants/brand';

// Las anclas llevan "/" adelante para que funcionen también desde los artículos y las guías.
// `corto` se usa en pantallas medianas para que la barra nunca se apile.
type Enlace = { href: string; texto: string; corto?: string; ruta?: boolean };

const enlaces: Enlace[] = [
  { href: '/0km', texto: '0 km', ruta: true },
  { href: '/financiacion', texto: 'Financiación', ruta: true },
  { href: '/#precio-final', texto: 'Precio final' },
  { href: '/#usado', texto: 'Tu usado' },
  { href: '/#preguntas', texto: 'Preguntas' },
];
const WHATSAPP_URL = whatsappUrl('Hola, quiero asesoramiento para comprar un 0 km.');
// El pie de página usa el mismo logo.
export const logo = '/logo-marca.png';

export function SiteHeader() {
  const { pathname } = useLocation();
  const enPortada = pathname === '/';
  const [visible, setVisible] = useState(true);
  const [abierto, setAbierto] = useState(false);
  const [desplazado, setDesplazado] = useState(false);
  const boton = useRef<HTMLButtonElement>(null);
  const menu = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let anterior = window.scrollY;
    const alDesplazar = () => {
      const actual = window.scrollY;
      setDesplazado(actual > 24);
      if (Math.abs(actual - anterior) > 4) setVisible(actual < 120 || actual < anterior);
      anterior = actual;
    };
    alDesplazar();
    window.addEventListener('scroll', alDesplazar, { passive: true });
    return () => window.removeEventListener('scroll', alDesplazar);
  }, []);

  // Menú del celular: bloquea el desplazamiento de fondo, se cierra con Escape
  // y devuelve el foco al botón.
  useEffect(() => {
    if (!abierto) return;
    const raiz = document.documentElement;
    raiz.classList.add('menu-abierto');
    menu.current?.querySelector<HTMLElement>('a')?.focus();
    const alTeclear = (evento: KeyboardEvent) => { if (evento.key === 'Escape') setAbierto(false); };
    window.addEventListener('keydown', alTeclear);
    return () => {
      raiz.classList.remove('menu-abierto');
      window.removeEventListener('keydown', alTeclear);
      boton.current?.focus();
    };
  }, [abierto]);

  const cerrar = () => setAbierto(false);
  const enlace = (item: Enlace, movil = false) => {
    const contenido = !movil && item.corto
      ? <><span className="nav-largo">{item.texto}</span><span className="nav-corto">{item.corto}</span></>
      : item.texto;
    const alHacerClic = movil ? cerrar : undefined;
    return item.ruta
      ? <Link key={item.href} to={item.href} prefetch="intent" onClick={alHacerClic}>{contenido}</Link>
      : <a key={item.href} href={item.href} onClick={alHacerClic}>{contenido}</a>;
  };

  const clases = [
    'cabecera',
    visible || abierto ? 'is-visible' : 'is-oculta',
    desplazado || !enPortada || abierto ? 'is-solida' : '',
  ].join(' ');

  return (
    <>
    <header className={clases}>
      <div className="cabecera-barra">
        <a className="cabecera-marca" href="/#inicio" onClick={cerrar} aria-label="Agencia Kocos, ir al inicio">
          <img src={logo} alt="" width="303" height="408" />
          <span className="cabecera-nombre">Agencia Kocos<small>Autos 0 km</small></span>
        </a>
        <nav className="cabecera-nav" aria-label="Navegación principal">
          {enlaces.map(item => enlace(item))}
        </nav>
        <a className="cabecera-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer">
          <MessageCircle size={17} strokeWidth={1.9} aria-hidden="true" /> <span>WhatsApp</span>
        </a>
        <button
          ref={boton}
          className={`cabecera-menu ${abierto ? 'is-abierto' : ''}`}
          type="button"
          aria-label={abierto ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={abierto}
          aria-controls="menu-movil"
          onClick={() => setAbierto(!abierto)}
        >
          <span /><span />
        </button>
      </div>
    </header>
      <div id="menu-movil" ref={menu} className={`menu-movil ${abierto ? 'is-abierto' : ''}`} hidden={!abierto}>
        <nav aria-label="Navegación móvil">
          {enlaces.map(item => enlace(item, true))}
        </nav>
        <div className="menu-movil-pie">
          <a className="menu-movil-wa" href={WHATSAPP_URL} target="_blank" rel="noopener noreferrer" onClick={cerrar}>
            <MessageCircle size={19} strokeWidth={1.9} aria-hidden="true" /> Escribinos por WhatsApp
          </a>
          {PHONE && PHONE_URL && <a className="menu-movil-tel" href={PHONE_URL}>{PHONE}</a>}
        </div>
      </div>
    </>
  );
}
