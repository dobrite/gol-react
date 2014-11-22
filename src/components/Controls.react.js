var React             = require('react/addons'),
    GolActionCreators = require('../actions/GolActionCreators'),
    { PropTypes }     = React;

var Controls = React.createClass({
  propTypes: {
    size:      PropTypes.number.isRequired,
    startStop: PropTypes.bool.isRequired,
  },

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
