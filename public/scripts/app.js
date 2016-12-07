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
        if ( type != 'contact' || $('#contact').hasClass('collapse') ) {
            $(this).addClass(iconSwaps[type].base);
            $(this).removeClass(iconSwaps[type].hover);
        }
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
    });

    $('#contact-close').on('click', function() {
        var contactSection = $('#contact');
        contactSection.slideUp();
        contactSection.addClass('collapse');
        var icon = $('.fa-paper-plane');
        icon.addClass('fa-paper-plane-o');
        icon.removeClass('fa-paper-plane');
    })

    $('#contact-form').on('submit', function(e) {
        e.preventDefault();
        var name = $('#fullName').val();
        var email = $('#email').val();
        var comments = $('#comments').val();

        $.ajax({
            method: "POST",
            url: "/contact",
            data: { name: name, email: email, comments: comments }
        })
        .done(function( response ) {
            console.log(response);
        });
        $('#contact').slideUp();
        $('#contact').addClass('collapse');
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