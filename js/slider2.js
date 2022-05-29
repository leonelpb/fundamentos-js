$(document).ready(function(){
    //seleccionando elementos en variables//
   var slider = $('#slider2');
    var btnSiguiente = $('#btnSiguiente2');
    var btnAtras = $('#btnAtras2');

    //trasladando la ultima imagen antes de la primera//

    $('#slider2 .slide:last').insertBefore('#slider2 .slide:first');

    //margen negativo y mostrar el primer slide//
    slider.css('margin-left','-28%');


    //function siguiente///
    function moverDerecha(){
        if(!slider.is(':animated')){
            slider.animate({marginLeft:'-80.3%'},700,function(){
                $('#slider2 .slide:first').insertAfter('#slider2 .slide:last');
                slider.css('margin-left','-28%');
                resetInterval();
            });
        }
        
    }
    btnSiguiente.on('click',moverDerecha);

    //function atras//
    function moverIzquierda(){
       if(!slider.is(':animated')){
           //trasladando la ultima imagen antes de la primera//
        $('#slider2 .slide:last').insertAfter('#slider2 .slide:first');
        slider.css('margin-left','-80.3%');

        slider.animate({marginLeft:'-28%'},700, function(){
            resetInterval();
        });
       }

    }
    btnAtras.on('click',moverIzquierda)

//intervalo para slide automatico//

var intervalo = setInterval(moverDerecha,5000);
function resetInterval(){
    clearInterval(intervalo);
    intervalo = setInterval(moverDerecha,5000);
 }

});
