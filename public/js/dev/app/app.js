define(function(require){
	var $ = require("jquery");

	var initialize = function(){
			var self = this;
			// Core is responsible for application module management
			this.core = require('core');
			this.core.f.runModule('viewManager');
			this.core.f.runModule('sessionManager',function(){
				//Before starting App routing we need to start session management
				self.core.f.runModule('routeManager');
			});
	};

	return{
		initialize:initialize
	};
});