import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
	index('routes/home.tsx'),

	// Silo 1 — 0KM (segmentos, marcas, modelos, comparativas y zonas del AMBA)
	route('0km', 'routes/seo-0km.tsx'),
	route('0km/:slug', 'routes/seo-0km-slug.tsx'),

	// Silo 2 — Financiación (contado, prendario, tasa 0%, plan de ahorro, usado)
	route('financiacion', 'routes/seo-financiacion.tsx'),
	route('financiacion/:slug', 'routes/seo-financiacion-slug.tsx'),

	// Silo 3 — Guías, recursos y simulador
	route('guias', 'routes/seo-guias.tsx'),
	route('guias/simulador-de-cuotas', 'routes/seo-simulador.tsx'),
	route('guias/:slug', 'routes/seo-guias-slug.tsx'),

	route('sitemap.xml', 'routes/sitemap.xml.ts'),
	route('robots.txt', 'routes/robots.txt.ts'),
	route('indexnow.txt', 'routes/indexnow.txt.ts'),
	route('api/health', 'routes/api.health.ts'),
	route('api/*', 'routes/api.$.ts'),
] satisfies RouteConfig;
