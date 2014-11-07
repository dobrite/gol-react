var React = require('react/addons');

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

module.exports = Col;
