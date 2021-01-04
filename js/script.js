$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav.navbar");
    var $navbrand = $("a.navbar-brand");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $navbrand.height());
  });
});


