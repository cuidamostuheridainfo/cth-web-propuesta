# CLAUDE.md — Rediseño web de CTH (cuidamostuherida.com)

Frente: rediseño de la web de Cuidamos Tu Herida (CTH), Grupo Medical Shields. Lo lidera Jenny López.
Idioma de trabajo: español neutro de Venezuela, tuteo, sin voseo.

## Ritual de inicio (obligatorio, antes de proponer o cambiar algo)

1. Leer este archivo completo.
2. Leer `docs/ESTADO.md`: dónde quedamos.
3. Leer `docs/PENDIENTES.md`: qué falta y quién lo responde.
4. Leer `docs/DECISIONES-VIGENTES.md`: lo que ya se decidió. No se reabre sin que Jenny lo pida.
5. Si la tarea toca el diseño completo, leer también el documento de diseño (enlace abajo).
6. Leer el plan común del grupo, «Grupo Medical Shields: un solo ecosistema web» (enlace abajo), sobre todo sus decisiones y el «Registro de cambios».
7. Devolver a Jenny un resumen corto: estado, próximos pasos y dudas.

## Ritual de cierre

Al terminar cada sesión: actualizar `ESTADO.md`, `PENDIENTES.md` y `DECISIONES-VIGENTES.md`, agregar una entrada en `BITACORA.md` y dar a Jenny el mensaje de commit y el mensaje para iniciar el próximo chat.

## Dónde vive cada cosa

| Qué | Dónde |
|---|---|
| Propuesta navegable (fuente de verdad del diseño) | Este repositorio: `index.html`, `preguntas-frecuentes.html`, `assets/` |
| Enlace publicado para el equipo | https://cuidamostuheridainfo.github.io/cth-web-propuesta/ (GitHub Pages, rama `main`, raíz) |
| Documento de diseño completo (análisis, embudos, SEO, identidad visual) | Doc de Claude «CTH — Rediseño web: análisis y documento de diseño»: https://claude.ai/artifact/X1GBNNn2zR5BkboAvNYihx |
| Propuesta del área corporativa para CTH (interna, no va en este repositorio) | Doc de Claude «CTH Corporativo — Propuesta para desarrollar el área de servicios a empresas»: https://claude.ai/artifact/B64YgbKyJW7if5Zo7WPfvW |
| Lienzo de diseño original (referencia, ya no se sincroniza) | https://claude.ai/artifact/LUGmeDURncLakjJXKwQMcF |
| Plan común de las cuatro webs del grupo (decisiones y Registro de cambios) | Doc de Claude «Grupo Medical Shields: un solo ecosistema web»: https://claude.ai/artifact/C9587Udj2jDw2fovZcsVv1 |
| Sello del grupo (archivos) | Repositorio `cumbre-web`, `assets/img/grupo/` |
| Datos oficiales de CTH (sedes, horario, preguntas del bot) | Repositorio privado `IRIS-cth` (solo lectura para este frente) |
| Sitio actual | cuidamostuherida.com (Shopify) |

## Reglas de este frente

- **El repositorio es público** (GitHub Pages gratis). No se suben aquí datos internos sensibles: precios, datos de pacientes, credenciales, detalles técnicos de GMS o IRIS. Esos van en sus propios repositorios privados.
- **Todas las páginas llevan** `<meta name="robots" content="noindex, nofollow">` y la franja «Propuesta de diseño para revisión interna» mientras sean propuesta.
- **Contenido pendiente entre corchetes** `[...]`. No se inventan cifras, nombres, credenciales ni testimonios.
- **Afirmaciones clínicas** (beneficios, tiempos de cierre, prevención): no se publican sin validación de la Dra. Milagros Jaimes.
- **Sin precios** en la web.
- **Ningún dato clínico** en formularios, en el mensaje precargado de WhatsApp ni en Analytics. El código de origen es neutro (por ejemplo `WEB-INICIO`), nunca el nombre de una lesión.
- **Tono:** «tú» para pacientes; «usted» para instituciones queda pendiente de confirmar.
- **Accesibilidad:** cada animación respeta «reducir movimiento»; contraste mínimo AA (ver identidad visual en el documento de diseño).
- **Cambios:** se edita el HTML de este repositorio, se prueba en escritorio y en teléfono (390 px), y se sube a `main`. GitHub Pages publica solo en 1 o 2 minutos.
- **Commits:** Jenny decide cuándo. Mensajes en español.
- **Grupo Medical Shields:** las piezas comunes (barra, pie, sección del ecosistema, puentes, sello) se deciden en el plan común. Todo cambio en CTH que afecte a las otras marcas se anota en su «Registro de cambios».

## Estructura del código

- `index.html` y `preguntas-frecuentes.html`: HTML estático, estilos en línea y un bloque `<style>` en el `<head>`.
- Seis landing pages (9 nov): `corporativo.html`, `unidad.html`, `atencion-domiciliaria.html`, `telemedicina.html`, `prevencion-de-complicaciones.html`, `cuidado-de-la-piel.html`. Cada una lleva su propia copia de la cabecera, el cierre y el pie del inicio, con los enlaces del menú apuntando a `index.html#...`.
- **Un cambio en la cabecera, el menú, el cierre o el pie se replica en las ocho páginas.** Al terminar, revisar que todos los enlaces internos lleven a páginas y anclas que existen.
- Espacios reservados del grupo: comentarios `GRUPO MEDICAL SHIELDS ·` con un contenedor oculto `data-grupo` (`barra`, `pie`, `ecosistema`, `puente-productos`, `puente-cumbre`, `grupo-corporativo`). Se buscan con `data-grupo=`.
- `assets/app.js`: comportamiento (video con sonido y pausa, conteo de cifras, tarjetas de los tres módulos del inicio, paneles de «Cómo te atendemos», especialidades, preguntas). Las anclas `#corporativo`, `#cuidamos-tu-herida` y `#prevencion-y-piel` abren la tarjeta del módulo correspondiente. Usa atributos `data-*`: `data-click`, `data-if`, `data-text`, `data-class`, `data-ref`, `data-attr-*`.
- `assets/`: logo, fotos (las `tira-*` son verticales 480×800 para la franja de Instituciones) y el video `unidad-completo.mp4` (1280 px, H.264).
