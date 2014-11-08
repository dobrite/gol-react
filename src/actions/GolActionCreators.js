var GolDispatcher = require('../dispatcher/GolDispatcher');
var GolConstants = require('../constants/GolConstants');

var ActionTypes = GolConstants.ActionTypes;

module.exports = {

  tick: function () {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_TICK,
    });
  },

  toggleStart: function () {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_TOGGLE_START,
    });
  },

  newSize: function (delta) {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_NEW_SIZE,
      delta: delta,
    });
  },

  switchState: function (data) {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_SWITCH_STATE,
      data: data,
    });
  },

};
