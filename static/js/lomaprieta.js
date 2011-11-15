$(document).ready( function() {
    
    $('.nav').click(function() {
        trace($(this).attr('url');
        $('#content').load($(this).attr('url'));
        //$('.window').attr('src', 'http://' + $(this).attr('url'));
    });
    $('#diag').click( function() {
        trace('loading diagnostics');
        $('#content').load('load/diagnostics.html');

    });
    
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });
});
