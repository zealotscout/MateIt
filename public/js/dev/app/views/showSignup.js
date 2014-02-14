define(['jquery','underscore','backbone','text!templates/landingPage.hbs','handlebars','models/user'],function($,_,Backbone,landingTemplate,hbs){
	return Backbone.View.extend({
		//cache template
		template: hbs.compile(landingTemplate)({}),
		initialize: function(opts){
			this.el = opts.el;
			this.$el = $(this.el);
			this.render();
		},
		render:function(){
			this.$el.html(this.template);
		},
		close:function(){
			delete this;
		},
		signUp:function(){
			
		}
	});
});