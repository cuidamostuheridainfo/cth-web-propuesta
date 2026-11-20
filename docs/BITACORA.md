# BITÁCORA — Rediseño web de CTH

## 30 oct 2026

- Análisis del sitio actual (Shopify, 111 URLs indexables), de los dos diseños aprobados, de la referencia de Mercantil Seguros y de la web de la Cumbre.
- Documento de diseño en un Doc de Claude (secciones 1 a 14): decisiones, embudos, captación, SEO, identidad visual y ampliación a prevención y cuidado de la piel.
- Consulta de solo lectura a GMS sobre leads: la web crea un caso comercial (fase 2A). Revisión externa de Codex incorporada.
- Datos oficiales tomados de IRIS (sedes, preguntas del bot, catálogo) y de los documentos legales (razón social y RIF).
- Mockup de inicio y de preguntas frecuentes en un lienzo de diseño. Iteraciones: hero con video y sonido, tarjetas con movimiento, «Cómo te atendemos» con paneles, especialidades interactivas, instituciones con fotos en bucle, menú y WhatsApp flotante.
- Propuesta convertida a sitio estático y publicada en GitHub Pages (`cth-web-propuesta`). Enviada al equipo y a Social Media para feedback.

## 9 nov 2026

- Ritual de inicio. Sin respuestas todavía de CTH ni de Social Media.
- Daniel pidió resaltar cada servicio por separado y darle más peso a lo corporativo. Se reorganizó el inicio en tres módulos (Corporativo e instituciones, Cuidamos tu herida, Prevención y cuidado de la piel) con tarjetas que se abren y llevan a seis landing pages nuevas.
- Propuesta del área corporativa en un Doc de Claude para presentarla a CTH: segmentos, cinco modelos de convenio, piloto de 90 días, riesgos (incluido el posible encuadre como medicina prepagada) y decisiones pendientes.
- Ajustes de Jenny: sección «Dónde te atendemos» en Unidad y Prevención, nuevo encabezado de Unidad, «heridas» en lugar de «lesiones» en todo el sitio, «úlceras vasculares», Cumbre 2026 y 2027 (CTH sigue como organizador).
- Menú y pie actualizados en las ocho páginas. Revisión final: estructura, enlaces internos, JavaScript y ancho a 390 px sin problemas.

## 11 nov 2026

- Lectura del plan común «Grupo Medical Shields: un solo ecosistema web» (decisiones del 10 nov: cuatro marcas, barra y pie iguales, sección del ecosistema, puentes y sello de cuatro anillos).
- Espacios reservados, invisibles, para las piezas del grupo en las ocho páginas. Comprobado que las páginas se ven idénticas a antes, en escritorio y en teléfono.
- Se mantiene «herida» como provisional; el nombre y el logo de la Cumbre quedan como están hasta que Jenny lo indique.

## 11 nov 2026 (segunda sesión)

- Ritual de inicio. Llegaron las respuestas de CTH a los puntos 2, 3 y parte del 4, y el texto de la Dra. Milagros sobre el equipo y los equipos. El comité sigue decidiendo el logo del grupo.
- Panel de especialistas abierto: `assets/equipo.js` con los nueve especialistas, Traumatología y ortopedia nueva, Ecografía y Doppler como servicio. El panel se arma solo desde ese archivo.
- Láser: sección «Unidad de Cicatrización Avanzada con Tecnología Láser» en Unidad, bloque en Prevención y tarjeta actualizada en Cuidamos tu piel, más la estética facial del Dr. Lozada en Cosmetología.
- Módulo nuevo «Fisiatría avanzada y terapia láser»: cuarta tarjeta del inicio, landing `fisiatria.html`, opción dentro de Cuidamos tu herida y enlaces desde Unidad.
- Menú con siete opciones («Fisiatría» corto, tras ver las dos opciones en capturas) y desplegable por debajo de 1100 px, en las nueve páginas.
- Ecografía y Doppler con jornadas en Unidad y Prevención; mención en Fisiatría.
- Preguntas frecuentes: sección nueva «Láser y ecografía», equipos especiales actualizados y respuestas de productos (la web no vende).
- Formulario de productos en el inicio.
- Revisión final: nueve páginas sin enlaces internos rotos, sin errores de JavaScript y sin desborde a 1280, 1100, 1024 y 390 px.
- Quedó sin hacer el punto 5 (tres modalidades y ecosistema) porque necesita la decisión de Jenny; la sesión se cerró porque entró otro proyecto.

## 11 nov 2026 (tercera sesión)

- El cliente pidió resaltar dónde se atiende como un segmento. Sección «¿Dónde podemos ayudarte?» en el inicio, después de los módulos. Revisada en escritorio y a 390 px, sin enlaces rotos ni errores.

## 19 nov 2026

- Ritual de inicio. Se revisaron los cambios del grupo del 16 al 19 nov en `cumbre-web/docs/DECISIONES-VIGENTES.md` (solo lectura): nombre Ethical Shields Group, logo «Evolución de origen» con «Salud · Tecnología · Innovación», regla del encabezado y del pie, líneas de CTH y de Ethical Shields AI, y hosting en Cloudflare Pages. El plan común y su Registro de cambios no los tenían.
- Decisiones de Jenny: mientras el plan común se actualiza aparte, `CLAUDE.md` apunta a `cumbre-web` para lo del grupo; el pie del grupo va debajo del de CTH, como en la Cumbre; las marcas van en el mismo orden de la Cumbre; el envío de los formularios queda pendiente hasta la migración.
- Comentarios de los espacios reservados actualizados en las nueve páginas, y el pie del grupo reservado ahora debajo del pie de CTH. Comprobado que, sin comentarios, las nueve páginas son idénticas a antes: nada cambia a la vista.
- `CLAUDE.md`, `ESTADO`, `PENDIENTES` y `DECISIONES-VIGENTES` al día con el nombre, el logo y Cloudflare. Queda contestado si el ecosistema se muestra ya: se aplica al migrar.
- Más tarde, a pedido de Jenny (para que el equipo vea los cambios): el encabezado y el pie del grupo pasan a verse en las nueve páginas, con `assets/grupo.js` y `assets/grupo.css`, la estructura de la Cumbre y los colores de CTH. Logos copiados sin cambios de `cumbre-web` a `assets/grupo/`. La sección del ecosistema y los puentes siguen reservados.
- Revisión en navegador: nueve páginas a 1440, 1280, 1100, 1024, 900, 768, 414, 390, 375, 360, 340 y 320 px. El grupo no se sale del ancho en ninguna; encabezado en una línea; «Conoce el grupo» abre la lista con «Estás aquí» y cierra con Escape o con un clic afuera; sin errores de JavaScript. Ajustes en la prueba: el pie pasa a dos filas desde 1100 px, el grupo se alinea con la columna de CTH y el logo del pie se reduce en teléfonos angostos. Queda un desborde de 4 px a 320 px en el inicio y en Unidad que ya existía.
- Inventario de lo que falta para terminar la página y planilla «CTH · Información pendiente para la página web» (36 datos) para el equipo de CTH, con el formato de la de la Cumbre. Nuevos pendientes de Jenny: video de inicio con las dos sedes y la unidad móvil, videos de casos clínicos y videos de Instagram para Aprende.
- Formularios, WhatsApp y productos (pedido de Jenny): formulario de Corporativo reducido a cinco campos y una autorización («Hablemos de una colaboración»); página nueva `cita.html` («Solicita tu cita»), que abre WhatsApp o el correo con el mensaje listo; todos los botones al mismo WhatsApp, con un mensaje según lo que se necesita; catálogo `productos.html` y ficha `producto.html` según el modelo de Jenny, con datos en `assets/productos.js`; en el inicio, un bloque corto de productos después de Historias reales, sin formulario; el menú «Productos» lleva al catálogo; respuesta de preguntas frecuentes sobre compras al día.
- Regla nueva: los textos de productos declarados por el fabricante no llevan validación de la Dra. Milagros. Criterio de diseño: pantallas simples, una acción clara y sin desplazamiento interminable en el teléfono.
- Revisión en navegador: doce páginas sin enlaces internos rotos ni errores de JavaScript, y sin desborde de 1440 a 360 px (sigue el de 4 px a 320 px en el inicio y en Unidad, que ya existía). Probados el formulario de pacientes (WhatsApp y correo), las fichas (con datos, sin datos e inexistente), el catálogo, la validación del formulario de Corporativo y los mensajes de cada botón.

## 20 nov 2026

- Ritual de inicio y revisión de CTH contra los cambios del grupo del 16 al 19 nov (`cumbre-web`, solo lectura). Casi todo ya estaba aplicado el 19 nov; los logos son idénticos a los de `cumbre-web` y `assets/grupo.js` tiene las mismas marcas, textos y orden que la Cumbre. Netlify ya no aparece en ninguna parte vigente.
- Decisiones de Jenny, cerradas: el encabezado y el pie del grupo se ven siempre; los nombres de las empresas son Cumbre CHP y Ethical Shields AI; el logo del grupo queda como completado; el pie del grupo, igual que el de la Cumbre.
- `assets/grupo.css`: el pie del grupo en teléfono pasa a 70 px con 16 px de margen y a 58 px desde 340 px (antes 62 y 54 px con 24 px de margen). «Nueve páginas» por «doce» en los comentarios de las doce páginas, en `grupo.js` y en los documentos. `DECISIONES-VIGENTES` marca como superado que el grupo «no cambia a la vista» en CTH.
- Revisión en navegador: doce páginas a 1440, 1100, 1024, 768, 414, 390, 375, 360, 340 y 320 px, comparadas con cumbrechp.pages.dev. El pie del grupo mide lo mismo que en la Cumbre; sin desborde ni errores de JavaScript. Sigue el desborde de 4 px a 320 px en el inicio y en Unidad, que ya estaba antes y no viene del grupo.
- El mensaje al comité se envió el 19 nov con la planilla en Excel (Jenny). Revisado contra la planilla: cubre los puntos 1 a 9 del comité y los puntos 4, 6, 8 y 9 del mensaje del 30 oct. Siguen abiertos fuera de la planilla: «¿Aceptan seguros médicos?», el documento de alcance, el acceso a Shopify y a Search Console y la fecha de publicación.
