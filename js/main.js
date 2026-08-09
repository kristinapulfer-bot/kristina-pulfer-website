document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var nav = document.querySelector('.main-nav');
  if (toggle && nav) {
    toggle.addEventListener('click', function () {
      nav.classList.toggle('open');
    });
  }

  var heroSlides = document.querySelectorAll('.home-hero .hero-slide');
  var heroDots = document.querySelectorAll('.home-hero .hero-dots button');
  if (heroSlides.length > 1) {
    var heroIndex = 0;
    var heroTimer;

    var goToSlide = function (i) {
      heroSlides[heroIndex].classList.remove('is-active');
      heroDots[heroIndex] && heroDots[heroIndex].classList.remove('is-active');
      heroIndex = i;
      heroSlides[heroIndex].classList.add('is-active');
      heroDots[heroIndex] && heroDots[heroIndex].classList.add('is-active');
    };

    var startHeroTimer = function () {
      clearInterval(heroTimer);
      heroTimer = setInterval(function () {
        goToSlide((heroIndex + 1) % heroSlides.length);
      }, 6000);
    };

    heroDots.forEach(function (dot, i) {
      dot.addEventListener('click', function () {
        goToSlide(i);
        startHeroTimer();
      });
    });

    startHeroTimer();
  }

  var filterButtons = document.querySelectorAll('.filter-tabs button');
  var items = document.querySelectorAll('.square-tile');
  if (filterButtons.length && items.length) {
    filterButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        filterButtons.forEach(function (b) { b.classList.remove('active'); });
        btn.classList.add('active');
        var filter = btn.getAttribute('data-filter');
        items.forEach(function (item) {
          var show = filter === 'all' || item.getAttribute('data-location') === filter;
          item.classList.toggle('is-hidden', !show);
        });
      });
    });
  }
});
