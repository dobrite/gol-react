var React = require('react/addons');
var golEngine = require('./golEngine');
var Gol = require('./components/Gol.react');

var render = function (data) {
  React.render(
    <Gol
      array={GolStore.get()}
      startStop={data.startStop}
      handleNewSize={golEngine.newSize.bind(golEngine)}
      handleClickStartStop={golEngine.startStop.bind(golEngine)}
      handleSwitchState={golEngine.switchState.bind(golEngine)} />,
    document.getElementById('gol')
  );
};

golEngine.registerRenderCallback(render);
