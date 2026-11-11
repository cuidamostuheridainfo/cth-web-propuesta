# ESTADO — Rediseño web de CTH

Última actualización: 11 nov 2026 (tercera sesión).

## Dónde estamos

- **Fase actual:** propuesta de diseño con el inicio en **cuatro módulos** y **siete landing pages**. El 11 nov entraron las primeras respuestas de CTH y el texto de la Dra. Milagros sobre el equipo y los equipos (láser, fisiatría con láser, ecografía y Doppler).
- **Publicada en:** https://cuidamostuheridainfo.github.io/cth-web-propuesta/ (con `noindex`). Commit de la segunda sesión: `d018fce`. La sección «¿Dónde podemos ayudarte?» (tercera sesión) está en la copia local y falta subirla.
- **No se publica todavía como sitio final:** faltan contenido de CTH y las decisiones del comité.
- **Documento de diseño completo:** Doc de Claude (enlace en `CLAUDE.md`), secciones 1 a 14. No se actualizó el 9 nov; la estructura vigente es la de este archivo y `DECISIONES-VIGENTES.md`.
- **Propuesta del área corporativa (9 nov):** Doc de Claude «CTH Corporativo — Propuesta para desarrollar el área de servicios a empresas»: https://claude.ai/artifact/B64YgbKyJW7if5Zo7WPfvW. Es para presentarla a CTH; contiene análisis comercial interno y **no** se sube a este repositorio público.
- **Ecosistema del grupo (10 nov):** CTH es una de las cuatro webs del plan «Grupo Medical Shields: un solo ecosistema web» (https://claude.ai/artifact/C9587Udj2jDw2fovZcsVv1). El 11 nov quedaron reservados, invisibles, los espacios de la barra, el pie, la sección del ecosistema y los puentes; se aplican cuando el cliente apruebe el plan con un video (ver `DECISIONES-VIGENTES.md`).
- El 9 nov se publicó la propuesta para la revisión del comité.
- 11 nov: llegaron las respuestas a los puntos 2, 3 y parte del 4 del mensaje del 30 oct (detalle en `PENDIENTES.md`). El comité sigue decidiendo el logo del grupo. El feedback de Social Media todavía no llega.

## Qué tiene la propuesta

### Inicio (`index.html`)

1. Cabecera: logo, menú Corporativo · Cuidamos tu herida · Prevención · Productos · Aprende · Nosotros, y botón «Preguntas frecuentes».
2. Hero (sin cambios): video de la Unidad, «Soy paciente» abre Cuidamos tu herida y «Soy institución» abre Corporativo.
3. «¿Cómo podemos ayudarte?»: cuatro tarjetas en este orden: **Corporativo e instituciones**, **Cuidamos tu herida**, **Fisiatría avanzada y terapia láser** y **Prevención y cuidado de la piel**. Al hacer clic se abre la tarjeta con sus opciones (en escritorio, debajo de las cuatro; en el teléfono, debajo de la tocada) y cada opción lleva a su landing. El menú abre la tarjeta correspondiente. Cuidamos tu herida incluye también la opción de Fisiatría.
4. «¿Dónde podemos ayudarte?» (11 nov, pedido del cliente): las tres modalidades como segmento propio, en este orden: A domicilio · Por telemedicina · En nuestra Unidad, cada una con su enlace, y el botón «Solicitar una cita».
5. Cifras, «Tratamos heridas simples y de difícil cicatrización», Productos (con el formulario «¿Te interesa un producto?»), Historias reales, Cumbre (organizadores, edición 2026 y 2027), Aprende, Preguntas frecuentes, cierre y pie.
6. Menú: Corporativo · Cuidamos tu herida · Fisiatría · Prevención · Productos · Aprende · Nosotros, más «Preguntas frecuentes». Desplegable por debajo de 1100 px.

### Landing pages

| Página | Módulo | Código de WhatsApp |
|---|---|---|
| `corporativo.html` | Corporativo e instituciones (Empresas, Aseguradoras, Instituciones, Hospitales clínicas y cirujanos, cómo trabajamos, formulario de propuesta) | `WEB-CORPORATIVO` |
| `unidad.html` | Cuidamos tu herida (sedes, qué atendemos, láser para heridas, ecografía y Doppler con jornadas, unidad multidisciplinaria con los nueve especialistas, cómo y dónde te atendemos) | `WEB-UNIDAD` (jornadas: `WEB-ECOGRAFIA`) |
| `atencion-domiciliaria.html` | Cuidamos tu herida | `WEB-DOMICILIO` |
| `telemedicina.html` | Cuidamos tu herida | `WEB-TELEMEDICINA` |
| `prevencion-de-complicaciones.html` | Prevención y cuidado de la piel (con láser y ecografía en la prevención) | `WEB-PREVENCION` |
| `cuidado-de-la-piel.html` | Prevención y cuidado de la piel (Próximamente; láser y estética facial del Dr. Lozada) | `WEB-PIEL` |
| `fisiatria.html` | Fisiatría avanzada y terapia láser (texto de la Dra. Milagros, quién te atiende, dónde, preguntas) | `WEB-FISIATRIA` |

Formulario de productos en el inicio: código `WEB-PRODUCTOS`; todavía no envía (fase 1, función de Netlify).

El contenido que CTH todavía no ha dado (beneficios, credenciales y días de los especialistas, zonas, dermatóloga, fotos) está entre corchetes. Detalle en `PENDIENTES.md`.

Revisión del 11 nov: las nueve páginas sin enlaces internos rotos, sin errores de JavaScript y sin desborde a 1280, 1100, 1024 y 390 px. Cabecera en una sola línea desde 1100 px.

## Próximo paso

1. Subir a `main` los cambios del 11 nov (segunda sesión).
2. Decisión de Jenny: si el ecosistema del grupo se muestra ya en la propuesta para el comité. (Las tres modalidades ya están en el inicio.)
3. Enviar al comité el mensaje con todas las dudas (lista en `PENDIENTES.md`, sección «Para el comité»).
4. Recibir de CTH el contenido que falta, las fotos y el video.
5. Presentar a CTH la propuesta del área corporativa.
6. Plantillas de catálogo y ficha de producto (el formulario de productos ya existe y se reutiliza en la ficha).
7. Inventario SEO con datos de Search Console y mapa de redirecciones 301.

## Fases del proyecto

- **Fase 1:** sitio en código propio en Netlify; formularios envían el lead por correo, sin guardarlo en ninguna base. Contenido separado del código.
- **Fase 2A:** conexión con GMS (cada lead crea su caso comercial). Depende de la incorporación de CTH a GMS.
- **Fase 2B:** traspaso del manejo de contenido al equipo con un gestor de contenido.
