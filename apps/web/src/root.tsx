import {
	data,
	isRouteErrorResponse,
	useRouteLoaderData,
	Links,
	Meta,
	Outlet,
	Scripts,
	ScrollRestoration,
} from 'react-router';
import type { Route } from './+types/root';
import stylesheet from '@/index.css?url';
import articulosStylesheet from '@/styles/articulos.css?url';
// Ajustes del 21/10 (CTA por sección, WhatsApp, nombre de la firma). Va último para prevalecer.
import ajustesStylesheet from '@/styles/ajustes.css?url';
// Fuentes propias (sin Google Fonts) y pulido visual del 09/11. Van al final para prevalecer.
import fuentesStylesheet from '@/styles/fuentes.css?url';
import pulidoStylesheet from '@/styles/pulido.css?url';
// Rediseño premium del 09/11: noche azul, la cinta del logo y la ruta en 3D. Va último.
import premiumStylesheet from '@/styles/premium.css?url';
import { publicOrigin } from '@/lib/site-origin.server';
import { SIN_ANALITICA, configAnalitica } from '@/lib/analitica';
import { AnaliticaHead, MedicionCliente } from '@/components/medicion';
import { VERIFICATION } from '@/constants/brand';
import { HorizonsPreviewScripts } from './horizons-preview-scripts';

export const links: Route.LinksFunction = () => [
	{ rel: 'stylesheet', href: stylesheet },
	{ rel: 'stylesheet', href: articulosStylesheet },
	{ rel: 'stylesheet', href: ajustesStylesheet },
	{ rel: 'preload', href: '/fonts/archivo-normal-latin-2d6953.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
	{ rel: 'preload', href: '/fonts/plus-jakarta-sans-normal-latin-d4d84d.woff2', as: 'font', type: 'font/woff2', crossOrigin: 'anonymous' },
	{ rel: 'stylesheet', href: fuentesStylesheet },
	{ rel: 'stylesheet', href: pulidoStylesheet },
	{ rel: 'stylesheet', href: premiumStylesheet },
	{ rel: 'icon', href: '/logo-marca.png', type: 'image/png' },
	{ rel: 'apple-touch-icon', href: '/apple-touch-icon.png' },
];

/**
 * Publishes the site's public origin, which `seo()` reads to build canonical and
 * `og:url` tags, and advertises the sitemap to crawlers that read response
 * headers rather than HTML.
 *
 * A `meta` export can only reach server data through `matches`, and the `headers`
 * export cannot see loader data at all, so both have to travel this way.
 */
export function loader({ request }: Route.LoaderArgs) {
	const origin = publicOrigin(request);
	// Analítica y verificaciones: solo lo que esté cargado en las variables de
	// entorno (NEXT_PUBLIC_*); los códigos de brand.ts quedan como respaldo.
	const analitica = configAnalitica({
		NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION: VERIFICATION.google,
		NEXT_PUBLIC_BING_SITE_VERIFICATION: VERIFICATION.bing,
		...Object.fromEntries(Object.entries(process.env).filter(([, valor]) => valor)),
	});

	return data(
		{ origin, analitica },
		{ headers: { Link: `<${origin}/sitemap.xml>; rel="sitemap"; type="application/xml"` } },
	);
}

/**
 * A page route that exports `headers` replaces this one, so merge `parentHeaders`
 * there rather than returning only that route's own headers.
 */
export function headers({ loaderHeaders }: Route.HeadersArgs) {
	return loaderHeaders;
}

export function Layout({ children }: { children: React.ReactNode }) {
	const analitica = useRouteLoaderData<typeof loader>('root')?.analitica ?? SIN_ANALITICA;
	return (
		<html lang="es-AR">
			<head>
				<meta charSet="utf-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<Meta />
				<Links />
				<AnaliticaHead config={analitica} />
				<HorizonsPreviewScripts />
			</head>
			<body>
				<div id="root">{children}</div>
				<ScrollRestoration />
				<Scripts />
			</body>
		</html>
	);
}

export default function App() {
	return <><Outlet /><MedicionCliente /></>;
}

export function ErrorBoundary({ error }: Route.ErrorBoundaryProps) {
	let message = 'Ups';
	let details = 'Ocurrió un error inesperado.';
	let stack: string | undefined;

	if (isRouteErrorResponse(error)) {
		message = error.status === 404 ? '404' : 'Error';
		details =
			error.status === 404
				? 'No encontramos la página que buscás.'
				: error.statusText || details;
	} else if (import.meta.env.DEV && error && error instanceof Error) {
		details = error.message;
		stack = error.stack;
	}

	return (
		<main>
			<h1>{message}</h1>
			<p>{details}</p>
			{stack ? (
				<pre>
					<code>{stack}</code>
				</pre>
			) : null}
		</main>
	);
}
