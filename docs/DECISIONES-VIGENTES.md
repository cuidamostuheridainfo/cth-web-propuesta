# DECISIONES VIGENTES — Rediseño web de CTH

Solo se agregan decisiones. Si una cambia, se marca la anterior como superada con la fecha.

## Enfoque (30 oct 2026)

- Tres frentes: pacientes (B2C), instituciones (aseguradoras, hospitales, clínicas, cirujanos y empresas) y productos con asesoría, sin precios.
- Tres pilares para pacientes: **tratamos** heridas, **prevenimos** complicaciones (antes y después de una cirugía, pacientes en cama, personas con diabetes) y **cuidamos la piel** (área nueva, Próximamente).
- Lema: «Cuidamos tu piel, curamos tu herida».
- CTH es **organizador** de la Cumbre Internacional para el Cuidado Avanzado de Heridas y Piel (no patrocinador).

## Plataforma y fases

- Fase 1: código propio en **Netlify** (Jenny ya tiene cuenta), con redirecciones 301 de servidor. GitHub Pages solo para la propuesta, no para el sitio final.
- El contenido se guarda separado del código para que en la fase 2B el equipo lo maneje con un gestor de contenido. No se migra a WordPress.
- Fase 1: los formularios envían el lead por correo desde una función de Netlify, sin guardarlo en ninguna base.
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

- Botones: «Solicitar una cita» (WhatsApp) y «Prefiero que me contacten» (formulario). En productos: «Saber más sobre este producto» abre la ficha; dentro, «Consulta con un especialista».
- «Agenda con nosotros una evaluación de tu herida» lleva al formulario de IRIS. No se usa «Evalúa tu herida».
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

## Ecosistema del Grupo Medical Shields (10 y 11 nov 2026)

- CTH sigue el plan común de las cuatro webs: documento «Grupo Medical Shields: un solo ecosistema web» (https://claude.ai/artifact/C9587Udj2jDw2fovZcsVv1). Las decisiones del grupo se toman allí, no en este repositorio.
- Cuatro marcas: Medical Shields, Cuidamos tu Herida, Cumbre y Ethical Shields. Cada una conserva su web y su dominio. Nombre visible: «Grupo Medical Shields». Lema: «Ecosistema de Salud y Bienestar Integral».
- Piezas comunes: barra del grupo arriba, pie del grupo, sección «Un solo ecosistema», puentes en contexto y sello de cuatro anillos en rombo.
- **En CTH las piezas están reservadas, invisibles, en el código (11 nov).** Se aplican cuando el cliente apruebe el plan con el video (fase 2 del plan). Cada reserva lleva un comentario que dice qué va y un contenedor oculto con `data-grupo`:
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
- **Productos:** la web no vende ni muestra precios; una persona de CTH atiende la compra, como hasta ahora. Para captar el contacto hay un formulario «¿Te interesa un producto?» en la sección Productos del inicio (`#info-producto`): nombre y teléfono obligatorios, producto de interés y correo opcional, código `WEB-PRODUCTOS`. La llamada la hace la ejecutiva de telemarketing.
- **Textos de la Dra. Milagros Jaimes** (equipo, láser, fisiatría con láser, ecografía y Doppler): están validados por ella y van tal cual. Solo se aplican las reglas de lenguaje vigentes («Heridas que tratamos», «úlceras vasculares»). «Lesión» se mantiene donde se refiere a músculos, tendones o articulaciones.
- **Equipo de la Unidad:** nueve especialistas con nombre, especialidad y áreas. Entra **Traumatología y ortopedia** (Dr. José Gregorio Barrio). **Medicina general** la atiende la Dra. Milagros. El equipo va a crecer: se mantiene en `assets/equipo.js`, separado del código.
- **Láser:** es un solo equipo con varias funciones. Está activo en Cuidamos tu herida (cicatrización avanzada) y también se usa en fisiatría, en la prevención (antes y después de una cirugía) y, próximamente, en cosmetología y cuidado antienvejecimiento.
- **Fisiatría avanzada y terapia láser** es un **módulo aparte**, para darle más relevancia, y además se incluye en Cuidamos tu herida. Va **después de Cuidamos tu herida**: Corporativo · Cuidamos tu herida · Fisiatría avanzada y terapia láser · Prevención y cuidado de la piel. Landing `fisiatria.html`, código `WEB-FISIATRIA`. Precisa la estructura del 9 nov, no la reemplaza.
- **Menú:** dice solo «Fisiatría» para que la cabecera quepa en una línea en escritorio y no pese en el teléfono. El nombre completo va en la tarjeta, la landing y el pie. Por debajo de 1100 px el menú es desplegable.
- **Ecografía y Doppler** es un servicio de Cuidamos tu herida y de Prevención y cuidado de la piel. Se dice que **se hacen jornadas de ecografía** y que **próximamente se publicará la nueva jornada**. Código `WEB-ECOGRAFIA`.
- **Dermatóloga:** queda pendiente; CTH sigue conversando con ella. La **estética facial del Dr. Lozada** va en Cosmetología, dentro de Cuidamos tu piel.
- **Publicación:** todavía no se publica como sitio final.
