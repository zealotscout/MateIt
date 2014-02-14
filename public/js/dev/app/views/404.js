define(['jquery','underscore','backbone','text!templates/404.hbs','handlebars'],function($,_,Backbone,template,hbs){
	return Backbone.View.extend({
		//cache template
		template: hbs.compile(template)({}),
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