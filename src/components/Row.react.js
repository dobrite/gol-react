var React = require('react/addons');

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

module.exports = Row;
