'use strict';

$(function() {
    let scroll = $(window).scrollTop();
    const menus = [ 'home', 'profile', 'skill', 'portfolio' ];

    currentScrollPosition(scroll);
    currentMenu(scroll);

    $(window).scroll(function() {
        let pos = $(window).scrollTop();
        let pos2 = pos + 500;

        currentScrollPosition(pos);
        currentMenu(pos2);

    });

    $('.menu-list li a').click( function(e) {
        e.preventDefault();

        let className = $(this).attr('class');
        let target = '#' + className;
        let targetPos = $( target ).offset().top;

        $('html, body').animate({
            scrollTop: targetPos
        }, 400);

    });

    $('.hamburger-menu').click( function(e) {
        e.preventDefault();

        let $this = $(this);
        $this.hasClass('open') ? $this.removeClass('open') : $this.addClass('open');

    });

    function currentScrollPosition(pos) {
        ( (pos + 60) < $('#home').outerHeight() ) 
            ? toggleNavClass('remove')
            : toggleNavClass('add');
    }

    function currentMenu(pos) {
        
        menus.forEach( function(menu) {
            let top = $('#' + menu ).offset().top;
            let scrollEnd = $(document).height() - $(window).height() - 300;

            if ( pos >= top || pos >= scrollEnd ) { 
                toggleActiveClass(menu); 
                triggerAnimateClass(menu);
            }
            
        });
            
    }

    function toggleActiveClass(anchor) {
        let target = '.' + anchor; 

        $('nav .active').removeClass('active');
        $('nav').find(target).addClass('active');
    }

    function toggleNavClass(action) {
        ( action === 'add' ) 
            ? $('.header').addClass('active') 
            : $('.header').removeClass('active');
    }

    function triggerAnimateClass(anchor) {
        let target = '#' + anchor; 

        if ( !$(target).hasClass('animated') ) {
            $(target).addClass('animated');
        }
    }
});


