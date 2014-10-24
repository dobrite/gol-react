var assert = require("assert");

var sameLine = function (v1, v2, size) {
  return Math.floor(v1 / size) === Math.floor(v2 / size);
};

var idx = function (loc, i, size, len) {
  var top = function (val) {
    return (val >= 0) ? val : (val + i) + len;
  };

  var left = function (val) {
    return (sameLine(val + 1, val, size)) ? val : val + size;
  };

  var right = function (val) {
    return (sameLine(val - 1, val, size)) ? val : val - size;
  };

  var bottom = function (val) {
    return (val < len) ? val : (val - i) - len + size;
  };

  switch (loc) {
    case 0:
      if (i === loc) {
        return len - 1;
      } else {
        return top(i - size - 1);
      }
      break;
    case 1:
      return top(i - size);
    case 2:
      if (i === loc) {
        return len - size;
      } else if ((i + 1) % size === 0) {
        // right edge
        return i - 2 * size + 1;
      } else {
        return top(i - size + 1);
      }
      break;
    case 3:
      return left(i - 1);
    case 5:
      return right(i + 1);
    case 6:
      if (i === loc) {
        return size - 1;
      } else if (i % size === 0) {
        // left edge
        return i + 2 * size - 1;
      } else {
        return bottom(i + size - 1);
      }
      break;
    case 7:
      return bottom(i + size);
    case 8:
      if (i === loc) {
        return 0;
      } else {
        return bottom(i + size + 1);
      }
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
      (input[i] && neighbors == 2);
  }

  return output;
};

var testArray = [
  0, 1, 2,
  3, 4, 5,
  6, 7, 8,
];

describe('same line', function () {
  it('returns true when on same line', function () {
    assert.equal(true, sameLine(0, 1, 3));
  });
  it('returns false when not on same line', function () {
    assert.equal(false, sameLine(2, 3, 3));
  });
});

describe('Test 3x3 Array', function () {
  describe('i = 0', function () {
    describe('when loc is 0', function () {
      it('returns 8', function () {
        assert.equal(idx(0, 0, 3, 9), 8);
      });
    });
    describe('when loc is 1', function () {
      it('returns 6', function () {
        assert.equal(idx(1, 0, 3, 9), 6);
      });
    });
    describe('when loc is 2', function () {
      it('returns 7', function () {
        assert.equal(idx(2, 0, 3, 9), 7);
      });
    });
    describe('when loc is 3', function () {
      it('returns 2', function () {
        assert.equal(idx(3, 0, 3, 9), 2);
      });
    });
    describe('when loc is 5', function () {
      it('returns 1', function () {
        assert.equal(idx(5, 0, 3, 9), 1);
      });
    });
    describe('when loc is 6', function () {
      it('returns 5', function () {
        assert.equal(idx(6, 0, 3, 9), 5);
      });
    });
    describe('when loc is 7', function () {
      it('returns 3', function () {
        assert.equal(idx(7, 0, 3, 9), 3);
      });
    });
    describe('when loc is 8', function () {
      it('returns 4', function () {
        assert.equal(idx(8, 0, 3, 9), 4);
      });
    });
  });
  describe('i = 8', function () {
    describe('when loc is 0', function () {
      it('returns 4', function () {
        assert.equal(idx(0, 8, 3, 9), 4);
      });
    });
    describe('when loc is 1', function () {
      it('returns 5', function () {
        assert.equal(idx(1, 8, 3, 9), 5);
      });
    });
    describe('when loc is 2', function () {
      it('returns 3', function () {
        assert.equal(idx(2, 8, 3, 9), 3);
      });
    });
    describe('when loc is 3', function () {
      it('returns 7', function () {
        assert.equal(idx(3, 8, 3, 9), 7);
      });
    });
    describe('when loc is 5', function () {
      it('returns 6', function () {
        assert.equal(idx(5, 8, 3, 9), 6);
      });
    });
    describe('when loc is 6', function () {
      it('returns 1', function () {
        assert.equal(idx(6, 8, 3, 9), 1);
      });
    });
    describe('when loc is 7', function () {
      it('returns 2', function () {
        assert.equal(idx(7, 8, 3, 9), 2);
      });
    });
    describe('when loc is 8', function () {
      it('returns 0', function () {
        assert.equal(idx(8, 8, 3, 9), 0);
      });
    });
  });
});
