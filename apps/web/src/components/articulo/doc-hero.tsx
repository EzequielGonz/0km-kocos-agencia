import { Link } from 'react-router';
import { FIRM_NAME } from '@/constants/brand';
import { CTA } from '@/constants/cta';
import { formatDate } from '@/lib/text';
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
export function DocHero({ label, h1, h1Em, lead, breadcrumbs, updated, origen, whatsappMessage }: Props) {
  return (
    <section className="doc-hero" id="inicio">
      <div className="hero-light" aria-hidden="true" />
      <div className="wrap doc-hero-inner">
        <nav className="doc-breadcrumb" aria-label="Ruta de navegación">
          <ol>
            {breadcrumbs.map((crumb, index) => (
              <li key={crumb.path}>
                {index < breadcrumbs.length - 1 ? <Link to={crumb.path}>{crumb.name}</Link> : <span aria-current="page">{crumb.name}</span>}
              </li>
            ))}
          </ol>
        </nav>
        <span className="eyebrow hero-kicker"><span className="eyebrow-line" /> {label}</span>
        <h1>{h1Em ? <>{h1} <em><WithDot text={h1Em} /></em></> : <WithDot text={h1} />}</h1>
        <p className="doc-lead">{lead}</p>
        <div className="hero-buttons">
          <ContactButtons whatsappMessage={whatsappMessage} origen={origen} formLabel={CTA.hero.primary} callLabel={CTA.mid.callLabel} />
        </div>
      </div>
      <div className="wrap doc-meta">
        <span>{FIRM_NAME.toUpperCase()} / AGENCIA MULTIMARCA 0KM</span>
        {updated && <span>Actualizado el <time dateTime={updated}>{formatDate(updated)}</time></span>}
      </div>
    </section>
  );
}
