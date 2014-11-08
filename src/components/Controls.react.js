var React = require('react/addons');
var GolActionCreators = require('../actions/GolActionCreators');

var Controls = React.createClass({
  render: function () {
    return (
      <div>
        <button
          type="button"
          onClick={GolActionCreators.toggleStart}
          children={this.renderStartStopText()}>
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

  renderStartStopText: function () {
    return (this.props.startStop) ? 'stop' : 'start'
  },

  handleNewSize: function (e) {
    var delta = parseInt(e.target.value, 10);
    GolActionCreators.newSize(delta)
  },

});

module.exports = Controls;
