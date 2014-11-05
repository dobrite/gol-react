var React = require('react/addons');
var golEngine = require('./golEngine');

var Gol = React.createClass({
  render: function () {
    var rows = this.props.array.map(function(row, rowNum) {
      return (
        <Row
          key={'r' + rowNum.toString()}
          row={row}
          rowNum={rowNum}
          handleSwitchState={this.props.handleSwitchState} />
      );
    }.bind(this));

    return (
      <div>
        <Controls
          size={this.props.array.length}
          startStop={this.props.startStop}
          handleNewSize={this.props.handleNewSize}
          handleClickStartStop={this.props.handleClickStartStop} />
        <div>
          {rows}
        </div>
      </div>
    );
  },
});

var Row = React.createClass({
  render: function () {
    var cols = this.props.row.map(function(col, colNum) {
      return (
        <Col
          key={'c' + colNum.toString()}
          col={col}
          colNum={colNum}
          rowNum={this.props.rowNum}
          handleSwitchState={this.props.handleSwitchState} />
      );
    }.bind(this));

    return (
      <div className='row'>
        {cols}
      </div>
    );
  },
});

var Col = React.createClass({
  render: function () {
    return (
      <span
        onClick={this.handleSwitchState}
        className={this.getClassName()}
        children='&nbsp;'/>
    );
  },

  handleSwitchState: function (e) {
    this.props.handleSwitchState(this.props.rowNum, this.props.colNum);
  },

  getClassName: function () {
    return (this.props.col) ? "live" : "dead";
  },
});

var Controls = React.createClass({
  render: function () {
    return (
      <div>
        <button
          type="button"
          onClick={this.props.handleClickStartStop}
          children={this.getStartStopText()}>
        </button>
        <button
          type="button"
          onClick={this.handleNewSize}
          value={1}
          children={'+'}>
        </button>
        <button
          type="button"
          onClick={this.handleNewSize}
          value={-1}
          children={'-'}>
        </button>
        <span>
          {this.props.size}
        </span>
      </div>
    );
  },

  getStartStopText: function () {
    return (this.props.startStop) ? 'stop' : 'start'
  },

  handleNewSize: function (e) {
    var delta = parseInt(e.target.value, 10);
    this.props.handleNewSize(delta);
  },
});

var render = function (data) {
  React.render(
    <Gol
      array={data.array}
      startStop={data.startStop}
      handleNewSize={golEngine.newSize.bind(golEngine)}
      handleClickStartStop={golEngine.startStop.bind(golEngine)}
      handleSwitchState={golEngine.switchState.bind(golEngine)} />,
    document.getElementById('gol')
  );
};

golEngine.registerRenderCallback(render);
