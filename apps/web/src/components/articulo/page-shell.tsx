import type { ReactNode } from 'react';
import { SiteHeader } from '@/components/home/site-header';
import { WhatsappButton } from '@/components/home/whatsapp-button';

/**
 * En este sitio el header y el WhatsApp flotante viven dentro de la home (el
 * layout general solo tiene <Outlet />). Las páginas nuevas los reutilizan acá,
 * con el mismo orden que la home: header → <main> → WhatsApp flotante.
 */
export function PageShell({ children, whatsappMessage }: { children: ReactNode; whatsappMessage: string }) {
  return (
    <>
      <SiteHeader />
      <main className="doc-page">{children}</main>
      <WhatsappButton floating message={whatsappMessage} />
    </>
  );
}
