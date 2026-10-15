import type { Page } from './types';

const D = '2026-09-29';
const F = '/financiacion';
const K = '/0km';

const base = { silo: 'financiacion', kind: 'guia', published: D, updated: D, tipo: 'Financiación' } as const;

export const financiacionPilar: Page = {
  ...base,
  kind: 'pilar',
  path: F,
  title: 'Financiación de autos 0km: prendario, plan de ahorro y más',
  description: 'Todas las formas de comprar tu 0km en CABA y el AMBA: contado, crédito prendario, tasa 0%, plan de ahorro, anticipo y usado como parte de pago.',
  label: 'FINANCIACIÓN 0KM',
  h1: 'Todas las formas',
  h1Em: 'de pagar tu 0KM.',
  lead: 'No hay una sola manera de llegar a tu próximo auto. Te explicamos cada alternativa y cómo combinarlas para que la cuota te quede cómoda.',
  nav: 'Financiación',
  sections: [
    {
      title: 'Las alternativas',
      blocks: [
        { h3: 'Contado' },
        { p: 'Pagás el total y recibís el auto según la disponibilidad. Ver [comprar un 0km de contado](/financiacion/comprar-0km-de-contado).' },
        { h3: 'Crédito prendario' },
        { p: 'Un préstamo con el mismo auto como garantía. Lo recibís al inicio y pagás en cuotas. Ver [crédito prendario](/financiacion/credito-prendario).' },
        { h3: 'Tasa 0%' },
        { p: 'Promociones de financiación sin interés en algunos modelos, con montos y plazos limitados. Ver [tasa 0%](/financiacion/tasa-0).' },
        { h3: 'Plan de ahorro' },
        { p: 'Pagás cuotas mensuales dentro de un grupo y recibís el auto cuando se adjudica. Ver [plan de ahorro](/financiacion/plan-de-ahorro).' },
        { h3: 'Usado como parte de pago' },
        { p: 'Tu auto actual se toma como parte del precio. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).' },
      ],
    },
    {
      title: 'Cómo combinarlas',
      blocks: [
        { p: 'Lo más habitual es combinar: entregar el usado como anticipo, sumar un monto en efectivo y financiar el resto con un crédito prendario. Cuanto más grande el anticipo, más baja la cuota.' },
        { p: 'Podés hacer una prueba con el [simulador de cuotas](/guias/simulador-de-cuotas), y en [plan de ahorro o crédito prendario](/financiacion/plan-de-ahorro-o-credito-prendario) te ayudamos a decidir entre las dos opciones más elegidas.' },
        { note: 'Compará siempre el costo financiero total (CFT) y no solo la tasa o la cuota: es el número que muestra cuánto pagás en total.' },
      ],
    },
  ],
  faqs: [
    { q: '¿Qué necesito para financiar un 0km?', a: 'Depende de la entidad. En general, DNI, comprobantes de ingresos y no tener deudas en situación irregular. Ver [requisitos para financiar](/financiacion/requisitos-para-financiar).' },
    { q: '¿Puedo financiar si soy monotributista?', a: 'Sí, en muchos casos. Te decimos qué documentación suelen pedir.' },
    { q: '¿Qué conviene más, plan de ahorro o prendario?', a: 'Depende de cuándo necesitás el auto y de tu capacidad de pago. Lo explicamos en [plan de ahorro o crédito prendario](/financiacion/plan-de-ahorro-o-credito-prendario).' },
  ],
  related: [`${F}/credito-prendario`, `${F}/plan-de-ahorro`, '/guias/simulador-de-cuotas'],
};

export const financiacionGuias: Page[] = [
  {
    ...base,
    path: `${F}/credito-prendario`,
    title: 'Crédito prendario para 0km: cómo funciona y requisitos',
    description: 'Cómo funciona el crédito prendario para comprar un auto 0km: tasa, plazo, CFT, seguro, requisitos y qué pasa con la prenda hasta que terminás de pagar.',
    label: 'CRÉDITO PRENDARIO',
    h1: 'Crédito prendario:',
    h1Em: 'tu 0KM hoy, en cuotas.',
    lead: 'Es la forma más rápida de financiar un auto: el préstamo se usa para pagarlo y el mismo auto queda como garantía hasta que terminás de pagar.',
    nav: 'Crédito prendario',
    sections: [
      {
        title: 'Qué es un crédito prendario',
        blocks: [
          { p: 'Es un préstamo para comprar un vehículo en el que el propio auto funciona como garantía, a través de una prenda inscripta en el registro del automotor. Recibís el auto al inicio y lo pagás en cuotas.' },
          { p: 'Mientras dure el crédito, el auto es tuyo y lo usás normalmente, pero la prenda limita algunas operaciones, como venderlo sin cancelar la deuda.' },
        ],
      },
      {
        title: 'Qué mirar al comparar créditos',
        blocks: [
          { list: [
            'Tasa: fija o ajustable. Con tasa fija, la cuota queda definida desde el inicio.',
            'Plazo: más cuotas bajan el valor mensual pero suben el total pagado.',
            'CFT (costo financiero total): incluye intereses, gastos y seguros. Es el número para comparar.',
            'Monto máximo a financiar: suele ser un porcentaje del valor del auto.',
            'Seguro: la entidad suele exigir un seguro de cobertura amplia mientras dure el crédito.',
            'Gastos de otorgamiento e inscripción de la prenda.',
          ] },
        ],
      },
      {
        title: 'El proceso',
        blocks: [
          { steps: [
            { title: 'Elegís el auto y la versión', text: 'Con el precio vigente definimos cuánto hace falta financiar.' },
            { title: 'Anticipo', text: 'Efectivo, tu usado, o ambos. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).' },
            { title: 'Aprobación', text: 'La entidad evalúa tus ingresos y antecedentes. Ver [requisitos](/financiacion/requisitos-para-financiar).' },
            { title: 'Patentamiento con prenda', text: 'Se patenta el auto y se inscribe la prenda. Después, entrega.' },
          ] },
          { note: 'Podés estimar la cuota con el [simulador de cuotas](/guias/simulador-de-cuotas).' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo cancelar el crédito antes?', a: 'En general sí, con las condiciones que fije la entidad para la cancelación anticipada.' },
      { q: '¿Puedo vender el auto con la prenda?', a: 'Hay que cancelar la deuda o transferirla con la conformidad de la entidad. Te orientamos si lo necesitás.' },
    ],
    related: [`${F}/tasa-0`, `${F}/requisitos-para-financiar`, '/guias/simulador-de-cuotas'],
  },
  {
    ...base,
    path: `${F}/tasa-0`,
    title: 'Autos 0km con tasa 0%: cómo funcionan las promociones',
    description: 'Qué son las financiaciones con tasa 0% para autos 0km, qué límites tienen en monto y plazo, qué gastos pueden tener y cómo aprovecharlas.',
    label: 'TASA 0%',
    h1: 'Tasa 0%:',
    h1Em: 'cómo aprovecharla.',
    lead: 'Las promociones con tasa 0% pueden ser una gran oportunidad, pero tienen condiciones. Te explicamos qué mirar para que realmente te convengan.',
    nav: 'Tasa 0%',
    sections: [
      {
        title: 'Cómo suelen funcionar',
        blocks: [
          { list: [
            'Aplican a modelos y versiones específicos, por tiempo limitado.',
            'Tienen un monto máximo a financiar: el resto se paga con anticipo.',
            'Suelen ser a plazos más cortos que un crédito tradicional.',
            'Pueden tener gastos de otorgamiento o seguros, por eso el CFT no siempre es cero.',
          ] },
        ],
      },
      {
        title: 'Cuándo conviene',
        blocks: [
          { p: 'Conviene si tenés un anticipo importante, por ejemplo con tu usado, y podés afrontar cuotas algo más altas por el plazo más corto. Si necesitás financiar gran parte del auto, a veces un [crédito prendario](/financiacion/credito-prendario) más largo resulta más cómodo.' },
          { note: 'Las promociones cambian todos los meses. Consultanos qué modelos tienen tasa 0% hoy.' },
        ],
      },
    ],
    faqs: [{ q: '¿La tasa 0% no tiene ningún costo?', a: 'No siempre. Puede haber gastos de otorgamiento, seguros o impuestos. Mirá el CFT antes de decidir.' }],
    related: [`${F}/credito-prendario`, `${F}/usado-como-parte-de-pago`, '/guias/simulador-de-cuotas'],
  },
  {
    ...base,
    tipo: 'Plan de ahorro',
    path: `${F}/plan-de-ahorro`,
    title: 'Plan de ahorro 0km: cómo funciona, cuotas y adjudicación',
    description: 'Cómo funciona un plan de ahorro para autos 0km: grupos, cuotas, sorteo y licitación, planes 70/30 y 100%, gastos y qué mirar antes de suscribirte.',
    label: 'PLANES DE AHORRO',
    h1: 'Plan de ahorro:',
    h1Em: 'tu 0KM en cuotas.',
    lead: 'El plan de ahorro es una de las formas más usadas en Argentina para llegar a un 0km sin un gran capital inicial. Te explicamos cómo funciona, sin letra chica.',
    nav: 'Plan de ahorro',
    sections: [
      {
        title: 'Cómo funciona',
        blocks: [
          { p: 'Un grupo de personas se suscribe a un plan para un mismo modelo y paga cuotas mensuales. Cada mes, con lo recaudado, se adjudican vehículos a algunos integrantes del grupo, hasta que todos reciben el suyo.' },
          { p: 'Los planes los administran sociedades de ahorro vinculadas a cada marca, bajo control de la Inspección General de Justicia. La cuota se calcula sobre el valor del vehículo, por eso se actualiza cuando cambia su precio.' },
        ],
      },
      {
        title: 'Cómo se adjudica el auto',
        blocks: [
          { list: [
            'Sorteo: cada mes se sortean adjudicaciones entre quienes tienen las cuotas al día.',
            'Licitación: podés ofrecer adelantar cuotas para obtener la adjudicación antes. Gana la mejor oferta.',
            'Algunos planes tienen adjudicación pactada en una cuota determinada.',
          ] },
          { p: 'Lo explicamos en detalle en [adjudicación: sorteo y licitación](/financiacion/adjudicacion-sorteo-y-licitacion).' },
        ],
      },
      {
        title: 'Tipos de plan',
        blocks: [
          { list: [
            'Plan 100%: financiás el valor completo del vehículo en cuotas.',
            'Planes 70/30, 80/20 y similares: una parte se financia en cuotas y el resto se paga al retirar el vehículo.',
            'Planes con adjudicación pactada: el auto se entrega en una cuota establecida.',
          ] },
        ],
      },
      {
        title: 'Qué costos tiene además de la cuota',
        blocks: [
          { list: [
            'Derecho de suscripción al ingresar.',
            'Cargos de administración incluidos en la cuota.',
            'Seguro de vida y, desde la adjudicación, seguro del vehículo.',
            'Derecho de adjudicación, gastos de entrega y patentamiento al retirar el auto.',
          ] },
          { note: 'Nadie puede garantizarte una adjudicación en una cuota determinada salvo que el plan lo establezca por contrato. Desconfiá de promesas verbales.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Puedo usar mi usado en un plan de ahorro?', a: 'Sí, en muchos casos el usado se puede usar para licitar o para pagar la parte a integrar al retirar. Te explicamos cómo en tu caso.' },
      { q: '¿Qué pasa si dejo de pagar?', a: 'El contrato establece qué sucede en caso de atraso o renuncia. Leelo antes de suscribirte y consultanos cualquier duda.' },
      { q: '¿Puedo cambiar de modelo?', a: 'Muchos planes permiten cambiar a otro modelo de la misma marca al adjudicar, con ajuste de diferencias.' },
    ],
    related: [`${F}/adjudicacion-sorteo-y-licitacion`, `${F}/plan-de-ahorro-o-credito-prendario`, `${F}/usado-como-parte-de-pago`],
  },
  {
    ...base,
    tipo: 'Plan de ahorro',
    path: `${F}/adjudicacion-sorteo-y-licitacion`,
    title: 'Plan de ahorro: adjudicación por sorteo y licitación',
    description: 'Cómo se adjudica un auto en un plan de ahorro: el sorteo mensual, cómo licitar, cuánto ofrecer y qué pasa después de la adjudicación.',
    label: 'ADJUDICACIÓN',
    h1: 'Sorteo y licitación:',
    h1Em: 'cómo se adjudica tu auto.',
    lead: 'En un plan de ahorro, el momento de recibir el auto depende de la adjudicación. Entender cómo funciona te ayuda a planificar.',
    nav: 'Adjudicación: sorteo y licitación',
    sections: [
      {
        title: 'El acto de adjudicación',
        blocks: [
          { p: 'Todos los meses se realiza un acto en el que se adjudican vehículos a integrantes de cada grupo, por sorteo y por licitación. Para participar, tenés que tener las cuotas al día.' },
        ],
      },
      {
        title: 'Cómo licitar',
        blocks: [
          { steps: [
            { title: 'Definí cuánto ofrecer', text: 'La oferta es una cantidad de cuotas que adelantás. Cuantas más ofrezcas, más chances tenés.' },
            { title: 'Presentá la oferta', text: 'En el plazo y la forma que establece la administradora.' },
            { title: 'Resultado', text: 'Si tu oferta está entre las ganadoras, integrás el monto y seguís con el proceso de entrega.' },
          ] },
          { p: 'Tu usado puede servir para reunir el monto de la licitación. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).' },
        ],
      },
      {
        title: 'Después de adjudicar',
        blocks: [
          { list: ['Elegís el modelo y el color disponibles según el plan.', 'Pagás el derecho de adjudicación y los gastos de entrega.', 'Se contrata el seguro del vehículo.', 'Se patenta y se entrega el auto.'] },
          { note: 'Te acompañamos en cada paso, desde la licitación hasta la entrega.' },
        ],
      },
    ],
    faqs: [{ q: '¿Si licito y no gano, pierdo el dinero?', a: 'No. Si tu oferta no resulta ganadora, en general no tenés que integrar el monto ofrecido. Confirmá las condiciones de tu plan.' }],
    related: [`${F}/plan-de-ahorro`, `${F}/plan-de-ahorro-o-credito-prendario`, `${F}/usado-como-parte-de-pago`],
  },
  {
    ...base,
    path: `${F}/plan-de-ahorro-o-credito-prendario`,
    title: 'Plan de ahorro o crédito prendario: qué conviene',
    description: 'Diferencias entre plan de ahorro y crédito prendario para comprar un 0km: cuándo recibís el auto, costo total, requisitos y para quién es cada uno.',
    label: 'COMPARATIVA',
    h1: 'Plan de ahorro o',
    h1Em: 'crédito prendario.',
    lead: 'Son las dos formas más usadas de financiar un 0km en Argentina. Funcionan de manera muy distinta, y la mejor depende de tu situación.',
    nav: 'Plan de ahorro o prendario',
    sections: [
      {
        title: 'La diferencia principal',
        blocks: [
          { p: 'Con el [crédito prendario](/financiacion/credito-prendario) recibís el auto al inicio y lo pagás después. Con el [plan de ahorro](/financiacion/plan-de-ahorro) pagás cuotas antes y recibís el auto cuando se adjudica, salvo que licites o el plan tenga adjudicación pactada.' },
        ],
      },
      {
        title: 'Cuándo conviene cada uno',
        blocks: [
          { h3: 'Crédito prendario' },
          { list: ['Necesitás el auto ahora.', 'Tenés un anticipo, en efectivo o con tu usado.', 'Podés acreditar ingresos para la aprobación.'] },
          { h3: 'Plan de ahorro' },
          { list: ['Podés esperar para recibir el auto, o licitar para adelantarlo.', 'No tenés un anticipo grande.', 'Preferís cuotas que acompañan el valor del vehículo.'] },
          { note: 'Muchas personas combinan: plan de ahorro y, al adjudicar, el usado para integrar la diferencia.' },
        ],
      },
    ],
    faqs: [{ q: '¿Cuál sale más barato?', a: 'Depende de la tasa del crédito, de los cargos del plan y del tiempo. Te armamos una comparación con números reales para el modelo que te interesa.' }],
    related: [`${F}/plan-de-ahorro`, `${F}/credito-prendario`, '/guias/simulador-de-cuotas'],
  },
  {
    ...base,
    path: `${F}/usado-como-parte-de-pago`,
    title: 'Usado como parte de pago de un 0km: cómo se tasa',
    description: 'Cómo entregar tu usado como parte de pago de un 0km: cómo se tasa, qué documentación necesitás, qué pasa si tiene deuda o prenda y cómo combinarlo.',
    label: 'TU USADO',
    h1: 'Tu usado',
    h1Em: 'como parte de pago.',
    lead: 'Tu auto actual puede ser el anticipo de tu próximo 0km. Te explicamos cómo se tasa y cómo se combina con el resto de la operación.',
    nav: 'Usado como parte de pago',
    sections: [
      {
        title: 'Cómo se tasa un usado',
        blocks: [
          { list: ['Marca, modelo, versión y año.', 'Kilometraje.', 'Estado general, mecánico y de carrocería.', 'Historial de services.', 'Demanda del modelo en el mercado.'] },
          { p: 'Con tus datos y fotos podemos hacer una primera estimación. La tasación final se hace con el auto a la vista.' },
        ],
      },
      {
        title: 'Documentación habitual',
        blocks: [
          { list: ['Título y cédula del vehículo.', 'DNI del titular.', 'Libre deuda de patentes e infracciones.', 'Verificación policial y formularios de transferencia, según corresponda.'] },
        ],
      },
      {
        title: 'Si tu usado tiene deuda o prenda',
        blocks: [
          { p: 'Se puede entregar igual: la deuda se descuenta del valor de tasación o se cancela como parte de la operación. Contanos tu situación y te decimos cómo resolverlo.' },
          { note: 'Tu usado sirve para el anticipo de un [crédito prendario](/financiacion/credito-prendario), para licitar en un [plan de ahorro](/financiacion/plan-de-ahorro) o para pagar parte del precio de contado.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Toman usados de cualquier marca?', a: 'Sí. Evaluamos usados de distintas marcas y años.' },
      { q: '¿Me pagan lo mismo que si lo vendo particular?', a: 'La tasación de una agencia contempla el costo de reacondicionar y vender el auto. A cambio, te ahorrás la venta, los tiempos y los riesgos, y lo usás directo como parte de pago.' },
    ],
    related: [`${F}/credito-prendario`, `${F}/plan-de-ahorro`, `${F}/comprar-0km-de-contado`],
  },
  {
    ...base,
    path: `${F}/comprar-0km-de-contado`,
    title: 'Comprar un 0km de contado: qué tener en cuenta',
    description: 'Qué tener en cuenta al comprar un auto 0km de contado en CABA: precio final, gastos de patentamiento, plazos de entrega y cómo se paga.',
    label: 'CONTADO',
    h1: 'Comprar un 0KM',
    h1Em: 'de contado.',
    lead: 'Pagar de contado simplifica la operación, pero conviene tener claros el precio final, los gastos y los plazos antes de cerrar.',
    nav: 'Comprar de contado',
    sections: [
      {
        title: 'El precio final',
        blocks: [
          { p: 'Además del precio del vehículo hay gastos de patentamiento, flete y formularios. Pedí siempre el precio final con todo incluido para comparar. Ver [gastos de patentamiento](/guias/gastos-de-patentamiento).' },
        ],
      },
      {
        title: 'Plazos y entrega',
        blocks: [
          { list: ['Unidades en stock: la entrega depende del patentamiento.', 'Unidades a pedido: el plazo depende de la marca y el modelo.', 'Color y versión: cambiar de color puede acortar o alargar el plazo.'] },
          { note: 'Si tenés un usado, podés combinarlo con el efectivo. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).' },
        ],
      },
    ],
    faqs: [{ q: '¿Hay descuentos por pago de contado?', a: 'A veces hay bonificaciones según el modelo y el momento. Consultanos por las condiciones vigentes.' }],
    related: [`${F}/usado-como-parte-de-pago`, '/guias/gastos-de-patentamiento', '/guias/como-comprar-un-0km'],
  },
  {
    ...base,
    path: `${F}/requisitos-para-financiar`,
    title: 'Requisitos para financiar un 0km: dependencia y monotributo',
    description: 'Qué requisitos suelen pedir para financiar un auto 0km si trabajás en relación de dependencia, sos monotributista o autónomo.',
    label: 'REQUISITOS',
    h1: 'Requisitos para',
    h1Em: 'financiar tu 0KM.',
    lead: 'Cada entidad tiene sus criterios, pero hay documentación que se repite. Tenerla lista acelera la aprobación.',
    nav: 'Requisitos para financiar',
    sections: [
      {
        title: 'Relación de dependencia',
        blocks: [{ list: ['DNI.', 'Últimos recibos de sueldo.', 'Antigüedad laboral mínima, según la entidad.', 'Comprobante de domicilio.'] }],
      },
      {
        title: 'Monotributistas y autónomos',
        blocks: [{ list: ['DNI.', 'Constancia de inscripción.', 'Últimos pagos del monotributo o declaraciones juradas.', 'Comprobante de domicilio.'] }],
      },
      {
        title: 'Antecedentes crediticios',
        blocks: [
          { p: 'Las entidades revisan tus antecedentes. Tener deudas en situación irregular puede dificultar la aprobación. Si es tu caso, el [plan de ahorro](/financiacion/plan-de-ahorro) suele tener requisitos distintos.' },
          { note: 'Contanos tu situación antes de elegir el auto: así te decimos qué alternativas tenés.' },
        ],
      },
    ],
    faqs: [{ q: '¿Puedo sumar ingresos con otra persona?', a: 'Algunas entidades permiten codeudores o sumar ingresos. Consultanos según tu caso.' }],
    related: [`${F}/credito-prendario`, `${F}/plan-de-ahorro`, '/guias/documentos-para-comprar'],
  },
];
