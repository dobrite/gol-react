/** @jsx React.DOM */

var Gol = React.createClass({
  render: function () {
    var rows = this.props.array.map(function(row, i) {
      return (
        <Row
          key={'r' + i.toString()}
          rowNumber={i}
          row={row} />
      );
    });

    return (
      <div>
        {rows}
      </div>
    );
  }
});

var Row = React.createClass({
  render: function () {
    var cols = this.props.row.map(function(col, i) {
      return (
        <Col
          key={'c' + i.toString()}
          colNumber={i}
          col={col} />
      );
    });

    return (
      <div className='row'>
        {cols}
      </div>
    );
  }
});

var Col = React.createClass({
  render: function () {
    return (
      <span
        className={this.getClassName()}
        children='&nbsp;'/>
    );
  },

  getClassName: function () {
    return (this.props.col) ? "live" : "dead";
  }
});

// https://gist.github.com/aemkei/1134658
var life = function (input) {
  var len = input.length,
      size = Math.sqrt(len),
      i = len,
      output = [i],
      neightbors;

  var idx = function (loc, val) {
    switch (loc) {
      case 0:
      case 1:
      case 2:
        return (val >= 0) ? val : val + len - size;
      break;
      case 3:
        return (Math.floor((val+1)/size) === Math.floor(val/size)) ? val : val + (len - 1);
      break;
      case 5:
        return (Math.floor((val-1)/size) === Math.floor(val/size)) ? val : val - (len + 1);
      break;
      case 6:
      case 7:
      case 8:
      return (val < len) ? val : val - len + size;
      break;
    }
  };

  for (;i--;) {
    neighbors =
      input[idx(0, i-size-1)] + input[idx(1, i-size)] + input[idx(2, i-size+1)] +
      input[idx(3, i     -1)] +                         input[idx(5, i     +1)] +
      input[idx(6, i+size-1)] + input[idx(7, i+size)] + input[idx(8, i+size+1)];
    output[i] =
      neighbors == 3 ||
      (input[i] && neighbors == 2)
  }

  return output;
};

var initial = function () {
  return [
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 1, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
  ];
};

//var initial = function () {
//  return [
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 1, 0, 0, 0, 0, 1, 0, 1, 0, 0, 0, 0, 1, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 0, 0, 1, 1, 1, 0, 0, 0, 1, 1, 1, 0, 0, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//    0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
//  ];
//};

var dtodd = function (arr) {
  var l = arr.length,
      d = Math.sqrt(l),
      n = [];

  for (i = 0; i < d; i++) {
    n[i] = arr.slice(i * d, (i + 1) * d);
  };

  return n;
}

var cur = initial(),
    next;

var tick = function () {
  next = life(cur);
  React.renderComponent(
    <Gol array={dtodd(next)} />,
    document.getElementById('gol')
  );
  cur = next;
}

var interval = setInterval(tick, 100);
