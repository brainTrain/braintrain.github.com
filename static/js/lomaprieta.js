$(document).ready( function() {
    
    $('.nav').click(function() {
        $('#content').load($(this).attr('url'));
        if($(this).attr('id') == 'log') {
            $('#content').attr('overflow-y', 'hidden');
            $('#content').attr('overflow-x', 'hidden');

        } else {
            $('#content').attr('overflow-y', 'auto');
            $('#content').attr('overflow-x', 'hidden');
        
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
