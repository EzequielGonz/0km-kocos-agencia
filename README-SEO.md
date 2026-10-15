# Estrategia SEO — Agencia Kocos (0km)

Se sumaron **79 páginas de contenido** en tres silos, sin cambiar el diseño de la home. Todas usan la misma estética que el inicio: el header oscuro, Archivo y Plus Jakarta, el azul, las etiquetas en mayúsculas, el punto azul, el mismo formulario, la banda final y el footer. El foco es **solo AMBA, con prioridad en CABA** (La Plata afuera).

## 1. Qué se agregó

| Silo | URL pilar | Páginas |
|---|---|---|
| 0KM | `/0km` | 6 segmentos, 10 marcas, 13 modelos, 3 comparativas y 28 zonas (CABA con 12 barrios, más 15 partidos) |
| Financiación | `/financiacion` | Contado, crédito prendario, tasa 0%, plan de ahorro, adjudicación, plan de ahorro vs. prendario, usado como parte de pago y requisitos |
| Guías | `/guias` | Índice general, **simulador de cuotas**, cómo comprar, patentamiento, patente CABA o Provincia, seguro, entrega y garantía, documentos y glosario |

Cada página tiene:
- Título y descripción para Google, migas de pan e índice lateral.
- **CTA a mitad del texto**, en el bloque azul de "¿Tenés un usado o un anticipo?".
- Preguntas frecuentes y páginas relacionadas.
- **El mismo formulario de la home**, precargado según la página. Por ejemplo, en la página de la Hilux llega con "0KM" y "Toyota Hilux".
- La banda final y el footer.
- Datos estructurados (AutoDealer, Article, BreadcrumbList y FAQPage). Todas entran solas en `/sitemap.xml`.

## 2. Dónde completar los datos

**`apps/web/src/constants/brand.ts`** es un solo archivo para todo el sitio:
- `SITE_URL`, `PHONE`, `PHONE_E164`, `WHATSAPP_NUMBER`, `EMAIL`, `ADDRESS` y `OPENING_HOURS`.
- Redes: `INSTAGRAM_URL`, `FACEBOOK_URL`, `TIKTOK_URL` y `YOUTUBE_URL`. Aparecen solas en el footer.
- `VERIFICATION` (Google y Bing) e `INDEXNOW_KEY`.

Mientras `WHATSAPP_NUMBER` esté vacío, los botones de WhatsApp muestran el mismo aviso de "pronto" que hoy. Al completarlo abren WhatsApp con un mensaje que dice desde qué página escribe la persona. Por ejemplo: *"vi Toyota Hilux en su web y quiero cotizar: Toyota Hilux"*. Con `PHONE` cargado, los CTA muestran el número para llamar.

**`apps/web/src/constants/cta.ts`** tiene los textos de todos los llamados a la acción.

## 3. Base de datos

El formulario original todavía no enviaba las consultas. **Sigue igual**, con el mismo aviso, hasta que conectes un proveedor en **`apps/web/src/lib/leads.ts`**:
- `'supabase'`: ejecutar `supabase/consultas.sql`, completar `SUPABASE_CONFIG` y cambiar `LEADS_PROVIDER`. La tabla incluye `estado` y `notas` para el seguimiento del vendedor.
- `'webhook'`: cualquier URL que reciba JSON, como Make, Zapier, n8n o un CRM.

Al conectarlo, el formulario de la home y los de los artículos empiezan a enviar, confirman el envío y desaparece el aviso de "próximamente". Cada consulta guarda `origen`, la página de la que vino.

Si instalan Google Tag Manager, quedan listos los eventos `click_whatsapp`, `click_llamar` y `lead_enviado`.

## 4. Cambios en la home (sin tocar el diseño)

- **Header**:
  - "0KM" y "Financiación" reemplazan al ancla "Vehículos".
  - Las anclas ahora empiezan con `/#` para funcionar desde cualquier página.
  - En pantallas entre 851 y 960 px se ocultan "Inicio" y "Cómo funciona" para que el menú no se desborde. Siguen en el menú mobile y en el footer.
- **Footer**: se separó en su propio componente para reutilizarlo en las páginas nuevas, con el mismo diseño. Suma plan de ahorro, simulador y guías, y también teléfono, email y redes cuando se carguen.
- **Metadatos**: título orientado a "autos 0km en CABA" y datos estructurados de la agencia.
- **Formulario y WhatsApp**: mismo diseño. Solo cambió la lógica, que ahora lee la configuración central.

## 5. Contenido: cuidados y mantenimiento

- **Modelos**: los 13 modelos se eligieron entre los más vendidos de 2026. Conviene revisar la lista cada pocos meses. Si un modelo deja de venderse, pasalo a `status: 'borrador'` en `marcas-modelos.server.ts`: deja de publicarse y sale del sitemap.
- **Precios**: no se publican precios, versiones ni fichas técnicas, a propósito, porque cambian todos los meses. Las páginas invitan a pedir el precio vigente, que además genera la consulta.
- **Marcas**: cada página aclara que es una **agencia multimarca independiente, no un concesionario oficial**. La home destaca Volkswagen, Ford y Peugeot, y esas tres aparecen primero en el listado de marcas.
- **Plan de ahorro**: el contenido no promete adjudicaciones ni plazos, y advierte que solo cuenta lo que está en el contrato.
- **Zonas**: para diferenciarlas más, sumá en `extra` (en `zonas.server.ts`) datos reales de la agencia en cada zona, como entregas, clientes o testimonios.
- **Nuevas páginas**: sumarlas al archivo del silo en `apps/web/src/content/` y agregar su ruta a un grupo de `HUBS` en `index.server.ts`. Para enlaces internos dentro del texto: `[texto](/ruta)`.

## 6. Checklist de lanzamiento

1. Completar `brand.ts` y conectar la base de datos en `leads.ts`.
2. Revisar el contenido, sobre todo financiación y plan de ahorro, con las condiciones reales con las que trabaja la agencia.
3. Conectar el dominio. Mientras el sitio esté en un dominio temporal de Hostinger, `robots.txt` bloquea la indexación a propósito.
4. Verificar el sitio en **Google Search Console** y enviar `/sitemap.xml`. Hacer lo mismo en **Bing Webmaster Tools**.
5. Cargar `INDEXNOW_KEY`, publicar y correr `node scripts/indexnow.mjs https://tudominio`.
6. Crear el **Google Business Profile**. Categoría sugerida: "Concesionario de automóviles" o "Agencia de automóviles usados/nuevos", según corresponda. Usar los mismos datos del sitio y pedir reseñas.
7. En Search Console, pedir la indexación manual de los pilares, plan de ahorro, crédito prendario, los modelos más vendidos (Hilux, Cronos, Ranger, 208, Tera) y las zonas de CABA.
