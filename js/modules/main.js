
define([
  'modules/bg',
  'modules/menu',
  'modules/nothover',
  'modules/service_tabs',
  ],
  function () {

    // smooth scroll
    $('#header h2 a').click(function(){
      $('html, body').animate({
        scrollTop: $( $.attr(this, 'href') ).offset().top -20
      }, 500);
      return false;
    });

  }
);
