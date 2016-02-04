define(['jquery'], function ($) {

  $('ol.work li').mouseenter(function(){
    if(!$(this).hasClass('open')) {
      $(this).removeClass('nothover');
      $(this).siblings().addClass('nothover');
      $(this).siblings().removeClass('open');
    }
  }).mouseleave(function(){
    if(!$(this).hasClass('open')) {
      $(this).siblings().removeClass('nothover');
    }
  });

  $('ol.work li').click(function(){
    if($(this).hasClass('open')) {
      $(this).removeClass('open');
    } else {
      $(this).addClass('open');
      $(this).siblings().removeClass('open');
    }
  })


});
