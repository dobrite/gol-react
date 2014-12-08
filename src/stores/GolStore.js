import GolDispatcher from '../dispatcher/GolDispatcher';
import GolConstants  from '../constants/GolConstants';
import GolActionCreators from '../actions/GolActionCreators';

var { EventEmitter } = require('events');
var assign           = require('object-assign');

var ActionTypes = GolConstants.ActionTypes,
    CHANGE_EVENT = 'change',
    started = false,
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

var toggleStart = () =>
  (interval) ?
    clearInterval(interval) || (interval = null)
  :
    interval = setInterval(
      () => GolActionCreators.tick()
    , 25)

var newSize = (change) => {
  var len = current.length,
      size = Math.sqrt(len),
      isUp = change > 0;

  var append = (arr, num) => arr.splice.bind(arr, arr.length, 0).apply(arr, zeroed(num))
  var remove = (arr, num) => arr.splice(arr.length - num, num);

  var getRightEdges = (arr) =>
    range(arr.length).filter((elem) =>
      elem % size === 0
    );

  var increaseRightEdge = (cur, idx) => current.splice(cur, 0, 0);
  var decreaseRightEdge = (cur, idx) => current.splice(cur, 1);

  var resizeArray = (dirFunc, size, rightEdgeFunc) => {
    var rightEdges = getRightEdges(current);
    dirFunc(current, size);
    rightEdges.reverse().map(rightEdgeFunc);
  };

  return (isUp) ?
    resizeArray(append, size + 1, increaseRightEdge)
  :
    resizeArray(remove, size, decreaseRightEdge);
};

var switchState = (row, col) => {
  var index = Math.sqrt(current.length) * row + col;
  current[index] = +!!!current[index];
};

var zeroed = (len) => Array.apply(null, new Array(len)).map(Number.prototype.valueOf, 0);
var range  = (len) => Array.apply(null, new Array(len)).map((cur, idx) => idx);

// derived from https://gist.github.com/aemkei/1134658
var life = (input) => {
  var len = input.length,
      size = Math.sqrt(len),
      output = zeroed(len),
      neighbors;

  return output.map((c, i) => {
    neighbors = range(9).reduce((prev, curr) =>
      prev + input[idx(curr, i, size, len)]
    , 0);
    return (neighbors === 3 || (neighbors === 4 && input[i])) ? 1 : 0;
  });
};

var idx = (loc, i, size, len) => {
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

  var isSameLine = (v1, v2, size) => Math.floor(v1 / size) === Math.floor(v2 / size);
  var identity = (val) => val;
  var top = (val) => (val >= 0) ? val : (val + i) + len;
  var left = (val) => (isSameLine(val + 1, val, size)) ? val : val + size;
  var right = (val) => (isSameLine(val - 1, val, size)) ? val : val - size;
  var bottom = (val) => (val < len) ? val : (val - i) - len + size;

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

var dtodd = (arr) => {
  var l = arr.length,
      d = Math.sqrt(l),
      n = [];

  for (var i = 0; i < d; i++) {
    n[i] = arr.slice(i * d, (i + 1) * d);
  }

  return n;
};

var GolStore = assign({}, EventEmitter.prototype, {
  emitChange() {
    this.emit(CHANGE_EVENT)
  },

  addChangeListener(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get(id) {
    return {
      array: dtodd(current),
      startStop: !!interval,
    };
  },
});

GolStore.dispatchToken = GolDispatcher.register((payload) => {
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

export default GolStore;
