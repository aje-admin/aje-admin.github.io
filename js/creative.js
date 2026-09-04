/*!
 * Start Bootstrap - Creative Bootstrap Theme (http://startbootstrap.com)
 * Code licensed under the Apache License v2.0.
 * For details, see http://www.apache.org/licenses/LICENSE-2.0.
 */

(function($) {
    "use strict"; // Start of use strict

    // jQuery for page scrolling feature - requires jQuery Easing plugin
    $('a.page-scroll').on('click', function(event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: ($($anchor.attr('href')).offset().top - 50)
        }, 1250, 'easeInOutExpo');
        event.preventDefault();
    });

    // Highlight the top nav as scrolling occurs - initialized declaratively via
    // data-bs-spy on <body> in _layouts/front.html (Bootstrap 5 dropped the
    // jQuery .scrollspy() plugin method)

    // Closes the Responsive Menu on Menu Item Click
    $('.navbar-collapse ul li a').on('click', function() {
        var collapseEl = document.querySelector('.navbar-collapse');
        var bsCollapse = bootstrap.Collapse.getInstance(collapseEl);
        if (bsCollapse) {
            bsCollapse.hide();
        }
    });

    // Fit Text Plugin for Main Header
    $("h1").fitText(
        1.2, {
            minFontSize: '35px',
            maxFontSize: '65px'
        }
    );

    // Offset for Main Navigation - reproduces the Bootstrap 3 `.affix()` plugin
    // behaviour (removed in Bootstrap 4+): toggle the same `.affix` class the
    // theme's CSS already styles once the page scrolls past 100px.
    var $mainNav = $('#mainNav');
    function toggleAffix() {
        $mainNav.toggleClass('affix', $(window).scrollTop() >= 100);
    }
    $(window).on('scroll', toggleAffix);
    toggleAffix();

    // Initialize WOW.js Scrolling Animations
    new WOW().init();

})(jQuery); // End of use strict
