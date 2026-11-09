# PENDIENTES — Rediseño web de CTH

Última actualización: 9 nov 2026.

## Enviado a CTH (mensaje de nueve puntos, 30 oct)

| # | Pendiente | Estado |
|---|---|---|
| 1 | ¿Existe un documento de alcance y objetivos además del diseño? | Esperando |
| 2 | Clientes del servicio para empresas: ¿todos (seguros, corporativos, clínicas, hospitales, consultorios) o solo seguros y corporativos? | Orientación de Daniel (9 nov): empresas, aseguradoras, Estado y organizaciones sin fines de lucro. Falta lo que ofrecen y sus beneficios (ver Corporativo abajo) |
| 3 | Venta de productos: confirmar que la web no vende ni muestra precios y que una persona de CTH atiende la compra | Esperando |
| 4 | Confirmar que sigue vigente el catálogo del 26 ago (Covalon y Platsul) | Esperando |
| 5 | Acceso a Shopify y a Google Search Console | Esperando |
| 6 | Correo de destino de los formularios y quién los atiende | Esperando |
| 7 | Fecha esperada de publicación | Esperando |
| 8 | «Farmacia» en el menú: ¿servicio aparte o catálogo? | Esperando |
| 9 | Materiales: videos y fotos originales, vigencia de las cifras, logos autorizados, casos y testimonios con autorización | Esperando. El 9 nov CTH quedó en enviar más fotos y un video; puede hacer falta editar un video único con todo |

## Feedback de la propuesta

- Enviado al equipo y a Social Media el 30 oct. Esperando comentarios.
- Los cambios del 9 nov (tres módulos y seis landing pages) se envían cuando Jenny los suba.

## Contenido que falta por landing (9 nov)

| Página | Falta |
|---|---|
| Todas | Beneficios de cada servicio (validar con la Dra. Milagros Jaimes) y fotos propias |
| Unidad | Enlaces de Google Maps de las dos sedes |
| Atención domiciliaria | Qué servicios se hacen a domicilio; zonas de cobertura en Caracas; foto de una visita |
| Telemedicina | Plataforma y requisitos para conectarse; foto |
| Prevención de complicaciones | Otros casos en los que aplica la prevención; foto |
| Cuidamos tu piel | Especificaciones, usos y beneficios del láser nuevo; nombre, credenciales y días de la dermatóloga; tratamientos de cosmetología; qué incluyen los péptidos y cómo se indican; si siguen «cicatrices y marcas» y «colágeno»; fecha de apertura; foto |
| Corporativo e instituciones | Beneficios y lo que se busca lograr (Daniel lo va a enviar); condiciones con aseguradoras; modalidades para instituciones; alcance de la capacitación a hospitales y clínicas |

## Corporativo (9 nov)

- Presentar a CTH la propuesta del área corporativa (Doc de Claude, enlace en `ESTADO.md`) y obtener sus decisiones: segmentos, modelos de convenio, tarifas y paquetes (Administración y Finanzas), capacidad mensual, responsable y revisión legal.
- **Revisión legal:** un paquete de cuota fija que cubra lo que cada persona necesite puede encuadrarse como medicina prepagada, que es actividad regulada. La propuesta plantea vender servicios definidos con cupo. Debe revisarlo un abogado antes del primer contrato.
- **Inconsistencia en preguntas frecuentes:** la respuesta «¿Aceptan seguros médicos?» dice que no hay convenio directo con aseguradoras, y la página Corporativo ofrece convenios con aseguradoras. Confirmar con CTH cuál vale hoy antes de publicar.

## Dra. Milagros Jaimes

- Escribirle un correo pidiendo las credenciales y los días de consulta de cada especialista, con su autorización para publicarlos (Jenny tiene los nombres).
- Validar las respuestas de preguntas frecuentes que se adaptaron del cuestionario del bot: tiempo de cierre, curaciones, seguros, comprar sin consulta, quién atiende.
- Validar los textos de prevención, las afirmaciones clínicas de la web y los beneficios de cada landing.

## CTH — Cuidado integral de la piel

- Qué servicios tendrá el área y desde cuándo (9 nov: láser, dermatología, cosmetología y péptidos; ver la tabla de arriba).
- Si péptidos y colágeno son productos de Medical Shields.

## Material y autorizaciones

- Autorización de las personas que aparecen en el video y en las fotos (paciente y equipo). La landing de Unidad usa las fotos del consultorio y del equipo atendiendo.
- Fotos de hospitales, clínicas, empresas o reuniones con aseguradoras para Corporativo.
- Video nuevo con los tres pilares (tratar, prevenir, cuidar la piel), propuesto por Jenny.
- Archivo fuente del diseño aprobado (Figma, Canva u otro) o manual de marca, para confirmar colores y tipografía.
- Logo en SVG, en color y en blanco.
- Si OH Laboratorio se presenta como aliado (hoy solo aparece en la dirección de Altamira, como referencia).

## Decisiones de Jenny

- Confirmar «usted» para instituciones y «tú» para pacientes. Hoy el formulario de Corporativo dice «tu organización».
- Consultas institucionales de productos: ¿casos de CTH o de Medical Shields? (con Gerencia Comercial).
- Fase 2A (conexión con GMS): contrato de seis campos o ampliarlo; responsable y primera tarea del caso; lista de opciones de intención.

## Técnico

- Revisar el plan de la cuenta de Netlify (dominio propio y límites).
- Menú desplegable para teléfono (ahora son seis opciones más el botón, ocupa tres líneas a 390 px).
- El formulario de Corporativo no envía nada todavía; en la fase 1 lo hará la función de Netlify.
- Finales de línea: la copia local tiene todos los archivos en CRLF y el repositorio en LF, por eso Git marca cada archivo como cambiado completo. Decidir si se configura `core.autocrlf` o un `.gitattributes`.
