//Single Link in NavBar
MateIt.app.module('Auth',function(Auth,app,Backbone,Marionette,$,_){
	Auth.SignupView = Marionette.FormView.extend({
		template:'js/dev/modules/auth/views/templates/signupview',
		fields:{
			username:{
				el:'.form-group.username',
				required:'Introduce un nombre de usuario ejm: Ironman',
				validations:{

				}
			},
			password:{
				el:'.form-group.password',
				required:'*Campo Requerido',
				validations:{
					passwordLength:"Tu contraseña debe tener de 6 a 20 caracteres"
				}
			},
			repeatpassword:{
				el:'.form-group.repeat-password',
				required:'*Campo Requerido',
				validations:{
					passwordRepeat:"Tu contraseñas no coinciden"
				}
			},
			email:{
				el:'.form-group.email',
				required:'Introduce un email valido. ejm: tony@starkindustries.com',
				validations:{
					email:"Introduce un email valido. ejm: tony@starkindustries.com"
				}
			},
			name:{
				el:'.form-group.name',
				required:'Introduce tu nombre completo. ejm: Tony Stark',
				validations:{
					nameLength:"Tu nombre debe que ser menor a 50 caracteres"
				}
			},
			birthdate:{
				el:'.form-group.birthdate',
				required:'Introduce tu fecha de nacimiento. ejm: 5/29/1970',
				validations:{
					validbirthate:'Introduce tu fecha de nacimiento. ejm: 5/29/1970'
				}
			}
		},
		rules:{
			passwordLength: function(val){
				return val.length >= 6 && val.length <= 20;
			},
			passwordRepeat: function(val){
				return val === $('#password-txt').val();
			},
			userLength:function(val){
				return val.length >= 6 && val.length <= 20;
			},
			nameLength:function(val){
				return val.length <= 50; 
			},
			validbirthate: function(val){
				var datevalid = /^(19|20)\d{2}-(0[1-9]|1[0-2])-(0[1-9]|1\d|2\d|3[01])$/.test(val);
				return datevalid;
			}
		},
		removeTooltips:function(){
			this.$el.find("input").tooltip('destroy');
		},
		requestCountries: function(){
			var promise = app.request('Entities:Countries.All');
			var self = this;
			$.when(promise).then(function(countries){
				var options = ""; 
				countries.each(function(country){
					options += '<option value="' + country.get('code') +'">' + country.get('name') +'</option>';
				});
				self.$el.find('select').html(options);
			});
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
		onSubmit:function(evt){
			this.removeErrors();
		},
		addErrorTooltip:function(element){
			$(element.el).addClass("has-error");
			$(element.el).find('input').tooltip({
				title: element.error[0],
				placement:'right',
				trigger:'manual'
			}).tooltip('show');
		},
		onSubmitFail: function(errors) {
			this.processErrors(errors);
    },
		processErrors: function(errors) {
			var self = this;
			this.removeErrors();
			this.removeTooltips();
			_.each(errors,function(element){
				self.addErrorTooltip(element);
			});
    },
    onShow: function(){
    	this.requestCountries();
    },
		className:'container'
	});	
});
