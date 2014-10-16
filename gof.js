/** @jsx React.DOM */

var Cells = React.createClass({
  getInitialState: function() {
    return {cells: [
      [0,0],
      [1,1],
    ]};
  },

  render: function() {
    var cells = this.state.cells.map(function(row, i) {
      return this.state.cells[i].map(function(col, j) {
        return (
          <div key={i.toString() + j.toString()}>
            {col}
          </div>
        );
      }, this);
    }, this);

    return (
      <div>
        {cells}
      </div>
    )
  },

  getStyle: function () {
    return {'background-color': 'red'}
  }
});

React.renderComponent(
  <Cells />,
  document.getElementById('gol')
);
