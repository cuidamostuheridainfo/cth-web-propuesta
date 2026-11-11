(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var refs = {};
  document.querySelectorAll('[data-ref]').forEach(function (el) { refs[el.getAttribute('data-ref')] = el; });

  // Equipo de la Unidad: el contenido vive en assets/equipo.js (solo se carga en unidad.html)
  var EQ = window.CTH_EQUIPO || { especialidades: [], especialistas: [] };
  var SPECS = EQ.especialidades || [];

  var state = { p: 0, heroPaused: false, soundOn: false, stepsIn: false, openStep: 0, openSpec: '', openMod: '' };

  function fmt(n) { return String(Math.round(n)).replace(/\B(?=(\d{3})+(?!\d))/g, '.'); }

  function vals() {
    var v = {};
    var p = state.p;
    v.years = '+' + fmt(20 * p);
    v.hospitals = '+' + fmt(50 * p);
    v.doctors = '+' + fmt(1000 * p);
    v.sites = fmt(2 * p);
    v.heroPaused = state.heroPaused;
    v.heroPlaying = !state.heroPaused;
    v.heroLabel = state.heroPaused ? 'Reproducir el video' : 'Pausar el video';
    v.soundOn = state.soundOn;
    v.heroMuted = !state.soundOn;
    v.soundLabel = state.soundOn ? 'Silenciar' : 'Activar sonido';
    v.stepsClass = state.stepsIn ? 'steps-in' : '';
    [1, 2, 3].forEach(function (i) {
      var open = state.openStep === i;
      v['c' + i + 'Open'] = open;
      v['c' + i + 'Class'] = 'step-card step-c' + i + (open ? ' is-active' : '');
      v['c' + i + 'Hint'] = open ? 'Cerrar ↑' : 'Ver más ↓';
    });
    v.heridasOpen = state.openSpec === 'heridas';
    v.heridasCls = 'spec-tile spec-dark' + (v.heridasOpen ? ' is-active' : '');
    v.heridasHint = v.heridasOpen ? 'Cerrar ↑' : 'Ver equipo ↓';
    v.prevOpen = state.openSpec === 'prev';
    v.prevCls = 'spec-tile spec-prev' + (v.prevOpen ? ' is-active' : '');
    v.prevHint = v.prevOpen ? 'Cerrar ↑' : 'Ver más ↓';
    [['Corp', 'corp', 1], ['Herida', 'herida', 2], ['Fis', 'fis', 4], ['Prev', 'prev', 3]].forEach(function (m) {
      var open = state.openMod === m[1];
      v['mod' + m[0] + 'Open'] = open;
      v['mod' + m[0] + 'Cls'] = 'mod-card mod-c' + m[2] + (open ? ' is-active' : '');
      v['mod' + m[0] + 'Hint'] = open ? 'Cerrar ↑' : 'Ver opciones ↓';
    });
    return v;
  }

  function render() {
    var v = vals();
    document.querySelectorAll('[data-text]').forEach(function (el) {
      var k = el.getAttribute('data-text'); if (k in v) el.textContent = v[k];
    });
    document.querySelectorAll('[data-if]').forEach(function (el) {
      var k = el.getAttribute('data-if'); if (k in v) el.hidden = !v[k];
    });
    document.querySelectorAll('[data-class]').forEach(function (el) {
      var k = el.getAttribute('data-class'); if (k in v) el.className = v[k];
    });
    ['aria-expanded', 'aria-pressed', 'aria-label'].forEach(function (a) {
      document.querySelectorAll('[data-attr-' + a + ']').forEach(function (el) {
        var k = el.getAttribute('data-attr-' + a); if (k in v) el.setAttribute(a, String(v[k]));
      });
    });
    renderSpecs();
  }

  // ---- Especialidades y especialistas (desde assets/equipo.js) ----
  var BTN_STYLE = 'min-height: 64px; padding: 16px 20px; border-radius: 14px; border: 2px solid #DCE6EA; background: #FFFFFF; color: #013451; display: flex; align-items: center; justify-content: space-between; gap: 12px; text-align: left; font-size: 16px; font-weight: 500; cursor: pointer; font-family: Roboto, Arial, sans-serif;';
  var CTA_STYLE = 'align-self: flex-start; display: inline-flex; align-items: center; min-height: 48px; padding: 0 24px; border-radius: 999px; color: #013451; font-weight: 700; font-size: 16px; text-decoration: none;';

  function node(tag, style, text) {
    var e = document.createElement(tag);
    if (style) e.setAttribute('style', style);
    if (text != null) e.textContent = text;
    return e;
  }

  function buildSpecButtons() {
    var grid = refs.specGrid;
    if (!grid) return;
    SPECS.forEach(function (sp) {
      var b = node('button', BTN_STYLE);
      b.type = 'button';
      b.className = 'spec-tile';
      b.setAttribute('data-spec', sp.id);
      b.setAttribute('aria-controls', 'espec-detalle');
      b.setAttribute('aria-expanded', 'false');
      b.appendChild(node('span', null, sp.nombre));
      var icon = node('span', 'font-size: 18px; color: #167E89;', '+');
      icon.setAttribute('aria-hidden', 'true');
      b.appendChild(icon);
      b.addEventListener('click', function () { set({ openSpec: state.openSpec === sp.id ? '' : sp.id }); });
      grid.appendChild(b);
    });
  }

  function doctorCard(d) {
    var card = node('div', 'flex: 1 1 260px; padding: 20px; border-radius: 14px; background: #FFFFFF; display: flex; gap: 16px; align-items: flex-start;');
    card.appendChild(node('div', 'width: 64px; height: 64px; border-radius: 999px; background: #D4E7EE; display: flex; align-items: center; justify-content: center; font-size: 11px; color: #013451; flex: 0 0 auto;', d.foto ? null : '[Foto]'));
    var info = node('div', 'flex: 1 1 auto; min-width: 0; display: flex; flex-direction: column; gap: 6px;');
    info.appendChild(node('h3', 'margin: 0; font-size: 18px; line-height: 1.3; font-weight: 700; color: #013451;', d.nombre));
    info.appendChild(node('span', 'font-size: 14px; font-weight: 700; color: #167E89;', d.especialidad));
    if (d.areas && d.areas.length) {
      var ul = node('ul', 'margin: 4px 0 0; padding-left: 18px; display: flex; flex-direction: column; gap: 4px; font-size: 15px; line-height: 1.5; color: #514C4C;');
      d.areas.forEach(function (a) { ul.appendChild(node('li', null, a)); });
      info.appendChild(ul);
    }
    if (d.credenciales) info.appendChild(node('span', 'font-size: 14px; line-height: 1.5; color: #514C4C;', d.credenciales));
    if (d.horario) info.appendChild(node('span', 'font-size: 14px; line-height: 1.5; color: #514C4C;', d.horario));
    card.appendChild(info);
    return card;
  }

  var shownSpec = null;
  function renderSpecs() {
    document.querySelectorAll('[data-spec]').forEach(function (b) {
      var open = state.openSpec === b.getAttribute('data-spec');
      b.className = 'spec-tile' + (open ? ' is-active' : '');
      b.setAttribute('aria-expanded', String(open));
      b.lastChild.textContent = open ? '−' : '+';
    });
    var box = refs.specPanel;
    if (!box || shownSpec === state.openSpec) return;
    shownSpec = state.openSpec;
    while (box.firstChild) box.removeChild(box.firstChild);
    var id = state.openSpec;
    if (!id || id === 'prev') return;
    var sp = id === 'heridas'
      ? { id: 'heridas', nombre: (EQ.heridas && EQ.heridas.nombre) || 'Cuidado de heridas', texto: EQ.heridas && EQ.heridas.texto }
      : SPECS.filter(function (x) { return x.id === id; })[0];
    if (!sp) return;
    var panel = node('div', 'border-radius: 18px; background: #F6F7F7; display: flex; flex-direction: column; gap: 20px;');
    panel.className = 'step-panel';
    if (sp.servicio) {
      panel.appendChild(node('span', 'font-size: 20px; font-weight: 700; color: #013451;', sp.nombre));
      panel.appendChild(node('span', 'font-size: 15px; line-height: 1.5; color: #514C4C;', sp.servicio.texto));
      var a = node('a', CTA_STYLE + ' background: #D9EBC6;', sp.servicio.boton);
      a.href = sp.servicio.enlace;
      panel.appendChild(a);
    } else {
      panel.appendChild(node('span', 'font-size: 13px; font-weight: 700; color: #167E89; text-transform: uppercase; letter-spacing: 0.06em;', sp.nombre));
      if (sp.texto) panel.appendChild(node('span', 'font-size: 15px; line-height: 1.5; color: #514C4C;', sp.texto));
      var docs = (EQ.especialistas || []).filter(function (d) { return d.en && d.en.indexOf(id) !== -1; });
      var wrap = node('div', 'display: flex; flex-wrap: wrap; gap: 14px;');
      if (docs.length) docs.forEach(function (d) { wrap.appendChild(doctorCard(d)); });
      else wrap.appendChild(doctorCard({ nombre: '[Nombre del especialista]', especialidad: sp.nombre, credenciales: '[Credenciales: universidad y número de colegiado]', horario: '[Días y horario de consulta · sede]' }));
      panel.appendChild(wrap);
      var row = node('div', 'display: flex; flex-wrap: wrap; align-items: center; gap: 20px;');
      var cta = node('a', CTA_STYLE + ' background: #84B953;', 'Agenda tu consulta');
      cta.href = '#cita';
      row.appendChild(cta);
      if (sp.enlace) {
        var more = node('a', 'font-size: 15px; font-weight: 700; color: #167E89; text-decoration: none;', sp.enlace.texto);
        more.href = sp.enlace.href;
        row.appendChild(more);
      }
      panel.appendChild(row);
    }
    box.appendChild(panel);
  }

  function set(patch) { for (var k in patch) state[k] = patch[k]; render(); }

  var video = refs.setHeroVideo;
  function play(el) { var pr = el.play(); if (pr && pr.catch) pr.catch(function () {}); }

  var handlers = {
    toggleHero: function () {
      var next = !state.heroPaused;
      if (video) { if (next) video.pause(); else play(video); }
      set({ heroPaused: next });
    },
    toggleSound: function () {
      var on = !state.soundOn;
      if (video) { video.muted = !on; if (on && video.paused) play(video); }
      set({ soundOn: on, heroPaused: on ? false : state.heroPaused });
    },
    pickHeridas: function () { set({ openSpec: state.openSpec === 'heridas' ? '' : 'heridas' }); },
    pickPrev: function () { set({ openSpec: state.openSpec === 'prev' ? '' : 'prev' }); },
    pickModCorp: function () { set({ openMod: state.openMod === 'corp' ? '' : 'corp' }); },
    pickModHerida: function () { set({ openMod: state.openMod === 'herida' ? '' : 'herida' }); },
    pickModFis: function () { set({ openMod: state.openMod === 'fis' ? '' : 'fis' }); },
    pickModPrev: function () { set({ openMod: state.openMod === 'prev' ? '' : 'prev' }); }
  };

  // Abrir la tarjeta del módulo cuando se llega desde el menú (#corporativo, #cuidamos-tu-herida, #fisiatria, #prevencion-y-piel)
  var MOD_HASH = { '#corporativo': 'corp', '#cuidamos-tu-herida': 'herida', '#fisiatria': 'fis', '#prevencion-y-piel': 'prev' };
  function openFromHash() {
    var m = MOD_HASH[window.location.hash];
    if (m) set({ openMod: m });
  }
  window.addEventListener('hashchange', openFromHash);
  [1, 2, 3].forEach(function (i) {
    handlers['open' + i] = function () { set({ openStep: state.openStep === i ? 0 : i }); };
  });
  buildSpecButtons();
  // Menú desplegable en pantallas angostas
  document.querySelectorAll('.nav-toggle').forEach(function (btn) {
    var nav = document.getElementById(btn.getAttribute('aria-controls'));
    if (!nav) return;
    function setOpen(open) {
      nav.classList.toggle('is-open', open);
      btn.setAttribute('aria-expanded', String(open));
      var t = btn.querySelector('.nav-toggle-t'); if (t) t.textContent = open ? 'Cerrar' : 'Menú';
    }
    btn.addEventListener('click', function () { setOpen(!nav.classList.contains('is-open')); });
    nav.querySelectorAll('a').forEach(function (a) { a.addEventListener('click', function () { setOpen(false); }); });
  });
  // Tarjetas fijas de una especialidad, por ejemplo <div data-equipo="mf"> en fisiatria.html
  document.querySelectorAll('[data-equipo]').forEach(function (box) {
    var id = box.getAttribute('data-equipo');
    (EQ.especialistas || []).filter(function (d) { return d.en && d.en.indexOf(id) !== -1; })
      .forEach(function (d) { box.appendChild(doctorCard(d)); });
  });
  document.querySelectorAll('[data-click]').forEach(function (el) {
    var h = handlers[el.getAttribute('data-click')];
    if (h) el.addEventListener('click', h);
  });

  // Count-up
  function runCount() {
    var t0 = performance.now(), dur = 1800;
    function step(now) {
      var t = Math.min(1, (now - t0) / dur);
      set({ p: 1 - Math.pow(1 - t, 3) });
      if (t < 1) requestAnimationFrame(step);
    }
    requestAnimationFrame(step);
  }

  function onVisible(el, cb, threshold) {
    if (!el) return;
    if (!('IntersectionObserver' in window)) { cb(); return; }
    var io = new IntersectionObserver(function (entries) {
      if (entries.some(function (e) { return e.isIntersecting; })) { io.disconnect(); cb(); }
    }, { threshold: threshold });
    io.observe(el);
  }

  if (video) { video.muted = true; }
  if (reduce) {
    if (video) video.pause();
    set({ p: 1, heroPaused: true, stepsIn: true });
  } else {
    if (video) play(video);
    render();
    onVisible(refs.setBand, runCount, 0.4);
    onVisible(refs.setSteps, function () { set({ stepsIn: true }); }, 0.25);
  }
  openFromHash();
  render();
})();
