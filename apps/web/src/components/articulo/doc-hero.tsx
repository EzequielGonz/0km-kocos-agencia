import { Link } from 'react-router';
import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

type Props = {
  label: string;
  h1: string;
  h1Em?: string;
  lead: string;
  breadcrumbs: { name: string; path: string }[];
  updated?: string;
  origen: string;
  whatsappMessage: string;
};

/** El punto final en azul, como en los títulos de la home. */
function WithDot({ text }: { text: string }) {
  return text.endsWith('.') ? <>{text.slice(0, -1)}<span className="blue-dot">.</span></> : <>{text}</>;
}

/** Cabecera oscura con la misma tipografía, etiqueta y botones que el hero de la home. */
export function DocHero({ h1, h1Em, lead, breadcrumbs, origen, whatsappMessage }: Props) {
  return (
    <section className="doc-hero" id="inicio">
      <div className="hero-light" aria-hidden="true" />
      <div className="wrap doc-hero-inner">
        {breadcrumbs.length > 1 && <Link className="doc-volver" to={breadcrumbs[breadcrumbs.length - 2].path}>← {breadcrumbs[breadcrumbs.length - 2].name}</Link>}
        
        <h1>{h1Em ? <>{h1} <em><WithDot text={h1Em} /></em></> : <WithDot text={h1} />}</h1>
        <p className="doc-lead">{lead}</p>
        <div className="hero-buttons">
          <ContactButtons whatsappMessage={whatsappMessage} origen={origen} formLabel={CTA.hero.primary} callLabel={CTA.mid.callLabel} />
        </div>
      </div>
    </section>
  );
}
