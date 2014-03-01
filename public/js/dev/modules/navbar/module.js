//Module for NavBar Logic
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
			var layout = getLayout();
			layout.on('show',function(){
				NavBar.API.showLogo();
				NavBar.API.showLinks();
			});
			app.appContainer.show(layout);
		},
		showLogo: function(){
			var view = getLogoView();
			layout.logoRegion.show(view);
		},
		showLinks: function(){
			var links = getLinksEntities();
			var view = getLinksView(links);
			layout.linksRegion.show(view); 
		}
	}
	app.addInitializer(function(){
		NavBar.API.showNavBar();
	});
});