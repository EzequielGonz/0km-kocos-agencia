import { Link } from 'react-router';
import { Facebook, Instagram, Mail, Phone } from 'lucide-react';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { logo } from '@/components/home/site-header';
import { EMAIL, FACEBOOK_URL, FIRM_NAME, INSTAGRAM_HANDLE, INSTAGRAM_URL, PHONE, PHONE_URL } from '@/constants/brand';

const compra = [
  { label: 'Autos 0 km', href: '/0km' },
  { label: 'Plan de ahorro', href: '/financiacion/plan-de-ahorro' },
  { label: 'Simulador de cuotas', href: '/guias/simulador-de-cuotas' },
  { label: 'Guías', href: '/guias' },
];

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="wrap footer-grid">
        <div className="footer-about">
          <a href="/#inicio" className="brand"><img src={logo} width="303" height="408" alt="" loading="lazy" /><span>AGENCIA <strong>KOCOS</strong></span></a>
          <p>Agencia multimarca de autos 0 km en CABA y el AMBA. Contado, crédito prendario, plan de ahorro y tu usado como parte de pago.</p>
          <WhatsappButton className="footer-cta" />
        </div>
        <nav className="footer-links" aria-label="Comprar">
          <h3>Comprar</h3>
          {compra.map(link => <Link key={link.href} to={link.href}>{link.label}</Link>)}
        </nav>
        <nav className="footer-links" aria-label="Ayuda">
          <h3>Ayuda</h3>
          <a href="/#como-funciona">Cómo funciona</a>
          <a href="/#preguntas">Preguntas frecuentes</a>
          <a href="/#contacto">Pedir una propuesta</a>
        </nav>
        <div className="footer-contact">
          <h3>Contacto</h3>
          {PHONE_URL && <a href={PHONE_URL}><Phone size={16} strokeWidth={1.6} aria-hidden="true" /> {PHONE}</a>}
          {EMAIL && <a href={`mailto:${EMAIL}`}><Mail size={16} strokeWidth={1.6} aria-hidden="true" /> {EMAIL}</a>}
          {INSTAGRAM_URL && <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer"><Instagram size={16} strokeWidth={1.6} aria-hidden="true" /> {INSTAGRAM_HANDLE || 'Instagram'}</a>}
          {FACEBOOK_URL && <a href={FACEBOOK_URL} target="_blank" rel="noopener noreferrer"><Facebook size={16} strokeWidth={1.6} aria-hidden="true" /> Facebook</a>}
        </div>
      </div>
      <div className="wrap footer-bottom">
        <span>© {new Date().getFullYear()} {FIRM_NAME}</span>
        <a href="#inicio">Volver arriba ↑</a>
      </div>
    </footer>
  );
}
