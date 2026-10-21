/* ============================================================================
 * DATOS DE LA AGENCIA — ÚNICO LUGAR PARA COMPLETAR
 * Home, artículos, header, footer, botones y datos para Google leen de acá.
 * Si un valor queda vacío, ese botón o dato no se muestra.
 * ========================================================================== */

export const FIRM_NAME = 'Agencia Kocos';
export const LOGO_URL = 'https://horizons-cdn.hostinger.com/36f43b4e-b629-4797-867e-b3697140c643/dd63ce66f2d8ee5fafde6d7ed609128a.png';
export const SHARE_IMAGE_URL = 'https://images.hostinger.com/779d0081-21c7-4db5-9f52-90707f401fcc.png';

/** Dominio definitivo con https y sin barra final. Ej: 'https://www.agenciakocos.com.ar'. */
export const SITE_URL = 'https://autoskocos.com';

/** Teléfono como se muestra, ej. '(011) 4000-0000', y en formato internacional, ej. '+541140000000'. */
export const PHONE = '11 4067-4772';
export const PHONE_E164 = '+5491140674772';

/**
 * WhatsApp: solo números, con 549. Ej: '5491140000000'.
 * Mientras esté vacío, los botones abren el aviso "Pronto vas a poder escribirnos",
 * igual que hoy en la home.
 */
export const WHATSAPP_NUMBER = '5491140674772';
export const WHATSAPP_DEFAULT_MESSAGE = 'Hola, quiero asesoramiento para comprar un 0km.';

export const EMAIL = 'autoskocos@hotmail.com';
export const INSTAGRAM_URL = 'https://www.instagram.com/autoskocos/';
export const INSTAGRAM_HANDLE = '@autoskocos';
export const FACEBOOK_URL = 'https://www.facebook.com/profile.php?id=61594687512414';
export const TIKTOK_URL = '';
export const YOUTUBE_URL = '';

/** Dirección del salón o de atención (opcional; conviene que coincida con Google Business Profile). */
export const ADDRESS = { street: '', locality: '', region: 'Ciudad Autónoma de Buenos Aires', postalCode: '', country: 'AR' };

/** Horarios de atención para Google (opcional). Ej: 'Mo-Fr 09:00-18:00'. */
export const OPENING_HOURS = '';

/** Códigos de verificación de Google Search Console y Bing Webmaster Tools. */
export const VERIFICATION = { google: '', bing: '' };

/** Clave de IndexNow (32 letras/números) para indexación rápida en Bing y otros. */
export const INDEXNOW_KEY = '';

/* ======================= Derivados — no hace falta editar ======================= */

export function whatsappUrl(message: string = WHATSAPP_DEFAULT_MESSAGE): string {
  return WHATSAPP_NUMBER ? `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}` : '';
}

export const PHONE_URL = PHONE_E164 ? `tel:${PHONE_E164}` : PHONE ? `tel:${PHONE.replace(/[^\d+]/g, '')}` : '';

export const SOCIAL_LINKS = [
  { label: INSTAGRAM_HANDLE || 'Instagram', url: INSTAGRAM_URL },
  { label: 'Facebook', url: FACEBOOK_URL },
  { label: 'TikTok', url: TIKTOK_URL },
  { label: 'YouTube', url: YOUTUBE_URL },
].filter(link => link.url);
