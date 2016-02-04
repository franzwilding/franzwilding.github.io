define(['jquery', 'jquery.smartresize'], function ($) {

  var adjust_bg = function(){

    var height = $(window).height() - 40;

    // add height to section with bg elements
    $('section.section').each(function(){

      // set section height
      $(this).css('min-height', height);

      if($(this).children('.bg').length > 0) {

        // for bg-sections set fixed height
        $(this).css('height', height);

        // reset bg element's width and height
        $(this).children('.bg').css({
          height:         'auto',
          width:          '100%',
          left:           '0',
          'margin-left':  '0'
        });

        // if the bg-elemnt is not as high as the section, we need to modify css
        if($(this).children('.bg').height() < height) {
          $(this).children('.bg').css({
            height:         '100%',
            width:          'auto',
            left:           '50%'
          });

          $(this).children('.bg').css('margin-left', - $(this).children('.bg').width()/2);
        }
      }

    });
  };

  // call on resize
  $(window).smartResize(adjust_bg);

  // call on init
  adjust_bg();


});
