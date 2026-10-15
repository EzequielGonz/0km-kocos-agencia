import { CTA } from '@/constants/cta';
import { ContactButtons } from './contact-buttons';

/** CTA a mitad del artículo: bloque azul como "¿Tenés un usado o un anticipo?" de la home. */
export function MidCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <aside className="doc-cta" aria-label="Cotizá tu 0km">
      <span className="eyebrow">{CTA.mid.label}</span>
      <p className="doc-cta-title">{CTA.mid.title}</p>
      <p className="doc-cta-text">{CTA.mid.text}</p>
      <div className="doc-cta-actions">
        <ContactButtons light whatsappMessage={whatsappMessage} origen={origen} formLabel={CTA.mid.formLabel} callLabel={CTA.mid.callLabel} />
      </div>
    </aside>
  );
}
