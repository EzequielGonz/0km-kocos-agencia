import type { Route } from './+types/seo-guias';
import { HubGroups } from '@/components/articulo/article-page';
import { DocHero } from '@/components/articulo/doc-hero';
import { ArticleFinalCta } from '@/components/articulo/final-cta';
import { LeadForm } from '@/components/articulo/lead-form';
import { PageShell } from '@/components/articulo/page-shell';
import { getGuiasHub } from '@/content/index.server';
import { withBrand } from '@/lib/page-meta';
import { breadcrumbSchema, businessSchema } from '@/lib/schema';
import { seo, siteOriginFrom } from '@/lib/seo';

const PATH = '/guias';
const BREADCRUMBS = [{ name: 'Inicio', path: '/' }, { name: 'Guías', path: PATH }];
const WHATSAPP_MESSAGE = 'Hola, leí las guías de su web y quiero asesoramiento para mi 0km.';

export function loader() {
  return { groups: getGuiasHub() };
}

export function meta({ matches, location }: Route.MetaArgs) {
  const origin = siteOriginFrom(matches);
  return seo({ matches, location }, {
    title: withBrand('Guías para comprar tu 0km en CABA'),
    description: 'Guías para comprar un auto 0km en CABA y el AMBA: modelos, financiación, plan de ahorro, patentamiento, seguro y entrega.',
    path: PATH,
    jsonLd: [businessSchema(origin), breadcrumbSchema(origin, BREADCRUMBS)],
  });
}

export default function GuiasPage({ loaderData }: Route.ComponentProps) {
  return (
    <PageShell whatsappMessage={WHATSAPP_MESSAGE}>
      <DocHero
        label="GUÍAS Y RECURSOS"
        h1="Todo lo que necesitás saber"
        h1Em="para comprar tu 0KM."
        lead="Modelos, formas de pago, planes de ahorro, patentamiento y entrega, explicados de forma simple."
        breadcrumbs={BREADCRUMBS}
        origen={PATH}
        whatsappMessage={WHATSAPP_MESSAGE}
      />
      <div className="doc-body">
        <div className="wrap">
          <div className="doc-article doc-article-wide"><HubGroups groups={loaderData.groups} /></div>
        </div>
      </div>
      <LeadForm tipo="0KM" origen={PATH} whatsappMessage={WHATSAPP_MESSAGE} />
      <ArticleFinalCta whatsappMessage={WHATSAPP_MESSAGE} origen={PATH} />
    </PageShell>
  );
}
