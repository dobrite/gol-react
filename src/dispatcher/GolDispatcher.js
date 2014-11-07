var GolConstants = require('../constants/GolConstants');
var Dispatcher = require('flux').Dispatcher;
var assign = require('object-assign');

var PayloadSources = GolConstants.PayloadSources;

var GolDispatcher = assign(new Dispatcher(), {

  handleViewAction: function (action) {
    var payload = {
      source: PayloadSources.VIEW_ACTION,
      action: action
    };

    this.dispatch(payload);
  }

});

module.exports = GolDispatcher;
