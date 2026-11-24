# ESTADO — Rediseño web de CTH

Última actualización: 24 nov 2026.

## Dónde estamos

- **Fase actual:** propuesta de diseño con el inicio en **cuatro módulos** y **siete landing pages**. El 11 nov entraron las primeras respuestas de CTH y el texto de la Dra. Milagros sobre el equipo y los equipos (láser, fisiatría con láser, ecografía y Doppler).
- **Publicada en:** https://cuidamostuheridainfo.github.io/cth-web-propuesta/ (con `noindex`). Último commit publicado: `76abfaf` (24 nov). Incluye los formularios, WhatsApp, productos y ajustes del grupo (19 y 20 nov) y el trabajo del 24 nov; su mensaje dice «Simulacro de inscripción…» por error (es el de la Cumbre), ver `BITACORA.md`.
- **No se publica todavía como sitio final:** faltan contenido de CTH y las decisiones del comité.
- **Documento de diseño completo:** Doc de Claude (enlace en `CLAUDE.md`), secciones 1 a 14. No se actualizó el 9 nov; la estructura vigente es la de este archivo y `DECISIONES-VIGENTES.md`.
- **Propuesta del área corporativa (9 nov):** Doc de Claude «CTH Corporativo — Propuesta para desarrollar el área de servicios a empresas»: https://claude.ai/artifact/B64YgbKyJW7if5Zo7WPfvW. Es para presentarla a CTH; contiene análisis comercial interno y **no** se sube a este repositorio público.
- **Ethical Shields Group (19 nov):** CTH es una de las cuatro empresas del grupo (antes «Grupo Medical Shields»). El logo es «Evolución de origen», con el descriptor «Salud · Tecnología · Innovación». **El encabezado y el pie del grupo se ven siempre** (pedido de Jenny el 19 nov; decisión cerrada el 20 nov), con `assets/grupo.js` y `assets/grupo.css`. El pie tiene las mismas medidas que el de la Cumbre. La sección del ecosistema, los puentes y el bloque del grupo en Corporativo siguen reservados e invisibles hasta la migración a Cloudflare Pages. Fuente de lo del grupo: `cumbre-web/docs/DECISIONES-VIGENTES.md`; el plan común «Grupo Medical Shields: un solo ecosistema web» está desactualizado desde el 11 nov (ver `DECISIONES-VIGENTES.md`).
- **Hosting (19 nov):** el sitio final irá a Cloudflare Pages (plan gratuito), no a Netlify. Primero se migra la Cumbre; después, CTH.
- El 9 nov se publicó la propuesta para la revisión del comité.
- 11 nov: llegaron las respuestas a los puntos 2, 3 y parte del 4 del mensaje del 30 oct (detalle en `PENDIENTES.md`). El logo del grupo quedó elegido el 16 nov (completado). El feedback de Social Media todavía no llega.

## 24 nov 2026

- **Inventario SEO** del sitio actual (Shopify): 111 direcciones, todas en 200 y con canónica propia; propuesta de destino de cada una y seis decisiones (D1 a D6). D2 decidida: al publicar la web nueva, CTH deja de vender en línea por Shopify y las compras van por WhatsApp; la cuenta se conserva.
- **Shopify revisado y asegurado** (detalle de seguridad fuera de este repositorio): correo y teléfono de la tienda al día, Cristina fuera de las notificaciones, Carmen agregada, una sola app (de Shopify). El canal de Google está con la cuenta de la administradora anterior y sin acceso; Facebook & Instagram queda por revisar en Meta.
- **Search Console:** propiedad de dominio creada con la cuenta de CTH, pendiente del TXT en GoDaddy.
- **Grupo:** los títulos de las marcas del 23 nov copiados de la Cumbre en `assets/grupo.js`, y anotados en el Registro de cambios del plan común.

## Qué tiene la propuesta

### Inicio (`index.html`)

0. Encabezado del grupo, arriba de todo (19 nov): «Parte de» + logo de Ethical Shields Group + «Salud · Tecnología · Innovación» + «Conoce el grupo», que abre la lista de las cuatro marcas. En teléfono, sin el descriptor. El pie del grupo va debajo del pie de CTH en las doce páginas, con las medidas de la Cumbre (80 px; 70 px en teléfono; 58 px desde 340 px).
1. Cabecera: logo, menú (ver punto 6) y botón «Preguntas frecuentes».
2. Hero (sin cambios): video de la Unidad, «Soy paciente» abre Cuidamos tu herida y «Soy institución» abre Corporativo.
3. «¿Cómo podemos ayudarte?»: cuatro tarjetas en este orden: **Corporativo e instituciones**, **Cuidamos tu herida**, **Fisiatría avanzada y terapia láser** y **Prevención y cuidado de la piel**. Al hacer clic se abre la tarjeta con sus opciones (en escritorio, debajo de las cuatro; en el teléfono, debajo de la tocada) y cada opción lleva a su landing. El menú abre la tarjeta correspondiente. Cuidamos tu herida incluye también la opción de Fisiatría.
4. «¿Dónde podemos ayudarte?» (11 nov, pedido del cliente): las tres modalidades como segmento propio, en este orden: A domicilio · Por telemedicina · En nuestra Unidad, cada una con su enlace, y el botón «Solicitar una cita».
5. Cifras, «Tratamos heridas simples y de difícil cicatrización», Historias reales, «Productos que usamos en tu tratamiento» (bloque corto, 19 nov), Cumbre (organizadores, edición 2026 y 2027), Aprende, Preguntas frecuentes, cierre y pie.
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

Páginas nuevas (19 nov), con la misma cabecera y el mismo pie:

| Página | Qué es | Código de WhatsApp |
|---|---|---|
| `cita.html` | «Solicita tu cita» para pacientes y familiares: abre WhatsApp o el correo con el mensaje listo | `WEB-CITA` |
| `productos.html` | Catálogo (cuatro productos; faltan los datos de tres) | `WEB-PRODUCTOS` |
| `producto.html?p=<id>` | Ficha de cada producto, según el modelo de Jenny | `WEB-PRODUCTOS` |

Botones de WhatsApp (19 nov): un solo número; «quiero agendar una cita», «quisiera el enlace para IRIS» o «quiero información», con el código de la página. El formulario de Corporativo («Hablemos de una colaboración») todavía no envía: se define al migrar a Cloudflare Pages.

El contenido que CTH todavía no ha dado (beneficios, credenciales y días de los especialistas, zonas, dermatóloga, fotos) está entre corchetes. Detalle en `PENDIENTES.md`.

Revisión del 11 nov: las nueve páginas sin enlaces internos rotos, sin errores de JavaScript y sin desborde a 1280, 1100, 1024 y 390 px. Cabecera en una sola línea desde 1100 px.

## Próximo paso

1. ~~Enviar al comité el mensaje con todas las dudas.~~ Enviado el 19 nov con la planilla en Excel: esperar las respuestas.
2. Recibir de CTH el contenido que falta, las fotos y el video.
3. Presentar a CTH la propuesta del área corporativa.
4. Completar productos, fichas y demás contenido con las respuestas de la planilla del 19 nov.
5. Inventario SEO y mapa de redirecciones: **inventario hecho el 24 nov** (`docs/MIGRACION-CTH.md` y `docs/seo/inventario-shopify.tsv`, 111 direcciones con su propuesta). Faltan las decisiones D1 y D3 a D6, verificar Search Console (TXT en GoDaddy, cuenta de Greg) y los datos del administrador de Shopify; después se arma `_redirects`.
6. Al migrar CTH a Cloudflare Pages (después de la Cumbre): evaluación de seguridad de los datos médicos, envío de los formularios y aplicación de las piezas del grupo.

## Fases del proyecto

- **Fase 1:** sitio en código propio en Cloudflare Pages (antes Netlify); formularios envían el lead por correo, sin guardarlo en ninguna base (mecanismo de envío pendiente). Contenido separado del código.
- **Fase 2A:** conexión con GMS (cada lead crea su caso comercial). Depende de la incorporación de CTH a GMS.
- **Fase 2B:** traspaso del manejo de contenido al equipo con un gestor de contenido.
