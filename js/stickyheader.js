$(document).ready(function () {

  var fixedHeader = $('#fixedHeader');

  $(window).on('scroll', function () {

    var tomarmateOffsetTop = $('#tomarmate').offset().top;

    if ($(window).scrollTop() >= tomarmateOffsetTop) {

      fixedHeader.css('margin-top', 0);

    }else if ($(window).scrollTop() <= tomarmateOffsetTop/2) {

      fixedHeader.css('margin-top', '-68px');

    }

  })


});