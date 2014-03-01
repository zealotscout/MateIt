//= require js/dev/bower_components/handlebars/handlebars.runtime.js
//= require js/dev/bower_components/jquery/jquery.js
//= require js/dev/bower_components/underscore/underscore.js
//= require js/dev/bower_components/backbone/backbone.js
//= require js/dev/bower_components/marionette/lib/backbone.marionette.min.js
//= require_directory ./config
//= require js/dev/app.js
//= require_directory ./entities
//= require js/dev/modules/navbar/module.js
$(document).ready(function(){
	//Adding Basic Application Regions
	window.MateIt.app.addRegions({
		navbar:"header",
		appContainer:"#appContainer",
		footer: "footer"
	});

	// When Initialasing Start Backbone History
	window.MateIt.app.on('initialize:after',function(options){
		if(Backbone.history)
			Backbone.history.start({pushState:true});
	});
	window.MateIt.app.start();
});
