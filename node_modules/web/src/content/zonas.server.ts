import type { Page } from './types';

/**
 * Páginas locales (solo AMBA, sin La Plata; prioridad CABA). Cada zona tiene
 * datos propios para no ser una página duplicada. Para potenciarlas, sumá en
 * `extra` información real de la agencia (atención, entregas, clientes de la zona).
 */

type Zona = {
  slug: string;
  nombre: string;
  en: string;
  region: 'CABA' | 'Zona Norte' | 'Zona Oeste' | 'Zona Sur';
  lugares: string[];
  perfil: string;
  segmentos: string[];
  extra?: string[];
  status?: 'publicado' | 'borrador';
};

export const zonas: Zona[] = [
  { slug: 'caba', nombre: 'CABA', en: 'en CABA', region: 'CABA', lugares: ['Palermo', 'Belgrano', 'Caballito', 'Villa Urquiza', 'Recoleta', 'Núñez', 'Flores', 'Villa Devoto'], perfil: 'En la Ciudad, el auto se usa sobre todo para el día a día: tránsito, estacionamiento y cocheras chicas. Por eso crecen los SUV compactos y los autos con caja automática, sin dejar de lado las pickups para quienes trabajan o viajan seguido.', segmentos: ['suv', 'autos-chicos', 'hibridos-y-electricos'] },
  { slug: 'palermo', nombre: 'Palermo', en: 'en Palermo', region: 'CABA', lugares: ['Palermo Soho', 'Palermo Hollywood', 'Las Cañitas', 'Palermo Chico'], perfil: 'En Palermo manda la movilidad urbana: calles con mucho tránsito, estacionamiento difícil y cocheras de edificio. Los SUV compactos y los autos con caja automática son de los más consultados.', segmentos: ['suv', 'autos-chicos', 'hibridos-y-electricos'] },
  { slug: 'belgrano', nombre: 'Belgrano', en: 'en Belgrano', region: 'CABA', lugares: ['Belgrano R', 'Belgrano C', 'Bajo Belgrano'], perfil: 'Belgrano combina familias que necesitan espacio con salidas rápidas hacia zona norte por Libertador, Cabildo y la General Paz. Los SUV medianos y compactos concentran buena parte de las consultas.', segmentos: ['suv', 'sedanes', 'hibridos-y-electricos'] },
  { slug: 'caballito', nombre: 'Caballito', en: 'en Caballito', region: 'CABA', lugares: ['Caballito', 'Parque Centenario', 'Primera Junta'], perfil: 'Caballito es un barrio muy residencial y céntrico, con mucho uso diario del auto para trabajo y familia. Sedanes, hatchbacks y SUV compactos son de los más buscados.', segmentos: ['autos-chicos', 'sedanes', 'suv'] },
  { slug: 'villa-urquiza', nombre: 'Villa Urquiza', en: 'en Villa Urquiza', region: 'CABA', lugares: ['Villa Urquiza', 'Villa Pueyrredón', 'Parque Chas'], perfil: 'Villa Urquiza creció con familias jóvenes que muchas veces compran su primer 0km o dan el salto a un SUV. La financiación y el usado como parte de pago son las consultas más frecuentes.', segmentos: ['suv', 'autos-chicos', 'sedanes'] },
  { slug: 'recoleta', nombre: 'Recoleta', en: 'en Recoleta', region: 'CABA', lugares: ['Recoleta', 'Barrio Norte'], perfil: 'En Recoleta y Barrio Norte, las cocheras suelen ser ajustadas y el uso es muy urbano. Los modelos compactos, automáticos e híbridos ganan terreno.', segmentos: ['suv', 'hibridos-y-electricos', 'autos-chicos'] },
  { slug: 'nunez', nombre: 'Núñez', en: 'en Núñez', region: 'CABA', lugares: ['Núñez', 'Saavedra', 'Coghlan'], perfil: 'Núñez y Saavedra están pegados a la General Paz y a Panamericana, con mucho viaje hacia zona norte. SUV y pickups para escapadas de fin de semana aparecen seguido en las consultas.', segmentos: ['suv', 'pickups', 'sedanes'] },
  { slug: 'flores', nombre: 'Flores', en: 'en Flores', region: 'CABA', lugares: ['Flores', 'Floresta', 'Parque Chacabuco'], perfil: 'Flores y Floresta tienen mucha actividad comercial, y para muchos vecinos el vehículo es también una herramienta de trabajo. Utilitarios, pickups compactas y sedanes son muy consultados.', segmentos: ['utilitarios', 'sedanes', 'pickups'] },
  { slug: 'villa-devoto', nombre: 'Villa Devoto', en: 'en Villa Devoto', region: 'CABA', lugares: ['Villa Devoto', 'Villa del Parque', 'Villa Santa Rita'], perfil: 'Villa Devoto es un barrio de casas y familias, con más lugar para estacionar que el centro. SUV medianos y pickups tienen mucha demanda.', segmentos: ['suv', 'pickups', 'sedanes'] },
  { slug: 'almagro', nombre: 'Almagro', en: 'en Almagro', region: 'CABA', lugares: ['Almagro', 'Boedo'], perfil: 'Almagro y Boedo son barrios densos, con calles angostas y estacionamiento difícil. Los autos chicos y los SUV compactos son los preferidos para moverse por la zona.', segmentos: ['autos-chicos', 'suv', 'sedanes'] },
  { slug: 'villa-crespo', nombre: 'Villa Crespo', en: 'en Villa Crespo', region: 'CABA', lugares: ['Villa Crespo', 'Chacarita'], perfil: 'Villa Crespo y Chacarita suman cada año más vecinos jóvenes que compran su primer 0km. Autos chicos, SUV compactos y opciones de financiación son lo más consultado.', segmentos: ['autos-chicos', 'suv', 'hibridos-y-electricos'] },
  { slug: 'colegiales', nombre: 'Colegiales', en: 'en Colegiales', region: 'CABA', lugares: ['Colegiales', 'Belgrano R'], perfil: 'Colegiales combina casas y edificios bajos, con familias que buscan espacio sin resignar comodidad en la ciudad. Los SUV compactos y medianos concentran las consultas.', segmentos: ['suv', 'autos-chicos', 'sedanes'] },
  { slug: 'mataderos', nombre: 'Mataderos', en: 'en Mataderos', region: 'CABA', lugares: ['Mataderos', 'Liniers', 'Parque Avellaneda'], perfil: 'En Mataderos y Liniers el vehículo se usa mucho para trabajar, con salida rápida hacia el oeste por la General Paz y Autopista Perito Moreno. Pickups y utilitarios aparecen seguido en las consultas.', segmentos: ['pickups', 'utilitarios', 'sedanes'] },
  { slug: 'vicente-lopez', nombre: 'Vicente López', en: 'en Vicente López', region: 'Zona Norte', lugares: ['Olivos', 'Florida', 'Munro', 'La Lucila'], perfil: 'Vicente López combina uso urbano con salidas frecuentes por Panamericana. Los SUV medianos y las pickups para familias tienen mucha demanda.', segmentos: ['suv', 'pickups', 'hibridos-y-electricos'] },
  { slug: 'san-isidro', nombre: 'San Isidro', en: 'en San Isidro', region: 'Zona Norte', lugares: ['San Isidro', 'Martínez', 'Acassuso', 'Beccar', 'Boulogne'], perfil: 'En San Isidro y Martínez hay mucha demanda de SUV medianos y pickups de alta gama, con foco en equipamiento y seguridad.', segmentos: ['suv', 'pickups', 'hibridos-y-electricos'] },
  { slug: 'tigre', nombre: 'Tigre y Nordelta', en: 'en Tigre y Nordelta', region: 'Zona Norte', lugares: ['Nordelta', 'Tigre', 'Don Torcuato', 'General Pacheco', 'Benavídez'], perfil: 'En Tigre y Nordelta las distancias son largas y muchas familias tienen dos autos. SUV y pickups son los más elegidos.', segmentos: ['suv', 'pickups', 'autos-chicos'] },
  { slug: 'pilar', nombre: 'Pilar', en: 'en Pilar', region: 'Zona Norte', lugares: ['Pilar', 'Del Viso', 'Manzanares', 'Presidente Derqui'], perfil: 'En Pilar el auto es imprescindible: barrios cerrados, distancias largas y mucho uso de Panamericana. SUV y pickups dominan las consultas.', segmentos: ['suv', 'pickups', 'sedanes'] },
  { slug: 'escobar', nombre: 'Escobar', en: 'en Escobar', region: 'Zona Norte', lugares: ['Belén de Escobar', 'Ingeniero Maschwitz', 'Garín'], perfil: 'Escobar sumó muchas familias que se mueven todos los días hacia la Ciudad o Pilar. Las pickups y los SUV medianos son los más consultados.', segmentos: ['pickups', 'suv', 'utilitarios'] },
  { slug: 'san-martin', nombre: 'San Martín', en: 'en San Martín', region: 'Zona Norte', lugares: ['San Martín', 'Villa Ballester', 'San Andrés'], perfil: 'San Martín tiene mucha actividad industrial y comercial. Utilitarios y pickups compactas conviven con la demanda familiar de sedanes y SUV.', segmentos: ['utilitarios', 'pickups', 'sedanes'] },
  { slug: 'tres-de-febrero', nombre: 'Tres de Febrero', en: 'en Tres de Febrero', region: 'Zona Oeste', lugares: ['Caseros', 'Ciudadela', 'Santos Lugares', 'Ciudad Jardín'], perfil: 'Tres de Febrero limita con la Ciudad y tiene mucho uso diario del auto para trabajar en CABA. Sedanes y SUV compactos son de los más buscados.', segmentos: ['sedanes', 'suv', 'autos-chicos'] },
  { slug: 'moron', nombre: 'Morón y Castelar', en: 'en Morón y Castelar', region: 'Zona Oeste', lugares: ['Morón', 'Castelar', 'Haedo', 'El Palomar'], perfil: 'Morón y Castelar son el centro de la zona oeste, con acceso rápido a la Ciudad por el Acceso Oeste. Sedanes, SUV y pickups reparten las consultas.', segmentos: ['sedanes', 'suv', 'pickups'] },
  { slug: 'ituzaingo', nombre: 'Ituzaingó', en: 'en Ituzaingó', region: 'Zona Oeste', lugares: ['Ituzaingó', 'Parque Leloir', 'Villa Udaondo'], perfil: 'En Ituzaingó y Parque Leloir hay muchas casas quintas y familias que buscan espacio. SUV y pickups son muy elegidos.', segmentos: ['suv', 'pickups', 'sedanes'] },
  { slug: 'la-matanza', nombre: 'Ramos Mejía y San Justo', en: 'en Ramos Mejía y San Justo', region: 'Zona Oeste', lugares: ['Ramos Mejía', 'San Justo', 'Villa Luzuriaga', 'Lomas del Mirador'], perfil: 'Ramos Mejía y San Justo concentran mucha actividad comercial. Utilitarios y sedanes para trabajar y familias que buscan su primer SUV son los perfiles más frecuentes.', segmentos: ['sedanes', 'utilitarios', 'suv'] },
  { slug: 'lomas-de-zamora', nombre: 'Lomas de Zamora', en: 'en Lomas de Zamora', region: 'Zona Sur', lugares: ['Lomas de Zamora', 'Banfield', 'Temperley'], perfil: 'Lomas, Banfield y Temperley combinan zonas residenciales con mucho uso del auto para ir a la Ciudad. Sedanes y SUV compactos son de los más buscados.', segmentos: ['sedanes', 'suv', 'autos-chicos'] },
  { slug: 'almirante-brown', nombre: 'Adrogué y Almirante Brown', en: 'en Adrogué', region: 'Zona Sur', lugares: ['Adrogué', 'Burzaco', 'José Mármol', 'Longchamps'], perfil: 'Adrogué es una zona residencial tradicional del sur, con familias que buscan SUV y sedanes para el uso diario y la ruta.', segmentos: ['suv', 'sedanes', 'pickups'] },
  { slug: 'lanus', nombre: 'Lanús', en: 'en Lanús', region: 'Zona Sur', lugares: ['Lanús Este', 'Lanús Oeste', 'Remedios de Escalada'], perfil: 'Lanús tiene mucha actividad comercial y conexión directa con la Ciudad. Utilitarios, sedanes y autos chicos son los más consultados.', segmentos: ['utilitarios', 'sedanes', 'autos-chicos'] },
  { slug: 'avellaneda', nombre: 'Avellaneda', en: 'en Avellaneda', region: 'Zona Sur', lugares: ['Avellaneda', 'Sarandí', 'Wilde', 'Dock Sud'], perfil: 'Avellaneda es la puerta de entrada del sur a la Ciudad, con mucha actividad industrial y comercial. Pickups y utilitarios conviven con la demanda familiar.', segmentos: ['pickups', 'utilitarios', 'sedanes'] },
  { slug: 'quilmes', nombre: 'Quilmes y Bernal', en: 'en Quilmes y Bernal', region: 'Zona Sur', lugares: ['Quilmes', 'Bernal', 'Quilmes Oeste', 'Ezpeleta'], perfil: 'En Quilmes y Bernal hay mucho uso de la Autopista Buenos Aires–La Plata para ir a la Ciudad. SUV y sedanes son de los más buscados.', segmentos: ['suv', 'sedanes', 'pickups'] },
];

const D = '2026-09-29';
const K = '/0km';

const SEG: Record<string, string> = { suv: 'SUV', pickups: 'pickups', 'autos-chicos': 'autos chicos', sedanes: 'sedanes', utilitarios: 'utilitarios', 'hibridos-y-electricos': 'híbridos y eléctricos' };
const lista = (items: string[]) => (items.length <= 1 ? items.join('') : `${items.slice(0, -1).join(', ')} y ${items[items.length - 1]}`);

function zonaToPage(z: Zona): Page {
  const esCaba = z.region === 'CABA';
  const vecinas = zonas.filter(o => o.region === z.region && o.slug !== z.slug).slice(0, 2);
  return {
    silo: '0km',
    kind: 'zona',
    status: z.status ?? 'publicado',
    tipo: '0KM',
    published: D,
    updated: D,
    path: `${K}/${z.slug}`,
    title: `Autos 0km ${z.en}: todas las marcas y financiación`.length <= 62 ? `Autos 0km ${z.en}: todas las marcas y financiación` : `Autos 0km ${z.en}: marcas y financiación`,
    description: `Comprá tu 0km ${z.en}: ${lista(z.lugares.slice(0, 3))}. Todas las marcas, contado, crédito prendario, plan de ahorro y tu usado como parte de pago.`.slice(0, 160),
    label: `AUTOS 0KM / ${z.region.toUpperCase()}`,
    h1: 'Autos 0KM',
    h1Em: `${z.en}.`,
    lead: `Te ayudamos a comprar tu 0km ${z.en}: comparamos modelos de distintas marcas y te mostramos todas las formas de pago, con tu usado incluido.`,
    nav: z.nombre,
    sections: [
      {
        title: `Comprar un 0km ${z.en}`,
        blocks: [
          { p: z.perfil },
          { p: `Atendemos consultas de ${lista(z.lugares)}.` },
          ...(z.extra ?? []).map(text => ({ p: text })),
        ],
      },
      {
        title: 'Lo más buscado en la zona',
        blocks: [
          { list: z.segmentos.map(slug => `[${SEG[slug][0].toUpperCase()}${SEG[slug].slice(1)}](/0km/${slug})`) },
        ],
      },
      {
        title: 'Patentamiento y patente',
        blocks: [
          { p: esCaba
            ? 'Si vivís en la Ciudad, tu 0km se radica en CABA y la patente la cobra la AGIP. Te pasamos el costo de patentamiento y una estimación de la patente antes de cerrar.'
            : 'Si vivís en el conurbano, tu 0km se radica en la Provincia de Buenos Aires y la patente la cobra ARBA. Te pasamos el costo de patentamiento y una estimación de la patente antes de cerrar.' },
          { p: 'Más detalle en [patente en CABA o Provincia](/guias/patente-caba-o-provincia).' },
        ],
      },
      {
        title: 'Cómo te ayudamos',
        blocks: [
          { steps: [
            { title: 'Nos contás qué buscás', text: 'Modelo o segmento, presupuesto, si tenés anticipo o un usado.' },
            { title: 'Comparamos opciones', text: 'Modelos de distintas marcas con precio vigente y formas de pago.' },
            { title: 'Cerramos y entregamos', text: 'Te acompañamos con la documentación, el patentamiento y la entrega.' },
          ] },
          { note: 'Somos una agencia multimarca independiente, no un concesionario oficial.' },
        ],
      },
    ],
    faqs: [
      { q: `¿Atienden consultas ${z.en}?`, a: `Sí. Atendemos consultas ${z.en} y en todo el AMBA.` },
      { q: '¿Puedo entregar mi usado?', a: 'Sí. Lo tasamos y lo tomamos como parte de pago.' },
    ],
    related: [...vecinas.map(v => `${K}/${v.slug}`), '/financiacion'],
  };
}

export const zonaPages: Page[] = zonas.map(zonaToPage);
export const zonasCabaPaths = zonaPages.filter(p => p.label.endsWith('CABA')).map(p => p.path);
export const zonasGbaPaths = zonaPages.filter(p => !p.label.endsWith('CABA')).map(p => p.path);
