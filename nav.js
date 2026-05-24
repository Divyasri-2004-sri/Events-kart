/* ============================================================
   nav.js — EventsKart Shared Navigation Behaviour
   Add this just before </body> in EVERY page:
     <script src="nav.js"></script>
   ============================================================ */

(function () {
  const header   = document.getElementById('ekHeader');
  const burger   = document.getElementById('ekBurger');
  const drawer   = document.getElementById('ekDrawer');
  const progress = document.getElementById('ekProgress');

  if (!header || !burger || !drawer) return;

  /* Scroll: shadow + reading progress bar */
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
    if (progress) {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (docH > 0 ? (window.scrollY / docH) * 100 : 0) + '%';
    }
  }, { passive: true });

  /* Hamburger toggle */
  burger.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  /* Close drawer when any link inside it is clicked */
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });
})();