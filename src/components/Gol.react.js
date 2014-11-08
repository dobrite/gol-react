var React = require('react/addons');
var Row = require('./Row.react');
var Controls = require('./Controls.react');

var Gol = React.createClass({

  render: function () {
    var rows = this.props.array.map(function(row, rowNum) {
      return (
        <Row
          key={'r' + rowNum.toString()}
          row={row}
          rowNum={rowNum} />
      );
    }.bind(this));

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
