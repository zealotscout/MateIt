//Module for Auth Logic
//= require_directory ./views/templates
//= require_directory ./views
MateIt.app.module('Auth',function(Auth,app,Backbone,Marionette,$,_){
	Auth.Router = Backbone.Marionette.AppRouter.extend({
		appRoutes:{
			"": "showLogin",
			"app/login": "showLogin",
			"app/signup":"showSignup"
		}
	});

	//======Private Functions======
	var getAuthRouter = function(){
		return new Auth.Router({controller:Auth.API});
	}

	var getLoginView = function(){
		return new Auth.LoginView();
	}
	
	var getSignupView = function(){
		return new Auth.SignupView();
	}

	//======Public API======
	Auth.API = {
		showLogin: function(){
			var loginView = getLoginView();
			app.container.show(loginView);
		},
		showSignup:function(){
			var signupView = getSignupView();
			app.container.show(signupView);
		}
	}
	app.addInitializer(function(){
		getAuthRouter();
	});
});