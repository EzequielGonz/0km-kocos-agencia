import type { Page } from './types';

const D = '2026-09-29';
const K = '/0km';
const F = '/financiacion';

export const ceroKmPilar: Page = {
  silo: '0km',
  kind: 'pilar',
  tipo: '0KM',
  published: D,
  updated: D,
  path: K,
  title: 'Autos 0km en CABA: todas las marcas y formas de pago',
  description: 'Agencia multimarca de autos 0km en CABA y el AMBA: Toyota, Volkswagen, Ford, Peugeot, Fiat y más. Contado, prendario, plan de ahorro y tu usado.',
  label: 'AUTOS 0KM EN CABA Y EL AMBA',
  h1: 'Tu próximo',
  h1Em: '0KM, de la marca que elijas.',
  lead: 'Somos una agencia multimarca: te ayudamos a comparar modelos de distintas marcas y a elegir la forma de pago que mejor te queda, con contado, financiación, plan de ahorro o tu usado como parte de pago.',
  nav: '0KM',
  sections: [
    {
      title: 'Por qué comprar en una agencia multimarca',
      blocks: [
        { p: 'En un concesionario oficial te ofrecen los modelos de una sola marca. En una agencia multimarca podés comparar una Hilux con una Ranger, o un Tera con un Tracker, en la misma conversación, y elegir sin tener que recorrer cinco salones.' },
        { list: [
          'Comparás modelos de distintas marcas con una sola consulta.',
          'Accedés a distintas alternativas de pago: contado, crédito prendario y planes de ahorro.',
          'Podés entregar tu usado como parte de pago.',
          'Te acompañamos con la gestoría hasta la entrega.',
        ] },
        { note: 'Somos una agencia independiente, no un concesionario oficial. La garantía de fábrica de cada 0km la brinda la red oficial de la marca.' },
      ],
    },
    {
      title: 'Cómo elegir tu 0km',
      blocks: [
        { steps: [
          { title: 'Definí el uso', text: 'Ciudad, ruta, familia, trabajo o carga. El uso define el segmento: [SUV](/0km/suv), [pickup](/0km/pickups), [auto chico](/0km/autos-chicos) o [sedán](/0km/sedanes).' },
          { title: 'Compará modelos', text: 'Dentro de cada segmento hay varias marcas. Te mostramos las diferencias que importan en el día a día.' },
          { title: 'Elegí cómo pagar', text: 'Contado, [crédito prendario](/financiacion/credito-prendario), [plan de ahorro](/financiacion/plan-de-ahorro) o [tu usado](/financiacion/usado-como-parte-de-pago). Se pueden combinar.' },
          { title: 'Patentamiento y entrega', text: 'Te pasamos el costo de [patentar](/guias/gastos-de-patentamiento) y coordinamos la entrega.' },
        ] },
      ],
    },
    {
      title: 'Precios de autos 0km',
      blocks: [
        { p: 'Los precios de los 0km cambian mes a mes y varían según la versión, el color y la disponibilidad. Por eso no publicamos listas de precios que se desactualizan: te pasamos el precio vigente de la versión exacta que te interesa, junto con las formas de pago disponibles.' },
        { p: 'Si querés una idea de la cuota, probá el [simulador de cuotas](/guias/simulador-de-cuotas).' },
      ],
    },
  ],
  faqs: [
    { q: '¿Venden todas las marcas?', a: 'Trabajamos con distintas marcas. Consultanos por la unidad que te interesa y te confirmamos disponibilidad, versión y precio vigente.' },
    { q: '¿Un 0km comprado en una agencia tiene garantía?', a: 'Sí: la garantía de fábrica corresponde al vehículo y se hace efectiva en la red oficial de la marca. Al momento de la entrega te explicamos cómo queda registrada.' },
    { q: '¿Puedo entregar mi usado?', a: 'Sí. Lo tasamos y ese valor se toma como parte de pago. Ver [usado como parte de pago](/financiacion/usado-como-parte-de-pago).' },
    { q: '¿Atienden fuera de CABA?', a: 'Sí, atendemos consultas de CABA y de todo el AMBA.' },
  ],
  related: [`${F}/credito-prendario`, `${F}/plan-de-ahorro`, '/guias/como-comprar-un-0km'],
};

type Segmento = {
  slug: string;
  nombre: string;
  singular: string;
  articulo: 'un' | 'una';
  titulo: string;
  h1Em: string;
  intro: string;
  paraQuien: string[];
  queMirar: string[];
  modelos: string[];
  extra?: { title: string; text: string };
};

const segmentos: Segmento[] = [
  {
    slug: 'suv',
    singular: 'SUV',
    articulo: 'un',
    nombre: 'SUV',
    titulo: 'SUV 0km en CABA: modelos, precios y financiación',
    h1Em: 'el segmento que más crece.',
    intro: 'Los SUV ya son más de un tercio de los 0km que se venden en Argentina. Más altura, más espacio y una posición de manejo que muchos prefieren en la ciudad.',
    paraQuien: ['Familias que necesitan espacio para chicos y equipaje.', 'Quienes buscan una posición de manejo más alta.', 'Quienes combinan ciudad con escapadas de fin de semana.'],
    queMirar: ['Tamaño: los SUV compactos son más cómodos para estacionar en la ciudad; los medianos suman espacio atrás.', 'Caja automática: cada vez más buscada para el tránsito de CABA.', 'Seguridad: cantidad de airbags y asistencias a la conducción según la versión.', 'Consumo y, si te interesa, versiones híbridas.'],
    modelos: ['volkswagen-tera', 'chevrolet-tracker', 'ford-territory', 'toyota-corolla-cross', 'volkswagen-taos', 'peugeot-2008'],
  },
  {
    slug: 'pickups',
    singular: 'pickup',
    articulo: 'una',
    nombre: 'Pickups',
    titulo: 'Pickups 0km: Hilux, Ranger, Amarok y más',
    h1Em: 'trabajo y familia en un mismo vehículo.',
    intro: 'Las pickups lideran el mercado argentino de 0km. Se usan para trabajar, para el campo y cada vez más como vehículo familiar.',
    paraQuien: ['Quienes trabajan con carga o herramientas.', 'Quienes viajan seguido por ruta o caminos de tierra.', 'Familias que buscan un vehículo robusto y amplio.'],
    queMirar: ['Cabina simple o doble, según si llevás pasajeros.', 'Tracción 4x2 o 4x4, según el uso real.', 'Caja manual o automática.', 'Si la vas a usar para trabajar, cómo impacta en tus impuestos: consultalo con tu contador.'],
    modelos: ['toyota-hilux', 'ford-ranger', 'volkswagen-amarok', 'fiat-strada'],
    extra: { title: 'Pickups compactas', text: 'Si no necesitás el tamaño de una pickup mediana, las compactas como la [Fiat Strada](/0km/fiat-strada) son más fáciles de manejar en la ciudad y más económicas.' },
  },
  {
    slug: 'autos-chicos',
    singular: 'auto chico',
    articulo: 'un',
    nombre: 'Autos chicos',
    titulo: 'Autos chicos 0km: hatchbacks para la ciudad',
    h1Em: 'prácticos para la ciudad.',
    intro: 'Los hatchbacks y autos chicos son la puerta de entrada al 0km: fáciles de estacionar, económicos y con opciones de financiación accesibles.',
    paraQuien: ['Primer auto 0km.', 'Uso diario en la ciudad.', 'Quienes priorizan consumo y costo de mantenimiento.'],
    queMirar: ['Espacio del baúl y de las plazas traseras.', 'Equipamiento de seguridad de cada versión.', 'Consumo en ciudad.', 'Cuota: suelen tener las opciones de financiación más accesibles.'],
    modelos: ['peugeot-208', 'toyota-yaris'],
  },
  {
    slug: 'sedanes',
    singular: 'sedán',
    articulo: 'un',
    nombre: 'Sedanes',
    titulo: 'Sedanes 0km: espacio y baúl grande',
    h1Em: 'confort y baúl grande.',
    intro: 'Los sedanes siguen siendo una elección muy fuerte en Argentina: buen baúl, confort en ruta y precios competitivos.',
    paraQuien: ['Familias que viajan con equipaje.', 'Quienes hacen muchos kilómetros por ruta.', 'Quienes buscan un auto cómodo sin pasar a un SUV.'],
    queMirar: ['Capacidad del baúl.', 'Confort de marcha en ruta.', 'Versiones con caja automática.', 'Costo del seguro según el modelo.'],
    modelos: ['fiat-cronos', 'toyota-yaris'],
  },
  {
    slug: 'utilitarios',
    singular: 'utilitario',
    articulo: 'un',
    nombre: 'Utilitarios',
    titulo: 'Utilitarios 0km para trabajar: furgones y más',
    h1Em: 'para tu trabajo.',
    intro: 'Si usás el vehículo para trabajar, un utilitario 0km puede ser una inversión. Te ayudamos a elegir el tamaño justo y la mejor forma de financiarlo.',
    paraQuien: ['Comercios y empresas de reparto.', 'Oficios que llevan herramientas y materiales.', 'Emprendedores que necesitan carga y movilidad.'],
    queMirar: ['Volumen y capacidad de carga.', 'Puertas laterales y trasera.', 'Consumo y costo de mantenimiento.', 'Financiación a nombre de la empresa o como monotributista.'],
    modelos: ['fiat-strada'],
  },
  {
    slug: 'hibridos-y-electricos',
    singular: 'híbrido o eléctrico',
    articulo: 'un',
    nombre: 'Híbridos y eléctricos',
    titulo: 'Autos híbridos y eléctricos 0km en CABA',
    h1Em: 'la movilidad que viene.',
    intro: 'La oferta de híbridos y eléctricos creció mucho con la llegada de nuevas marcas. Te ayudamos a entender si te conviene y qué tener en cuenta.',
    paraQuien: ['Quienes hacen mucho uso urbano, donde los híbridos rinden más.', 'Quienes pueden cargar en casa o en la cochera, en el caso de los eléctricos.', 'Quienes quieren reducir el gasto de combustible.'],
    queMirar: ['Híbrido convencional, híbrido enchufable o eléctrico: son tecnologías distintas.', 'Dónde vas a cargar, si es eléctrico.', 'Autonomía real para tu uso diario.', 'Red de service de la marca en el AMBA.'],
    modelos: ['toyota-corolla-cross'],
  },
];

export const segmentoSlugs = segmentos.map(s => s.slug);

function segmentoToPage(s: Segmento): Page {
  return {
    silo: '0km',
    kind: 'segmento',
    tipo: '0KM',
    unidad: s.nombre,
    published: D,
    updated: D,
    path: `${K}/${s.slug}`,
    title: s.titulo,
    description: `${s.intro.split('. ')[0]}. Compará modelos de distintas marcas y cotizá con contado, prendario, plan de ahorro o tu usado.`.slice(0, 160),
    label: `${s.nombre.toUpperCase()} 0KM`,
    h1: `${s.nombre} 0KM:`,
    h1Em: s.h1Em,
    lead: s.intro,
    nav: s.nombre,
    sections: [
      { title: `Para quién es ${s.articulo} ${s.singular}`, blocks: [{ list: s.paraQuien }] },
      { title: 'Qué mirar antes de elegir', blocks: [{ list: s.queMirar }] },
      ...(s.extra ? [{ title: s.extra.title, blocks: [{ p: s.extra.text }] }] : []),
      {
        title: 'Cómo pagarlo',
        blocks: [
          { p: `Podés comprar tu ${s.singular} 0km de contado, con [crédito prendario](/financiacion/credito-prendario), con un [plan de ahorro](/financiacion/plan-de-ahorro) o entregando [tu usado como parte de pago](/financiacion/usado-como-parte-de-pago). También se pueden combinar.` },
          { note: 'Pedinos la cotización de dos o tres modelos del segmento y te los comparamos con la cuota de cada uno.' },
        ],
      },
    ],
    faqs: [
      { q: `¿Qué ${s.singular} me conviene?`, a: 'Depende del uso, del espacio que necesitás y de tu presupuesto. Te armamos una comparación con dos o tres opciones.' },
      { q: '¿Tienen stock?', a: 'La disponibilidad cambia seguido. Consultanos por el modelo y la versión, y te confirmamos plazos de entrega.' },
    ],
    related: s.modelos.map(m => `${K}/${m}`),
  };
}

export const segmentoPages: Page[] = segmentos.map(segmentoToPage);
