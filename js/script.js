/**
 * @file
 * A JavaScript file for the theme.
 *
 * In order for this JavaScript to be loaded on pages, see the instructions in
 * the README.txt next to this file.
 */

// JavaScript should be made compatible with libraries other than jQuery by
// wrapping it with an "anonymous closure". See:
// - https://drupal.org/node/1446420
// - http://www.adequatelygood.com/2010/3/JavaScript-Module-Pattern-In-Depth
(function($, Drupal, window, document, undefined) {


    // To understand behaviors, see https://drupal.org/node/756722#behaviors
    Drupal.behaviors.my_custom_behavior = {
        attach: function(context, settings) {
            $(document).ready(function() {
                $(".not-logged-in").addClass("animated fadeIn");
                $(".view-products .views-row ,.view-latest-news .views-row").addClass("animated zoomIn");

            });


$('#content .sharethis-buttons .sharethis-wrapper .st_fblike_hcount').after('<span id="extra-social" style="display:inline-block"></span>');
    $('.field-name-extra-share .field-items .field-item.even').appendTo('#extra-social');





            //headerfix
            (function($) {
                // Jquery onload function.
                $(document).ready(function() {
                    jQuery(function($) {
                        function fixDiv() {
                            var $cache = $('#header');
                            var $logo = $('#logo');
                            var $logoslogn = $('#block-imageblock-3 .block-image');
                            var $rwdmenu = $('.mean-nav');

                            if ($(window).scrollTop() > 200)
                                $cache.css({
                                    'position': 'fixed',
                                    'top': '0px',
                                    'height': '90px',
                                }),
                                $logo.css({
                                    'width': '63px',
                                }),
                                $rwdmenu.css({
                                    'margin-top': '70px',
                                }),
                                $logoslogn.css({
                                    'width': '80px',
                                }),
                                $("#header,.mean-bar,.mean-bar meanmenu-reveal").addClass("animated fadeInDown");
                            else
                                $cache.css({
                                    'position': 'relative',
                                    'top': 'auto',
                                    'height': '120px',
                                }),
                                $logo.css({
                                    'width': '83px',
                                }),
                                $rwdmenu.css({
                                    'margin-top': '85px',
                                }),
                                $logoslogn.css({
                                    'width': '115px',
                                }),

                                $("#header,.mean-bar,.mean-bar meanmenu-reveal").removeClass("animated fadeInDown");

                        }
                        $(window).scroll(fixDiv);
                        fixDiv();
                    });
                });
            })(jQuery);
            //end header fix

        }
    };


})(jQuery, Drupal, this, this.document);
