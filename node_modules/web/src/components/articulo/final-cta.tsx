import { CTA } from '@/constants/cta';
import { SiteFooter } from '@/components/site-footer';
import { ContactButtons } from './contact-buttons';

/** Banda final + footer: misma estructura y clases que la home. */
export function ArticleFinalCta({ whatsappMessage, origen }: { whatsappMessage: string; origen: string }) {
  return (
    <>
      <section className="final-cta">
        <div className="wrap final-inner">
          <span className="eyebrow">{CTA.final.label}</span>
          <h2>{CTA.final.title} <em>{CTA.final.titleEm}</em></h2>
          <p>{CTA.final.text}</p>
          <div className="final-actions">
            <ContactButtons whatsappMessage={whatsappMessage} origen={origen} formLabel={CTA.final.formLabel} callLabel={CTA.final.callLabel} />
          </div>
        </div>
      </section>
      <SiteFooter />
    </>
  );
}
