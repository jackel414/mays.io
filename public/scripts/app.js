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

    $('.icon').mouseenter(function() {
        var type = $(this).attr('rel');
        $(this).addClass(iconSwaps[type].hover);
        $(this).removeClass(iconSwaps[type].base);
    });

    $('.icon').mouseleave(function() {
        var type = $(this).attr('rel');
        $(this).addClass(iconSwaps[type].base);
        $(this).removeClass(iconSwaps[type].hover);
    });

    $('#contact-link').on('click', function(e) {
        e.preventDefault();
        var contactSection = $('#contact');
        if ( contactSection.hasClass('collapse') ) {
            contactSection.slideDown();
            contactSection.removeClass('collapse');
            $('#fullName').focus();
        } else {
            contactSection.slideUp();
            contactSection.addClass('collapse');
        }
    })

    $('#projects-link').on('click', function(e) {
        e.preventDefault();
        var projectsSection = $('#projects');
        if ( projectsSection.hasClass('collapse') ) {
            projectsSection.slideDown();
            projectsSection.removeClass('collapse');
        } else {
            projectsSection.slideUp();
            projectsSection.addClass('collapse');
        }
    })
});

var iconSwaps = {
    'contact': {
        'base': 'fa-paper-plane-o',
        'hover': 'fa-paper-plane'
    },
    'about': {
        'base': 'fa-user-circle-o',
        'hover': 'fa-user-circle'
    },
    'projects': {
        'base': 'fa-folder-open-o',
        'hover': 'fa-folder-open'
    }
}