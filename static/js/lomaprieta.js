$(document).ready( function() {
    
    $('.nav').click(function() {
        $('#content').load($(this).url('src');
        //$('.window').attr('src', 'http://' + $(this).attr('url'));
    });
    $('#diag').click( function() {
        $('#content').load('load/diagnostics.html');

    });
    
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });
});
