# CLAUDE.md — Rediseño web de CTH (cuidamostuherida.com)

Frente: rediseño de la web de Cuidamos Tu Herida (CTH), una de las cuatro empresas de Ethical Shields Group. Lo lidera Jenny López.
Idioma de trabajo: español neutro de Venezuela, tuteo, sin voseo.

## Ritual de inicio (obligatorio, antes de proponer o cambiar algo)

1. Leer este archivo completo.
2. Leer `docs/ESTADO.md`: dónde quedamos.
3. Leer `docs/PENDIENTES.md`: qué falta y quién lo responde.
4. Leer `docs/DECISIONES-VIGENTES.md`: lo que ya se decidió. No se reabre sin que Jenny lo pida.
5. Si la tarea toca el diseño completo, leer también el documento de diseño (enlace abajo).
6. Para lo del grupo (Ethical Shields Group: nombre, logo, encabezado, pie, sección del ecosistema, hosting), leer en el repositorio `cumbre-web`, **solo lectura**, `docs/DECISIONES-VIGENTES.md` desde «Cambios del 16 nov 2026» en adelante (copia local: `C:\Users\Jenny Lopez\Documents\GitHub\cumbre-web`). El plan común «Grupo Medical Shields: un solo ecosistema web» está desactualizado desde el 11 nov: se usa solo su «Registro de cambios» y, para lo demás, queda como referencia histórica hasta que se actualice (decisión de Jenny, 19 nov).
7. Devolver a Jenny un resumen corto: estado, próximos pasos y dudas.

## Ritual de cierre

Al terminar cada sesión: actualizar `ESTADO.md`, `PENDIENTES.md` y `DECISIONES-VIGENTES.md`, agregar una entrada en `BITACORA.md` y dar a Jenny el mensaje de commit y el mensaje para iniciar el próximo chat.

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Propuesta navegable (fuente de verdad del diseño) | Este repositorio: `index.html`, `preguntas-frecuentes.html`, las siete landing pages y `assets/` |
| Enlace publicado para el equipo | https://cuidamostuheridainfo.github.io/cth-web-propuesta/ (GitHub Pages, rama `main`, raíz) |
| Documento de diseño completo (análisis, embudos, SEO, identidad visual) | Doc de Claude «CTH — Rediseño web: análisis y documento de diseño»: https://claude.ai/artifact/X1GBNNn2zR5BkboAvNYihx |
| Propuesta del área corporativa para CTH (interna, no va en este repositorio) | Doc de Claude «CTH Corporativo — Propuesta para desarrollar el área de servicios a empresas»: https://claude.ai/artifact/B64YgbKyJW7if5Zo7WPfvW |
| Lienzo de diseño original (referencia, ya no se sincroniza) | https://claude.ai/artifact/LUGmeDURncLakjJXKwQMcF |
| Decisiones vigentes del grupo (desde el 16 nov) | Repositorio `cumbre-web`, `docs/DECISIONES-VIGENTES.md` (solo lectura para este frente). Aplicadas en su `index.html`, `assets/js/ecosistema-propuesta.js` y `assets/css/ecosistema-propuesta.css`; referencia visual en https://cumbrechp.pages.dev |
| Plan común de las cuatro webs (Registro de cambios; el resto, desactualizado desde el 11 nov) | Doc de Claude «Grupo Medical Shields: un solo ecosistema web»: https://claude.ai/artifact/C9587Udj2jDw2fovZcsVv1 |
| Hosting, migración y SEO de las cuatro webs | Doc de Claude «Grupo Ethical Shields: hosting, migración y SEO de las cuatro webs»: https://claude.ai/artifact/3cC3bMZQAJq3sAQMzE2N5c |
| Logo del grupo (archivos) | Repositorio `cumbre-web`, `assets/img/grupo-oficial/`: `logo-esg-compacto-claro.svg` y `-oscuro.svg` (encabezado), `logo-esg-horizontal-claro.svg` y `-oscuro.svg` (pie y sección). La carpeta `assets/img/grupo/` tiene las propuestas descartadas: no se usa |
| Datos oficiales de CTH (sedes, horario, preguntas del bot) | Repositorio privado `IRIS-cth` (solo lectura para este frente) |
| Sitio actual | cuidamostuherida.com (Shopify) |
| Sitio final | Cloudflare Pages, proyecto propio de CTH en la cuenta del grupo. Se migra después de la Cumbre |

## Reglas de este frente

- **El repositorio es público** (GitHub Pages gratis). No se suben aquí datos internos sensibles: precios, datos de pacientes, credenciales, detalles técnicos de GMS o IRIS. Esos van en sus propios repositorios privados.
- **Todas las páginas llevan** `<meta name="robots" content="noindex, nofollow">` y la franja «Propuesta de diseño para revisión interna» mientras sean propuesta.
- **Contenido pendiente entre corchetes** `[...]`. No se inventan cifras, nombres, credenciales ni testimonios.
- **Afirmaciones clínicas** (beneficios, tiempos de cierre, prevención): no se publican sin validación de la Dra. Milagros Jaimes. Los textos que ella misma envía cuentan como validados y van tal cual, salvo las reglas de lenguaje vigentes («herida», «úlceras vasculares»).
- **Sin precios** en la web.
- **Ningún dato clínico** en formularios, en el mensaje precargado de WhatsApp ni en Analytics. El código de origen es neutro (por ejemplo `WEB-INICIO`), nunca el nombre de una lesión.
- **Tono:** «tú» para pacientes; «usted» para instituciones queda pendiente de confirmar.
- **Accesibilidad:** cada animación respeta «reducir movimiento»; contraste mínimo AA (ver identidad visual en el documento de diseño).
- **Cambios:** se edita el HTML de este repositorio, se prueba en escritorio y en teléfono (390 px), y se sube a `main`. GitHub Pages publica solo en 1 o 2 minutos.
- **Commits:** Jenny decide cuándo. Mensajes en español.
- **Ethical Shields Group:** las piezas comunes (encabezado del grupo, pie, sección del ecosistema y puentes) siguen la regla del grupo del 19 nov (ver paso 6 del ritual). En CTH, el encabezado y el pie del grupo están visibles en la propuesta desde el 19 nov (pedido de Jenny, para que el equipo los revise); la sección del ecosistema, los puentes y el bloque del grupo en Corporativo siguen reservados e invisibles hasta la migración a Cloudflare Pages. Todo cambio en CTH que afecte a las otras marcas se anota en el «Registro de cambios» del plan común.

## Estructura del código

- `index.html` y `preguntas-frecuentes.html`: HTML estático, estilos en línea y un bloque `<style>` en el `<head>`.
- Siete landing pages: `corporativo.html`, `unidad.html`, `atencion-domiciliaria.html`, `telemedicina.html`, `prevencion-de-complicaciones.html`, `cuidado-de-la-piel.html` (9 nov) y `fisiatria.html` (11 nov). Cada una lleva su propia copia de la cabecera, el cierre y el pie del inicio, con los enlaces del menú apuntando a `index.html#...`.
- **Un cambio en la cabecera, el menú, el cierre o el pie se replica en las nueve páginas.** Al terminar, revisar que todos los enlaces internos lleven a páginas y anclas que existen.
- Menú (11 nov): por debajo de 1100 px se vuelve desplegable con el botón «Menú» (`.nav-toggle`, `#nav-principal`). Si se agrega una opción, comprobar que en 1100 px la cabecera siga en una sola línea.
- **`assets/equipo.js` es contenido, no código (11 nov):** especialidades, especialistas y servicios (Laboratorio, Ecografía y Doppler) del panel de Unidad y de «Quién te atiende» en Fisiatría. Para agregar un médico o una especialidad se agrega un bloque ahí; las instrucciones están al principio del archivo. Un especialista puede estar en varias especialidades (campo `en`). Una página muestra los especialistas de una especialidad con `<div data-equipo="mf">`.
- Espacios reservados del grupo: comentarios `ETHICAL SHIELDS GROUP ·` con un contenedor oculto `data-grupo` (`barra`, `pie`, `ecosistema`, `puente-productos`, `puente-cumbre`, `grupo-corporativo`). Se buscan con `data-grupo=`. El de `barra` es el encabezado del grupo, arriba de todo; el de `pie` va debajo del pie de CTH, como en la Cumbre. Esos dos ya están visibles; los demás siguen con `hidden`.
- **`assets/grupo.js` y `assets/grupo.css` (19 nov):** arman el encabezado del grupo («Parte de», logo compacto, descriptor y «Conoce el grupo» con la lista de las cuatro marcas) y el pie del grupo dentro de `data-grupo="barra"` y `data-grupo="pie"`. Un cambio en esas piezas se hace ahí, no en las nueve páginas. Las marcas, sus textos y su orden son los de la Cumbre (`cumbre-web/assets/js/ecosistema-propuesta.js`); si allá cambian, se copian aquí. Logos en `assets/grupo/`, copiados sin cambios de `cumbre-web`.
- `assets/app.js`: comportamiento (video con sonido y pausa, conteo de cifras, tarjetas de los cuatro módulos del inicio, paneles de «Cómo te atendemos», especialidades desde `equipo.js`, menú desplegable, preguntas). Las anclas `#corporativo`, `#cuidamos-tu-herida`, `#fisiatria` y `#prevencion-y-piel` abren la tarjeta del módulo correspondiente. Usa atributos `data-*`: `data-click`, `data-if`, `data-text`, `data-class`, `data-ref`, `data-attr-*`.
- `assets/`: logo, fotos (las `tira-*` son verticales 480×800 para la franja de Instituciones) y el video `unidad-completo.mp4` (1280 px, H.264).
