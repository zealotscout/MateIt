(function(){
	// Creates new App
	var app = new Marionette.Application();

	//Adding Basic Application Regions
	app.addRegions({
		navbar:"header",
		appContainer:"#appContainer",
		footer: "footer"
	});

	// When Initialasing Start Backbone History
	app.on('initialize:after',function(options){
		if(Backbone.history)
			Backbone.history.start({pushState:true});
	});
	window.MateIt = {};
	window.MateIt.app = app;

})();
