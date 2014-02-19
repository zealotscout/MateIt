define(function(require){
	//Define routes in object below
	return {
		'':{
			name:'showLanding',
			fn: function(){
				this.core.f.pub('viewManager.setView',{view:'showLanding'});
			}
		}
	};
});