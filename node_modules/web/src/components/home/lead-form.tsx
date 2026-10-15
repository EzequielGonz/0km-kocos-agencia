import { useState, type FormEvent } from 'react';
import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { WhatsappButton } from '@/components/home/whatsapp-button';
import { leadsEnabled, submitLead } from '@/lib/leads';
import { track } from '@/lib/track';

type Values = { nombre:string; apellido:string; telefono:string; busqueda:string; unidad:string; anticipo:string; monto:string; usado:string; detalleUsado:string; plazo:string; consulta:string };
const initial: Values = {nombre:'',apellido:'',telefono:'',busqueda:'',unidad:'',anticipo:'',monto:'',usado:'',detalleUsado:'',plazo:'',consulta:''};
type Field = keyof Values;
export function LeadForm(){
 const [values,setValues]=useState<Values>(initial);
 const [errors,setErrors]=useState<Partial<Record<Field,string>>>({});
 const [notice,setNotice]=useState(false);
 const [status,setStatus]=useState<'idle'|'sent'|'error'>('idle');
 const update=(key:Field,value:string)=>{setValues(prev=>({...prev,[key]:value}));setErrors(prev=>({...prev,[key]:undefined}));setNotice(false);setStatus('idle')};
 const submit=async(event:FormEvent<HTMLFormElement>)=>{event.preventDefault();const next:Partial<Record<Field,string>>={};
  if(!values.nombre.trim())next.nombre='Ingresá tu nombre.';
  if(!values.apellido.trim())next.apellido='Ingresá tu apellido.';
  if(!/^[+\d\s()\-]{7,20}$/.test(values.telefono.trim()))next.telefono='Ingresá un número de teléfono válido.';
  if(!values.busqueda)next.busqueda='Elegí una opción.';
  if(!values.unidad.trim())next.unidad='Contanos qué unidad te interesa.';
  if(!values.anticipo)next.anticipo='Elegí una opción.';
  if(values.anticipo==='Sí' && (!values.monto.trim() || Number(values.monto)<=0))next.monto='Ingresá un monto aproximado.';
  if(!values.usado)next.usado='Elegí una opción.';
  if(values.usado==='Sí' && !values.detalleUsado.trim())next.detalleUsado='Contanos marca, modelo y año.';
  if(!values.plazo)next.plazo='Elegí una opción.';
  setErrors(next);
  if(Object.keys(next).length!==0)return;
  // Sin base de datos conectada (lib/leads.ts) se mantiene el aviso original.
  if(!leadsEnabled()){setNotice(true);return;}
  try{await submitLead({...values,origen:'/'});track('lead_enviado',{origen:'/',busqueda:values.busqueda});setValues(initial);setStatus('sent');}catch{setStatus('error');}
 };
 const input=(key:Field,label:string,placeholder:string,type='text')=><div className="field"><label htmlFor={key}>{label}</label><input id={key} name={key} type={type} value={values[key]} onChange={e=>update(key,e.target.value)} placeholder={placeholder} aria-invalid={!!errors[key]} aria-describedby={errors[key]?`${key}-error`:undefined}/>{errors[key]&&<span className="field-error" id={`${key}-error`}>{errors[key]}</span>}</div>;
 const select=(key:Field,label:string,options:string[])=><div className="field"><label htmlFor={key}>{label}</label><select id={key} name={key} value={values[key]} onChange={e=>update(key,e.target.value)} aria-invalid={!!errors[key]} aria-describedby={errors[key]?`${key}-error`:undefined}><option value="">Seleccioná una opción</option>{options.map(option=><option key={option} value={option}>{option}</option>)}</select>{errors[key]&&<span className="field-error" id={`${key}-error`}>{errors[key]}</span>}</div>;
 return <section className="contact-section" id="contacto"><div className="wrap contact-layout"><div className="contact-intro"><span className="eyebrow" data-reveal>HABLEMOS DE TU PRÓXIMO AUTO</span><h2 data-reveal data-reveal-delay="70">Contanos qué vehículo estás buscando<span className="blue-dot">.</span></h2><p data-reveal data-reveal-delay="140">Completá algunos datos y podremos orientarte sobre las alternativas disponibles.</p><div className="contact-line"/><p className="contact-aside">No tenés que tener todo resuelto. Estamos para ayudarte a encontrar por dónde empezar.</p></div><div className="form-panel" data-reveal data-reveal-delay="120"><div className="form-topline"><span>HACÉ TU CONSULTA</span><span>AGENCIA KOCOS ↗</span></div><form onSubmit={submit} noValidate><div className="form-row">{input('nombre','Nombre','Tu nombre')}{input('apellido','Apellido','Tu apellido')}</div>{input('telefono','Número de teléfono','Tu teléfono','tel')}{select('busqueda','¿Qué estás buscando?',['0KM','Plan de ahorro','Financiación','Todavía no estoy seguro/a'])}{input('unidad','¿Qué unidad te interesa?','Ej.: SUV, hatchback, pickup, sedán o modelo específico.')}{select('anticipo','¿Tenés un anticipo disponible?',['Sí','No','Estoy evaluándolo'])}{values.anticipo==='Sí'&&input('monto','Monto aproximado del anticipo','Ingresá un monto aproximado','number')}{select('usado','¿Tenés un vehículo usado para entregar?',['Sí','No'])}{values.usado==='Sí'&&input('detalleUsado','Contanos marca, modelo y año.','Ej.: marca, modelo y año')}{select('plazo','¿Cuándo te gustaría cambiar de vehículo?',['Lo antes posible','En los próximos meses','Estoy averiguando'])}<div className="field"><label htmlFor="consulta">Consulta <span className="optional">(opcional)</span></label><textarea id="consulta" name="consulta" rows={3} placeholder="Contanos cualquier detalle que quieras consultar." value={values.consulta} onChange={e=>update('consulta',e.target.value)}/></div><button className="button-primary form-submit" type="submit">Quiero recibir asesoramiento <ArrowUpRight size={19}/></button>{notice&&<div className="form-notice" role="status">Tus datos están completos, pero todavía no se enviaron. Estamos preparando el canal para recibir consultas.</div>}{status==='sent'&&<div className="form-notice" role="status">Recibimos tu consulta. Un asesor se va a comunicar con vos con las alternativas disponibles.</div>}{status==='error'&&<div className="form-notice" role="alert">No pudimos enviar tu consulta. Intentá nuevamente o escribinos por WhatsApp.</div>}{!leadsEnabled()&&<p className="form-disclaimer"><LockKeyhole size={15}/> Este formulario estará disponible para envío próximamente.</p>}</form><div className="form-whatsapp"><span>También podés consultarnos directamente por WhatsApp.</span><WhatsappButton/></div></div></div></section>;
}
