$(function() {
    'use strict'; //selector q se debe aplicar siempre al inicio;

    /*  //para clonar
    var copia = $('main, article:last').clone();
    //lo agrego
    $('main').prepend(copia);
 */

    /*  //eventos: si hago un click
     $('div.logo img').on('click', function() {
         //console.log('hiciste click');

         //para borrar el logo cuando doy click
         $(this).remove();
     }); */

    /*  oculto en estilo y lo agrego en jquery
    $('#menu').on('click', function() {
         $('#navegacion').show();

     }) */


    /* //agrego clase
    $('div.logo img').addClass('activo');
    //muestro la navegacion
    $('.navegacion').show();

    //remarco cada enlace donde de click
    $('.navegacion ul li a').on('click', function(e) {
        //desmarco y paso al otro
        $('.navegacion ul li a').removeClass('activo');
        e.preventDefault();
        $(this).addClass('activo');

    }) */

    /*  //varios evento dentro de uno//
     $('main').on({
         click: function() {
             $(this).addClass('fondorojo activo');

         },
         mouseenter: function() {
             $(this).addClass('fondorojo');
         },
         mouseleave: function() {
             $(this).addClass('activo');
         }

     }) */

    /*cambiar css con jquery

    $('.logo img').css({ 'width': '200px' });*/
    /* 
        //animacion//
        //ejermplo achica la imagen//
        $('.logo img').on('click', function() {
            $(this).animate({ 'width': '200px' }, 1000); //1seg//
        })

        $('main article img').on('mouseenter', aumentarimagen);
        $('main article img').on('mouseleave', disminuirimagen);

        function aumentarimagen() {
            $(this).animate({ 'width': '200px' });
        }

        function disminuirimagen() {
            $(this).animate({ 'width': '350px' });
        }
     */

    /*     //otro efecto
    $('.logo img').click(function() {
            $('main article:first').slideUp(1000);
        })
        //para volverlo a mostrar
    $('aside ').click(function() {
        $('main article:first').slideDown(1000);
    }) */
    /* 
        //ARREGLOS//
        var viajes = ['londres', 'paris', 'argentina'];
        $.each(viajes, function(i, v) {
            if (i == 0) {
                $('aside').append('<h2>Proximos Viajes</h2>');
            }
            $('aside').append('<li>' + v + '</li>')
        }) */

    //ESCRIBIENDO CODIGO EN LA PAGINA
    //mostrar la navegacion: primer enlace
    $('.nuestros-servicios div:first').show();
    $('.servicios nav a:first').addClass('activo');

    //reaccion al click 
    $('.servicios nav a').on('click', mostrarTab);

    function mostrarTab() {
        $('.servicios nav a').removeClass('activo'); //quito el marcador
        $(this).addClass('activo'); //agrego marcador
        var enlace = $(this).attr('href');
        console.log(enlace);
        $('.nuestros-servicios div').fadeOut();
        $(enlace).fadeIn();

        return false;
    }

});