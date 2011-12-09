$(document).ready( function() {
    
    var src = $(this).attr('src');
    $().attr('src', src + Math.floor(Math.random()*99999));
    
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
    $('.nav').hover( function() {
            $(this).css('background-color', '#FFCC99'); 

      }, function() {

            $(this).css('background-color', '#CC99CC'); 
    });

    $('#title').click( function() {
        $('#content').html('<img src="static/images/ambassadorschematic.jpg"/>');
    });

    $('#diagnostics').click( function() {
        $('#content').load('load/diagnostics.html');
    });
    
});
