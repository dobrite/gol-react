var GolDispatcher = require('../dispatcher/GolDispatcher');
var GolConstants = require('../constants/GolConstants');

var ActionTypes = GolConstants.ActionTypes;

module.exports = {

  toggleStart: function () {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_TOGGLE_START,
    });

  }

};
