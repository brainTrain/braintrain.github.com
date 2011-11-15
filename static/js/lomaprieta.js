$(document).ready( function() {
    
    $('.nav').click(function() {
        $('#content').load($(this).attr('url'));
        if($(this).attr('id') == 'log') {
            $('#content').attr('overflow-y', 'hidden');

        } else {
            $('#content').attr('overflow-y', 'auto');
        
        }
    });
    $('#diagnostics').click( function() {
        trace('loading diagnostics');
        $('#content').load('load/diagnostics.html');

    });
    
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });
});
