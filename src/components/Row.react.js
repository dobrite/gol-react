module React from 'react/addons';
import Col   from './Col.react';
var { PropTypes } = React;

var Row = React.createClass({
  propTypes: {
    row:    PropTypes.array.isRequired,
    rowNum: PropTypes.number.isRequired,
  },

  render() {
    var cols = this.props.row.map((col, colNum) =>
        <Col
          key={'c' + colNum.toString()}
          col={col}
          colNum={colNum}
          rowNum={this.props.rowNum} />
    );

    return (
      <div className='row'>
        {cols}
      </div>
    );
  },
});

export default Row;
