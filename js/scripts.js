(function($) {
  'use strict';
  jQuery(document).ready(function() {
    /* Preloader */

    $(window).on('load', function() {
      $('body').addClass('loaded');
    });
//scrolling
    $('a.smoth-scroll').on("click", function(event) {
      var anchor = $(this);
      $('html, body').stop().animate({
        scrollTop: $(anchor.attr('href')).offset().top - 50
      }, 1000);
      event.preventDefault();
    });

    //navigation

    $(window).on('scroll', function() {
      if ($(window).scrollTop() > 100) {
        $('.header-top-area').addClass('navigation-background');
      } else {
        $('.header-top-area').removeClass('navigation-background');
      }
    });
    //words on header

    $(window).load(function() {
      $(".typing").typed({
        strings: ["I am a tech enthusiast.", "A lover of all the good things in life.", "A follower of Christ.", "A bubbly soul."],
        typeSpeed: 60
      });
    });

  });

})(jQuery);
