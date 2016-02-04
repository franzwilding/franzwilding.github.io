define(['snap'], function (snap) {

  // init snap
  window.snap = new snap({
    element: document.getElementById('page'),
    disable: 'right',
    dragger: 'none',
    minPosition: -300,
    maxPosition: 300
  });

  // add snapper toggle function
  window.snap.toggle = function() {
    if(window.snap.state().state == 'closed') {
      window.snap.open('left');
    } else {
      window.snap.close('left');
    }
    return true;
  }
});
