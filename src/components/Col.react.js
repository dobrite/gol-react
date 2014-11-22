var React             = require('react/addons'),
    GolActionCreators = require('../actions/GolActionCreators'),
    { PropTypes }     = React;

var Col = React.createClass({
  propTypes: {
    col:    PropTypes.number.isRequired,
    colNum: PropTypes.number.isRequired,
    rowNum: PropTypes.number.isRequired,
  },

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
