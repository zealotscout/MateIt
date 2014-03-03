//Single Link in NavBar
MateIt.app.module('Auth',function(Auth,app,Backbone,Marionette,$,_){
	Auth.LoginView = Marionette.FormView.extend({
		template:'js/dev/modules/auth/views/templates/loginview',
		fields:{
			username:{
				el:'.form-group.username',
				required:'*Campo Requerido'
			},
			password:{
				el:'.form-group.password',
				required:'*Campo Requerido',
				validations:{
					passwordLength:"Tu contraseña debe ser mayor a 6 caracteres"
				}
			}
		},
		rules:{
			passwordLength: function(val){
				 return val.length > 6;
			}
		},
		removeErrors: function(){
			this.$el.find(".has-error").removeClass("has-error");
		},
		removeTooltips:function(){
			this.$el.find("input").tooltip('destroy');
		},
		addErrorTooltip:function(element){
			$(element.el).addClass("has-error");
			$(element.el).find('input').tooltip({
				title: element.error[0],
				placement:'right',
				trigger:'manual'
			}).tooltip('show');
		},
		processErrors: function(errors){
			var self = this;
			this.removeErrors();
			this.removeTooltips();
			_.each(errors,function(element){
				self.addErrorTooltip(element);
			});
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
