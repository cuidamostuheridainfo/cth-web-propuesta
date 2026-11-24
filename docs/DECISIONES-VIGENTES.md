# DECISIONES VIGENTES — Rediseño web de CTH

Solo se agregan decisiones. Si una cambia, se marca la anterior como superada con la fecha.

## Enfoque (30 oct 2026)

- Tres frentes: pacientes (B2C), instituciones (aseguradoras, hospitales, clínicas, cirujanos y empresas) y productos con asesoría, sin precios.
- Tres pilares para pacientes: **tratamos** heridas, **prevenimos** complicaciones (antes y después de una cirugía, pacientes en cama, personas con diabetes) y **cuidamos la piel** (área nueva, Próximamente).
- Lema: «Cuidamos tu piel, curamos tu herida».
- CTH es **organizador** de la Cumbre Internacional para el Cuidado Avanzado de Heridas y Piel (no patrocinador).

## Plataforma y fases

- ~~Fase 1: código propio en **Netlify** (Jenny ya tiene cuenta), con redirecciones 301 de servidor.~~ Reemplazado el 19 nov: ver «Ethical Shields Group y Cloudflare (16 al 19 nov 2026)». GitHub Pages solo para la propuesta, no para el sitio final (sigue vigente).
- El contenido se guarda separado del código para que en la fase 2B el equipo lo maneje con un gestor de contenido. No se migra a WordPress.
- Fase 1: los formularios envían el lead por correo ~~desde una función de Netlify~~, sin guardarlo en ninguna base. El mecanismo de envío queda pendiente desde el 19 nov: ver «Ethical Shields Group y Cloudflare (16 al 19 nov 2026)».
- Fase 2A: cada lead crea un caso comercial en GMS, con la función de servidor ya decidida del lado de GMS. Sin bandeja propia ni proyecto aparte.

## Datos oficiales

- Razón social y RIF: **Cuidamos Tu Herida, S.A. · RIF J-50456402-8**. El «C.A.» del diseño aprobado es un error. El domicilio fiscal no se publica.
- Dos sedes, ambas abiertas: **San Bernardino** (principal): Centro Clínico Profesional Caracas, piso 13, consultorio 1308. **Altamira**: Av. Francisco de Miranda, Edificio Banco del Orinoco, dentro de OH Laboratorio, Urb. La Floresta. El piso 12 y el consultorio 1303 del diseño son un error. Cada sede tiene un estado abierta o cerrada en los datos.
- Horario publicado: **lunes a viernes, 8:00 a. m. a 5:00 p. m.** La atención de emergencias del fin de semana no se publica.
- WhatsApp: +58 416-618-1760. Correo: info@cuidamostuherida.com.
- La unidad móvil es la atención domiciliaria: solo se usa «Atención domiciliaria».

## Servicios y especialidades

- Centro: **Cuidado de heridas** (incluye enfermería; presencial, domiciliaria y telemedicina) y **Cuidados preventivos**.
- Especialidades: cirugía general, cirugía cardiovascular, cirugía plástica, medicina general, medicina interna e infectología, medicina física y rehabilitación, nutrición clínica.
- **Laboratorio**: solo el nombre y «Solicita más información». Sin lista de exámenes ni precios. Los exámenes los hace OH Laboratorio; no se presenta como aliado hasta decidirlo.
- Productos: catálogo comercial de CTH (Covalon y Platsul), una ficha por familia. Los minoristas (Walgreens, NeilMed, New Skin, Band-Aid, Feel Good) se retiran, salvo que CTH diga lo contrario.

## Captación y datos

- Botones: «Solicitar una cita» (WhatsApp) y «Prefiero que me contacten» (formulario). En productos: «Saber más sobre este producto» abre la ficha; dentro, «Consulta con un especialista». (19 nov: «Prefiero que me contacten» lleva a `cita.html`; ver «Formularios, WhatsApp y productos».)
- ~~«Agenda con nosotros una evaluación de tu herida» lleva al formulario de IRIS.~~ Reemplazado el 19 nov: ver «Formularios, WhatsApp y productos (19 nov 2026)». No se usa «Evalúa tu herida» (sigue vigente).
- Los formularios no piden tipo de herida, fotos ni ningún dato clínico.
- Página, producto y campaña se miden en Google Analytics, sin datos personales.

## Diseño (mockup, 30 oct)

- Tipografía: Roboto, por confirmar con el archivo fuente. Colores del logo: celeste #46B7E0, verde #84B953, petróleo #167E89; azul marino #013451 para textos.
- Texto de botones en azul marino sobre verde (contraste AA). Botón secundario en verde claro #D9EBC6.
- Cabecera sin botones: solo logo, menú y «Preguntas frecuentes». Botón flotante de WhatsApp.
- Hero con el video completo de la Unidad: arranca sin sonido y tiene el botón «Activar sonido».
- Sección de instalaciones eliminada (el video ya está en el hero).
- Preguntas frecuentes: página propia con las preguntas del bot de IRIS, en «tú». Fuera: fin de semana, precio de telemedicina y cómo llegar en autobús.

## SEO

- Conservar las rutas del blog `/blogs/aprenda-mas/<slug>`. Decisión URL por URL con datos de Search Console. 301 de servidor, sin cadenas; 404 o 410 si no hay equivalente real.

## Estructura del sitio (9 nov 2026, pedido de Daniel a través de Jenny)

- **Corporativo es el norte del negocio.** En el inicio va primero.
- El inicio muestra tres módulos, en este orden:
  1. **Corporativo e instituciones**: un solo módulo. Corporativo son las empresas con fines de lucro y las aseguradoras; instituciones, el Estado y las organizaciones sin fines de lucro. En la misma página van los hospitales, clínicas y cirujanos como aliados clínicos.
  2. **Cuidamos tu herida**: Unidad (las dos sedes), Atención domiciliaria y Telemedicina, en ese orden.
  3. **Prevención y cuidado de la piel**: un módulo con dos áreas, **Prevención de complicaciones** (antes y después de una cirugía, pacientes en cama, personas con diabetes) y **Cuidamos tu piel** (láser, dermatología con una dermatóloga, cosmetología y péptidos; Próximamente). Precisa los tres pilares del 30 oct, no los reemplaza.
- Navegación: en el inicio, la tarjeta del módulo se abre con sus opciones y cada opción lleva a su landing page. Así el inicio queda corto.
- Seis landing pages: `corporativo.html`, `unidad.html`, `atencion-domiciliaria.html`, `telemedicina.html`, `prevencion-de-complicaciones.html`, `cuidado-de-la-piel.html`.
- Menú: Corporativo · Cuidamos tu herida · Prevención · Productos · Aprende · Nosotros, más el botón «Preguntas frecuentes». El nombre completo del módulo va en la tarjeta, la página y el pie.
- Salen del inicio y pasan a las landing pages: «No esperes a que tu herida se complique» y «Cuidado integral de tu piel» (a Prevención y a Cuidamos tu piel), «Cómo te atendemos» y «Una unidad multidisciplinaria» (a Unidad) y «Para instituciones» (a Corporativo).
- En Unidad y en Prevención de complicaciones, después de «Cómo te atendemos» o «Cómo funciona» va la sección **«Dónde te atendemos»** con las tres modalidades (sedes, a domicilio, telemedicina), porque no todos ofrecen telemedicina y atención domiciliaria.
- Encabezado de Unidad: «Dos sedes en Caracas, telemedicina y atención domiciliaria, con un equipo multidisciplinario y personal dedicado a darte la mejor atención. Un médico evalúa tu caso, diseña tu plan de curación y te acompaña en cada control.»
- Cumbre: se **reconfirma** que CTH es organizador, no patrocinador. Se resalta la edición 2026 y que se repite en 2027.
- Cada landing tiene su código neutro de WhatsApp: `WEB-CORPORATIVO`, `WEB-UNIDAD`, `WEB-DOMICILIO`, `WEB-TELEMEDICINA`, `WEB-PREVENCION`, `WEB-PIEL`.

## Lenguaje (9 nov 2026)

- **Se dice «herida», no «lesión»**, en todo el sitio: en Venezuela «lesión» tiene otro contexto. Por ejemplo: «Tratamos heridas simples y de difícil cicatrización». **Provisional desde el 10 nov:** para las cuatro webs del grupo lo deciden la Dra. Milagros Jaimes y Social media, con criterio médico; mientras tanto, en CTH se sigue usando «herida».
- «Úlceras vasculares» (antes «úlceras venosas»).

## Ecosistema del Grupo Medical Shields (10 y 11 nov 2026, nombre anterior del grupo)

- CTH sigue el plan común de las cuatro webs: documento «Grupo Medical Shields: un solo ecosistema web» (https://claude.ai/artifact/C9587Udj2jDw2fovZcsVv1). Las decisiones del grupo se toman allí, no en este repositorio. (19 nov: el plan quedó desactualizado; mientras tanto, la fuente es `cumbre-web/docs/DECISIONES-VIGENTES.md`.)
- Cuatro marcas: Medical Shields, Cuidamos tu Herida, Cumbre y Ethical Shields (20 nov: los nombres vigentes son **Cumbre CHP** y **Ethical Shields AI**; ver «Cierre de los ajustes del grupo (20 nov 2026)»). Cada una conserva su web y su dominio. ~~Nombre visible: «Grupo Medical Shields». Lema: «Ecosistema de Salud y Bienestar Integral».~~ Reemplazado el 19 nov: ver «Ethical Shields Group y Cloudflare (16 al 19 nov 2026)».
- Piezas comunes: barra del grupo arriba, pie del grupo, sección «Un solo ecosistema», puentes en contexto y ~~sello de cuatro anillos en rombo~~ logo del grupo. Reemplazado el 19 nov: ver «Ethical Shields Group y Cloudflare (16 al 19 nov 2026)».
- **En CTH las piezas están reservadas, invisibles, en el código (11 nov).** ~~Se aplican cuando el cliente apruebe el plan con el video (fase 2 del plan).~~ Reemplazado el 19 nov: ver «Ethical Shields Group y Cloudflare (16 al 19 nov 2026)». Cada reserva lleva un comentario que dice qué va y un contenedor oculto con `data-grupo`:
  - `barra` y `pie`: en las ocho páginas.
  - `ecosistema`: en el inicio, antes de la Cumbre.
  - `puente-productos` (hacia Medical Shields): en el inicio, después de «Tratamos heridas…», y en Unidad, después de «Qué atendemos».
  - `puente-cumbre`: en Unidad, después de la unidad multidisciplinaria.
  - `grupo-corporativo` (el grupo ante empresas y aseguradoras, con puentes a Medical Shields y la Cumbre): en Corporativo, antes de «Cómo trabajamos».
- Los puentes hacia productos se presentan como criterio clínico, nunca como venta al paciente. Sus textos los valida la Dra. Milagros Jaimes.
- Prioridad del mensaje: la fuerza del grupo ante empresas y aseguradoras. En CTH va sobre todo en Corporativo e instituciones.
- Nombre y logo de la Cumbre: por decisión de Jenny (11 nov), CTH mantiene por ahora el nombre y el logo actuales, aunque el plan pide «II Cumbre Internacional para el Cuidado Avanzado de Heridas, Piel y Longevidad». Se cambian cuando Jenny lo indique.
- Todo cambio en CTH que afecte a las otras marcas se anota en el «Registro de cambios», al final del documento del plan.

## Respuestas de CTH y estructura (11 nov 2026, segunda sesión)

- **Corporativo:** CTH respondió «Seguros y corporativos», pero a nivel comercial manda Daniel: queda como él lo orientó el 9 nov (empresas, aseguradoras, Estado y organizaciones sin fines de lucro). No se cambia la página.
- **Productos:** la web no vende ni muestra precios; una persona de CTH atiende la compra, como hasta ahora. ~~Para captar el contacto hay un formulario «¿Te interesa un producto?» en la sección Productos del inicio (`#info-producto`): nombre y teléfono obligatorios, producto de interés y correo opcional, código `WEB-PRODUCTOS`. La llamada la hace la ejecutiva de telemarketing.~~ Reemplazado el 19 nov: ver «Formularios, WhatsApp y productos (19 nov 2026)».
- **Textos de la Dra. Milagros Jaimes** (equipo, láser, fisiatría con láser, ecografía y Doppler): están validados por ella y van tal cual. Solo se aplican las reglas de lenguaje vigentes («Heridas que tratamos», «úlceras vasculares»). «Lesión» se mantiene donde se refiere a músculos, tendones o articulaciones.
- **Equipo de la Unidad:** nueve especialistas con nombre, especialidad y áreas. Entra **Traumatología y ortopedia** (Dr. José Gregorio Barrio). **Medicina general** la atiende la Dra. Milagros. El equipo va a crecer: se mantiene en `assets/equipo.js`, separado del código.
- **Láser:** es un solo equipo con varias funciones. Está activo en Cuidamos tu herida (cicatrización avanzada) y también se usa en fisiatría, en la prevención (antes y después de una cirugía) y, próximamente, en cosmetología y cuidado antienvejecimiento.
- **Fisiatría avanzada y terapia láser** es un **módulo aparte**, para darle más relevancia, y además se incluye en Cuidamos tu herida. Va **después de Cuidamos tu herida**: Corporativo · Cuidamos tu herida · Fisiatría avanzada y terapia láser · Prevención y cuidado de la piel. Landing `fisiatria.html`, código `WEB-FISIATRIA`. Precisa la estructura del 9 nov, no la reemplaza.
- **Menú:** dice solo «Fisiatría» para que la cabecera quepa en una línea en escritorio y no pese en el teléfono. El nombre completo va en la tarjeta, la landing y el pie. Por debajo de 1100 px el menú es desplegable.
- **Ecografía y Doppler** es un servicio de Cuidamos tu herida y de Prevención y cuidado de la piel. Se dice que **se hacen jornadas de ecografía** y que **próximamente se publicará la nueva jornada**. Código `WEB-ECOGRAFIA`.
- **Dermatóloga:** queda pendiente; CTH sigue conversando con ella. La **estética facial del Dr. Lozada** va en Cosmetología, dentro de Cuidamos tu piel.
- **Publicación:** todavía no se publica como sitio final.

## Dónde podemos ayudarte (11 nov 2026, pedido del cliente)

- Los sitios donde se atiende al paciente se resaltan como un **segmento propio** en el inicio, justo después de «¿Cómo podemos ayudarte?»: **«¿Dónde podemos ayudarte?»** con A domicilio, Por telemedicina y En nuestra Unidad, cada una con enlace a su landing.

## Ethical Shields Group y Cloudflare (16 al 19 nov 2026)

Decisiones del grupo tomadas en las sesiones de la Cumbre y de la web del grupo. Detalle en el repositorio `cumbre-web`, `docs/DECISIONES-VIGENTES.md` (secciones del 16 al 19 nov). ~~En CTH se aplicaron el 19 nov solo en los comentarios de los espacios reservados: la propuesta no cambia a la vista.~~ Superado el 19 nov (más tarde) y cerrado el 20 nov: el encabezado y el pie del grupo se ven siempre (ver «Cierre de los ajustes del grupo (20 nov 2026)»).

- **Nombre del grupo: «Ethical Shields Group»** (dominio ethicalshieldsgroup.com). Reemplaza a «Grupo Medical Shields» y a «Grupo Ethical Shields». Cuatro empresas: Medical Shields, Cuidamos tu Herida (CTH), Ethical Shields AI y Cumbre CHP. Cada una conserva su identidad, su dominio y sus servicios.
- **Textos visibles del grupo:** «Parte de Ethical Shields Group» y «En Ethical Shields Group encuentras…». En el pie no va «Página del grupo: próximamente».
- **Logo del grupo:** «Evolución de origen», versión B: ETHICAL SHIELDS GROUP en mayúsculas, con una raya de acento debajo de ETHICAL. Descriptor: «Salud · Tecnología · Innovación». Ya no se usa «Ecosistema de Salud y Bienestar Integral». El sello de anillos queda descartado.
- **Regla del logo en las webs de las empresas (19 nov):**
  - encabezado en computadora y tablet: «Parte de» + logo compacto (sin descriptor) + línea divisoria + «Salud · Tecnología · Innovación» como texto legible al lado + botón «Conoce el grupo»;
  - encabezado en teléfono: «Parte de» + logo compacto + «Conoce el grupo», sin descriptor;
  - «Conoce el grupo» no es un enlace: abre la lista de las cuatro marcas, con «Estás aquí» en la propia;
  - pie: logo completo del grupo, en tamaño legible.
- ~~**En CTH se aplica al migrar el sitio a Cloudflare Pages.** Mientras tanto queda en los espacios reservados (`data-grupo`) de las nueve páginas.~~ Reemplaza «cuando el cliente apruebe el plan con el video». **Superado para el encabezado y el pie** (19 nov, más tarde; cerrado el 20 nov): se ven siempre. Sigue vigente para la sección del ecosistema, los puentes y el bloque del grupo en Corporativo, que se aplican al migrar.
- **Pie del grupo debajo del pie de CTH**, como en la Cumbre (Jenny, 19 nov). Antes estaba reservado encima.
- **Orden de las marcas** en la lista de «Conoce el grupo», la sección y el pie: Medical Shields · Cuidamos tu Herida · Cumbre · Ethical Shields AI, el mismo de la Cumbre (Jenny, 19 nov).
- **Líneas de las marcas** (las mismas de la Cumbre, `assets/js/ecosistema-propuesta.js`):
  - CTH: «Atención médica de heridas y piel y fisiatría avanzada, en sede, a domicilio y por telemedicina.»;
  - Ethical Shields AI: descripción corta «Inteligencia artificial para empresas» y línea «Implementación de inteligencia artificial en empresas. GesPro, su panel de control financiero.». Ya no se usa «IA financiera».
- **Hosting: Cloudflare Pages, plan gratuito**, con un proyecto y un repositorio por web, en la cuenta del grupo. Reemplaza a Netlify. GitHub Pages sigue solo para la propuesta. Los dominios siguen registrados en GoDaddy.
- **Migración gradual:** primero la Cumbre (ya desplegada en cumbrechp.pages.dev, sin dominio todavía) y después CTH, protegiendo el SEO y el correo. Plan en el Doc de Claude «Grupo Ethical Shields: hosting, migración y SEO de las cuatro webs» (https://claude.ai/artifact/3cC3bMZQAJq3sAQMzE2N5c).
- **La seguridad de los datos médicos de CTH e IRIS** se evalúa por separado al migrar CTH.
- **Envío de los formularios en la fase 1: pendiente** (Jenny, 19 nov). Se define al migrar, junto con esa evaluación. No se reabre el resto de la decisión: por correo, sin guardar el lead en ninguna base y sin datos clínicos.
- **Fuente de lo del grupo (Jenny, 19 nov):** el plan común está desactualizado desde el 11 nov. Mientras se actualiza en una sesión aparte, `CLAUDE.md` apunta a `cumbre-web/docs/DECISIONES-VIGENTES.md` (solo lectura). El «Registro de cambios» del plan común se sigue usando.
- **Encabezado y pie del grupo visibles en la propuesta (Jenny, 19 nov, más tarde):** para que el equipo los vea mientras se termina la página. Se aplican en las nueve páginas (desde el 19 nov, doce: también `cita.html`, `productos.html` y `producto.html`) con `assets/grupo.js` y `assets/grupo.css`, siguiendo la regla del 19 nov, con la estructura y las medidas de la Cumbre y los colores de CTH (azul marino, verde y verde claro para «Estás aquí»). Reemplaza, solo para estas dos piezas, «en CTH se aplica al migrar».
  - La **sección «Un solo ecosistema», los puentes y el bloque del grupo en Corporativo siguen reservados** e invisibles hasta la migración (los puentes, además, esperan la validación de la Dra. Milagros Jaimes).
  - Enlaces: Medical Shields a medicalshields.com y la Cumbre a cumbrechp.org, en otra pestaña; Cuidamos tu Herida lleva al inicio y dice «Estás aquí»; Ethical Shields AI va sin enlace, como en la Cumbre.
  - El pie del grupo no repite la política de privacidad: CTH ya la tiene en su propio pie.
  - En estas piezas del grupo la Cumbre aparece con su logo actual (II Cumbre… Heridas, Piel y Longevidad), igual que en la web de la Cumbre. El resto de la web de CTH mantiene el nombre y el logo anteriores, como decidió Jenny el 11 nov (pendiente de confirmar).

## Formularios, WhatsApp y productos (19 nov 2026, Jenny)

- **Criterio de diseño:** pantallas simples, ordenadas y con una acción clara; sin desplazamiento interminable en el teléfono. El inicio ya separa pacientes e instituciones, así que cada formulario sirve a un solo público y no lleva avisos para el otro.
- **Un solo WhatsApp para todo** (+58 416-618-1760). El texto del mensaje dice qué necesita la persona y el código dice de qué página viene:
  - «Solicitar una cita» y «Agenda una valoración preventiva»: «Hola, quiero agendar una cita (WEB-…)».
  - «Agenda con nosotros una evaluación de tu herida»: «Hola, quisiera el enlace para IRIS (WEB-…)». El equipo responde con el enlace de IRIS. Reemplaza el enlace directo al formulario de IRIS.
  - «Escríbenos por WhatsApp» y el botón flotante siguen con «Hola, quiero información (WEB-…)».
  - Códigos nuevos: `WEB-CITA` (formulario de pacientes) y `WEB-PRODUCTOS` (catálogo y fichas).
- **Formulario de pacientes «Solicita tu cita»** (`cita.html`): «Pacientes y familiares · CTH»; nombre y apellido (con la ayuda para quien pide por un familiar); ¿cómo prefieres que te contactemos?: WhatsApp (por defecto) o correo electrónico, y el campo de correo aparece solo si elige correo; ¿dónde prefieres recibir atención? (opcional): Necesito orientación, En la Unidad, Por telemedicina, A domicilio; aviso de no describir la herida ni enviar fotos.
  - Con WhatsApp no se pide el número: se abre WhatsApp con «Hola, soy <nombre>. Quiero agendar una cita. <preferencia> (WEB-CITA)».
  - Con correo se abre el programa de correo de la persona, dirigido a info@cuidamostuherida.com, con el mismo mensaje y su correo. La web no guarda ni envía datos.
  - «Prefiero que me contacten» lleva a esta página en todas las páginas de pacientes (en Corporativo, al formulario de organizaciones).
- **Formulario de Corporativo** (solo empresas y organizaciones): título «Hablemos de una colaboración»; texto «Cuéntanos qué necesita tu organización. Nuestro equipo comercial te contactará para conocer el alcance y el siguiente paso.»; campos, en este orden: tipo de organización, nombre de la organización, nombre y apellido de la persona de contacto, teléfono y correo; casilla obligatoria «Autorizo a CTH a contactarme para atender esta solicitud»; línea «No incluyas datos de salud de ninguna persona.»; botón «Enviar solicitud». Salen sector, número de trabajadores, cargo e interés. El envío sigue pendiente hasta la migración.
  - «Hospital, clínica o consultorio» se queda: en Venezuela un consultorio, aunque lleve el nombre del médico, es una empresa.
- **Productos:** CTH prefiere no darle tanta publicidad a la venta; le interesan más los servicios.
  - En el inicio queda un bloque corto, «Productos que usamos en tu tratamiento», después de Historias reales, con las marcas y el botón «Ver productos». Sin tarjetas ni formulario. Reemplaza la sección grande y el formulario del 11 nov.
  - Catálogo en `productos.html` y una ficha por producto en `producto.html?p=<id>`, según el modelo de Jenny: ruta, foto oficial, marca, nombre, tipo, descripción, «Presentación de interés» (arranca en «Necesito orientación»), «Consulta con un especialista» y «Consultar disponibilidad» por WhatsApp (el mensaje nombra el producto y la presentación elegida), y «Qué aporta esta tecnología» en tres puntos. Datos en `assets/productos.js`.
  - El menú «Productos» lleva al catálogo en las doce páginas.
- **Textos de productos:** las funciones e indicaciones declaradas por el fabricante se publican tal cual, sin validación de la Dra. Milagros. Ella valida solo los textos clínicos propios de CTH (servicios, beneficios, prevención y casos).

## Cierre de los ajustes del grupo (20 nov 2026, Jenny)

Decisiones cerradas. No se vuelven a preguntar.

- **Encabezado y pie del grupo: visibles siempre**, en la propuesta y en el sitio final, en las doce páginas. Reemplaza toda indicación anterior de dejarlos reservados hasta la migración. La sección del ecosistema, los puentes y el bloque del grupo en Corporativo siguen reservados hasta la migración (sin cambios).
- **Nombres de las cuatro empresas:** Medical Shields, Cuidamos tu Herida (CTH), **Cumbre CHP** y **Ethical Shields AI**. En los documentos no se escribe «Ethical Shields» solo, para no confundir a Ethical Shields AI con Ethical Shields Group.
- **Logo del grupo:** el comité eligió «Evolución de origen» el 16 nov y Jenny aprobó la versión B el 18 nov. **Completado.**
- **Pie del grupo igual que el de la Cumbre** (logo completo del grupo): 80 px de alto en computadora y tablet; en teléfono, 70 px con 16 px de margen a cada lado, y 58 px desde 340 px. Reemplaza los 62 px (desde 380 px) y 54 px (desde 340 px) del 19 nov. Medido el 20 nov contra cumbrechp.pages.dev: mismas medidas en todos los anchos, sin desborde en las doce páginas de 1440 a 340 px. **Completado.**

## Shopify (24 nov 2026, Jenny)

- **Se conserva la cuenta y la tienda de Shopify de CTH** (no se migra a otra tienda ni a otra cuenta), por el historial, los pagos y el SEO. El detalle de seguridad de la cuenta no va en este repositorio (es público).
- **Al publicar la web nueva, CTH deja de vender en línea por Shopify.** Todas las compras se atienden por WhatsApp, como ya prevé la web (sin precios ni venta en línea, 11 nov). Respuesta del equipo de CTH a la pregunta de Jenny. Las direcciones de productos y colecciones se tratan según `docs/MIGRACION-CTH.md`.
- **No se usa WordPress** (se reconfirma la decisión del 30 oct ante la consulta del equipo).
