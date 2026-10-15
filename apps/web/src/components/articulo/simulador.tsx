import { useId, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';

/**
 * Cuota estimada de un crédito prendario con sistema francés:
 *   cuota = capital × i / (1 − (1 + i)^−n), con i = TNA / 12.
 * Es la cuota pura: no incluye IVA sobre intereses, seguros ni gastos.
 */
const pesos = new Intl.NumberFormat('es-AR', { style: 'currency', currency: 'ARS', maximumFractionDigits: 0 });
const parse = (value: string) => Number(value.replace(/\./g, '').replace(',', '.'));
const PLAZOS = [12, 18, 24, 36, 48, 60];

export function Simulador() {
  const uid = useId();
  const [precio, setPrecio] = useState('');
  const [anticipo, setAnticipo] = useState('');
  const [tna, setTna] = useState('');
  const [plazo, setPlazo] = useState('36');

  const p = parse(precio);
  const a = anticipo ? parse(anticipo) : 0;
  const t = tna === '' ? NaN : parse(tna);
  const n = Number(plazo);
  const capital = p - a;
  const valido = p > 0 && a >= 0 && capital > 0 && t >= 0 && t <= 300;

  let cuota = 0;
  if (valido) {
    const i = t / 100 / 12;
    cuota = i === 0 ? capital / n : (capital * i) / (1 - Math.pow(1 + i, -n));
  }

  return (
    <section className="doc-calc" aria-labelledby={`${uid}-titulo`}>
      <p className="doc-calc-title" id={`${uid}-titulo`}>Simulá tu cuota<span className="blue-dot">.</span></p>
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${uid}-precio`}>Precio aproximado del 0km</label>
          <input id={`${uid}-precio`} inputMode="numeric" placeholder="Ej: 35.000.000" value={precio} onChange={e => setPrecio(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-anticipo`}>Anticipo (efectivo y/o usado)</label>
          <input id={`${uid}-anticipo`} inputMode="numeric" placeholder="Ej: 12.000.000" value={anticipo} onChange={e => setAnticipo(e.target.value)} />
        </div>
      </div>
      <div className="form-row">
        <div className="field">
          <label htmlFor={`${uid}-tna`}>Tasa nominal anual (%)</label>
          <input id={`${uid}-tna`} inputMode="decimal" placeholder="Ej: 30 (0 si es tasa 0%)" value={tna} onChange={e => setTna(e.target.value)} />
        </div>
        <div className="field">
          <label htmlFor={`${uid}-plazo`}>Plazo</label>
          <select id={`${uid}-plazo`} value={plazo} onChange={e => setPlazo(e.target.value)}>
            {PLAZOS.map(value => <option key={value} value={value}>{value} cuotas</option>)}
          </select>
        </div>
      </div>
      {p > 0 && capital <= 0 && <p className="field-error">El anticipo cubre el precio: no hace falta financiar.</p>}
      <div className="doc-calc-result" aria-live="polite">
        {valido ? (
          <>
            <p className="doc-calc-total"><span>Cuota estimada ({n} cuotas)</span>{pesos.format(cuota)}</p>
            <p className="doc-calc-note">Monto a financiar: {pesos.format(capital)}. Total en cuotas: {pesos.format(cuota * n)}. Cuota pura, sin IVA sobre intereses, seguros ni gastos. Estimación orientativa.</p>
            <a className="button-primary" href="#contacto">Quiero la cotización real <ArrowUpRight size={19} /></a>
          </>
        ) : (
          <p className="doc-calc-note">Completá el precio, el anticipo y la tasa para ver la cuota.</p>
        )}
      </div>
    </section>
  );
}
