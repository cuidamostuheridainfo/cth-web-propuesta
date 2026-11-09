# ESTADO — Rediseño web de CTH

Última actualización: 9 nov 2026.

## Dónde estamos

- **Fase actual:** propuesta de diseño con el inicio reorganizado en tres módulos y seis landing pages. Se trabajó el 9 nov a partir de lo que pidió Daniel: resaltar cada servicio por separado y darle más peso a lo corporativo.
- **Publicada en:** https://cuidamostuheridainfo.github.io/cth-web-propuesta/ (con `noindex`). Los cambios del 9 nov se publican cuando Jenny haga el commit y lo suba a `main`.
- **Documento de diseño completo:** Doc de Claude (enlace en `CLAUDE.md`), secciones 1 a 14. No se actualizó el 9 nov; la estructura vigente es la de este archivo y `DECISIONES-VIGENTES.md`.
- **Propuesta del área corporativa (9 nov):** Doc de Claude «CTH Corporativo — Propuesta para desarrollar el área de servicios a empresas»: https://claude.ai/artifact/B64YgbKyJW7if5Zo7WPfvW. Es para presentarla a CTH; contiene análisis comercial interno y **no** se sube a este repositorio público.
- Las respuestas de CTH al mensaje de nueve puntos del 30 oct y el feedback de Social Media todavía no llegan.

## Qué tiene la propuesta

### Inicio (`index.html`)

1. Cabecera: logo, menú Corporativo · Cuidamos tu herida · Prevención · Productos · Aprende · Nosotros, y botón «Preguntas frecuentes».
2. Hero (sin cambios): video de la Unidad, «Soy paciente» abre Cuidamos tu herida y «Soy institución» abre Corporativo.
3. «¿Cómo podemos ayudarte?»: tres tarjetas en este orden: **Corporativo e instituciones**, **Cuidamos tu herida** y **Prevención y cuidado de la piel**. Al hacer clic se abre la tarjeta con sus opciones (en escritorio, debajo de las tres; en el teléfono, debajo de la tocada) y cada opción lleva a su landing. El menú abre la tarjeta correspondiente.
4. Cifras, «Tratamos heridas simples y de difícil cicatrización», Productos, Historias reales, Cumbre (organizadores, edición 2026 y 2027), Aprende, Preguntas frecuentes, cierre y pie.

### Landing pages

| Página | Módulo | Código de WhatsApp |
|---|---|---|
| `corporativo.html` | Corporativo e instituciones (Empresas, Aseguradoras, Instituciones, Hospitales clínicas y cirujanos, cómo trabajamos, formulario de propuesta) | `WEB-CORPORATIVO` |
| `unidad.html` | Cuidamos tu herida (sedes, qué atendemos, unidad multidisciplinaria, cómo y dónde te atendemos) | `WEB-UNIDAD` |
| `atencion-domiciliaria.html` | Cuidamos tu herida | `WEB-DOMICILIO` |
| `telemedicina.html` | Cuidamos tu herida | `WEB-TELEMEDICINA` |
| `prevencion-de-complicaciones.html` | Prevención y cuidado de la piel | `WEB-PREVENCION` |
| `cuidado-de-la-piel.html` | Prevención y cuidado de la piel (Próximamente) | `WEB-PIEL` |

El contenido que CTH todavía no ha dado (beneficios, servicios a domicilio, zonas, láser, dermatóloga, fotos) está entre corchetes. Detalle en `PENDIENTES.md`.

Revisión del 9 nov: las ocho páginas sin errores de estructura, todos los enlaces internos llevan a páginas y anclas que existen, sin errores de JavaScript y sin desborde a 390 px.

## Próximo paso

1. Jenny sube los cambios del 9 nov y envía el enlace al equipo y a Daniel.
2. Presentar a CTH la propuesta del área corporativa y obtener sus decisiones.
3. Recibir de CTH el contenido de cada landing (lista en `PENDIENTES.md`), las fotos nuevas y el video.
4. Menú desplegable para teléfono (ahora son seis opciones más el botón).
5. Plantillas de catálogo y ficha de producto.
6. Inventario SEO con datos de Search Console y mapa de redirecciones 301.

## Fases del proyecto

- **Fase 1:** sitio en código propio en Netlify; formularios envían el lead por correo, sin guardarlo en ninguna base. Contenido separado del código.
- **Fase 2A:** conexión con GMS (cada lead crea su caso comercial). Depende de la incorporación de CTH a GMS.
- **Fase 2B:** traspaso del manejo de contenido al equipo con un gestor de contenido.
