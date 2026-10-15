import { Link } from 'react-router';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { logo, links } from '@/components/home/site-header';
import { EMAIL, FIRM_NAME, PHONE, PHONE_URL, SOCIAL_LINKS } from '@/constants/brand';

// Mismo footer de la home (misma estructura y clases), ahora compartido con las
// páginas nuevas. Suma accesos a guías y, cuando se completen en brand.ts,
// teléfono, email y redes.
const extraLinks = [
  { label: 'Plan de ahorro', href: '/financiacion/plan-de-ahorro' },
  { label: 'Simulador de cuotas', href: '/guias/simulador-de-cuotas' },
  { label: 'Guías', href: '/guias' },
];

export function SiteFooter() {
  return <footer className="site-footer"><div className="wrap footer-grid"><div className="footer-about"><a href="/#inicio" className="brand"><img src={logo} width="42" height="48" alt=""/><span>AGENCIA <strong>KOCOS</strong></span></a><p>Alternativas para acceder a tu próximo 0KM, con asesoramiento personalizado.</p></div><div className="footer-links"><span className="footer-label">EXPLORAR</span>{links.map(link=>link.route?<Link key={link.href} to={link.href}>{link.label}</Link>:<a key={link.href} href={link.href}>{link.label}</a>)}{extraLinks.map(link=><Link key={link.href} to={link.href}>{link.label}</Link>)}</div><div className="footer-contact"><span className="footer-label">EMPECEMOS</span><p>Tu próximo auto comienza con una consulta.</p><WhatsappButton/>{PHONE_URL&&<p className="footer-extra"><a href={PHONE_URL}>{PHONE}</a></p>}{EMAIL&&<p className="footer-extra"><a href={`mailto:${EMAIL}`}>{EMAIL}</a></p>}{SOCIAL_LINKS.length>0&&<p className="footer-extra">{SOCIAL_LINKS.map((link,index)=><span key={link.url}>{index>0&&' · '}<a href={link.url} target="_blank" rel="noopener noreferrer">{link.label}</a></span>)}</p>}</div></div><div className="wrap footer-bottom"><span>© {new Date().getFullYear()} {FIRM_NAME}. Todos los derechos reservados.</span><a href="#inicio">Volver arriba ↑</a></div></footer>;
}
