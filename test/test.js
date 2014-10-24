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

  var standard = function (loc, i) {
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
        return i;
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

  return standard(loc, i);
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
    var i = 0;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 8);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 6);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 7);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 2);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 0);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 1);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 5);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 3);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 4);
      });
    });
  });
  describe('i = 8', function () {
    var i = 8;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 4);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 5);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 3);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 7);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 8);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 6);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 1);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 2);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 0);
      });
    });
  });
  describe('i = 2', function () {
    var i = 2;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 7);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 8);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 6);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 1);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 2);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 0);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 4);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 5);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 3);
      });
    });
  });
  describe('i = 6', function () {
    var i = 6;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 5);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 3);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 4);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 8);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 6);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 7);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 2);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 0);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 1);
      });
    });
  });
  describe('i = 1', function () {
    var i = 1;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 6);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 7);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 8);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 0);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 1);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 2);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 3);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 4);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 5);
      });
    });
  });
  describe('i = 7', function () {
    var i = 7;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 3);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 4);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 5);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 6);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 7);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 8);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 0);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 1);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 2);
      });
    });
  });
  describe('i = 3', function () {
    var i = 3;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 2);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 0);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 1);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 5);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 3);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 4);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 8);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 6);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 7);
      });
    });
  });
  describe('i = 5', function () {
    var i = 5;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 1);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 2);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 0);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 4);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 5);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 3);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 7);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 8);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 6);
      });
    });
  });
  describe('i = 4', function () {
    var i = 4;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, 3, 9), 0);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, 3, 9), 1);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, 3, 9), 2);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, 3, 9), 3);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, 3, 9), 4);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, 3, 9), 5);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, 3, 9), 6);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, 3, 9), 7);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, 3, 9), 8);
      });
    });
  });
});

describe('Test 5x5 Array', function () {
  var size = 5,
      len  = 25;
  describe('i = 0', function () {
    var i = 0;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 24);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 20);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 21);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 4);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 0);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 1);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 9);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 5);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 6);
      });
    });
  });
  describe('i = 4', function () {
    var i = 4;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 23);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 24);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 20);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 3);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 4);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 0);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 8);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 9);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 5);
      });
    });
  });
  describe('i = 20', function () {
    var i = 20;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 19);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 15);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 16);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 24);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 20);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 21);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 4);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 0);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 1);
      });
    });
  });
  describe('i = 24', function () {
    var i = 24;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 18);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 19);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 15);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 23);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 24);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 20);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 3);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 4);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 0);
      });
    });
  });
  describe('i = 1', function () {
    var i = 1;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 20);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 21);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 22);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 0);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 1);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 2);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 5);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 6);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 7);
      });
    });
  });
  describe('i = 5', function () {
    var i = 5;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 4);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 0);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 1);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 9);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 5);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 6);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 14);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 10);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 11);
      });
    });
  });
  describe('i = 3', function () {
    var i = 3;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 22);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 23);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 24);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 2);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 3);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 4);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 7);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 8);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 9);
      });
    });
  });
  describe('i = 9', function () {
    var i = 9;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 3);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 4);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 0);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 8);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 9);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 5);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 13);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 14);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 10);
      });
    });
  });
  describe('i = 15', function () {
    var i = 15;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 14);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 10);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 11);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 19);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 15);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 16);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 24);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 20);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 21);
      });
    });
  });
  describe('i = 21', function () {
    var i = 21;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 15);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 16);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 17);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 20);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 21);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 22);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 0);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 1);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 2);
      });
    });
  });
  describe('i = 19', function () {
    var i = 19;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 13);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 14);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 10);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 18);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 19);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 15);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 23);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 24);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 20);
      });
    });
  });
  describe('i = 23', function () {
    var i = 23;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 17);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 18);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 19);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 22);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 23);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 24);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 2);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 3);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 4);
      });
    });
  });
  describe('i = 2', function () {
    var i = 2;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 21);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 22);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 23);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 1);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 2);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 3);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 6);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 7);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 8);
      });
    });
  });
  describe('i = 10', function () {
    var i = 10;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 9);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 5);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 6);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 14);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 10);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 11);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 19);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 15);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 16);
      });
    });
  });
  describe('i = 14', function () {
    var i = 14;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 8);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 9);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 5);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 13);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 14);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 10);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 18);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 19);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 15);
      });
    });
  });
  describe('i = 22', function () {
    var i = 22;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 16);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 17);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 18);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 21);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 22);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 23);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 1);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 2);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 3);
      });
    });
  });
  describe('i = 6', function () {
    var i = 6;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 0);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 1);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 2);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 5);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 6);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 7);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 10);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 11);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 12);
      });
    });
  });
  describe('i = 8', function () {
    var i = 8;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 2);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 3);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 4);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 7);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 8);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 9);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 12);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 13);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 14);
      });
    });
  });
  describe('i = 16', function () {
    var i = 16;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 10);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 11);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 12);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 15);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 16);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 17);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 20);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 21);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 22);
      });
    });
  });
  describe('i = 18', function () {
    var i = 18;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(idx(0, i, size, len), 12);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(idx(1, i, size, len), 13);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(idx(2, i, size, len), 14);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(idx(3, i, size, len), 17);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(idx(4, i, size, len), 18);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(idx(5, i, size, len), 19);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(idx(6, i, size, len), 22);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(idx(7, i, size, len), 23);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(idx(8, i, size, len), 24);
      });
    });
  });
});
