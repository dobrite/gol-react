var React = require('react/addons');
var Gol = require('./components/Gol.react');
var GolStore = require('./stores/GolStore');

var render = function () {
  var data = GolStore.get();

  React.render(
    <Gol
      array={data.array}
      startStop={data.startStop} />,
    document.getElementById('gol')
  );
};

GolStore.addChangeListener(render);

render();
