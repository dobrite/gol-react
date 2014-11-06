var GolDispatcher = require('../dispatcher/GolDispatcher');
var GolConstants  = require('../constants/GolConstants');
var GolUtils = require('../utils/GolUtils');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');

var ActionTypes = GolConstants.ActionTypes;
var CHANGE_EVENT = 'change';

var _array;

// "private" functions

var GolStore = assign({}, EventEmitter.prototype, {

  // "public" methods
  emitChage: function () {
    this.emit(CHANGE_EVENT);
  },

  /**
   * @param {function} callback
   */
  addChangeListener: function (callback) {
    this.on(CHANGE_EVENT, callback);
  },

  get: function(id) {
    return _array;
  },

});

GolStore.dispatchToken = GolDispatcher.register(function(payload) {
  var action = payload.action;

  switch(action.type) {

    case ActionTypes.GOL_TICK:
      // GolDispatcher.waitFor([somestore, maybe none]); // weird that it is its own standalone method (no chaining)
      // call internal method to change state
      // GolStore.emitChange();
      break;

    // case ActionTypes.GOL_TOGGLE_START:

      default:
        // nothing
  }

});

module.exports = GolStore;