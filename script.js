// Component to change to a sequential color on click.
AFRAME.registerComponent('cursor-listener', {
  init: function () {
    var lastIndex = -1;
    var COLORS = ['red', 'green', 'blue'];
    this.el.addEventListener('click', function (evt) {
      lastIndex = (lastIndex + 1) % COLORS.length;
      this.setAttribute('material', 'color', COLORS[lastIndex]);
      console.log('I was clicked at: ', evt.detail.intersection.point);
    });
  }
});

require('aframe');
require('aframe-text-geometry-component');

var fontJson = require('./fonts/myfont.typeface.json');
var el = document.createElement('a-entity');
el.setAttribute('text', {font: fontJson});
