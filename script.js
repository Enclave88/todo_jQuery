$(document).ready(function() {
    var btn = $('button');
    btn.mouseenter(function() {
        $('button').fadeTo('fast', 1);
    });
    btn.mouseleave(function() {
        $('button').fadeTo('slow', .5);
    });
});