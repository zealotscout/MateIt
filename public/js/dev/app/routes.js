define(function(require){
	//Define routes in object below
	return {
		'':{
			name:'showLanding',
			fn: function(){
				this.core.f.pub('viewManager.setView',{view:'showLanding'});
			}
		},
		'app/login':{
			name:'showLogin',
			fn: function(){
				console.log('hello world');
				this.core.f.pub('viewManager.setView',{view:'showLogin'});
			}
		},
		'app/signup':{
			name:'showSignup',
			fn: function(){
				this.core.f.pub('viewManager.setView',{view:'showSignup'});
			}
		}
	};
});