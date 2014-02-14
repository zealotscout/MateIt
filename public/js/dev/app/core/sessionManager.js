define(['jquery'],function($){
	var isAuth = function(cb){
		$.get('/api/auth/logedin', function(data){
			cb(data.authenticated);
		});
	}

	return{
		isAuth:isAuth
	}
});