define(['jquery','underscore','backbone','text!templates/loginPage.hbs','handlebars','models/user'],function($,_,Backbone,loginTemplate,hbs,User){
	return Backbone.View.extend({
		//cache template
		template: hbs.compile(loginTemplate)({}),
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
		}
	});
});