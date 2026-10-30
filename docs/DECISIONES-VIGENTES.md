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
