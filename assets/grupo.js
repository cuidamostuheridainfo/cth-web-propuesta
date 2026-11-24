/* Ethical Shields Group · encabezado y pie del grupo en la propuesta de CTH (19 nov 2026)
   Regla del grupo del 19 nov (cumbre-web/docs/DECISIONES-VIGENTES.md). Mismas marcas, textos y orden que la Cumbre
   (cumbre-web/assets/js/ecosistema-propuesta.js). Arma el contenido de data-grupo="barra" y data-grupo="pie".
   La sección «Un solo ecosistema» y los puentes siguen reservados e invisibles.
   Un cambio en el encabezado o el pie del grupo se hace aquí, no en las doce páginas. */
(function () {
  'use strict';

  var G = 'assets/grupo/';
  var LOGO_COMPACTO = G + 'logo-esg-compacto-claro.svg';     // encabezado: sin descriptor
  var LOGO_COMPLETO = G + 'logo-esg-horizontal-claro.svg';   // lista y pie: con «Salud · Tecnología · Innovación»
  var DESCRIPTOR = 'Salud · Tecnología · Innovación';

  // Las cuatro marcas, en el mismo orden que la Cumbre (Jenny, 19 nov 2026).
  var MARCAS = [
    { id: 'ms', nombre: 'Medical Shields', desc: 'Casa de representación',
      url: 'https://medicalshields.com', logo: G + 'logo-medical-shields-claro.svg' },
    { id: 'cth', nombre: 'Cuidamos tu Herida', desc: 'Atención médica especializada',
      url: 'index.html', actual: true, logo: 'assets/logo-cth.png' },
    { id: 'cumbre', nombre: 'II Cumbre Internacional para el Cuidado Avanzado de Heridas, Piel y Longevidad', corto: 'Cumbre',
      desc: 'Educación médica continua', url: 'https://cumbrechp.org', logo: G + 'logo-cumbre-27-oscuro-1000.webp' },
    // Sin dirección todavía: se muestra sin enlace, como en la Cumbre.
    { id: 'es', nombre: 'Ethical Shields AI', desc: 'Inteligencia artificial para empresas', pendiente: true, es: true }
  ];

  function esc(t) {
    return String(t).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
  }
  function logoGrupo(archivo, alto, alt) {
    return '<span class="glogo" style="--gl-h:' + alto + 'px"><img src="' + archivo + '" width="687" height="140" alt="' + alt + '"></span>';
  }
  function logoMarca(m) {
    if (m.es) return '<span class="es-logo"><img src="' + G + 'es-marca.png" alt="">Ethical Shields AI</span>';
    return '<img src="' + m.logo + '" alt="' + esc(m.nombre) + '">';
  }
  // Abre la etiqueta de una marca: enlace si tiene dirección; si no, texto sin enlace.
  function abrir(m, clase, extra) {
    var c = clase ? ' class="' + clase + '"' : '';
    var d = ' data-marca="' + m.id + '"' + (extra || '');
    if (m.pendiente) return { ini: '<span' + (clase ? ' class="' + clase + ' gsel-item"' : ' class="gsel-item"') + d + '>', fin: '</span>' };
    if (m.actual) return { ini: '<a' + c + d + ' href="' + m.url + '" aria-current="page">', fin: '</a>' };
    return { ini: '<a' + c + d + ' href="' + m.url + '" target="_blank" rel="noopener">', fin: '</a>' };
  }

  // ---------- Encabezado del grupo ----------
  function armarBarra(cont) {
    var lista = MARCAS.map(function (m) {
      var e = abrir(m);
      return e.ini + '<span class="gsel-logo">' + logoMarca(m) + '</span>' +
        '<span class="gsel-txt"><strong>' + esc(m.corto || m.nombre) + '</strong>' + esc(m.desc) + '</span>' +
        (m.actual ? '<span class="gsel-aqui">Estás aquí</span>' : m.pendiente ? '<span></span>' : '<span class="gsel-ir" aria-hidden="true">↗</span>') + e.fin;
    }).join('');
    cont.className = 'gbar';
    cont.innerHTML =
      '<div class="gbar-in">' +
        '<span class="gbar-pde">Parte de</span>' +
        logoGrupo(LOGO_COMPACTO, 42, 'Ethical Shields Group') +
        '<span class="gbar-sep" aria-hidden="true"></span>' +
        '<span class="gbar-parte">' + DESCRIPTOR + '</span>' +
        '<span class="gbar-esp"></span>' +
        '<button class="gbar-btn" type="button" aria-expanded="false" aria-controls="gsel">Conoce el grupo ' +
          '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.6" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M6 9l6 6 6-6"></path></svg>' +
        '</button>' +
      '</div>' +
      '<div class="gsel" id="gsel" role="region" aria-label="Marcas de Ethical Shields Group" hidden>' +
        '<div class="gsel-tit">' + logoGrupo(LOGO_COMPLETO, 60, 'Ethical Shields Group · ' + DESCRIPTOR) + '</div>' +
        '<div>' + lista + '</div>' +
      '</div>';

    // «Conoce el grupo» no lleva a otra página: abre y cierra la lista de marcas.
    var btn = cont.querySelector('.gbar-btn');
    var panel = cont.querySelector('#gsel');
    function cerrar() { panel.hidden = true; btn.setAttribute('aria-expanded', 'false'); }
    btn.addEventListener('click', function (e) {
      e.stopPropagation();
      var abrirlo = panel.hidden;
      panel.hidden = !abrirlo;
      btn.setAttribute('aria-expanded', String(abrirlo));
    });
    document.addEventListener('click', function (e) { if (!panel.hidden && !panel.contains(e.target)) cerrar(); });
    document.addEventListener('keydown', function (e) { if (e.key === 'Escape' && !panel.hidden) { cerrar(); btn.focus(); } });
  }

  // ---------- Pie del grupo ----------
  function armarPie(cont) {
    var logos = MARCAS.map(function (m) {
      var e = m.pendiente
        ? { ini: '<span class="gpie-marca" data-marca="' + m.id + '" aria-label="' + esc(m.nombre) + '">', fin: '</span>' }
        : abrir(m, '', ' aria-label="' + esc(m.corto || m.nombre) + '"');
      return e.ini + logoMarca(m) + e.fin;
    }).join('');
    cont.className = 'gpie';
    cont.innerHTML =
      '<div class="gpie-in">' +
        logoGrupo(LOGO_COMPLETO, 80, 'Ethical Shields Group · ' + DESCRIPTOR) +
        '<span class="gpie-sep" aria-hidden="true"></span>' +
        '<nav class="gpie-logos" aria-label="Marcas de Ethical Shields Group">' + logos + '</nav>' +
      '</div>';
  }

  var barra = document.querySelector('[data-grupo="barra"]');
  var pie = document.querySelector('[data-grupo="pie"]');
  if (barra) armarBarra(barra);
  if (pie) armarPie(pie);
})();
