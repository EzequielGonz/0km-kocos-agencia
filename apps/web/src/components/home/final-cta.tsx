import { ArrowUpRight } from 'lucide-react';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { SiteFooter } from '@/components/site-footer';
export function FinalCta(){return <><section className="final-cta"><div className="wrap final-inner"><span className="eyebrow" data-reveal>TU PRÓXIMO CAPÍTULO COMIENZA ACÁ</span><h2 data-reveal data-reveal-delay="70">Empezá a buscar tu próximo <em>0KM.</em></h2><p data-reveal data-reveal-delay="140">Contanos qué estás buscando y te ayudamos a conocer las alternativas disponibles.</p><div className="final-actions" data-reveal data-reveal-delay="210"><a href="#contacto" className="button-primary">Quiero mi 0KM <ArrowUpRight size={19}/></a><WhatsappButton/></div></div></section><SiteFooter/></>}
