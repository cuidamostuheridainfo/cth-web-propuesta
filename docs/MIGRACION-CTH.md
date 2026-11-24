# MIGRACIÓN DE CTH — Inventario SEO y mapa de redirecciones

Inventario del sitio actual (Shopify) hecho el 24 nov 2026, solo con la parte pública. Sirve para llevar cuidamostuherida.com a Cloudflare Pages sin perder posicionamiento. **No hay `_redirects` todavía:** se arma cuando estén las decisiones de abajo y los datos de Search Console.

Reglas vigentes (no se reabren): se conservan las rutas del blog `/blogs/aprenda-mas/<slug>`; 301 de servidor, sin cadenas; 404 o 410 si no hay equivalente real; nunca todas a la portada; decisión dirección por dirección con datos de Search Console.

## Qué se revisó

- Mapa del sitio de Shopify (`/sitemap.xml`): **111 direcciones**. Todas responden 200, con canónica propia y sin `noindex`.
- `www.cuidamostuherida.com` redirige con 301 a `cuidamostuherida.com`: la canónica es sin www.
- Inventario completo, con la propuesta de destino de cada dirección: `docs/seo/inventario-shopify.tsv`.

| Tipo | Cantidad | Propuesta |
|---|---|---|
| Portada | 1 | Se conserva |
| Blog y artículos | 1 + 32 | Se conservan con la misma ruta (decidido). Hay que crear las 33 páginas en el sitio nuevo |
| Productos con ficha en la propuesta | 5 | Se conservan (D1) |
| Productos Covalon y Platsul sin ficha | 11 | Dependen del catálogo (D1, D3) |
| Productos de minoristas | 16 | 410 (retirados el 30 oct), salvo que Search Console muestre visitas o enlaces |
| Colecciones | 25 | 20 con 301 (19 a `/productos` y `frontpage` a la portada) y 5 de minoristas con 410 |
| Páginas | 20 | 9 con 301 a su equivalente; 11 casos clínicos por decidir (D6) |

## Decisiones que hacen falta

- **D1. Ruta de las fichas de producto.** Hoy la ficha es `producto.html?p=<id>`, y ya estaba previsto hacer una página estática por producto al migrar.
  - A: la página estática usa la misma ruta de Shopify (`/products/<slug>`). No hay redirección y se conserva todo el posicionamiento, igual que con el blog. Recomendado.
  - B: ruta nueva y 301 desde la de Shopify.
- **D2. La tienda de Shopify después de la migración: decidido (24 nov).** Al publicar la web nueva, **CTH deja de vender en línea por Shopify** y todas las compras se atienden por WhatsApp. La cuenta y la tienda se conservan por el historial y los pagos (decisión del mismo día). No hace falta un subdominio para la tienda: los productos, las colecciones y «¿Cómo comprar?» siguen el inventario (catálogo nuevo o 410). Antes de cambiar el dominio, cerrar los pedidos y pagos pendientes.
- **D3. Catálogo completo.** Hay 11 productos de Covalon y Platsul sin ficha. Depende de la planilla (fila 11): con ficha, se conservan; sin ficha, 301 a `/productos`.
- **D4. Artículos con el mismo tema.** Tres artículos sobre la diferencia entre gasa y apósito, y dos sobre colágeno y cicatrización. Con Search Console se decide si se unen (301 al que tenga más visitas) o se quedan los dos.
- **D5. Página de privacidad.** El sitio nuevo no la tiene: el enlace del pie va a `#inicio`. Shopify tiene `/pages/privacy` y `/policies/privacy-policy`. Hace falta la página y el texto vigente de CTH.
- **D6. Casos clínicos (11 páginas).** Ejemplos: «Úlcera por presión sacra grado IV» y «Quemadura de tercer grado». Opciones:
  - conservarlos como páginas propias, con la validación de la Dra. Milagros y el consentimiento de cada paciente;
  - 301 a «Historias reales» (para Google equivale a la portada);
  - 410.

## Qué falta para cerrar el mapa

1. **Search Console** (sigue abierto): visitas, enlaces externos y direcciones que no están en el mapa del sitio. Puede cambiar algunos 410 a 301 y define D4 y D6.
2. **Administrador de Shopify**:
   - las redirecciones que ya existen (Tienda online → Navegación → Redirecciones de URL), para no crear cadenas;
   - qué productos tiene cada colección (la consulta pública se cortó por límite de consultas);
   - las páginas ocultas que no aparecen en el mapa del sitio.
3. **Contenido de los 32 artículos**, para crear sus páginas: se exporta desde Shopify.

## Notas técnicas para `_redirects`

- Cuatro productos tienen «®» en la ruta (`%C2%AE`). La canónica de Shopify lo escribe en minúsculas (`%c2%ae`): las dos formas deben responder igual.
- Rutas de Shopify fuera del mapa del sitio que también hay que cubrir con reglas generales:
  - `/collections/*/products/<slug>` va igual que `/products/<slug>`;
  - `/collections/all`;
  - `/blogs/aprenda-mas/tagged/*`;
  - `/policies/*`;
  - `/cart`, `/account` y `/search`.
- En Cloudflare Pages, las páginas nuevas se sirven sin `.html` (`/unidad`, `/productos`), como en la Cumbre.
- Modelo: `cumbre-web/docs/preparado-migracion/` (`_redirects` y `404.html`).
