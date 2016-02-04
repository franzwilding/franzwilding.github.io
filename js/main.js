
require.config({

  paths: {
    'domReady':             '../lib/requirejs-domready/domReady',
    'jquery':               '../lib/jquery/dist/jquery',
    'jquery.smartresize':   '../lib/jquery.smartresize/jquery.smartresize',
    'snap':                 '../lib/snapjs/snap',
    'gsap.tweenMax':        '../lib/gsap/src/minified/TweenMax.min',
    'gsap.timelineMax':     '../lib/gsap/src/minified/TimelineMax.min',
    'ScrollMagic':          '../lib/ScrollMagic/js/jquery.scrollmagic.min',
    'ScrollMagicDebug':     '../lib/ScrollMagic/js/jquery.scrollmagic.debug'
  },

  shim: {
    'jquery.smartresize': {
      deps: ['jquery']
    },

    'ScrollMagic': {
      deps: ['jquery', 'gsap.tweenMax', 'gsap.timelineMax']
    },

    'ScrollMagicDebug': {
      deps: ['ScrollMagic']
    }
  }
});

// Include the main file
requirejs(['modules/main']);
