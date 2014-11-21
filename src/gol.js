"use strict";

var React    = require('react/addons');
var Gol      = require('./components/Gol.react');
var GolStore = require('./stores/GolStore');

var render = () => {
  var data = GolStore.get();

  React.render(
    <Gol {...data} />,
    document.getElementById('gol')
  );
};

GolStore.addChangeListener(render);

render();
