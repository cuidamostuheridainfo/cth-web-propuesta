/* Formulario «Solicita tu cita» (cita.html, 19 nov 2026).
   No guarda ni envía datos desde la web: arma un mensaje listo y lo abre en WhatsApp (por defecto)
   o en el programa de correo de la persona, dirigido a info@cuidamostuherida.com.
   Todo llega al mismo WhatsApp de CTH; el mensaje dice qué necesita la persona y el código WEB-CITA, de dónde viene.
   Sin datos clínicos: solo nombre, medio de contacto y dónde prefiere la atención. */
(function () {
  'use strict';

  var WA = 'https://wa.me/584166181760?text=';
  var CORREO = 'info@cuidamostuherida.com';
  var CODIGO = 'WEB-CITA';
  var PREFERENCIA = {
    orientacion: 'Necesito orientación sobre dónde atenderme.',
    unidad: 'Prefiero atención en la Unidad.',
    telemedicina: 'Prefiero atención por telemedicina.',
    domicilio: 'Prefiero atención a domicilio.'
  };

  var form = document.getElementById('form-cita');
  if (!form) return;
  var nombre = form.elements.nombre;
  var correo = form.elements.correo;
  var donde = form.elements.donde;
  var campoCorreo = document.getElementById('campo-correo');
  var boton = document.getElementById('cita-enviar');

  function medio() {
    var r = form.querySelector('input[name="medio"]:checked');
    return r ? r.value : 'whatsapp';
  }

  // El campo de correo aparece solo si la persona elige correo.
  function ajustar() {
    var esCorreo = medio() === 'correo';
    campoCorreo.hidden = !esCorreo;
    correo.required = esCorreo;
    if (!esCorreo) correo.value = '';
    boton.textContent = esCorreo ? 'Continuar por correo' : 'Continuar en WhatsApp';
  }
  var radios = form.querySelectorAll('input[name="medio"]');
  for (var i = 0; i < radios.length; i++) radios[i].addEventListener('change', ajustar);
  ajustar();

  form.addEventListener('submit', function (e) {
    e.preventDefault();
    if (!form.reportValidity()) return;
    var quien = nombre.value.trim().replace(/\s+/g, ' ');
    var pref = PREFERENCIA[donde.value] || PREFERENCIA.orientacion;
    var texto = 'Hola, soy ' + quien + '. Quiero agendar una cita. ' + pref;
    if (medio() === 'correo') {
      var cuerpo = texto + '\nMi correo: ' + correo.value.trim();
      window.location.href = 'mailto:' + CORREO +
        '?subject=' + encodeURIComponent('Solicitud de cita (' + CODIGO + ')') +
        '&body=' + encodeURIComponent(cuerpo);
    } else {
      var url = WA + encodeURIComponent(texto + ' (' + CODIGO + ')');
      // Con «noopener», window.open siempre devuelve null: se abre sin él y se corta el vínculo después.
      var w = window.open(url, '_blank');
      if (w) { try { w.opener = null; } catch (err) { /* nada */ } }
      else window.location.href = url;
    }
  });
})();
