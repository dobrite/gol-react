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

// https://gist.github.com/aemkei/1134658
life = function(
  input, // input array
  size, // square stage size (width and height)
  output, i, neighbours // placeholders
){
  // cycle through cells
  for (
    output = [i = size*size];
    i--;
    output[i] =
      // alive if it has 3 neighbours
      neighbours == 3 ||
      // stay alive if cell has 2 neighbours
      (input[i] && neighbours == 2)
  ) {
    neighbours =
      // count neighbours
      input[i-size-1] + input[i-size] + input[i-size+1] +
      input[i     -1] +                 input[i     +1] +
      input[i+size-1] + input[i+size] + input[i+size+1];
  }

  return output;
}

React.renderComponent(
  <Cells />,
  document.getElementById('gol')
);
