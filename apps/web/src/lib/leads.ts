/* ============================================================================
 * ENVÍO DE FORMULARIOS (home y artículos)
 *
 * El sitio original todavía no enviaba las consultas. Hasta conectar un
 * proveedor, el formulario muestra el mismo aviso que antes ("todavía no se
 * enviaron"). Elegí uno y completá sus datos:
 *  - 'supabase' → ejecutar /supabase/consultas.sql y completar SUPABASE_CONFIG.
 *  - 'webhook'  → cualquier URL que reciba JSON por POST (Make, Zapier, n8n, CRM).
 *  - 'none'     → no envía (estado actual).
 * ========================================================================== */

export type LeadsProvider = 'supabase' | 'webhook' | 'none';

/** 21/10: las consultas van al CRM (Supabase) y el agente escribe por WhatsApp a los 5 minutos. */
export const LEADS_PROVIDER: LeadsProvider = 'webhook';

/** La anon key es pública por diseño: la política RLS del SQL solo permite insertar. */
export const SUPABASE_CONFIG = { url: '', anonKey: '', table: 'consultas' };

export const WEBHOOK_URL = 'https://legal-crm-nine.vercel.app/api/landing?perfil=agencia_0km';

export const leadsEnabled = (): boolean => LEADS_PROVIDER !== 'none';

export type Lead = {
  nombre: string;
  apellido: string;
  telefono: string;
  busqueda: string;
  unidad: string;
  anticipo: string;
  monto?: string;
  usado: string;
  detalleUsado?: string;
  plazo: string;
  consulta?: string;
  /** Página desde la que llegó la consulta. */
  origen?: string;
};

async function postJson(url: string, body: unknown, headers: Record<string, string> = {}) {
  const response = await fetch(url, { method: 'POST', headers: { 'Content-Type': 'application/json', ...headers }, body: JSON.stringify(body) });
  if (!response.ok) throw new Error(`Error ${response.status} al enviar la consulta`);
}

export async function submitLead(lead: Lead): Promise<void> {
  const payload = { ...lead, origen: lead.origen || '/' };
  if (LEADS_PROVIDER === 'supabase') {
    const { url, anonKey, table } = SUPABASE_CONFIG;
    if (!url || !anonKey) throw new Error('Supabase sin configurar');
    await postJson(`${url}/rest/v1/${table}`, payload, { apikey: anonKey, Authorization: `Bearer ${anonKey}`, Prefer: 'return=minimal' });
    return;
  }
  if (LEADS_PROVIDER === 'webhook') {
    if (!WEBHOOK_URL) throw new Error('Webhook sin configurar');
    await postJson(WEBHOOK_URL, paraCrm(payload));
    return;
  }
  console.warn('[leads] Sin base de datos conectada: la consulta no se envió. Configurá LEADS_PROVIDER en lib/leads.ts.', payload);
}

/** Formato que recibe el CRM: nombre, teléfono, tipo y una descripción con el resto de los datos. */
function paraCrm(l: Lead & { origen: string }) {
  const extras: [string, string | undefined][] = [
    ['Unidad que le interesa', l.unidad],
    ['Anticipo', l.anticipo],
    ['Monto del anticipo', l.monto],
    ['Usado para entregar', l.usado],
    ['Detalle del usado', l.detalleUsado],
    ['Plazo', l.plazo],
  ];
  const descripcion = [...extras.filter(([, v]) => v && String(v).trim()).map(([k, v]) => `${k}: ${v}`), l.consulta ?? ''].filter(Boolean).join('\n');
  return { nombre: l.nombre, apellido: l.apellido, telefono: l.telefono, tipo: l.busqueda, descripcion: descripcion || l.busqueda, origen: l.origen, llegada: typeof document === 'undefined' ? '' : document.referrer };
}
