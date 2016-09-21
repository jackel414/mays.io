$(document).ready(function() {
    $('.transition').click(function(e) {
        e.preventDefault();
        var newSection = $( '#' + $(this).attr('title') );
        var thisSection = $('.show');
        thisSection.removeClass('show');
        thisSection.hide('fade');
        newSection.show('fade');
        newSection.addClass('show');
    });

    $('.project-panel').click(function(e) {
        e.preventDefault();
        var destination = $(this).find('div').attr('title');
        window.open(destination, '_blank');
    });
});