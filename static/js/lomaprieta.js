$(document).ready( function() {
    
    $('.nav').click(function() {
        $('#content').load($(this).attr('url'));
        if($(this).attr('id') == 'log') {
            $('#content').css('overflow-y', 'hidden');
            $('#content').css('overflow-x', 'hidden');

        } else {
            $('#content').css('overflow-y', 'auto');
            $('#content').css('overflow-x', 'hidden');
        
        }
    });
    $('#diagnostics').click( function() {
        $('#content').load('load/diagnostics.html');
    });
    
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });
});
