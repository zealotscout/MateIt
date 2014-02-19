define(['jquery'],function($){
	var isAuthenticated = false
	var loadAuth = function(cb){
		$.get('/api/auth/logedin', function(data){
			isAuthenticated = data.authenticated;
			if(cb)
				cb();
		});
	}

	var getAuth = function(){
		return isAuthenticated;
	}

	var initialize = function(core,cb){
		this.core = core;
		loadAuth(cb);
	}

	return{
		initialize: initialize,
		getAuth:getAuth
	}
});