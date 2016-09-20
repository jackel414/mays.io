$(document).ready(function() {
    $('.transition').click(function(e) {
        e.preventDefault();
        var newSection = $( '#' + $(this).attr('title') );
        var thisSection = $('.show');
        thisSection.removeClass('show');
        thisSection.hide('fade');
        newSection.show('fade');
        newSection.addClass('show');
    })
});