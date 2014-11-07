var React = require('react/addons');

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

module.exports = Gol;
