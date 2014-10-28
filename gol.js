/** @jsx React.DOM */


var Gol = React.createClass({
  getInitialState: function () {
    return {
      array: [
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 1, 1, 0, 0, 1, 1, 1, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
        0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0,
      ]
    };
  },

  getDefaultProps: function () {
    return {
      array: this.dtodd(this.state.array)
    };
  },

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
        <div>
          <button
            type="button"
            onClick={this.handleClickStart}>
            start
          </button>
        </div>
        <div>
          {rows}
        </div>
      </div>
    );
  },

  tick: function () {
    var newState = this.life(this.state.array);
    this.setState({array: newState});
    this.setProps({array: this.dtodd(newState)});
  },

  handleClickStart: function () {
    this.setState({interval: setInterval(this.tick, 10)});
  },

  // https://gist.github.com/aemkei/1134658
  life: function (input) {
    var len = input.length,
        size = Math.sqrt(len),
        i = len,
        output = [i],
        neighbors;

    for (;i--;) {
      neighbors =
        input[this.idx(0, i, size, len)] + input[this.idx(1, i, size, len)] + input[this.idx(2, i, size, len)] +
        input[this.idx(3, i, size, len)] +                                    input[this.idx(5, i, size, len)] +
        input[this.idx(6, i, size, len)] + input[this.idx(7, i, size, len)] + input[this.idx(8, i, size, len)];
      output[i] =
        neighbors == 3 ||
        (input[i] && neighbors == 2);
    }

    return output;
  },

  standard: function (loc, i, size, len) {
    switch (loc) {
      case 0:
        return this.top(i - size - 1, size, len);
      case 1:
        return this.top(i - size, size, len);
      case 2:
        return this.top(i - size + 1, size, len);
      case 3:
        return this.left(i - 1, size, len);
      case 4:
        return i;
      case 5:
        return this.right(i + 1, size, len);
      case 6:
        return this.bottom(i + size - 1, size, len);
      case 7:
        return this.bottom(i + size, size, len);
      case 8:
        return this.bottom(i + size + 1, size, len);
    }
  },

  top: function (val, size, len) {
    return (val >= 0) ? val : (val + i) + len;
  },

  left: function (val, size, len) {
    return (this.isSameLine(val + 1, val, size)) ? val : val + size;
  },

  right: function (val, size, len) {
    return (this.isSameLine(val - 1, val, size)) ? val : val - size;
  },

  bottom: function (val, size, len) {
    return (val < len) ? val : (val - i) - len + size;
  },

  isSameLine: function (v1, v2, size) {
    return Math.floor(v1 / size) === Math.floor(v2 / size);
  },

  idx: function (loc, i, size, len) {

    //if i is left top corner
    if (i === 0) {
      if (loc === 0) return len - 1;
      if (loc === 1) return len - size;
      if (loc === 2) return len - size + 1;
      if (loc === 3) return size - 1;
      if (loc === 6) return (size * 2) - 1;
    }
    //if i is right top corner
    if (i === size - 1) {
      if (loc === 2) return len - size;
      if (loc === 0) return len - 2;
      if (loc === 1) return len - 1;
      if (loc === 5) return 0;
      if (loc === 8) return size;
    }
    //if i is left bottom corner
    if (i === len - size) {
      if (loc === 6) return size - 1;
      if (loc === 0) return len - size - 1;
      if (loc === 3) return len - 1;
      if (loc === 7) return 0;
      if (loc === 8) return 1;
    }
    //if i is right bottom corner
    if (i === len - 1) {
      if (loc === 8) return 0;
      if (loc === 2) return len - (2 * size);
      if (loc === 5) return len - size;
      if (loc === 6) return size - 2;
      if (loc === 7) return size - 1;
    }
    //if i is left edge
    if (i % size === 0) {
      if (loc === 0) return i - 1;
      if (loc === 3) return i + size - 1;
      if (loc === 6) return i + (size * 2) - 1;
    }
    //if i is right edge
    if ((i + 1) % size === 0) {
      if (loc === 2) return i - (2 * size) + 1;
      if (loc === 5) return i - size + 1;
      if (loc === 8) return i + 1;
    }
    //if i is top edge
    if (i >= 0 && i < size) {
      if (loc === 0) return i + len - size - 1;
      if (loc === 1) return i + len - size;
      if (loc === 2) return i + len - size + 1;
    }
    //if i is bottom edge
    if (i >= len - size && i < len) {
      if (loc === 6) return i - len + size - 1;
      if (loc === 7) return i - len + size;
      if (loc === 8) return i - len + size + 1;
    }

    return this.standard(loc, i, size, len);
  },

  dtodd: function (arr) {
    var l = arr.length,
        d = Math.sqrt(l),
        n = [];

    for (i = 0; i < d; i++) {
      n[i] = arr.slice(i * d, (i + 1) * d);
    }

    return n;
  },

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

React.renderComponent(
  <Gol />,
  document.getElementById('gol')
);
