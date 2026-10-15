import type { Page } from './types';

const D = '2026-09-29';
const base = { silo: 'guias', kind: 'guia', published: D, updated: D, tipo: '0KM' } as const;

export const simuladorPage: Page = {
  ...base,
  kind: 'herramienta',
  tipo: 'Financiación',
  path: '/guias/simulador-de-cuotas',
  title: 'Simulador de cuotas para autos 0km',
  description: 'Calculá la cuota aproximada de tu 0km con crédito prendario: ingresá el precio, tu anticipo o usado, la tasa y el plazo, y obtené una estimación.',
  label: 'SIMULADOR',
  h1: 'Simulá la cuota',
  h1Em: 'de tu 0KM.',
  lead: 'Ingresá el precio aproximado, cuánto tenés de anticipo (en efectivo o con tu usado), la tasa y el plazo. Te mostramos una cuota estimada con crédito prendario.',
  nav: 'Simulador de cuotas',
  sections: [
    {
      title: 'Cómo se calcula',
      blocks: [
        { p: 'El simulador usa el sistema francés, el más común en créditos prendarios: cuotas iguales en las que al principio pagás más interés y al final más capital.' },
        { p: 'La cuota estimada es la cuota pura: no incluye IVA sobre intereses, seguros ni gastos de otorgamiento. Para comparar créditos, mirá siempre el CFT. Ver [crédito prendario](/financiacion/credito-prendario).' },
      ],
    },
    {
      title: 'Cómo bajar la cuota',
      blocks: [
        { list: ['Sumar tu usado como anticipo. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).', 'Elegir un plazo más largo, sabiendo que aumenta el total pagado.', 'Aprovechar promociones de [tasa 0%](/financiacion/tasa-0).', 'Evaluar un [plan de ahorro](/financiacion/plan-de-ahorro).'] },
        { note: 'Es una estimación orientativa. Pedinos la cotización real con la tasa vigente para el modelo que te interesa.' },
      ],
    },
  ],
  faqs: [{ q: '¿Qué tasa pongo?', a: 'Si no la sabés, usá una tasa de referencia y después pedinos la cotización real: las tasas cambian según la entidad, el plazo y el modelo.' }],
  related: ['/financiacion/credito-prendario', '/financiacion/tasa-0', '/financiacion/usado-como-parte-de-pago'],
};

export const guiaPages: Page[] = [
  {
    ...base,
    path: '/guias/como-comprar-un-0km',
    title: 'Cómo comprar un auto 0km paso a paso',
    description: 'Guía para comprar un auto 0km en CABA y el AMBA: elegir el modelo, la forma de pago, reservar, patentar, contratar el seguro y retirarlo.',
    label: 'GUÍA DE COMPRA',
    h1: 'Cómo comprar un 0KM,',
    h1Em: 'paso a paso.',
    lead: 'Comprar un auto nuevo es una decisión grande. Esta guía ordena los pasos para que sepas qué viene en cada momento.',
    nav: 'Cómo comprar un 0km',
    sections: [
      {
        title: 'Los pasos',
        blocks: [
          { steps: [
            { title: 'Definí el uso y el presupuesto', text: 'Qué necesitás del auto y cuánto podés pagar de anticipo y de cuota. Mirá los [segmentos](/0km).' },
            { title: 'Elegí modelo y versión', text: 'Compará versiones equivalentes de distintas marcas.' },
            { title: 'Elegí la forma de pago', text: 'Contado, [crédito prendario](/financiacion/credito-prendario), [plan de ahorro](/financiacion/plan-de-ahorro) o [tu usado](/financiacion/usado-como-parte-de-pago).' },
            { title: 'Reserva y documentación', text: 'Se reserva la unidad y se reúne la documentación. Ver [documentos para comprar](/guias/documentos-para-comprar).' },
            { title: 'Patentamiento y seguro', text: 'Se inscribe el auto a tu nombre y se contrata el seguro. Ver [gastos de patentamiento](/guias/gastos-de-patentamiento) y [seguro para tu 0km](/guias/seguro-para-0km).' },
            { title: 'Entrega', text: 'Revisás el auto, recibís la documentación y te lo llevás. Ver [entrega y garantía](/guias/entrega-y-garantia).' },
          ] },
        ],
      },
      {
        title: 'Errores frecuentes',
        blocks: [
          { list: ['Comparar precios sin incluir gastos de patentamiento.', 'Comparar créditos por la cuota y no por el CFT.', 'Firmar un plan de ahorro por una promesa verbal de adjudicación.', 'No verificar el precio final por escrito.'] },
        ],
      },
    ],
    faqs: [{ q: '¿Cuánto tarda todo el proceso?', a: 'Depende de la disponibilidad de la unidad y de la forma de pago. Con unidad en stock y contado, puede ser rápido; con financiación, suma el tiempo de aprobación.' }],
    related: ['/guias/gastos-de-patentamiento', '/financiacion', '/guias/documentos-para-comprar'],
  },
  {
    ...base,
    path: '/guias/gastos-de-patentamiento',
    title: 'Gastos de patentamiento de un 0km en CABA y GBA',
    description: 'Qué incluyen los gastos de patentamiento de un auto 0km: aranceles del registro, sellos, formularios, patente y gestoría. Cómo varían entre CABA y Provincia.',
    label: 'PATENTAMIENTO',
    h1: 'Gastos de patentamiento',
    h1Em: 'de tu 0KM.',
    lead: 'El patentamiento es la inscripción del auto a tu nombre. Tiene costos que conviene conocer antes de comparar precios.',
    nav: 'Gastos de patentamiento',
    sections: [
      {
        title: 'Qué incluye',
        blocks: [
          { list: ['Aranceles del Registro de la Propiedad Automotor por la inscripción inicial.', 'Impuesto de sellos, según la jurisdicción.', 'Formularios y trámites.', 'Placas de dominio.', 'Gestoría, si la operación la incluye.', 'Primera cuota de patente, según el momento del alta.'] },
        ],
      },
      {
        title: 'Por qué varían',
        blocks: [
          { p: 'Varios de estos costos dependen del valor del auto y de la jurisdicción donde se radica, que es la del domicilio del titular. Por eso el costo no es igual en CABA que en la Provincia de Buenos Aires. Ver [patente en CABA o Provincia](/guias/patente-caba-o-provincia).' },
          { note: 'Pedí siempre el precio final con patentamiento incluido: es la única forma de comparar ofertas de manera justa.' },
        ],
      },
    ],
    faqs: [{ q: '¿Puedo patentar en otra jurisdicción para pagar menos?', a: 'El auto se radica según el domicilio del titular. Te recomendamos hacerlo correctamente para evitar problemas posteriores.' }],
    related: ['/guias/patente-caba-o-provincia', '/financiacion/comprar-0km-de-contado', '/guias/como-comprar-un-0km'],
  },
  {
    ...base,
    path: '/guias/patente-caba-o-provincia',
    title: 'Patente de un 0km: CABA o Provincia de Buenos Aires',
    description: 'Cómo funciona la patente de un auto 0km en CABA (AGIP) y en la Provincia de Buenos Aires (ARBA): radicación, cómo se calcula y cómo se paga.',
    label: 'PATENTE',
    h1: 'La patente de tu 0KM',
    h1Em: 'en CABA o Provincia.',
    lead: 'La patente es el impuesto anual al automotor. Lo cobra la jurisdicción donde está radicado el auto, y por eso cambia entre la Ciudad y la Provincia.',
    nav: 'Patente en CABA o Provincia',
    sections: [
      {
        title: 'Quién la cobra',
        blocks: [
          { list: ['En la Ciudad de Buenos Aires, la Administración Gubernamental de Ingresos Públicos (AGIP).', 'En la Provincia de Buenos Aires, la Agencia de Recaudación (ARBA).'] },
          { p: 'El auto se radica según el domicilio del titular. Si vivís en CABA, se radica en la Ciudad; si vivís en el conurbano, en la Provincia.' },
        ],
      },
      {
        title: 'Cómo se calcula',
        blocks: [
          { p: 'Se calcula sobre la valuación fiscal del vehículo, que fija cada jurisdicción, con las alícuotas vigentes cada año. Los 0km, por su valor, están entre los que más pagan en los primeros años.' },
          { note: 'Antes de cerrar la compra te pasamos una estimación de la patente según tu domicilio.' },
        ],
      },
    ],
    faqs: [{ q: '¿Se puede pagar anual?', a: 'Las dos jurisdicciones suelen ofrecer pago en cuotas y opciones de pago anual, a veces con descuento. Revisá las condiciones vigentes en AGIP o ARBA.' }],
    related: ['/guias/gastos-de-patentamiento', '/guias/seguro-para-0km', '/0km/caba'],
  },
  {
    ...base,
    path: '/guias/seguro-para-0km',
    title: 'Seguro para un auto 0km: qué cobertura elegir',
    description: 'Qué seguro necesitás para un 0km: responsabilidad civil obligatoria, terceros completo y todo riesgo. Qué pide un crédito prendario y cómo comparar.',
    label: 'SEGURO',
    h1: 'El seguro',
    h1Em: 'de tu 0KM.',
    lead: 'Un 0km se asegura antes de salir a la calle. Te explicamos las coberturas y qué conviene según cómo lo compres.',
    nav: 'Seguro para tu 0km',
    sections: [
      {
        title: 'Coberturas',
        blocks: [
          { list: ['Responsabilidad civil: es obligatoria por ley y cubre daños a terceros.', 'Terceros completo: suma robo, incendio y, según la póliza, algunos daños.', 'Todo riesgo: cubre también los daños propios, con o sin franquicia.'] },
        ],
      },
      {
        title: 'Si financiás con prendario',
        blocks: [
          { p: 'La entidad que otorga el crédito suele exigir un seguro de cobertura amplia mientras dure la deuda, porque el auto es la garantía.' },
          { note: 'En un 0km, el todo riesgo suele ser la opción más elegida los primeros años.' },
        ],
      },
    ],
    faqs: [{ q: '¿Puedo elegir la aseguradora?', a: 'En general sí, salvo condiciones del crédito o del plan de ahorro. Consultanos según la forma de pago.' }],
    related: ['/financiacion/credito-prendario', '/guias/entrega-y-garantia', '/guias/como-comprar-un-0km'],
  },
  {
    ...base,
    path: '/guias/entrega-y-garantia',
    title: 'Entrega de un 0km: qué revisar y cómo funciona la garantía',
    description: 'Qué revisar al retirar tu 0km, qué documentación te tienen que entregar y cómo funciona la garantía de fábrica y los services.',
    label: 'ENTREGA',
    h1: 'La entrega',
    h1Em: 'de tu 0KM.',
    lead: 'El día de la entrega es especial, pero conviene revisar algunos puntos antes de salir con tu auto nuevo.',
    nav: 'Entrega y garantía',
    sections: [
      {
        title: 'Qué revisar',
        blocks: [{ list: ['Que la versión, el color y los accesorios coincidan con lo acordado.', 'Carrocería, pintura y tapizados sin marcas.', 'Kilometraje mínimo.', 'Rueda de auxilio, herramientas y llaves.', 'Funcionamiento de luces, pantallas y climatización.'] }],
      },
      {
        title: 'Documentación',
        blocks: [{ list: ['Título del automotor.', 'Cédula de identificación del vehículo.', 'Manual y libreta de garantía.', 'Comprobante del seguro.', 'Placas de dominio colocadas.'] }],
      },
      {
        title: 'Garantía y services',
        blocks: [
          { p: 'La garantía de fábrica corresponde al vehículo y se hace efectiva en la red oficial de la marca. Para mantenerla, hacé los services en los plazos o kilómetros que indica el manual.' },
          { note: 'Somos una agencia independiente: te indicamos cómo queda registrada la garantía y dónde hacer los services de tu marca.' },
        ],
      },
    ],
    faqs: [{ q: '¿Un 0km tiene que hacer VTV?', a: 'Los autos nuevos están exentos durante los primeros años. El plazo depende de la jurisdicción.' }],
    related: ['/guias/seguro-para-0km', '/guias/como-comprar-un-0km', '/guias/patente-caba-o-provincia'],
  },
  {
    ...base,
    path: '/guias/documentos-para-comprar',
    title: 'Documentos para comprar un 0km',
    description: 'Qué documentación necesitás para comprar un auto 0km de contado, con crédito prendario, con plan de ahorro o entregando tu usado.',
    label: 'DOCUMENTACIÓN',
    h1: 'Qué documentos necesitás',
    h1Em: 'para comprar tu 0KM.',
    lead: 'Tener los papeles listos acelera la reserva, la aprobación y el patentamiento.',
    nav: 'Documentos para comprar',
    sections: [
      { title: 'Para cualquier compra', blocks: [{ list: ['DNI.', 'CUIL o CUIT.', 'Comprobante de domicilio.', 'Datos de estado civil, y datos del cónyuge si corresponde.'] }] },
      { title: 'Si financiás', blocks: [{ list: ['Recibos de sueldo o constancia de monotributo.', 'Comprobantes de ingresos adicionales, si los hay.'] }, { p: 'Ver [requisitos para financiar](/financiacion/requisitos-para-financiar).' }] },
      { title: 'Si entregás tu usado', blocks: [{ list: ['Título y cédula.', 'Libre deuda de patentes e infracciones.', 'DNI del titular del usado.'] }, { note: 'Si te falta algo, te decimos cómo conseguirlo.' }] },
    ],
    related: ['/financiacion/requisitos-para-financiar', '/financiacion/usado-como-parte-de-pago', '/guias/como-comprar-un-0km'],
  },
  {
    ...base,
    path: '/guias/glosario',
    title: 'Glosario para comprar un 0km: términos clave',
    description: 'Qué significan CFT, prenda, adjudicación, licitación, alícuota, patentamiento, radicación y otros términos al comprar un auto 0km.',
    label: 'GLOSARIO',
    h1: 'Glosario',
    h1Em: 'del 0KM.',
    lead: 'Las palabras de la financiación y los planes de ahorro pueden confundir. Acá las explicamos en lenguaje simple.',
    nav: 'Glosario',
    sections: [
      {
        title: 'Términos clave',
        blocks: [
          { h3: 'CFT' }, { p: 'Costo financiero total: todo lo que pagás por un crédito, incluidos intereses, gastos y seguros.' },
          { h3: 'Prenda' }, { p: 'La garantía de un crédito prendario: el auto queda afectado hasta que se paga la deuda. Ver [crédito prendario](/financiacion/credito-prendario).' },
          { h3: 'Sistema francés' }, { p: 'Sistema de amortización con cuotas iguales.' },
          { h3: 'Adjudicación' }, { p: 'En un plan de ahorro, el momento en que se te asigna el vehículo. Ver [sorteo y licitación](/financiacion/adjudicacion-sorteo-y-licitacion).' },
          { h3: 'Licitación' }, { p: 'Oferta de adelantar cuotas para adjudicar antes.' },
          { h3: 'Alícuota' }, { p: 'En un plan de ahorro, la parte de la cuota que corresponde al valor del vehículo.' },
          { h3: 'Patentamiento' }, { p: 'La inscripción inicial del 0km a nombre del titular. Ver [gastos de patentamiento](/guias/gastos-de-patentamiento).' },
          { h3: 'Radicación' }, { p: 'La jurisdicción donde queda registrado el auto, según el domicilio del titular.' },
          { h3: 'Tasación' }, { p: 'La valuación de tu usado para tomarlo como parte de pago.' },
        ],
      },
    ],
    related: ['/guias/como-comprar-un-0km', '/financiacion', '/0km'],
  },
];
