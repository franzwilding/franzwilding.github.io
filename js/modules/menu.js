define(['jquery', 'ScrollMagic'], function ($) {

  $(document).ready(function($) {

    var menuController = new ScrollMagic();
    var el_button = $('#header button');
    var el_text = $('#header h2 .inner');

    var c_lila = 'rgb(100, 28, 172)';
    var c_white = 'rgb(255, 255, 255)';
    var c_black = 'rgb(0, 0, 0)';

    var color = c_white;
    var alt_color = c_lila;

    $('section.section').each(function(index){

      var sectionTimeline = new TimelineMax();
      var top_to = index * 32;
      var text_top_to = (-index) * 32 + 32;

      if(index == 0) { color = c_white;   alt_color = c_lila; }
      if(index == 1) { color = c_lila;    alt_color = c_white; }
      if(index == 2) { color = c_white;   alt_color = c_black; }
      if(index == 3) { color = c_black;   alt_color = c_white; }

      // create menu button tween for this section
      var t_button = TweenMax.to(
        el_button,
        0.5,
        { backgroundPosition: '0px -' + top_to + 'px' }
      );

      // create menu text tween for this section
      var t_text = TweenMax.to(
        el_text,
        0.5,
        {
          marginTop: text_top_to + 'px',
          backgroundColor: color,
          color: alt_color
        }
      );

      // add tweens to timeline
      sectionTimeline.insertMultiple([t_button, t_text]);

      // createa ScrollScene for this section
      var sectionScene = new ScrollScene({
        triggerElement: $(this),
        duration: 100,
        offset: -110,
        triggerHook: "onLeave"
      }).setTween(sectionTimeline).addTo(menuController);

      // show indicators (requires debug extension)
      //sectionScene.addIndicators();
    });

  });

  /*  &.menu-start {
    button { background-position: 0 0; }
    h2 .inner { margin-top: 32px; color: $white; }
  }

  &.menu-work {
    button { background-position: 0 -32px; }
    h2 .inner { margin-top: 0; color: $lila; }
  }

  &.menu-service {
    button { background-position: 0 -64px; }
    h2 .inner { margin-top: -32px; color: $white; }
  }

  &.menu-contact {
    button { background-position: 0 -96px; }
    h2 .inner { margin-top: -64px; color: $black; }
  }*/


});
