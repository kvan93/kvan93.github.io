$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});

$(function () {
  $(document).scroll(function () {
    var $nav = $("nav.navbar");
    var $navbrand = $("a.navbar-brand");
    $nav.toggleClass('scrolled', $(this).scrollTop() > $navbrand.height());

    var offsetTop = $("#profileparallax").offset().top + ($(window).height()/2);
    var scrollTop = $(window).scrollTop();
    if (scrollTop > offsetTop){
      $("li#HomeTab").fadeIn(500);
    } else{
      $("li#HomeTab").fadeOut(100);

    }
  });
});

$(document).ready(function(){
  $(this).scrollTop(0);
});


