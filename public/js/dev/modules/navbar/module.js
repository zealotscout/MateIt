//Module for NavBar Logic
//= require_directory ./views/templates
//= require_directory ./views
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	var layout = {};

	//======Private Functions======

	var getLayout = function(){
		return new NavBar.Layout;
	};

	var getLogoView = function(){
		return new NavBar.LogoView();
	}

	var getLinksView = function(links){
		return new NavBar.LinksView({collection:links});
	}

	var getLinksEntities = function(){
		// Ask for Header Links
		return app.request('Entities:Header.Links');
	}

	//======Public API======
	NavBar.API = {
		showNavBar: function(){
			layout = getLayout();
			layout.on('show',function(){
				NavBar.API.showLogo();
				NavBar.API.showLinks();
			});
			app.navbar.show(layout);
		},
		showLogo: function(){
			var view = getLogoView();
			console.log(layout);
			layout.logoRegion.show(view);
		},
		showLinks: function(){
			var links = getLinksEntities();
			var view = getLinksView(links);
			layout.linksRegion.show(view); 
		}
	}
	app.addInitializer(function(){
		console.log(NavBar);
		NavBar.API.showNavBar();
	});
});