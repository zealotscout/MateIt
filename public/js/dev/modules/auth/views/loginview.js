//Single Link in NavBar
MateIt.app.module('Auth',function(Auth,app,Backbone,Marionette,$,_){
	Auth.LoginView = Marionette.FormView.extend({
		template:'js/dev/modules/auth/views/templates/loginview',
		fields:{
			username:{
				el:'.form-group.username',
				required:'Please enter a valid adress'
			},
			password:{
				el:'.form-group.password',
				required:'Please enter a password adress',
				validations:{
					password:"Please enter a valid password adress"
				}
			}
		},
		removeErrors: function(){
			this.$el.find(".has-error").removeClass("has-error");
		},
		processErrors: function(errors){
			this.removeErrors();
			_.each(errors,function(element){
				$(element.el).addClass("has-error");
			});
		},
		rules:{
			password: function(val){
				 return val.length > 6;
			}
		},
		onSubmit:function(evt){
			this.removeErrors();
		},
		onSubmitFail: function(errors) {
			this.processErrors(errors);
    },
		className:'container'
	});	
});
