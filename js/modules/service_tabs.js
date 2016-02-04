define(['jquery'], function ($) {

  $('ol.service li header').click(function(){
     
     var old_active = $(this).closest('li').siblings('.active');
     old_active.addClass('afteractive');
     setTimeout(function(){
         old_active.removeClass('afteractive');
     }, 500);
      
     $(this).closest('li').addClass('active');
     $(this).closest('li').siblings().removeClass('active');
  });
  
  $('ol.service li:first').addClass('active');
});
