/* ============================================================
   nav.js — EventsKart Shared Navigation Behaviour
   Add just before </body> in EVERY page:
     <script src="nav.js"></script>
   ============================================================ */

(function () {
  var header   = document.getElementById('ekHeader');
  var burger   = document.getElementById('ekBurger');
  var drawer   = document.getElementById('ekDrawer');
  var progress = document.getElementById('ekProgress');

  if (!header || !burger || !drawer) return;

  /* ---- Scroll: shadow + reading progress bar ---- */
  window.addEventListener('scroll', function () {
    header.classList.toggle('scrolled', window.scrollY > 10);
    if (progress) {
      var docH = document.documentElement.scrollHeight - window.innerHeight;
      progress.style.width = (docH > 0 ? (window.scrollY / docH) * 100 : 0) + '%';
    }
  }, { passive: true });

  /* ---- Hamburger toggle ---- */
  burger.addEventListener('click', function () {
    var isOpen = drawer.classList.toggle('open');
    burger.classList.toggle('open', isOpen);
    burger.setAttribute('aria-expanded', isOpen);
  });

  /* ---- Close drawer when any link inside it is clicked ---- */
  drawer.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      drawer.classList.remove('open');
      burger.classList.remove('open');
      burger.setAttribute('aria-expanded', 'false');
    });
  });

  /*
   * Dropdown is handled entirely by CSS :hover on the parent <li>.
   * No JS timers needed — CSS hover on the <li> container is seamless
   * because moving from the trigger link into the dropdown panel never
   * leaves the <li>, so the dropdown never flickers or disappears.
   *
   * The only JS touch: rotate the chevron via a class for cleanliness.
   */

})();
