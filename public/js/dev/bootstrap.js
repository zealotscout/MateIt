require.config({
	paths:{
		handlebars:"libs/handlebars",
		core:"app/core/core",
		filter:"app/core/filter",
		text:"libs/text",
		models:"app/models",
		filters: "app/filters",
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

	$(document).ready(function(){
		//global App Handler
		window.MateIt = {};
		window.MateIt.App = App;
		App.initialize();
	});
});