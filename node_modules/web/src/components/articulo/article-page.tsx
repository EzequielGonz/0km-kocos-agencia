import { Fragment, type ReactNode } from 'react';
import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router';
import { CTA } from '@/constants/cta';
import type { HubGroup, PageData, RelatedLink } from '@/content/types';
import { slugify } from '@/lib/text';
import { Blocks } from './blocks';
import { ContactButtons } from './contact-buttons';
import { DocHero } from './doc-hero';
import { ArticleFinalCta } from './final-cta';
import { LeadForm } from './lead-form';
import { MidCta } from './mid-cta';
import { PageShell } from './page-shell';
import { RichText } from './rich-text';

export function LinkRows({ links }: { links: RelatedLink[] }) {
  return (
    <ul className="doc-rows">
      {links.map(link => (
        <li key={link.path}>
          <Link to={link.path} prefetch="intent">
            <span className="doc-row-title">{link.nav}</span>
            <span className="doc-row-text">{link.description}</span>
            <ArrowUpRight className="doc-row-arrow" size={19} strokeWidth={1.5} aria-hidden="true" />
          </Link>
        </li>
      ))}
    </ul>
  );
}

export function HubGroups({ groups }: { groups: HubGroup[] }) {
  return (
    <>
      {groups.map(group => (
        <section className="doc-section doc-hub" id={slugify(group.title)} key={group.title}>
          <h2>{group.title}<span className="blue-dot">.</span></h2>
          <LinkRows links={group.links} />
        </section>
      ))}
    </>
  );
}

type Props = { data: PageData; children?: ReactNode };

/**
 * Plantilla de todas las páginas SEO: cabecera → secciones con CTA a la mitad →
 * enlaces del silo → preguntas frecuentes → relacionadas → formulario → banda final + footer.
 */
export function ArticlePage({ data, children }: Props) {
  const { page, breadcrumbs, related, hub } = data;
  const sections = page.sections.map(section => ({ ...section, id: slugify(section.title) }));
  const midAfter = Math.floor((sections.length - 1) / 2);
  const whatsappMessage = page.unidad
    ? `Hola, vi "${page.nav}" en su web y quiero cotizar: ${page.unidad}.`
    : `Hola, vi "${page.nav}" en su web y quiero asesoramiento para mi 0km.`;

  const toc = [
    ...sections.map(section => ({ id: section.id, title: section.title })),
    ...hub.map(group => ({ id: slugify(group.title), title: group.title })),
    ...(page.faqs?.length ? [{ id: 'preguntas-frecuentes', title: 'Preguntas frecuentes' }] : []),
  ];

  return (
    <PageShell whatsappMessage={whatsappMessage}>
      <DocHero label={page.label} h1={page.h1} h1Em={page.h1Em} lead={page.lead} breadcrumbs={breadcrumbs} updated={page.updated} origen={page.path} whatsappMessage={whatsappMessage} />

      <div className="doc-body">
        <div className="wrap doc-grid">
          <article className="doc-article">
            {children}
            {sections.map((section, index) => (
              <Fragment key={section.id}>
                <section className="doc-section" id={section.id}>
                  <h2>{section.title}</h2>
                  <Blocks blocks={section.blocks} />
                </section>
                {index === midAfter && <MidCta whatsappMessage={whatsappMessage} origen={page.path} />}
              </Fragment>
            ))}

            {hub.length > 0 && <HubGroups groups={hub} />}

            {page.faqs && page.faqs.length > 0 && (
              <section className="doc-section" id="preguntas-frecuentes">
                <h2>Preguntas frecuentes<span className="blue-dot">.</span></h2>
                <div className="faq-list">
                  {page.faqs.map(faq => (
                    <details key={faq.q}>
                      <summary>{faq.q}<span aria-hidden="true">+</span></summary>
                      <p><RichText text={faq.a} /></p>
                    </details>
                  ))}
                </div>
              </section>
            )}

            <p className="doc-disclaimer">
              Información orientativa. Agencia multimarca independiente: no somos concesionario oficial. Las marcas pertenecen a sus titulares. Precios, versiones y condiciones de financiación sujetos a disponibilidad y a cambios de cada marca o entidad.
            </p>
          </article>

          <aside className="doc-aside" aria-label="En esta guía">
            {toc.length > 2 && (
              <nav className="doc-toc" aria-label="Índice">
                <span className="eyebrow dark-kicker">EN ESTA GUÍA</span>
                <ol>{toc.map(item => <li key={item.id}><a href={`#${item.id}`}>{item.title}</a></li>)}</ol>
              </nav>
            )}
            <div className="doc-aside-cta">
              <p className="doc-aside-title">{CTA.sidebar.title}<span className="blue-dot">.</span></p>
              <p>{CTA.sidebar.text}</p>
              <ContactButtons light whatsappMessage={whatsappMessage} origen={page.path} formLabel={CTA.mid.formLabel} callLabel={CTA.mid.callLabel} />
            </div>
          </aside>
        </div>
      </div>

      {related.length > 0 && (
        <section className="doc-related">
          <div className="wrap">
            <span className="eyebrow dark-kicker">SEGUÍ LEYENDO</span>
            <h2>Te puede interesar<span className="blue-dot">.</span></h2>
            <LinkRows links={related} />
          </div>
        </section>
      )}

      <LeadForm tipo={page.tipo} unidad={page.unidad} origen={page.path} whatsappMessage={whatsappMessage} />
      <ArticleFinalCta whatsappMessage={whatsappMessage} origen={page.path} />
    </PageShell>
  );
}
