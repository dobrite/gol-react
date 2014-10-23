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

var idx = function (loc, i, size, len) {
  switch (loc) {
    case 0:
      val = val || i - size - 1;
    case 1:
      val = val || i - size;
    case 2:
      val = val || i - size + 1;
      return (val >= 0) ? val : (val + i) + len - size;
    break;
    case 3:
      val = val || i - 1;
      return (Math.floor((val + 1) / size) === Math.floor(val / size)) ? val : val + size;
    break;
    case 5:
      val = val || i + 1;
      return (Math.floor((val - 1) / size) === Math.floor(val / size)) ? val : val - size;
    break;
    case 6:
      val = val || i + size - 1;
    case 7:
      val = val || i + size;
    case 8:
      val = val || i + size + 1;
      return (val < len) ? val : (val - i) - len + size;
    break;
  }
};

// https://gist.github.com/aemkei/1134658
var life = function (input) {
  var len = input.length,
      size = Math.sqrt(len),
      i = len,
      output = [i],
      neightbors;

  for (;i--;) {
    neighbors =
      input[idx(0, i, size, len)] + input[idx(1, i, size, len)] + input[idx(2, i, size, len)] +
      input[idx(3, i, size, len)] +                               input[idx(5, i, size, len)] +
      input[idx(6, i, size, len)] + input[idx(7, i, size, len)] + input[idx(8, i, size, len)];
    output[i] =
      neighbors == 3 ||
      (input[i] && neighbors == 2)
  }

  return output;
};

//var initial = function () {
//  return [
//    1, 1, 0, 0, 0,
//    1, 1, 0, 0, 0,
//    0, 0, 0, 0, 0,
//    0, 0, 0, 1, 1,
//    0, 0, 0, 1, 1,
//  ];
//};

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
