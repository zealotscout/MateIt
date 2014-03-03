//Module for Auth Logic
//= require_directory ./views/templates
//= require_directory ./views
MateIt.app.module('Auth',function(Auth,app,Backbone,Marionette,$,_){
	var AuthRouter = Marionette.AppRouter.extend({
				routes:{
					"/": "showLogin"
				}
			});

	//======Private Functions======
	var getAuthRouter = function(){
		return new AuthRouter({controller:Auth.API});
	}

	var getLoginView = function(){
		return new Auth.LoginView();
	}
	

	//======Public API======
	Auth.API = {
		showLogin: function(){
			var loginView = getLoginView();
			app.container.show(loginView);
		}
	}
	app.addInitializer(function(){
		Auth.Router = getAuthRouter();
		Auth.API.showLogin();
	});
});