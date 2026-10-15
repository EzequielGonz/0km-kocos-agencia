import { data } from 'react-router';
import type { Route } from './+types/seo-simulador';
import { ArticlePage } from '@/components/articulo/article-page';
import { Simulador } from '@/components/articulo/simulador';
import { getPageData } from '@/content/index.server';
import { pageMeta } from '@/lib/page-meta';

export function loader() {
  const pageData = getPageData('/guias/simulador-de-cuotas');
  if (!pageData) throw data(null, { status: 404 });
  return pageData;
}

export function meta({ loaderData, matches, location }: Route.MetaArgs) {
  return pageMeta({ matches, location }, loaderData);
}

export default function Page({ loaderData }: Route.ComponentProps) {
  return (
    <ArticlePage data={loaderData}>
      <Simulador />
    </ArticlePage>
  );
}
