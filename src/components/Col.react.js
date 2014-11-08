var React = require('react/addons');
var GolActionCreators = require('../actions/GolActionCreators');

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
    GolActionCreators.switchState({
      row: this.props.rowNum,
      col: this.props.colNum,
    });
  },

  getClassName: function () {
    return (this.props.col) ? "live" : "dead";
  },

});

module.exports = Col;
