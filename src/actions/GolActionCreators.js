import GolDispatcher from '../dispatcher/GolDispatcher';
import GolConstants  from '../constants/GolConstants';

var ActionTypes = GolConstants.ActionTypes;

export default = {
  tick() {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_TICK,
    });
  },

  toggleStart() {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_TOGGLE_START,
    });
  },

  newSize(delta) {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_NEW_SIZE,
      delta: delta,
    });
  },

  switchState(data) {
    GolDispatcher.handleViewAction({
      type: ActionTypes.GOL_SWITCH_STATE,
      data: data,
    });
  },
};
