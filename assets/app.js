(function () {
  'use strict';
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  var refs = {};
  document.querySelectorAll('[data-ref]').forEach(function (el) { refs[el.getAttribute('data-ref')] = el; });

  var SPECS = [
    ['cg', 'Cirugía general'], ['cc', 'Cirugía cardiovascular'], ['cp', 'Cirugía plástica'],
    ['mg', 'Medicina general'], ['mi', 'Medicina interna e infectología'],
    ['mf', 'Medicina física y rehabilitación'], ['nc', 'Nutrición clínica'], ['lab', 'Laboratorio']
  ];

  var state = { p: 0, heroPaused: false, soundOn: false, stepsIn: false, openStep: 0, openSpec: '' };

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
    SPECS.forEach(function (sp) {
      var open = state.openSpec === sp[0];
      v['open_' + sp[0]] = open;
      v['cls_' + sp[0]] = 'spec-tile' + (open ? ' is-active' : '');
      v['icon_' + sp[0]] = open ? '−' : '+';
    });
    v.specDoctor = state.openSpec !== '' && state.openSpec !== 'lab' && state.openSpec !== 'prev';
    v.specLab = state.openSpec === 'lab';
    var found = SPECS.filter(function (sp) { return sp[0] === state.openSpec; })[0];
    v.specTitle = state.openSpec === 'heridas' ? 'Cuidado de heridas' : (found ? found[1] : '');
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
    pickPrev: function () { set({ openSpec: state.openSpec === 'prev' ? '' : 'prev' }); }
  };
  [1, 2, 3].forEach(function (i) {
    handlers['open' + i] = function () { set({ openStep: state.openStep === i ? 0 : i }); };
  });
  SPECS.forEach(function (sp) {
    handlers['pick_' + sp[0]] = function () { set({ openSpec: state.openSpec === sp[0] ? '' : sp[0] }); };
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
  render();
})();
