import GolConstants from '../constants/GolConstants';
var Dispatcher   = require('flux').Dispatcher,
    assign       = require('object-assign');

var PayloadSources = GolConstants.PayloadSources;

var GolDispatcher = assign(new Dispatcher(), {
  handleViewAction(action) {
    this.dispatch({
      source: PayloadSources.VIEW_ACTION,
      action
    });
  }
});

export default GolDispatcher;
