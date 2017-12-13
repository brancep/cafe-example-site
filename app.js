

    $('.modal-wrapper').hide();

$(document).ready(function(){

    $('#menu-nav').on('click', function(){
        $('#menu-modal').fadeIn('slow');
        $('.nav-grid').hide();
    });
    
    $('#shops-nav').on('click', function(){
        $('#shops-modal').fadeIn( "slow" );
        $('.nav-grid').hide();
    });


    // $('#crew-nav').on('click', function(){
    //     $('#crew-modal').fadeIn(250);
    //     $('.nav-grid').hide();
    // });

    // $('#events-nav').on('click', function(){
    //     $('#events-modal').fadeIn(250);
    //     $('.nav-grid').hide();
    // });

    $('.close-button').on('click', function(){
        $('.modal-wrapper').fadeOut('slow');
        $('.nav-grid').show();
    });
});