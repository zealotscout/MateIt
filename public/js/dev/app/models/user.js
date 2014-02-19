define(['jquery','underscore','backbone'],function($,_,Backbone){
	return Backbone.Model.extend({
		urlRoute: '/api/users',
		url: function(){
			if(this.id)
				return this.urlRoute + this.get('id');
			return this.urlRoute;
		},
		initialize: function(){

		}
	});
});