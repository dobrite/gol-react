var React             = require('react/addons'),
    GolActionCreators = require('../actions/GolActionCreators');

var Col = React.createClass({
  render() {
    return (
      <span
        onClick={this.handleSwitchState}
        className={this.getClassName()}
        children='&nbsp;' />
    );
  },

  handleSwitchState(e) {
    GolActionCreators.switchState({
      row: this.props.rowNum,
      col: this.props.colNum,
    });
  },

  getClassName() {
    return (this.props.col) ? "live" : "dead";
  },
});

module.exports = Col;
