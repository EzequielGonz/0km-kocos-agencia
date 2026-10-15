import { useState } from 'react';
import { MessageCircle, X } from 'lucide-react';
import { WHATSAPP_DEFAULT_MESSAGE, whatsappUrl } from '@/constants/brand';
import { track } from '@/lib/track';

type Props = { className?: string; compact?: boolean; floating?: boolean; message?: string };

/**
 * Botón de WhatsApp de todo el sitio. El número se configura en constants/brand.ts.
 * Mientras no haya número, abre el mismo aviso de "pronto" que tenía la home.
 * `message` permite que cada página mande un mensaje precargado propio.
 */
export function WhatsappButton({ className = '', compact = false, floating = false, message = WHATSAPP_DEFAULT_MESSAGE }: Props) {
  const [open, setOpen] = useState(false);
  const link = whatsappUrl(message);
  const classes = `${floating ? 'whatsapp-float' : 'whatsapp-link'} ${className}`;
  const content = <><MessageCircle size={floating ? 23 : 18} strokeWidth={1.9} />{!floating && <span>{compact ? 'WhatsApp' : 'Consultar por WhatsApp'}</span>}</>;

  if (link) {
    return <a href={link} target="_blank" rel="noopener noreferrer" className={classes} aria-label={floating ? 'Consultar por WhatsApp' : undefined} onClick={() => track('click_whatsapp', { origen: typeof window === 'undefined' ? '' : window.location.pathname })}>{content}</a>;
  }

  return <>
    <button type="button" onClick={() => setOpen(true)} className={classes} aria-label={floating ? 'Consultar por WhatsApp' : undefined}>
      {content}
    </button>
    {open && <div className="modal-backdrop" onClick={() => setOpen(false)} role="presentation"><div className="modal-panel" role="dialog" aria-modal="true" aria-labelledby="wa-title" onClick={event => event.stopPropagation()}><button className="modal-close" onClick={() => setOpen(false)} aria-label="Cerrar"><X size={22}/></button><span className="eyebrow">CONTACTO DIRECTO</span><h2 id="wa-title">Pronto vas a poder escribirnos por WhatsApp.</h2><p>Estamos preparando nuestro canal de atención. Mientras tanto, podés completar el formulario para conocer cómo será la consulta.</p><a className="button-primary" href="#contacto" onClick={() => setOpen(false)}>Ir al formulario <span>↗</span></a></div></div>}
  </>;
}
