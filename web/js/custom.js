define([
    "jquery",
    'domReady!'
], function($) {
    $('.header.content > .header.links').clone().appendTo('#store\\.links');

    $('.header #search').on('focus', function(){
        $(this).parents(".block-search").addClass("expanded");
    });

    $('.header #search').on('blur', function(){
        $(this).parents(".block-search").removeClass("expanded");
    });

    $('.sidebar .block-title.no-display').parents('.block').hide();
});
