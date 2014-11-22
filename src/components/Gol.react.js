var React         = require('react/addons'),
    Row           = require('./Row.react'),
    Controls      = require('./Controls.react'),
    { PropTypes } = React;

var Gol = React.createClass({
  propTypes: {
    array:     PropTypes.array.isRequired,
    startStop: PropTypes.bool.isRequired,
  },

  render() {
    var rows = this.props.array.map((row, rowNum) =>
      <Row
        key={'r' + rowNum.toString()}
        row={row}
        rowNum={rowNum} />
    );

    return (
      <div>
        <Controls
          size={this.props.array.length}
          startStop={this.props.startStop} />
        <div>
          {rows}
        </div>
      </div>
    );
  },
});

module.exports = Gol;
