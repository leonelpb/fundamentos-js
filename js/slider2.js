$(document).ready(function () {

  // Seleccionando elementos en variables
  var slider = $('#slider2');
  var btnAnterior = $('#btnAtras2');
  var btnSiguiente = $('#btnSiguiente2');

  // Se pasa el último slide al primer lugar
  $('#slider2 .slide:last').insertBefore('#slider2 .slide:first');

  // Con margen negativo se vuelve a mostrar el primer slide
  slider.css('margin-left', '-46.5%');

  // Funcion para que el slide se mueva a la derecha
  function moverDerecha() {
    if (!slider.is(':animated')) {
      slider.animate({
        marginLeft: '-111.3%'
      }, 700, function () {
        $('#slider2 .slide:first').insertAfter('#slider2 .slide:last');
        slider.css('margin-left', '-46.5%');
        resetInterval();
      });
    }

  }

  btnSiguiente.on('click', moverDerecha);

  // Funcion para que el slide se mueva a la izquierda
  function moverIzquierda() {
    if (!slider.is(':animated')) {
      $('#slider2 .slide:last').insertBefore('#slider2 .slide:first');
      slider.css('margin-left', '-111.3%');
      slider.animate({
        marginLeft: '-46.5%'
      }, 700, function () {
        resetInterval()
      });
    }

  }

  btnAnterior.on('click', moverIzquierda);



  // Intervalo para que el slide se mueva automáticamente
  var intervalo = setInterval(moverDerecha, 5000);

  function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha, 5000);
  }

});