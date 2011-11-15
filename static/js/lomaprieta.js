$(document).ready( function() {
    
    $('.nav').click(function() {
        $('#content').load($(this).attr('url'));
        if($(this).attr('id') == 'log') {
            console.log('thisbelog');
            $('#content').css('overflow-y', 'hidden');
            $('#content').css('overflow-x', 'hidden');

        } else {
            console.log('thisaint');
            $('#content').css('overflow-y', 'auto');
            $('#content').css('overflow-x', 'hidden');
        
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
