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

export function meta({ matches, location }: Route.MetaArgs) {
 const origin = siteOriginFrom(matches);
 return seo({ matches, location }, {
  title: `Autos 0km en CABA: financiación y plan de ahorro | ${FIRM_NAME}`,
  description: 'Agencia multimarca de autos 0km en CABA y el AMBA. Contado, crédito prendario, planes de ahorro y tu usado como parte de pago, con asesoramiento.',
  image: SHARE_IMAGE_URL,
  jsonLd: [businessSchema(origin), websiteSchema(origin)],
 });
}
export default function HomePage(){ return <><SiteHeader/><ScrollReveal/><main><Hero/><Overview/><Process/><LeadForm/><Faq/><FinalCta/></main><WhatsappButton floating/></>; }
