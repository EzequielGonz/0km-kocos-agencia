/** Datos estructurados (JSON-LD): no se ven, le explican a Google qué es la agencia y cada página. */
import { ADDRESS, EMAIL, FIRM_NAME, LOGO_URL, OPENING_HOURS, PHONE, SOCIAL_LINKS } from '@/constants/brand';

const CONTEXT = 'https://schema.org';
export const firmId = (origin: string) => `${origin}/#agencia`;

const AREA = [
  { '@type': 'City', name: 'Ciudad Autónoma de Buenos Aires' },
  ...['Vicente López', 'San Isidro', 'Tigre', 'Pilar', 'Escobar', 'San Martín', 'Tres de Febrero', 'Morón', 'Ituzaingó', 'La Matanza', 'Lomas de Zamora', 'Almirante Brown', 'Lanús', 'Avellaneda', 'Quilmes'].map(name => ({ '@type': 'AdministrativeArea', name: `Partido de ${name}` })),
];

export function businessSchema(origin: string) {
  const hasAddress = Boolean(ADDRESS.street && ADDRESS.locality);
  return {
    '@context': CONTEXT,
    '@type': 'AutoDealer',
    '@id': firmId(origin),
    name: FIRM_NAME,
    description: 'Agencia multimarca de autos 0km en CABA y el AMBA: contado, crédito prendario, planes de ahorro y usado como parte de pago.',
    url: `${origin}/`,
    logo: LOGO_URL,
    image: LOGO_URL,
    telephone: PHONE || undefined,
    email: EMAIL || undefined,
    openingHours: OPENING_HOURS || undefined,
    address: hasAddress
      ? { '@type': 'PostalAddress', streetAddress: ADDRESS.street, addressLocality: ADDRESS.locality, addressRegion: ADDRESS.region, postalCode: ADDRESS.postalCode || undefined, addressCountry: ADDRESS.country }
      : undefined,
    areaServed: AREA,
    knowsAbout: ['Autos 0km', 'Crédito prendario', 'Planes de ahorro', 'Usado como parte de pago', 'Pickups', 'SUV'],
    sameAs: SOCIAL_LINKS.length ? SOCIAL_LINKS.map(link => link.url) : undefined,
  };
}

export function websiteSchema(origin: string) {
  return { '@context': CONTEXT, '@type': 'WebSite', '@id': `${origin}/#sitio`, url: `${origin}/`, name: FIRM_NAME, inLanguage: 'es-AR', publisher: { '@id': firmId(origin) } };
}

export function breadcrumbSchema(origin: string, items: { name: string; path: string }[]) {
  return { '@context': CONTEXT, '@type': 'BreadcrumbList', itemListElement: items.map((item, index) => ({ '@type': 'ListItem', position: index + 1, name: item.name, item: `${origin}${item.path}` })) };
}

export function articleSchema(origin: string, article: { path: string; title: string; description: string; updated: string; published: string }) {
  const url = `${origin}${article.path}`;
  return {
    '@context': CONTEXT, '@type': 'Article', '@id': `${url}#articulo`, mainEntityOfPage: url,
    headline: article.title.slice(0, 110), description: article.description, inLanguage: 'es-AR',
    datePublished: article.published, dateModified: article.updated, image: LOGO_URL,
    author: { '@id': firmId(origin) }, publisher: { '@id': firmId(origin) },
  };
}

export function faqSchema(faqs: { q: string; a: string }[]) {
  return {
    '@context': CONTEXT, '@type': 'FAQPage',
    mainEntity: faqs.map(faq => ({ '@type': 'Question', name: faq.q, acceptedAnswer: { '@type': 'Answer', text: faq.a.replace(/\[([^\]]+)\]\([^)]+\)/g, '$1') } })),
  };
}
