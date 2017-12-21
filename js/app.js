$(document).ready(function() {
    $('span').hide();
    $('#submit').prop('disabled','true');
    $('#username').focus(function(){
        $('span').eq(0).show();
    })
});