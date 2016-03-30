// alert(1);
define([
    "jquery",
    'domReady!'
], function($) {
    $('.header.content > .header.links').clone().appendTo('#store\\.links');
    // $('.header.content > .header.links').hide();
});
