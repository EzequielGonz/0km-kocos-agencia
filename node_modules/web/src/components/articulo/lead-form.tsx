import { useState, type FormEvent } from 'react';
import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { CTA } from '@/constants/cta';
import { FIRM_NAME } from '@/constants/brand';
import type { ConsultaTipo } from '@/content/types';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { leadsEnabled, submitLead } from '@/lib/leads';
import { track } from '@/lib/track';

type Values = { nombre: string; apellido: string; telefono: string; busqueda: string; unidad: string; anticipo: string; monto: string; usado: string; detalleUsado: string; plazo: string; consulta: string };
type Field = keyof Values;

type Props = { tipo: ConsultaTipo; unidad?: string; origen: string; whatsappMessage: string };

/**
 * Formulario de los artículos: mismos campos, validaciones y diseño que el de
 * la home. Llega con "¿Qué estás buscando?" y "¿Qué unidad te interesa?"
 * precargados según la página, y guarda la página de origen.
 */
export function LeadForm({ tipo, unidad = '', origen, whatsappMessage }: Props) {
  const initial: Values = { nombre: '', apellido: '', telefono: '', busqueda: tipo, unidad, anticipo: '', monto: '', usado: '', detalleUsado: '', plazo: '', consulta: '' };
  const [values, setValues] = useState<Values>(initial);
  const [errors, setErrors] = useState<Partial<Record<Field, string>>>({});
  const [status, setStatus] = useState<'idle' | 'pending' | 'sending' | 'sent' | 'error'>('idle');

  const update = (key: Field, value: string) => {
    setValues(prev => ({ ...prev, [key]: value }));
    setErrors(prev => ({ ...prev, [key]: undefined }));
    if (status !== 'sending') setStatus('idle');
  };

  const submit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const next: Partial<Record<Field, string>> = {};
    if (!values.nombre.trim()) next.nombre = 'Ingresá tu nombre.';
    if (!values.apellido.trim()) next.apellido = 'Ingresá tu apellido.';
    if (!/^[+\d\s()-]{7,20}$/.test(values.telefono.trim())) next.telefono = 'Ingresá un número de teléfono válido.';
    if (!values.busqueda) next.busqueda = 'Elegí una opción.';
    if (!values.unidad.trim()) next.unidad = 'Contanos qué unidad te interesa.';
    if (!values.anticipo) next.anticipo = 'Elegí una opción.';
    if (values.anticipo === 'Sí' && (!values.monto.trim() || Number(values.monto) <= 0)) next.monto = 'Ingresá un monto aproximado.';
    if (!values.usado) next.usado = 'Elegí una opción.';
    if (values.usado === 'Sí' && !values.detalleUsado.trim()) next.detalleUsado = 'Contanos marca, modelo y año.';
    if (!values.plazo) next.plazo = 'Elegí una opción.';
    setErrors(next);
    if (Object.keys(next).length) { document.getElementById(`lead-${Object.keys(next)[0]}`)?.focus(); return; }
    if (!leadsEnabled()) { setStatus('pending'); return; }
    setStatus('sending');
    try {
      await submitLead({ ...values, origen });
      track('lead_enviado', { origen, busqueda: values.busqueda });
      setValues(initial);
      setStatus('sent');
    } catch {
      setStatus('error');
    }
  };

  const id = (key: Field) => `lead-${key}`;
  const aria = (key: Field) => ({ 'aria-invalid': Boolean(errors[key]), 'aria-describedby': errors[key] ? `${id(key)}-error` : undefined });
  const error = (key: Field) => errors[key] && <span className="field-error" id={`${id(key)}-error`}>{errors[key]}</span>;

  const input = (key: Field, label: string, placeholder: string, type = 'text') => (
    <div className="field"><label htmlFor={id(key)}>{label}</label><input id={id(key)} name={key} type={type} value={values[key]} onChange={e => update(key, e.target.value)} placeholder={placeholder} {...aria(key)} />{error(key)}</div>
  );
  const select = (key: Field, label: string, options: string[]) => (
    <div className="field"><label htmlFor={id(key)}>{label}</label><select id={id(key)} name={key} value={values[key]} onChange={e => update(key, e.target.value)} {...aria(key)}><option value="">Seleccioná una opción</option>{options.map(option => <option key={option} value={option}>{option}</option>)}</select>{error(key)}</div>
  );

  return (
    <section className="contact-section" id="contacto">
      <div className="wrap contact-layout">
        <div className="contact-intro">
          <span className="eyebrow">{CTA.form.label}</span>
          <h2>{CTA.form.title}<span className="blue-dot">.</span></h2>
          <p>{CTA.form.intro}</p>
          <div className="contact-line" />
          <p className="contact-aside">{CTA.form.aside}</p>
        </div>
        <div className="form-panel">
          <div className="form-topline"><span>{CTA.form.topline}</span><span>{FIRM_NAME.toUpperCase()} ↗</span></div>
          <form onSubmit={submit} noValidate>
            <div className="form-row">{input('nombre', 'Nombre', 'Tu nombre')}{input('apellido', 'Apellido', 'Tu apellido')}</div>
            {input('telefono', 'Número de teléfono', 'Tu teléfono', 'tel')}
            {select('busqueda', '¿Qué estás buscando?', ['0KM', 'Plan de ahorro', 'Financiación', 'Todavía no estoy seguro/a'])}
            {input('unidad', '¿Qué unidad te interesa?', 'Ej.: SUV, hatchback, pickup, sedán o modelo específico.')}
            {select('anticipo', '¿Tenés un anticipo disponible?', ['Sí', 'No', 'Estoy evaluándolo'])}
            {values.anticipo === 'Sí' && input('monto', 'Monto aproximado del anticipo', 'Ingresá un monto aproximado', 'number')}
            {select('usado', '¿Tenés un vehículo usado para entregar?', ['Sí', 'No'])}
            {values.usado === 'Sí' && input('detalleUsado', 'Contanos marca, modelo y año.', 'Ej.: marca, modelo y año')}
            {select('plazo', '¿Cuándo te gustaría cambiar de vehículo?', ['Lo antes posible', 'En los próximos meses', 'Estoy averiguando'])}
            <div className="field"><label htmlFor={id('consulta')}>Consulta <span className="optional">(opcional)</span></label><textarea id={id('consulta')} name="consulta" rows={3} placeholder="Contanos cualquier detalle que quieras consultar." value={values.consulta} onChange={e => update('consulta', e.target.value)} /></div>
            <button className="button-primary form-submit" type="submit" disabled={status === 'sending'}>{status === 'sending' ? 'Enviando…' : CTA.form.submit} <ArrowUpRight size={19} /></button>
            {status === 'pending' && <div className="form-notice" role="status">{CTA.form.pendingText}</div>}
            {status === 'sent' && <div className="form-notice" role="status">{CTA.form.successText}</div>}
            {status === 'error' && <div className="form-notice" role="alert">{CTA.form.errorText}</div>}
            {!leadsEnabled() && <p className="form-disclaimer"><LockKeyhole size={15} /> Este formulario estará disponible para envío próximamente.</p>}
          </form>
          <div className="form-whatsapp"><span>{CTA.form.whatsappIntro}</span><WhatsappButton message={whatsappMessage} /></div>
        </div>
      </div>
    </section>
  );
}
