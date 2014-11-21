var React             = require('react/addons'),
    GolActionCreators = require('../actions/GolActionCreators');

var Controls = React.createClass({
  render() {
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

  renderStartStopText() {
    return (this.props.startStop) ? 'stop' : 'start'
  },

  handleNewSize(e) {
    GolActionCreators.newSize(parseInt(e.target.value, 10))
  },
});

module.exports = Controls;
