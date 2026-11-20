/* Catálogo y ficha de producto (19 nov 2026).
   Lee los datos de assets/productos.js. En productos.html arma la lista (#catalogo);
   en producto.html arma la ficha (#ficha) del producto que indica ?p=<id>.
   Los botones abren WhatsApp con un mensaje listo y el código WEB-PRODUCTOS. La web no vende ni muestra precios. */
(function () {
  'use strict';

  var WA = 'https://wa.me/584166181760?text=';
  var CODIGO = 'WEB-PRODUCTOS';
  var DATOS = window.CTH_PRODUCTOS || [];

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function wa(texto) {
    return WA + encodeURIComponent(texto + ' (' + CODIGO + ')');
  }
  function foto(p, alto) {
    var base = 'border-radius: 20px; background: #EEF4F5; display: flex; flex-direction: column; align-items: center; justify-content: center; gap: 14px; text-align: center; padding: 24px; box-sizing: border-box; font-size: 14px; color: #013451; min-height: ' + alto + 'px;';
    if (p.foto) return '<div style="' + base + ' padding: 0; overflow: hidden;"><img src="' + esc(p.foto) + '" alt="' + esc(p.nombre) + '" style="width: 100%; height: 100%; object-fit: contain; display: block;"></div>';
    return '<div style="' + base + '"><span aria-hidden="true" style="width: 68px; height: 68px; border-radius: 16px; border: 1px solid #C9D9DE; background: #FFFFFF; display: flex; align-items: center; justify-content: center;">' +
      '<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#167E89" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="4" width="18" height="16" rx="2"></rect><circle cx="9" cy="10" r="2"></circle><path d="M21 17l-5-5-9 8"></path></svg></span>' +
      '[Fotografía oficial del producto]</div>';
  }

  // ---------- Catálogo ----------
  var cat = document.getElementById('catalogo');
  if (cat) {
    cat.innerHTML = DATOS.map(function (p) {
      return '<a href="producto.html?p=' + encodeURIComponent(p.id) + '" class="prod-card" style="display: flex; flex-direction: column; gap: 14px; padding: 16px; border-radius: 18px; border: 1px solid #C9D9DE; background: #FFFFFF; color: #013451; text-decoration: none;">' +
        foto(p, 170) +
        '<span style="display: flex; flex-direction: column; gap: 6px; padding: 0 6px 6px;">' +
          '<span style="font-size: 13px; font-weight: 700; color: #167E89; text-transform: uppercase; letter-spacing: 0.08em;">' + esc(p.marca) + '</span>' +
          '<span style="font-size: 20px; font-weight: 700;">' + esc(p.nombre) + '</span>' +
          '<span style="font-size: 15px; line-height: 1.5; color: #514C4C;">' + esc(p.tipo) + '</span>' +
          '<span style="font-size: 15px; font-weight: 700; color: #167E89; margin-top: 4px;">Ver ficha →</span>' +
        '</span></a>';
    }).join('');
  }

  // ---------- Ficha ----------
  var ficha = document.getElementById('ficha');
  if (!ficha) return;
  var id = '';
  try { id = new URLSearchParams(window.location.search).get('p') || ''; } catch (e) { id = ''; }
  var p = null;
  for (var i = 0; i < DATOS.length; i++) if (DATOS[i].id === id) p = DATOS[i];

  if (!p) {
    ficha.innerHTML = '<div style="max-width: 1200px; margin: 0 auto; padding: 64px 24px; display: flex; flex-direction: column; gap: 16px; align-items: flex-start;">' +
      '<h1 style="margin: 0; font-size: 32px; color: #013451;">No encontramos este producto</h1>' +
      '<a href="productos.html" style="font-size: 17px; font-weight: 700; color: #167E89;">Ver todos los productos →</a></div>';
    return;
  }

  document.title = p.nombre + ' · Productos · CTH · Propuesta para revisión';
  var desc = p.descripcion ? esc(p.descripcion) : '[Descripción según la ficha del fabricante]';
  var opciones = '<option value="">Necesito orientación</option>' +
    (p.presentaciones.length
      ? p.presentaciones.map(function (x) { return '<option>' + esc(x) + '</option>'; }).join('')
      : '<option value="" disabled>[Presentaciones según la ficha del fabricante]</option>');
  var aporta = p.aporta.length ? p.aporta : [
    { t: '[Función 1]', d: '[Según la ficha del fabricante]' },
    { t: '[Función 2]', d: '[Según la ficha del fabricante]' },
    { t: '[Función 3]', d: '[Según la ficha del fabricante]' }
  ];
  var btn = 'display: inline-flex; align-items: center; justify-content: center; gap: 10px; min-height: 52px; padding: 0 24px; border-radius: 999px; font-weight: 700; font-size: 17px; text-decoration: none; box-sizing: border-box; width: 100%;';
  var icoChat = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 11.5a8.4 8.4 0 0 1-12.5 7.4L3 20.5l1.6-5.3A8.4 8.4 0 1 1 21 11.5z"></path></svg>';
  var icoCaja = '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M21 8l-9-5-9 5 9 5 9-5z"></path><path d="M3 8v8l9 5 9-5V8"></path><path d="M12 13v8"></path></svg>';

  ficha.innerHTML =
    '<div style="border-bottom: 1px solid #E3ECEF;"><nav aria-label="Ruta" style="max-width: 1200px; margin: 0 auto; padding: 16px 24px; font-size: 14px; color: #514C4C;">' +
      '<a href="index.html" style="color: #167E89;">CTH</a> / <a href="productos.html" style="color: #167E89;">Productos</a> / <span aria-current="page">' + esc(p.familia) + '</span></nav></div>' +
    '<section style="max-width: 1200px; margin: 0 auto; padding: 32px 24px 40px; display: flex; flex-wrap: wrap; gap: 32px 48px; align-items: flex-start;">' +
      '<div style="flex: 1 1 280px; max-width: 460px; min-width: 0;">' + foto(p, 320) + '</div>' +
      '<div style="flex: 1 1 360px; min-width: 0; display: flex; flex-direction: column; gap: 14px;">' +
        '<p style="margin: 0; font-size: 13px; font-weight: 700; color: #167E89; text-transform: uppercase; letter-spacing: 0.12em;">' + esc(p.marca) + '</p>' +
        '<h1 style="margin: 0; font-size: 36px; line-height: 1.15; font-weight: 700; color: #013451;">' + esc(p.nombre) + '</h1>' +
        '<p style="margin: 0; font-size: 19px; color: #013451;">' + esc(p.tipo) + '</p>' +
        '<p style="margin: 0; font-size: 16px; line-height: 1.6; color: #514C4C;">' + desc + '</p>' +
        '<label style="display: flex; flex-direction: column; gap: 8px; font-size: 15px; font-weight: 700; color: #013451; margin-top: 6px;">Presentación de interés' +
          '<select id="presentacion" style="min-height: 50px; padding: 0 14px; border-radius: 12px; border: 1px solid #C9D9DE; font-family: Roboto, Arial, sans-serif; font-size: 16px; color: #013451; background: #FFFFFF;">' + opciones + '</select></label>' +
        '<p style="margin: -4px 0 0; font-size: 13px; color: #514C4C;">Medidas del fabricante. Consulta las presentaciones disponibles en CTH.</p>' +
        '<a id="btn-especialista" target="_blank" rel="noopener" style="' + btn + ' background: #84B953; color: #013451;">' + icoChat + 'Consulta con un especialista</a>' +
        '<a id="btn-disponibilidad" target="_blank" rel="noopener" style="' + btn + ' background: #FFFFFF; color: #167E89; border: 2px solid #167E89;">' + icoCaja + 'Consultar disponibilidad</a>' +
        '<p style="margin: 0; font-size: 14px; line-height: 1.5; color: #514C4C;">¿No sabes cuál elegir? El especialista puede orientarte. Si ya conoces el producto, pregunta por su disponibilidad.</p>' +
      '</div>' +
    '</section>' +
    '<section style="border-top: 1px solid #E3ECEF;"><div style="max-width: 1200px; margin: 0 auto; padding: 32px 24px 48px; display: flex; flex-direction: column; gap: 22px;">' +
      '<h2 style="margin: 0; font-size: 26px; font-weight: 700; color: #013451;">Qué aporta esta tecnología</h2>' +
      '<div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px 32px;">' +
        aporta.map(function (a) {
          return '<div style="display: flex; flex-direction: column; gap: 6px;"><h3 style="margin: 0; font-size: 17px; font-weight: 700; color: #013451;">' + esc(a.t) + '</h3>' +
            '<p style="margin: 0; font-size: 15px; line-height: 1.55; color: #514C4C;">' + esc(a.d) + '</p></div>';
        }).join('') +
      '</div>' +
      '<div style="display: flex; flex-wrap: wrap; justify-content: space-between; align-items: center; gap: 12px 24px; padding-top: 22px; border-top: 1px solid #E3ECEF; font-size: 15px;">' +
        (p.ficha
          ? '<a href="' + esc(p.ficha) + '" target="_blank" rel="noopener" style="font-weight: 700; color: #167E89;">Ver la ficha técnica del fabricante ↗</a>'
          : '<span style="color: #514C4C;">[Ficha técnica del fabricante, por enviar]</span>') +
        '<a href="productos.html" style="font-weight: 700; color: #167E89;">← Ver todos los productos</a>' +
      '</div>' +
    '</div></section>';

  // Los mensajes de WhatsApp dicen el producto y, si la eligió, la presentación.
  var sel = document.getElementById('presentacion');
  var bEsp = document.getElementById('btn-especialista');
  var bDisp = document.getElementById('btn-disponibilidad');
  function actualizar() {
    var pres = sel.value ? ', presentación ' + sel.value : '';
    bEsp.href = wa('Hola, quiero consultar con un especialista sobre ' + p.nombre);
    bDisp.href = wa('Hola, quiero consultar la disponibilidad de ' + p.nombre + pres);
  }
  sel.addEventListener('change', actualizar);
  actualizar();
})();
