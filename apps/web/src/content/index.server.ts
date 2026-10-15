/**
 * Registro central de las páginas SEO (solo servidor: el contenido no se suma
 * al JavaScript del visitante).
 *
 * Para agregar una página: sumala al archivo del silo y agregá su ruta a un
 * grupo de HUBS para que quede enlazada desde el pilar.
 */
import type { HubGroup, Page, PageData, RelatedLink } from './types';
import { ceroKmPilar, segmentoPages } from './cero-km.server';
import { comparativaPages, marcaPages, marcas, marcasDestacadas, modeloPages } from './marcas-modelos.server';
import { zonaPages, zonasCabaPaths, zonasGbaPaths } from './zonas.server';
import { financiacionGuias, financiacionPilar } from './financiacion.server';
import { guiaPages, simuladorPage } from './guias.server';

const K = '/0km';
const F = '/financiacion';

const ALL: Page[] = [
  ceroKmPilar,
  ...segmentoPages,
  ...marcaPages,
  ...modeloPages,
  ...comparativaPages,
  ...zonaPages,
  financiacionPilar,
  ...financiacionGuias,
  simuladorPage,
  ...guiaPages,
];

const PUBLISHED = ALL.filter(page => page.status !== 'borrador');
const BY_PATH = new Map(PUBLISHED.map(page => [page.path, page]));

const toLink = (page: Page): RelatedLink => ({ path: page.path, nav: page.nav, description: page.description });
const linksFor = (paths: string[]) =>
  paths.map(path => BY_PATH.get(path)).filter((page): page is Page => Boolean(page)).map(toLink);
const paths = (pages: Page[]) => pages.map(page => page.path);

// Primero las marcas que destaca la home (Volkswagen, Ford, Peugeot), después el resto.
const marcasOrdenadas = [...marcasDestacadas, ...marcas.map(m => m.slug).filter(slug => !marcasDestacadas.includes(slug))].map(slug => `${K}/${slug}`);

const HUBS: Record<string, { title: string; paths: string[] }[]> = {
  [K]: [
    { title: 'Por tipo de vehículo', paths: paths(segmentoPages) },
    { title: 'Marcas', paths: marcasOrdenadas },
    { title: 'Modelos más consultados', paths: paths(modeloPages) },
    { title: 'Comparativas', paths: paths(comparativaPages) },
    { title: 'Autos 0km en CABA', paths: zonasCabaPaths },
    { title: 'Autos 0km en el conurbano', paths: zonasGbaPaths },
  ],
  [F]: [
    { title: 'Formas de pago', paths: [`${F}/comprar-0km-de-contado`, `${F}/credito-prendario`, `${F}/tasa-0`, `${F}/usado-como-parte-de-pago`] },
    { title: 'Planes de ahorro', paths: [`${F}/plan-de-ahorro`, `${F}/adjudicacion-sorteo-y-licitacion`, `${F}/plan-de-ahorro-o-credito-prendario`] },
    { title: 'Antes de financiar', paths: [`${F}/requisitos-para-financiar`, simuladorPage.path, '/guias/documentos-para-comprar'] },
  ],
};

const resolveHub = (groups: { title: string; paths: string[] }[]): HubGroup[] =>
  groups.map(group => ({ title: group.title, links: linksFor(group.paths) })).filter(group => group.links.length > 0);

const PILLAR_BY_SILO: Record<Page['silo'], { name: string; path: string }> = {
  '0km': { name: '0KM', path: K },
  financiacion: { name: 'Financiación', path: F },
  guias: { name: 'Guías', path: '/guias' },
};

function relatedFor(page: Page): RelatedLink[] {
  const chosen = linksFor(page.related ?? []).filter(link => link.path !== page.path);
  if (chosen.length >= 3) return chosen.slice(0, 3);
  const taken = new Set([page.path, ...chosen.map(link => link.path)]);
  const candidates = PUBLISHED.filter(other => other.silo === page.silo && !taken.has(other.path) && other.kind !== 'pilar');
  const sameKind = candidates.filter(other => other.kind === page.kind);
  const rest = candidates.filter(other => other.kind !== page.kind && other.kind !== 'zona');
  return [...chosen, ...sameKind.map(toLink), ...rest.map(toLink)].slice(0, 3);
}

export function getPageData(path: string): PageData | null {
  const page = BY_PATH.get(path.replace(/\/+$/, '') || '/');
  if (!page) return null;
  const breadcrumbs = [{ name: 'Inicio', path: '/' }];
  if (page.kind !== 'pilar') breadcrumbs.push(PILLAR_BY_SILO[page.silo]);
  breadcrumbs.push({ name: page.nav, path: page.path });
  return {
    page,
    breadcrumbs,
    related: page.kind === 'pilar' ? [] : relatedFor(page),
    hub: page.kind === 'pilar' ? resolveHub(HUBS[page.path] ?? []) : [],
  };
}

/** Todo el contenido publicado, agrupado, para /guias. */
export function getGuiasHub(): HubGroup[] {
  return [
    { title: 'Guías de compra', links: linksFor([simuladorPage.path, ...paths(guiaPages)]) },
    { title: 'Financiación', links: linksFor([F, ...paths(financiacionGuias)]) },
    { title: 'Por tipo de vehículo', links: linksFor(paths(segmentoPages)) },
    { title: 'Marcas y modelos', links: linksFor([...marcasOrdenadas, ...paths(modeloPages), ...paths(comparativaPages)]) },
    { title: 'Por zona', links: linksFor(paths(zonaPages)) },
  ].filter(group => group.links.length > 0);
}

export function sitemapEntries(): { path: string; lastmod: string }[] {
  const latest = PUBLISHED.reduce((max, page) => (page.updated > max ? page.updated : max), '');
  return [...PUBLISHED.map(page => ({ path: page.path, lastmod: page.updated })), { path: '/guias', lastmod: latest }];
}
