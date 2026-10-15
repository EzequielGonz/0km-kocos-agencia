import { ArrowUpRight, Phone } from 'lucide-react';
import { PHONE, PHONE_URL } from '@/constants/brand';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { track } from '@/lib/track';

type Props = { whatsappMessage: string; origen: string; formLabel: string; callLabel: string; light?: boolean };

/** Botón principal (teléfono si está cargado, si no el formulario) + WhatsApp, con las clases de la home. */
export function ContactButtons({ whatsappMessage, origen, formLabel, callLabel, light = false }: Props) {
  const primary = light ? 'button-light' : 'button-primary';
  return (
    <>
      {PHONE_URL ? (
        <a className={primary} href={PHONE_URL} aria-label={`${callLabel}: ${PHONE}`} onClick={() => track('click_llamar', { origen })}>
          <Phone size={18} strokeWidth={1.9} /> {PHONE}
        </a>
      ) : (
        <a className={primary} href="#contacto">{formLabel} <ArrowUpRight size={19} /></a>
      )}
      <WhatsappButton message={whatsappMessage} />
    </>
  );
}
