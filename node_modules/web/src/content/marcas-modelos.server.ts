import type { Page } from './types';

/**
 * Marcas, modelos y comparativas del silo 0km.
 *
 * Solo datos generales y estables (segmento, origen de fabricación). No publicar
 * precios, versiones ni fichas técnicas sin verificarlas: cambian seguido.
 * Revisar esta lista cada pocos meses: si un modelo deja de venderse, pasarlo
 * a status 'borrador' (deja de publicarse y sale del sitemap).
 */

const D = '2026-09-29';
const K = '/0km';

type Marca = {
  slug: string;
  nombre: string;
  perfil: string;
  modelos: string[];
  /** Si la marca comercializa planes de ahorro propios. */
  planAhorro: boolean;
  /** Las tres que la home menciona primero. */
  destacada?: boolean;
};

type Modelo = {
  slug: string;
  marca: string;
  nombre: string;
  /** Artículo con el que se nombra: la Hilux, el Cronos. */
  genero: 'el' | 'la';
  segmento: 'suv' | 'pickups' | 'autos-chicos' | 'sedanes';
  perfil: string;
  paraQuien: string[];
  queMirar: string[];
  status?: 'publicado' | 'borrador';
};

export const marcas: Marca[] = [
  { slug: 'toyota', nombre: 'Toyota', planAhorro: true, perfil: 'Toyota es la marca que más 0km vende en Argentina. Fabrica en Zárate la Hilux, la pickup más vendida del país, y completa su gama con autos, SUV e híbridos importados.', modelos: ['toyota-hilux', 'toyota-corolla-cross', 'toyota-yaris'] },
  { slug: 'volkswagen', nombre: 'Volkswagen', destacada: true, planAhorro: true, perfil: 'Volkswagen produce en General Pacheco la pickup Amarok y el SUV Taos, y suma modelos importados como el Tera, uno de los SUV compactos más elegidos.', modelos: ['volkswagen-tera', 'volkswagen-taos', 'volkswagen-amarok'] },
  { slug: 'ford', nombre: 'Ford', destacada: true, planAhorro: true, perfil: 'Ford fabrica en General Pacheco la Ranger, una de las pickups más vendidas del país, y ofrece SUV importados como la Territory.', modelos: ['ford-ranger', 'ford-territory'] },
  { slug: 'peugeot', nombre: 'Peugeot', destacada: true, planAhorro: true, perfil: 'Peugeot produce en El Palomar el 208, uno de los autos más vendidos de los últimos años, y completa su gama con SUV como el 2008.', modelos: ['peugeot-208', 'peugeot-2008'] },
  { slug: 'fiat', nombre: 'Fiat', planAhorro: true, perfil: 'Fiat fabrica en Córdoba el Cronos, el auto de pasajeros más elegido del país, y tiene una fuerte presencia en pickups compactas con la Strada.', modelos: ['fiat-cronos', 'fiat-strada'] },
  { slug: 'chevrolet', nombre: 'Chevrolet', planAhorro: true, perfil: 'Chevrolet ofrece autos, SUV y pickups, con la Tracker como uno de los SUV compactos más vendidos del mercado.', modelos: ['chevrolet-tracker'] },
  { slug: 'renault', nombre: 'Renault', planAhorro: true, perfil: 'Renault tiene una larga historia en Argentina, con producción en Córdoba y una gama que incluye utilitarios, autos y SUV.', modelos: [] },
  { slug: 'citroen', nombre: 'Citroën', planAhorro: true, perfil: 'Citroën ofrece autos y SUV con foco en el confort, con modelos como el C3 y sus derivados.', modelos: [] },
  { slug: 'jeep', nombre: 'Jeep', planAhorro: true, perfil: 'Jeep se especializa en SUV, desde compactos hasta modelos de tres filas de asientos, con una imagen fuerte en versatilidad y ruta.', modelos: [] },
  { slug: 'nissan', nombre: 'Nissan', planAhorro: false, perfil: 'Nissan ofrece SUV y pickups, con modelos como la Kicks y la Frontier.', modelos: [] },
];

export const modelos: Modelo[] = [
  {
    slug: 'toyota-hilux', marca: 'toyota', nombre: 'Toyota Hilux', genero: 'la', segmento: 'pickups',
    perfil: 'La Hilux es la pickup mediana de Toyota, fabricada en Zárate, y el vehículo más vendido del país. Tiene versiones de trabajo y versiones de alta gama pensadas para uso familiar.',
    paraQuien: ['Quienes trabajan con carga o en el campo.', 'Familias que buscan una pickup robusta para ruta.', 'Quienes valoran el valor de reventa.'],
    queMirar: ['Cabina simple o doble.', 'Tracción 4x2 o 4x4.', 'Caja manual o automática.', 'Nivel de equipamiento de la versión.'],
  },
  {
    slug: 'toyota-corolla-cross', marca: 'toyota', nombre: 'Toyota Corolla Cross', genero: 'el', segmento: 'suv',
    perfil: 'El Corolla Cross es el SUV mediano de Toyota, importado de Brasil. Es uno de los más elegidos del segmento y ofrece versiones híbridas.',
    paraQuien: ['Familias que buscan un SUV espacioso.', 'Quienes hacen mucho uso urbano y valoran una versión híbrida.', 'Quienes priorizan confiabilidad y reventa.'],
    queMirar: ['Versión naftera o híbrida.', 'Equipamiento de seguridad.', 'Espacio trasero y baúl.'],
  },
  {
    slug: 'toyota-yaris', marca: 'toyota', nombre: 'Toyota Yaris', genero: 'el', segmento: 'autos-chicos',
    perfil: 'El Yaris es el auto de acceso de Toyota, importado de Brasil, con carrocerías hatchback y sedán.',
    paraQuien: ['Primer 0km.', 'Uso diario en la ciudad.', 'Quienes quieren entrar a la marca con una cuota accesible.'],
    queMirar: ['Hatchback o sedán.', 'Caja manual o automática.', 'Equipamiento de cada versión.'],
  },
  {
    slug: 'volkswagen-tera', marca: 'volkswagen', nombre: 'Volkswagen Tera', genero: 'el', segmento: 'suv',
    perfil: 'El Tera es el SUV compacto de acceso de Volkswagen, importado de Brasil, y uno de los modelos que más rápido entró entre los más vendidos.',
    paraQuien: ['Quienes pasan de un auto chico a su primer SUV.', 'Uso urbano con escapadas de fin de semana.', 'Jóvenes y parejas.'],
    queMirar: ['Motorización y caja de cada versión.', 'Equipamiento de seguridad y conectividad.', 'Diferencias frente a otros SUV compactos.'],
  },
  {
    slug: 'volkswagen-taos', marca: 'volkswagen', nombre: 'Volkswagen Taos', genero: 'el', segmento: 'suv',
    perfil: 'El Taos es el SUV mediano que Volkswagen fabrica en General Pacheco, con más espacio y equipamiento que los SUV compactos.',
    paraQuien: ['Familias que necesitan más espacio.', 'Quienes hacen muchos kilómetros por ruta.', 'Quienes buscan un SUV con buen nivel de equipamiento.'],
    queMirar: ['Diferencias de equipamiento entre versiones.', 'Espacio trasero y baúl.', 'Asistencias a la conducción.'],
  },
  {
    slug: 'volkswagen-amarok', marca: 'volkswagen', nombre: 'Volkswagen Amarok', genero: 'la', segmento: 'pickups',
    perfil: 'La Amarok es la pickup mediana de Volkswagen, fabricada en General Pacheco, y una de las camionetas más elegidas del mercado.',
    paraQuien: ['Quienes trabajan con carga o remolque.', 'Uso mixto entre trabajo y familia.', 'Quienes buscan una pickup con buen confort de marcha.'],
    queMirar: ['Motorización y caja.', 'Tracción 4x2 o 4x4.', 'Equipamiento de la versión.'],
  },
  {
    slug: 'ford-ranger', marca: 'ford', nombre: 'Ford Ranger', genero: 'la', segmento: 'pickups',
    perfil: 'La Ranger es la pickup mediana de Ford, fabricada en General Pacheco, y una de las más vendidas del país.',
    paraQuien: ['Trabajo pesado y campo.', 'Familias que buscan una pickup amplia.', 'Quienes viajan seguido por ruta.'],
    queMirar: ['Cabina simple o doble.', 'Tracción y caja.', 'Tecnología y asistencias según la versión.'],
  },
  {
    slug: 'ford-territory', marca: 'ford', nombre: 'Ford Territory', genero: 'la', segmento: 'suv',
    perfil: 'La Territory es el SUV mediano de Ford, importado de China, con foco en espacio, tecnología y equipamiento.',
    paraQuien: ['Familias que priorizan espacio.', 'Quienes valoran pantallas y conectividad.', 'Quienes comparan SUV medianos.'],
    queMirar: ['Equipamiento de cada versión.', 'Espacio trasero y baúl.', 'Red de service de la marca en tu zona.'],
  },
  {
    slug: 'peugeot-208', marca: 'peugeot', nombre: 'Peugeot 208', genero: 'el', segmento: 'autos-chicos',
    perfil: 'El 208 es el hatchback de Peugeot fabricado en El Palomar, uno de los autos más vendidos del país en los últimos años.',
    paraQuien: ['Primer 0km.', 'Uso urbano.', 'Quienes buscan diseño y equipamiento en un auto chico.'],
    queMirar: ['Motorización y caja.', 'Diferencias de equipamiento entre versiones.', 'Espacio trasero.'],
  },
  {
    slug: 'peugeot-2008', marca: 'peugeot', nombre: 'Peugeot 2008', genero: 'el', segmento: 'suv',
    perfil: 'El 2008 es el SUV compacto de Peugeot, una alternativa para quienes buscan más altura y espacio que el 208.',
    paraQuien: ['Quienes pasan de un auto chico a un SUV.', 'Uso urbano.', 'Parejas y familias chicas.'],
    queMirar: ['Motorización y caja.', 'Equipamiento de cada versión.', 'Espacio del baúl.'],
  },
  {
    slug: 'fiat-cronos', marca: 'fiat', nombre: 'Fiat Cronos', genero: 'el', segmento: 'sedanes',
    perfil: 'El Cronos es el sedán compacto que Fiat fabrica en Córdoba y el auto de pasajeros más elegido del país.',
    paraQuien: ['Familias que necesitan baúl grande.', 'Quienes hacen mucha ruta.', 'Quienes buscan una cuota accesible.'],
    queMirar: ['Motorización y caja.', 'Equipamiento de seguridad.', 'Espacio del baúl.'],
  },
  {
    slug: 'fiat-strada', marca: 'fiat', nombre: 'Fiat Strada', genero: 'la', segmento: 'pickups',
    perfil: 'La Strada es la pickup compacta de Fiat, importada de Brasil, muy elegida para trabajar en la ciudad y como vehículo de uso mixto.',
    paraQuien: ['Comercios y oficios.', 'Quienes necesitan caja de carga sin el tamaño de una pickup mediana.', 'Uso mixto entre trabajo y familia.'],
    queMirar: ['Cabina simple, extendida o doble.', 'Capacidad de carga.', 'Motorización.'],
  },
  {
    slug: 'chevrolet-tracker', marca: 'chevrolet', nombre: 'Chevrolet Tracker', genero: 'la', segmento: 'suv',
    perfil: 'La Tracker es el SUV compacto de Chevrolet, importado de Brasil, y uno de los más vendidos del segmento.',
    paraQuien: ['Quienes buscan su primer SUV.', 'Uso urbano con escapadas.', 'Parejas y familias chicas.'],
    queMirar: ['Motorización y caja.', 'Conectividad y seguridad.', 'Comparación con otros SUV compactos.'],
  },
];

type Comparativa = { slug: string; a: string; b: string };
const COMPARATIVAS: Comparativa[] = [
  { slug: 'hilux-vs-ranger', a: 'toyota-hilux', b: 'ford-ranger' },
  { slug: 'tera-vs-tracker', a: 'volkswagen-tera', b: 'chevrolet-tracker' },
  { slug: '208-vs-cronos', a: 'peugeot-208', b: 'fiat-cronos' },
];

const DISCLAIMER = 'Somos una agencia multimarca independiente, no un concesionario oficial. Las marcas pertenecen a sus titulares.';
const SEGMENTO_NOMBRE: Record<Modelo['segmento'], string> = { suv: 'SUV', pickups: 'Pickups', 'autos-chicos': 'Autos chicos', sedanes: 'Sedanes' };

const modeloBySlug = (slug: string) => modelos.find(m => m.slug === slug)!;
const marcaBySlug = (slug: string) => marcas.find(m => m.slug === slug)!;

function comoPagar(nombre: string, planAhorro: boolean) {
  return [
    { p: `Podés comprar tu ${nombre} de contado, con [crédito prendario](/financiacion/credito-prendario), con [plan de ahorro](/financiacion/plan-de-ahorro) o entregando [tu usado como parte de pago](/financiacion/usado-como-parte-de-pago).` },
    { p: planAhorro
      ? 'La marca comercializa planes de ahorro a través de su sociedad administradora. Te informamos qué modelos y modalidades están disponibles al momento de tu consulta.'
      : 'Consultanos por las alternativas de financiación y plan de ahorro disponibles para esta marca.' },
    { note: 'Los precios cambian mes a mes. Te pasamos el precio vigente de la versión que te interesa y la cuota según la forma de pago que elijas.' },
  ];
}

function marcaToPage(m: Marca): Page {
  return {
    silo: '0km', kind: 'marca', tipo: '0KM', unidad: m.nombre, published: D, updated: D,
    path: `${K}/${m.slug}`,
    title: `${m.nombre} 0km en CABA: modelos y financiación`,
    description: `Comprá tu ${m.nombre} 0km en CABA y el AMBA con asesoramiento: contado, crédito prendario, plan de ahorro y tu usado como parte de pago.`,
    label: `${m.nombre.toUpperCase()} 0KM`,
    h1: `${m.nombre} 0KM`,
    h1Em: 'con todas las formas de pago.',
    lead: `Te ayudamos a elegir tu ${m.nombre} 0km, a compararlo con modelos de otras marcas y a encontrar la forma de pago que mejor te queda.`,
    nav: m.nombre,
    sections: [
      { title: `${m.nombre} en Argentina`, blocks: [{ p: m.perfil }] },
      ...(m.modelos.length
        ? [{ title: `Modelos ${m.nombre} más consultados`, blocks: [{ list: m.modelos.map(slug => { const mod = modeloBySlug(slug); return `[${mod.nombre}](/0km/${mod.slug}): ${SEGMENTO_NOMBRE[mod.segmento].toLowerCase()}.`; }) }] }]
        : [{ title: `Modelos ${m.nombre}`, blocks: [{ p: `Consultanos por el modelo ${m.nombre} que te interesa y te confirmamos versiones, disponibilidad y precio vigente.` }] }]),
      { title: `Cómo comprar tu ${m.nombre} 0km`, blocks: comoPagar(`${m.nombre} 0km`, m.planAhorro) },
      { title: 'Garantía y service', blocks: [{ p: 'La garantía de fábrica corresponde al vehículo y se hace efectiva en la red oficial de la marca. Al momento de la entrega te explicamos cómo queda registrada y dónde hacer los services.' }, { note: DISCLAIMER }] },
    ],
    faqs: [
      { q: `¿Tienen ${m.nombre} 0km disponibles?`, a: 'La disponibilidad cambia seguido. Consultanos por el modelo y la versión, y te confirmamos plazos de entrega.' },
      { q: '¿Puedo entregar mi usado?', a: 'Sí. Lo tasamos y lo tomamos como parte de pago, sea de la marca que sea.' },
    ],
    related: [...m.modelos.slice(0, 2).map(slug => `${K}/${slug}`), '/financiacion/plan-de-ahorro'],
  };
}

function modeloToPage(m: Modelo): Page {
  const marca = marcaBySlug(m.marca);
  const comparativas = COMPARATIVAS.filter(c => c.a === m.slug || c.b === m.slug).map(c => `${K}/${c.slug}`);
  return {
    silo: '0km', kind: 'modelo', status: m.status ?? 'publicado', tipo: '0KM', unidad: m.nombre, published: D, updated: D,
    path: `${K}/${m.slug}`,
    title: `${m.nombre} 0km: precio, financiación y plan de ahorro`.length <= 62
      ? `${m.nombre} 0km: precio, financiación y plan de ahorro`
      : `${m.nombre} 0km: precio y financiación en CABA`,
    description: `Comprá tu ${m.nombre} 0km en CABA y el AMBA: consultá el precio vigente, cuotas con crédito prendario o plan de ahorro, y entregá tu usado.`,
    label: `${SEGMENTO_NOMBRE[m.segmento].toUpperCase()} / ${marca.nombre.toUpperCase()}`,
    h1: m.nombre,
    h1Em: '0KM, con la cuota que te quede cómoda.',
    lead: `Te ayudamos a comprar tu ${m.nombre} 0km: elegir la versión, comparar con otras opciones y financiarlo como te convenga.`,
    nav: m.nombre,
    sections: [
      { title: `Cómo es ${m.genero} ${m.nombre}`, blocks: [{ p: m.perfil }] },
      { title: 'Para quién es', blocks: [{ list: m.paraQuien }] },
      { title: 'Qué mirar al elegir la versión', blocks: [{ list: m.queMirar }, { p: 'Las versiones y su equipamiento cambian con cada año modelo. Te detallamos las vigentes cuando nos consultás.' }] },
      { title: `Precio y formas de pago ${m.genero === 'el' ? 'del' : 'de la'} ${m.nombre}`, blocks: comoPagar(m.nombre, marca.planAhorro) },
    ],
    faqs: [
      { q: `¿Cuánto cuesta ${m.genero} ${m.nombre} 0km?`, a: 'El precio depende de la versión y cambia mes a mes. Consultanos y te pasamos el precio vigente y la cuota según cómo quieras pagarlo.' },
      { q: '¿Se puede financiar?', a: 'Sí: con crédito prendario, con plan de ahorro según disponibilidad, o combinando anticipo y usado.' },
      { q: '¿La entregan patentada?', a: 'Te acompañamos con el patentamiento y te pasamos el costo antes de cerrar. Ver [gastos de patentamiento](/guias/gastos-de-patentamiento).' },
    ],
    related: [...comparativas, `${K}/${m.segmento}`, `${K}/${marca.slug}`],
  };
}

function comparativaToPage(c: Comparativa): Page {
  const a = modeloBySlug(c.a);
  const b = modeloBySlug(c.b);
  return {
    silo: '0km', kind: 'comparativa', tipo: '0KM', unidad: `${a.nombre} o ${b.nombre}`, published: D, updated: D,
    path: `${K}/${c.slug}`,
    title: `${a.nombre} vs ${b.nombre}: cuál conviene`,
    description: `${a.nombre} o ${b.nombre}: diferencias, para quién es cada uno y cómo compararlos por versión, cuota y forma de pago en CABA y el AMBA.`,
    label: 'COMPARATIVAS 0KM',
    h1: `${a.nombre.split(' ').slice(1).join(' ')} vs ${b.nombre.split(' ').slice(1).join(' ')}:`,
    h1Em: 'cuál te conviene.',
    lead: 'Son dos de los modelos más consultados de su segmento. No hay uno mejor en general: depende de tu uso, de la versión y de la cuota. Te mostramos cómo compararlos.',
    nav: `${a.nombre} vs ${b.nombre}`,
    sections: [
      { title: a.nombre, blocks: [{ p: a.perfil }, { list: a.paraQuien }] },
      { title: b.nombre, blocks: [{ p: b.perfil }, { list: b.paraQuien }] },
      {
        title: 'Cómo compararlos de verdad',
        blocks: [
          { p: 'La comparación útil es versión contra versión, con el precio vigente y la cuota final:' },
          { list: ['Versiones equivalentes en equipamiento.', 'Caja manual o automática.', 'Seguridad y asistencias.', 'Costo del seguro.', 'Cuota con crédito prendario o plan de ahorro, y cuánto te toman tu usado.'] },
          { note: 'Pedinos la comparación: te mostramos las dos versiones equivalentes con precio y cuota, lado a lado.' },
        ],
      },
    ],
    faqs: [
      { q: '¿Cuál tiene mejor reventa?', a: 'Los dos son modelos muy demandados. La reventa depende de la versión, el kilometraje y el estado. Te orientamos según tu caso.' },
    ],
    related: [`${K}/${a.slug}`, `${K}/${b.slug}`, `${K}/${a.segmento}`],
  };
}

export const marcaPages: Page[] = marcas.map(marcaToPage);
export const modeloPages: Page[] = modelos.map(modeloToPage);
export const comparativaPages: Page[] = COMPARATIVAS.map(comparativaToPage);
export const marcasDestacadas = marcas.filter(m => m.destacada).map(m => m.slug);
