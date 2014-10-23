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
    console.log(val);
    console.log(i);
    console.log(len);
    console.log(size);
    console.log(val - i - len + size);
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
        assert.equal(8, idx(0, 0, 3, 9));
      });
    });
    describe('when loc is 1', function () {
      it('returns 6', function () {
        assert.equal(6, idx(1, 0, 3, 9));
      });
    });
    describe('when loc is 2', function () {
      it('returns 7', function () {
        assert.equal(7, idx(2, 0, 3, 9));
      });
    });
    describe('when loc is 3', function () {
      it('returns 2', function () {
        assert.equal(2, idx(3, 0, 3, 9));
      });
    });
    describe('when loc is 5', function () {
      it('returns 1', function () {
        assert.equal(1, idx(5, 0, 3, 9));
      });
    });
    describe('when loc is 6', function () {
      it.only('returns 5', function () {
        assert.equal(5, idx(6, 0, 3, 9));
      });
    });
    describe('when loc is 7', function () {
      it('returns 3', function () {
        assert.equal(3, idx(7, 0, 3, 9));
      });
    });
    describe('when loc is 8', function () {
      it('returns 4', function () {
        assert.equal(4, idx(8, 0, 3, 9));
      });
    });
  });
});
