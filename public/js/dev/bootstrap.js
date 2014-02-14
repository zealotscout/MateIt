require.config({
	paths:{
		handlebars:"libs/handlebars",
		core:"app/core",
		text:"libs/text",
		models:"app/models",
		views:"app/views",
		modules:"app/modules",
		templates:"app/templates",
		collection:"app/collections",
		backbone:"libs/backbone",
		underscore:"libs/underscore",
		bootstrap:"libs/bootstrap",
		jquery:"libs/jquery",
	},shim: {
			'handlebars': {
        exports: 'Handlebars'
      },
			underscore: {
	        exports: "_"
	    },
	    backbone: {
	        deps: ["underscore","jquery"],
	        exports: "Backbone"
	    },
	    bootstrap:{
	    	deps:["jquery"]
	    }
	}
});

require(["app/app"],function(App){
	
	//global App Handler
	window.MateIt = {};
	window.MateIt.App = App;

	$(document).ready(function(){
		console.log('app initialized');
		App.initialize();
	});
});