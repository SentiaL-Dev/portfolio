(function () {
  'use strict';

  function ready(fn) {
    if (document.readyState !== 'loading') {
      fn();
    } else {
      document.addEventListener('DOMContentLoaded', fn);
    }
  }

  ready(function () {
    var leftMenu = document.querySelector('.leftMenu');
    var openCloserButtons = document.querySelectorAll('.openCloser');

    if (leftMenu && openCloserButtons.length) {
      openCloserButtons.forEach(function (btn) {
        btn.addEventListener('click', function (e) {
          e.preventDefault();
          leftMenu.classList.toggle('show');
          var isOpen = leftMenu.classList.contains('show');
          openCloserButtons.forEach(function (b) {
            b.setAttribute('aria-expanded', isOpen);
          });
        });
      });
    }

    var projectsBtn = document.querySelector('.projectsBtn');
    if (projectsBtn) {
      projectsBtn.addEventListener('click', function (e) {
        var targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
          var target = document.querySelector(targetId);
          if (target) {
            e.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }
        }
      });
    }
  });
})();
