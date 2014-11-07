var React = require('react/addons');
var GolActionCreators = require('../actions/GolActionCreators');

var Controls = React.createClass({
  render: function () {
    return (
      <div>
        <button
          type="button"
          onClick={GolActionCreators.toggleStart}
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

module.exports = Controls;
