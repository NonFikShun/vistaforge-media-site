// VistaForge Media — shared site behavior

document.addEventListener('DOMContentLoaded', function () {
  // Mobile nav toggle
  var toggle = document.getElementById('nav-toggle');
  var nav = document.getElementById('main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      var isOpen = nav.classList.toggle('open');
      toggle.setAttribute('aria-expanded', isOpen ? 'true' : 'false');
    });
  }

  // Contact form (client-side only, no backend)
  var form = document.getElementById('contact-form');
  var successMessage = document.getElementById('form-success');

  if (form && successMessage) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      if (!form.checkValidity()) {
        form.reportValidity();
        return;
      }

      // No network request — this is a static demo site with no backend yet.
      form.classList.add('hidden');
      successMessage.classList.add('visible');
      successMessage.setAttribute('tabindex', '-1');
      successMessage.focus();
      form.reset();
    });
  }
});
