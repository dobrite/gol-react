/** @jsx React.DOM */

var golEngine = {
  state: {
    interval: null,
    range: [0, 1, 2, 3, 4, 5, 6, 7, 8],
    current: [
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
  },

  registerRenderCallback: function (callback) {
    this.state.renderCallback = callback;
    this.output();
  },

  output: function () {
    this.state.renderCallback(this.dtodd(this.state.current));
  },

  startStop: function () {
    if (this.state.interval) {
      clearInterval(this.state.interval);
      this.state.interval = null;
    } else {
      (function (_this) {
        _this.state.interval = setInterval(function () {
          _this.state.current = _this.life(_this.state.current);
          _this.output();
        }, 25);
      })(this);
    }
  },

  zeroed: function (len) {
    return Array.apply(null, new Array(len)).map(Number.prototype.valueOf, 0);
  },

  newSize: function (change) {
    var append = function (arr, num) {
      arr.splice.bind(arr, arr.length, 0).apply(arr, this.zeroed(num));
    }.bind(this);

    var remove = function (arr, num) {
      arr.splice(arr.length + num, Math.abs(num));
    }.bind(this);

    var len = this.state.current.length,
        size = Math.sqrt(len),
        newSize = size + change,
        up = newSize > 0,
        newLen = Math.pow(newSize, 2),
        diff = (up) ?  newLen - len : len - newLen;

    ((diff > 0) ? append : remove)(this.state.current, diff);
    this.output();
  },

  switchState: function (row, col) {
    var index = Math.sqrt(this.state.current.length) * row + col;
    this.state.current[index] = +!!!this.state.current[index];
    this.output();
  },

  // based on https://gist.github.com/aemkei/1134658
  life: function (input) {
    var len = input.length,
        size = Math.sqrt(len),
        output = this.zeroed(len),
        neighbors;

    return output.map(function (c, i) {
      neighbors = this.state.range.reduce(function (prev, curr) {
        return prev + input[this.idx(curr, i, size, len)];
      }.bind(this), 0);
      return (neighbors === 3 || (neighbors === 4 && input[i])) ? 1 : 0;
    }.bind(this));
  },

  idx: function (loc, i, size, len) {
    // if i is left top corner
    if (i === 0) {
      if (loc === 0) return len - 1; //
      if (loc === 1) return len - size;
      if (loc === 2) return len - size + 1;
      if (loc === 3) return size - 1;
      if (loc === 6) return (size * 2) - 1;
    }

    // if i is right top corner
    if (i === size - 1) {
      if (loc === 2) return len - size; //
      if (loc === 0) return len - 2;
      if (loc === 1) return len - 1;
      if (loc === 5) return 0;
      if (loc === 8) return size;
    }

    // if i is left bottom corner
    if (i === len - size) {
      if (loc === 6) return size - 1; //
      if (loc === 0) return len - size - 1;
      if (loc === 3) return len - 1;
      if (loc === 7) return 0;
      if (loc === 8) return 1;
    }

    // if i is right bottom corner
    if (i === len - 1) {
      if (loc === 8) return 0; //
      if (loc === 2) return len - (2 * size);
      if (loc === 5) return len - size;
      if (loc === 6) return size - 2;
      if (loc === 7) return size - 1;
    }

    // if i is left edge
    if (i % size === 0) {
      if (loc === 0) return i - 1;
      if (loc === 3) return i + size - 1;
      if (loc === 6) return i + (size * 2) - 1;
    }

    // if i is right edge
    if ((i + 1) % size === 0) {
      if (loc === 2) return i - (2 * size) + 1;
      if (loc === 5) return i - size + 1;
      if (loc === 8) return i + 1;
    }

    // if i is top edge
    if (i >= 0 && i < size) {
      if (loc === 0) return i + len - size - 1;
      if (loc === 1) return i + len - size;
      if (loc === 2) return i + len - size + 1;
    }

    // if i is bottom edge
    if (i >= len - size && i < len) {
      if (loc === 6) return i - len + size - 1;
      if (loc === 7) return i - len + size;
      if (loc === 8) return i - len + size + 1;
    }

    var isSameLine = function (v1, v2, size) {
      return Math.floor(v1 / size) === Math.floor(v2 / size);
    };

    var identity = function (val) {
      return val;
    };

    var top = function (val) {
      return (val >= 0) ? val : (val + i) + len;
    };

    var left = function (val) {
      return (isSameLine(val + 1, val, size)) ? val : val + size;
    };

    var right = function (val) {
      return (isSameLine(val - 1, val, size)) ? val : val - size;
    };

    var bottom = function (val) {
      return (val < len) ? val : (val - i) - len + size;
    };

    switch (loc) {
      case 0:
        return top(i - size - 1);
      case 1:
        return top(i - size);
      case 2:
        return top(i - size + 1);
      case 3:
        return left(i - 1);
      case 4:
        return identity(i);
      case 5:
        return right(i + 1);
      case 6:
        return bottom(i + size - 1);
      case 7:
        return bottom(i + size);
      case 8:
        return bottom(i + size + 1);
    }
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

};

var Gol = React.createClass({

  render: function () {
    var rows = this.props.array.map(function(row, rowNum) {
      return (
        <Row
          key={'r' + rowNum.toString()}
          row={row}
          rowNum={rowNum}
          handleSwitchState={this.props.handleSwitchState} />
      );
    }.bind(this));

    // TODO: put this button in Controls
    return (
      <div>
        <div>
          <button
            type="button"
            onClick={this.props.handleClickStartStop}
            children={this.getStartStopText()}>
          </button>
          <Controls
            size={this.props.array.length}
            handleNewSize={this.props.handleNewSize}
            handleClickStartStop={this.props.handleClickStartStop} />
        </div>
        <div>
          {rows}
        </div>
      </div>
    );
  },

  getStartStopText: function () {
    // TODO: fix this
    return 'start';
  },

});

var Row = React.createClass({
  render: function () {
    var cols = this.props.row.map(function(col, colNum) {
      return (
        <Col
          key={'c' + colNum.toString()}
          col={col}
          colNum={colNum}
          rowNum={this.props.rowNum}
          handleSwitchState={this.props.handleSwitchState} />
      );
    }.bind(this));

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
  }
});

var render = function (array) {
  React.render(
    <Gol
      array={array}
      handleNewSize={golEngine.newSize.bind(golEngine)}
      handleClickStartStop={golEngine.startStop.bind(golEngine)}
      handleSwitchState={golEngine.switchState.bind(golEngine)} />,
    document.getElementById('gol')
  );
};

var Controls = React.createClass({

  render: function () {
    return (
      <div>
        <button
          type="button"
          onClick={this.handleNewSize}
          value={1}
          children={'+'}>
        </button>
        <button
          type="button"
          onClick={this.handleNewSize}
          value={-1}
          children={'-'}>
        </button>
        <span>
          {this.props.size}
        </span>
      </div>
    );
  },

  handleNewSize: function (e) {
    var delta = parseInt(e.target.value, 10);
    this.props.handleNewSize(delta);
  },

});

golEngine.registerRenderCallback(render);
