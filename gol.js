/** @jsx React.DOM */

var Cells = React.createClass({
  getInitialState: function() {
    return {
      cells: [
        [0,0],
        [1,1],
    ]};
  },

  render: function() {
    var rows = this.state.cells.map(function(row, i) {
      var cells = this.state.cells[i].map(function(col, j) {
        return (
          <span
            className={this.getClassName(i, j)}
            key={'c' + i.toString() + j.toString()}
            children='&nbsp;'>
          </span>
        );
      }, this);

      return (
        <div
          className='row'
          key={'r' + i.toString()}>
          {cells}
        </div>
      )
    }, this);

    return (
      <div>
        {rows}
      </div>
    )
  },

  getClassName: function (i, j) {
    return (this.state.cells[i][j]) ? "live" : "dead";
  }
});

React.renderComponent(
  <Cells />,
  document.getElementById('gol')
);
