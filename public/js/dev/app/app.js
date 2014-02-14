define(function(require){
	var $ = require("jquery");

	var initialize = function(){
		
		//sets app modules
		this.router = require('core/router');
		this.viewManager = require('core/viewManager');
		this.sessionManager = require('core/sessionManager');

		this.router.initialize(this.viewManager,this.sessionManager);
	};

	return{
		initialize:initialize
	};
});