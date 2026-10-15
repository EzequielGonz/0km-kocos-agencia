import { useEffect, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-router';
import { WhatsappButton } from '@/components/home/whatsapp-button';

const logo = 'https://horizons-cdn.hostinger.com/36f43b4e-b629-4797-867e-b3697140c643/dd63ce66f2d8ee5fafde6d7ed609128a.png';
// "0KM" y "Financiación" llevan a las secciones SEO (reemplazan al ancla "Vehículos").
// Las anclas llevan "/" para funcionar desde cualquier página; "Contacto" queda
// relativa porque los artículos también tienen su formulario (#contacto).
const links: { label: string; href: string; route?: boolean }[] = [{label:'Inicio',href:'/#inicio'},{label:'0KM',href:'/0km',route:true},{label:'Financiación',href:'/financiacion',route:true},{label:'Cómo funciona',href:'/#como-funciona'},{label:'Preguntas frecuentes',href:'/#preguntas'},{label:'Contacto',href:'#contacto'}];
export { logo, links };

export function SiteHeader() {
  const [visible, setVisible] = useState(true);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    let last = window.scrollY;
    const onScroll = () => { const now = window.scrollY; if (Math.abs(now-last)>5) { setVisible(now < 90 || now < last); last = now; } };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return <header className={`site-header ${visible ? '' : 'header-hidden'}`}><div className="header-inner"><a href="/#inicio" className="brand" aria-label="Agencia Kocos, inicio"><img src={logo} alt="" width="37" height="43"/><span>AGENCIA <strong>KOCOS</strong></span></a><nav className="desktop-nav" aria-label="Navegación principal">{links.map(link=>link.route?<Link key={link.href} to={link.href} prefetch="intent">{link.label}</Link>:<a key={link.href} href={link.href}>{link.label}</a>)}</nav><div className="header-actions"><WhatsappButton className="header-whatsapp"/><button type="button" className="menu-toggle" onClick={()=>setMenuOpen(!menuOpen)} aria-label={menuOpen?'Cerrar menú':'Abrir menú'} aria-expanded={menuOpen}>{menuOpen?<X size={25}/>:<Menu size={25}/>}</button></div></div>{menuOpen && <nav className="mobile-nav" aria-label="Navegación móvil">{links.map(link=>link.route?<Link to={link.href} key={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</Link>:<a href={link.href} key={link.href} onClick={()=>setMenuOpen(false)}>{link.label}</a>)}</nav>}</header>;
}
