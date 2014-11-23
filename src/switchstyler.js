/*
 * switchstyler
 * 
 *
 * Copyright (c) 2014 Luca Dimola
 * Licensed under the MIT license.
 */

(function ($) {
  // Collection method.
  $.fn.switchstyler = function (options) {

    var menuItems = $(this);
    var sectionSwitch = $(options.on);
    
    $(window).scroll(function() {
      switchStyler();
    });

    /* hack */
    $( window ).load(function() {
      switchStyler();
      $(window).delay(900).queue(function(next){
        switchStyler();
        next();
      });
    });
    
    function switchStyler() {
      
      menuItems.each(function () {
        var matchCount = 0;
        var itemMidPoint = $(this).position().top + ($(this).outerHeight(true) / 2);

        sectionSwitch.each(function () {
          var sectionTop = $(this).offset().top - $(window).scrollTop();
          var sectionBottom = sectionTop + $(this).outerHeight(true);
          var matchZone = (itemMidPoint > sectionTop) && (itemMidPoint < sectionBottom);
          matchCount += (matchZone) ? 1 : 0;
        });

        if (matchCount) {
          $(this).addClass(options.addClass).removeClass(options.removeClass);
        } else {
          $(this).removeClass(options.addClass).addClass(options.removeClass);
        }
      });
      
    }

  };
  
  

  // Static method.
  $.switchstyler = function (options) {
    // Override default options with passed-in options.
    options = $.extend({}, $.switchstyler.options, options);
    // Return the name of your plugin plus a punctuation character.
    //console.log(options);
    return 'switchstyler' + options.punctuation;
  };

  // Static method default options.
  $.switchstyler.options = {
    punctuation: '.'
  };

  // Custom selector.
  $.expr[':'].switchstyler = function (elem) {
    // Does this element contain the name of your plugin?
    return $(elem).text().indexOf('switchstyler') !== -1;
  };

}(jQuery));