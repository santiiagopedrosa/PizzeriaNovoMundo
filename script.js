/* =============================================
   PIZZERIA NOVO MUNDO — JAVASCRIPT
   ============================================= */

/* ── HAMBURGER ── */
(function () {
  var btn  = document.getElementById('hbg');
  var menu = document.getElementById('navMenu');
  var nav  = document.querySelector('nav');
  if (!btn || !menu) return;

  btn.addEventListener('click', function () {
    btn.classList.toggle('open');
    menu.classList.toggle('open');
  });

  menu.querySelectorAll('a').forEach(function (a) {
    a.addEventListener('click', function () {
      btn.classList.remove('open');
      menu.classList.remove('open');
    });
  });

  document.addEventListener('click', function (e) {
    if (nav && !nav.contains(e.target)) {
      btn.classList.remove('open');
      menu.classList.remove('open');
    }
  });
}());

/* ── STATUS ABERTO / FECHADO ── */
function atualizarStatus() {
  var pill = document.getElementById('statusPill');
  if (!pill) return;
  var agora = new Date();
  var dia   = agora.getDay();
  var h     = agora.getHours() + agora.getMinutes() / 60;
  var util  = dia >= 1 && dia <= 6;
  var ab    = util && ((h >= 11.5 && h < 15) || (h >= 17.5 && h < 22));
  pill.className = 'pill ' + (ab ? 'ab' : 'fe');
  pill.innerHTML = '<span class="sdot"></span>' + (ab ? '&#9733; Aberto agora' : '&#9733; Fechado agora');
}
atualizarStatus();
setInterval(atualizarStatus, 60000);

/* ── SCROLL SUAVE NA EMENTA ── */
function catScroll(id, btn) {
  document.querySelectorAll('.cat-btn').forEach(function (b) { b.classList.remove('act'); });
  btn.classList.add('act');
  var el = document.getElementById(id);
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

/* ── HIGHLIGHT AUTOMÁTICO AO FAZER SCROLL ── */
(function () {
  var btns = document.querySelectorAll('.cat-btn');
  if (!btns.length) return;
  var ids  = ['entradas','complementos','pizzas','especialidades','saladas','diarios','bebidas'];
  var secs = ids.map(function(id){ return document.getElementById(id); }).filter(Boolean);
  if (!secs.length) return;

  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
      if (!entry.isIntersecting) return;
      btns.forEach(function (b) { b.classList.remove('act'); });
      var match = Array.prototype.find.call(btns, function (b) {
        var oc = b.getAttribute('onclick') || '';
        return oc.indexOf("'" + entry.target.id + "'") !== -1;
      });
      if (match) match.classList.add('act');
    });
  }, { rootMargin: '-15% 0px -75% 0px' });

  secs.forEach(function (s) { io.observe(s); });
}());

/* ── LINK ACTIVO NA NAVEGAÇÃO ── */
(function () {
  var path = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (a) {
    var href = (a.getAttribute('href') || '').split('#')[0].split('/').pop() || 'index.html';
    if (href === path) a.classList.add('act');
    else               a.classList.remove('act');
  });
}());