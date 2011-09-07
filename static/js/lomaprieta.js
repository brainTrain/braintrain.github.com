$(document).ready( function() {
    
    $('.nav').click(function() {
        $('.window').attr('src', 'http://' + $(this).attr('url'));
    });
    
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });
});
