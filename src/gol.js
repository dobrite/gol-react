"use strict";

module React    from 'react/addons';
import Gol      from './components/Gol.react';
import GolStore from './stores/GolStore';

var render = () => {
  var data = GolStore.get();

  React.render(
    <Gol {...data} />,
    document.getElementById('gol')
  );
};

GolStore.addChangeListener(render);

render();
