var GolConstants = require('../constants/GolConstants'),
    Dispatcher   = require('flux').Dispatcher,
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

module.exports = GolDispatcher;
