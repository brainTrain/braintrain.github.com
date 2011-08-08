$(document).ready( function() {
    
    $('.nav').click(function() {
        $('.window').attr('src', 'http://' + $(this).attr('url'));
    });

});
