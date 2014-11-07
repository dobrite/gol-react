var keyMirror = require('react/lib/keyMirror');

module.exports = {

  ActionTypes: keyMirror({
    GOL_TOGGLE_START: null,
    GOL_TICK: null,
  }),

  PayloadSources: keyMirror({
    VIEW_ACTION: null,
  })
};
