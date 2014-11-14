var GolDispatcher = require('../dispatcher/GolDispatcher');
var GolConstants  = require('../constants/GolConstants');
var GolActionCreators = require('../actions/GolActionCreators');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = GolConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var started = false,
    interval = null,
    current = [
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
  ];

var toggleStart = function () {
  if (interval) {
    clearInterval(interval);
    interval = null;
  } else {
    interval = setInterval(function () {
      GolActionCreators.tick();
    }, 25);
  }
};

var newSize = function (change) {
  var len = current.length,
      size = Math.sqrt(len),
      isUp = change > 0;

  var append = function (arr, num) {
    arr.splice.bind(arr, arr.length, 0).apply(arr, zeroed(num));
  };

  var remove = function (arr, num) {
    arr.splice(arr.length - num, num);
  };

  var getRightEdges = function (arr) {
    return range(arr.length).filter(function(elem){
      return elem % size === 0;
    });
  };

  var increase = function () {
    var rightEdges = getRightEdges(current);

    append(current, size + 1);

    rightEdges.reverse().map(function(cur, idx) {
      current.splice(cur, 0, 0);
    });
  };

  var decrease = function () {
    var rightEdges = getRightEdges(current);

    remove(current, size);

    rightEdges.reverse().map(function(cur, idx) {
      current.splice(cur, 1);
    });
  };

  return (isUp) ? increase() : decrease();
};

var switchState = function (row, col) {
  var index = Math.sqrt(current.length) * row + col;
  current[index] = +!!!current[index];
};

var zeroed = function (len) {
  return Array.apply(null, new Array(len)).map(Number.prototype.valueOf, 0);
};

var range = function (len) {
  return Array.apply(null, new Array(len)).map(function(cur, idx) {
    return idx;
  });
};

// derived from https://gist.github.com/aemkei/1134658
var life = function (input) {
  var len = input.length,
      size = Math.sqrt(len),
      output = zeroed(len),
      neighbors;

  return output.map(function (c, i) {
    neighbors = range(9).reduce(function (prev, curr) {
      return prev + input[idx(curr, i, size, len)];
    }, 0);
    return (neighbors === 3 || (neighbors === 4 && input[i])) ? 1 : 0;
  });
};

var idx = function (loc, i, size, len) {
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
};

var dtodd = function (arr) {
  var l = arr.length,
      d = Math.sqrt(l),
      n = [];

  for (i = 0; i < d; i++) {
    n[i] = arr.slice(i * d, (i + 1) * d);
  }

  return n;
};

var GolStore = assign({}, EventEmitter.prototype, {

  emitChange: function () {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return {
      array: dtodd(current),
      startStop: !!interval,
    };
  },

});

GolStore.dispatchToken = GolDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.GOL_TICK:
      current = life(current);
      break;

    case ActionTypes.GOL_TOGGLE_START:
      toggleStart();
      break;

    case ActionTypes.GOL_NEW_SIZE:
      newSize(action.delta);
      break;

    case ActionTypes.GOL_SWITCH_STATE:
      switchState(action.data.row, action.data.col);
      break;

      default:
        // nothing
  }

  GolStore.emitChange();

  return true;

});

module.exports = GolStore;
