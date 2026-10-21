import type { Route } from './+types/home';
import { seo, siteOriginFrom } from '@/lib/seo';
import { FIRM_NAME, SHARE_IMAGE_URL } from '@/constants/brand';
import { businessSchema, websiteSchema } from '@/lib/schema';
import { SiteHeader } from '@/components/home/site-header';
import { Hero } from '@/components/home/hero';
import { Overview } from '@/components/home/overview';
import { Process } from '@/components/home/process';
import { LeadForm } from '@/components/home/lead-form';
import { Faq } from '@/components/home/faq';
import { FinalCta } from '@/components/home/final-cta';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { ScrollReveal } from '@/components/home/scroll-reveal';
import { SeccionCta } from '@/components/seccion-cta';

export function meta({ matches, location }: Route.MetaArgs) {
 const origin = siteOriginFrom(matches);
 return seo({ matches, location }, {
  title: `Autos 0km en CABA: financiación y plan de ahorro | ${FIRM_NAME}`,
  description: 'Agencia multimarca de autos 0km en CABA y el AMBA. Contado, crédito prendario, planes de ahorro y tu usado como parte de pago, con asesoramiento.',
  image: SHARE_IMAGE_URL,
  jsonLd: [businessSchema(origin), websiteSchema(origin)],
 });
}
export default function HomePage() {
  return (
    <>
      <SiteHeader />
      <ScrollReveal />
      <main>
        <Hero />
        <SeccionCta titulo="¿Ya sabés qué auto querés?" texto="Decinos el modelo y un asesor te arma la propuesta con precio y condiciones del momento." mensaje="Hola, vi la web y quiero una propuesta para un 0 km." boton="Quiero mi propuesta" />
        <Overview />
        <SeccionCta titulo="Contado, financiado o plan de ahorro" texto="Te ayudamos a elegir la forma de pago que mejor se adapta a vos, sin vueltas." mensaje="Hola, quiero saber qué opciones de financiación o plan de ahorro tienen para un 0 km." boton="Ver formas de pago" />
        <Process />
        <SeccionCta titulo="Tu usado puede ser parte del pago" texto="Contanos marca, modelo y año y te lo tasamos en la misma propuesta." mensaje="Hola, tengo un usado para entregar y quiero cambiarlo por un 0 km." boton="Tasar mi usado" />
        <LeadForm />
        <Faq />
        <FinalCta />
      </main>
      <WhatsappButton floating message="Hola, quiero asesoramiento para comprar un 0 km." />
    </>
  );
}
