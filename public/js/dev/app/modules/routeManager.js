define(['jquery','underscore','backbone','filter','app/routes'],function($,_,Backbone,Filter,routes){
	var router = {};

	var catchLinks = function(){
		$(document).on('click','a',function(e){
			var href = $(this).attr('href');
			if(href != '#'){
				router.navigate(href,{trigger:true});
			}
			e.preventDefault();	
		});
	}

	var loadRoutes = function(context){
		var result = {routes:{}};

		_.each(routes,function(routeObj,route){
			result.routes[route] = routeObj.name;
			result[routeObj.name] = Filter.register(routeObj.filters,routeObj.fn,context);
		});
		return result;
	}

	var initialize = function(core){
		this.core = core;
		var routerExtend = loadRoutes(this);
		var Router = Backbone.Router.extend(routerExtend);
		router = new Router;
		catchLinks();
		Backbone.history.start({pushState:true});
	}
	return{
		initialize:initialize
	}
});