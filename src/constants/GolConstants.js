var keyMirror = require('react/lib/keyMirror');

module.exports = {
  ActionTypes: keyMirror({
    GOL_TICK: null,
    GOL_TOGGLE_START: null,
    GOL_NEW_SIZE: null,
    GOL_SWITCH_STATE: null,
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null,
  })
};
