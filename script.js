// Theme toggle (light default, dark remembered in localStorage), copy-email buttons, nav highlighting.
(function () {
  var root = document.documentElement;
  var btn = document.getElementById('theme-toggle');
  if (btn) {
    btn.addEventListener('click', function () {
      var dark = root.getAttribute('data-theme') === 'dark';
      if (dark) { root.removeAttribute('data-theme'); } else { root.setAttribute('data-theme', 'dark'); }
      try { localStorage.setItem('theme', dark ? 'light' : 'dark'); } catch (e) {}
    });
  }
  document.querySelectorAll('.copy-btn').forEach(function (b) {
    b.addEventListener('click', function () {
      var text = b.getAttribute('data-copy');
      if (!navigator.clipboard) return;
      navigator.clipboard.writeText(text).then(function () {
        b.textContent = 'copied'; b.classList.add('copied');
        setTimeout(function () { b.textContent = 'copy'; b.classList.remove('copied'); }, 1500);
      });
    });
  });
  var here = location.pathname.replace(/index\.html$/, '');
  document.querySelectorAll('.topnav-links a').forEach(function (a) {
    var href = a.getAttribute('href');
    if (!href || href.indexOf('.pdf') !== -1) return;
    var target = href.replace(/index\.html$/, '');
    if (here.endsWith(target) || (target === './' && /\/$/.test(here))) a.setAttribute('aria-current', 'page');
  });
})();
