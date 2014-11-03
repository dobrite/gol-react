var assert = require('assert');
var golEngine = require('../golEngine.js');

describe('Test 3x3 Array', function () {
  describe('i = 0', function () {
    var i = 0;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 8);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 6);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 7);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 2);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 0);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 1);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 5);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 3);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 4);
      });
    });
  });
  describe('i = 8', function () {
    var i = 8;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 4);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 5);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 3);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 7);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 8);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 6);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 1);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 2);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 0);
      });
    });
  });
  describe('i = 2', function () {
    var i = 2;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 7);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 8);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 6);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 1);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 2);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 0);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 4);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 5);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 3);
      });
    });
  });
  describe('i = 6', function () {
    var i = 6;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 5);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 3);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 4);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 8);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 6);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 7);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 2);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 0);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 1);
      });
    });
  });
  describe('i = 1', function () {
    var i = 1;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 6);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 7);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 8);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 0);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 1);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 2);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 3);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 4);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 5);
      });
    });
  });
  describe('i = 7', function () {
    var i = 7;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 3);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 4);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 5);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 6);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 7);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 8);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 0);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 1);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 2);
      });
    });
  });
  describe('i = 3', function () {
    var i = 3;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 2);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 0);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 1);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 5);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 3);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 4);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 8);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 6);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 7);
      });
    });
  });
  describe('i = 5', function () {
    var i = 5;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 1);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 2);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 0);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 4);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 5);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 3);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 7);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 8);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 6);
      });
    });
  });
  describe('i = 4', function () {
    var i = 4;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, 3, 9), 0);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, 3, 9), 1);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, 3, 9), 2);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, 3, 9), 3);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, 3, 9), 4);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, 3, 9), 5);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, 3, 9), 6);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, 3, 9), 7);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, 3, 9), 8);
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
        assert.equal(golEngine.idx(0, i, size, len), 24);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 20);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 21);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 4);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 0);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 1);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 9);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 5);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 6);
      });
    });
  });
  describe('i = 4', function () {
    var i = 4;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 23);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 24);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 20);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 3);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 4);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 0);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 8);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 9);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 5);
      });
    });
  });
  describe('i = 20', function () {
    var i = 20;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 19);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 15);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 16);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 24);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 20);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 21);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 4);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 0);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 1);
      });
    });
  });
  describe('i = 24', function () {
    var i = 24;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 18);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 19);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 15);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 23);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 24);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 20);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 3);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 4);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 0);
      });
    });
  });
  describe('i = 1', function () {
    var i = 1;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 20);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 21);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 22);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 0);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 1);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 2);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 5);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 6);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 7);
      });
    });
  });
  describe('i = 5', function () {
    var i = 5;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 4);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 0);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 1);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 9);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 5);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 6);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 14);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 10);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 11);
      });
    });
  });
  describe('i = 3', function () {
    var i = 3;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 22);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 23);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 24);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 2);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 3);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 4);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 7);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 8);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 9);
      });
    });
  });
  describe('i = 9', function () {
    var i = 9;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 3);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 4);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 0);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 8);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 9);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 5);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 13);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 14);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 10);
      });
    });
  });
  describe('i = 15', function () {
    var i = 15;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 14);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 10);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 11);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 19);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 15);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 16);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 24);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 20);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 21);
      });
    });
  });
  describe('i = 21', function () {
    var i = 21;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 15);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 16);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 17);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 20);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 21);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 22);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 0);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 1);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 2);
      });
    });
  });
  describe('i = 19', function () {
    var i = 19;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 13);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 14);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 10);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 18);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 19);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 15);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 23);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 24);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 20);
      });
    });
  });
  describe('i = 23', function () {
    var i = 23;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 17);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 18);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 19);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 22);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 23);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 24);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 2);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 3);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 4);
      });
    });
  });
  describe('i = 2', function () {
    var i = 2;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 21);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 22);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 23);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 1);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 2);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 3);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 6);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 7);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 8);
      });
    });
  });
  describe('i = 10', function () {
    var i = 10;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 9);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 5);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 6);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 14);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 10);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 11);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 19);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 15);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 16);
      });
    });
  });
  describe('i = 14', function () {
    var i = 14;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 8);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 9);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 5);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 13);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 14);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 10);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 18);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 19);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 15);
      });
    });
  });
  describe('i = 22', function () {
    var i = 22;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 16);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 17);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 18);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 21);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 22);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 23);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 1);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 2);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 3);
      });
    });
  });
  describe('i = 6', function () {
    var i = 6;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 0);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 1);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 2);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 5);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 6);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 7);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 10);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 11);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 12);
      });
    });
  });
  describe('i = 8', function () {
    var i = 8;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 2);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 3);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 4);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 7);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 8);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 9);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 12);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 13);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 14);
      });
    });
  });
  describe('i = 16', function () {
    var i = 16;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 10);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 11);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 12);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 15);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 16);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 17);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 20);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 21);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 22);
      });
    });
  });
  describe('i = 18', function () {
    var i = 18;
    describe('when loc is 0', function () {
      it('', function () {
        assert.equal(golEngine.idx(0, i, size, len), 12);
      });
    });
    describe('when loc is 1', function () {
      it('', function () {
        assert.equal(golEngine.idx(1, i, size, len), 13);
      });
    });
    describe('when loc is 2', function () {
      it('', function () {
        assert.equal(golEngine.idx(2, i, size, len), 14);
      });
    });
    describe('when loc is 3', function () {
      it('', function () {
        assert.equal(golEngine.idx(3, i, size, len), 17);
      });
    });
    describe('when loc is 4', function () {
      it('', function () {
        assert.equal(golEngine.idx(4, i, size, len), 18);
      });
    });
    describe('when loc is 5', function () {
      it('', function () {
        assert.equal(golEngine.idx(5, i, size, len), 19);
      });
    });
    describe('when loc is 6', function () {
      it('', function () {
        assert.equal(golEngine.idx(6, i, size, len), 22);
      });
    });
    describe('when loc is 7', function () {
      it('', function () {
        assert.equal(golEngine.idx(7, i, size, len), 23);
      });
    });
    describe('when loc is 8', function () {
      it('', function () {
        assert.equal(golEngine.idx(8, i, size, len), 24);
      });
    });
  });
});
