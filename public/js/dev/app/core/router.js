define(['jquery','underscore','backbone'],function($,_,Backbone){
	var appRouter = {},
			viewManager = {},
			sessionManager = {};
	
	var AppRouter =  Backbone.Router.extend({
		routes:{
			'':'showLanding',
			'app/login':'showLogin',
			'app/signup':'showSignUp',
			'app/404':'showError404',
			'*notFound':'redirectError404'
		},showLanding: function(){
			viewManager.setView('showLanding');	
		},showError404: function(){
			viewManager.setView('404');
		},redirectError404: function(){
			appRouter.navigate('app/404',{trigger:true})
		}
	});

	var catchLinks = function(){
		$(document).on('click','a',function(e){
			var href = $(this).attr('href');
			if(href != '#'){
				appRouter.navigate(href,{trigger:true});
			}
			e.preventDefault();	
		});
	}

	var initialize = function(rViewManager,rSessionManager){
		appRouter = new AppRouter,
		viewManager = rViewManager,
		sessionManager = rSessionManager;

		// Initialize catching links for full front end
		catchLinks();

		Backbone.history.start({pushState:true});
	};

	return {initialize:initialize};
});