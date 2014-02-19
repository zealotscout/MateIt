define(['jquery','underscore','backbone','text!templates/signUpPage.hbs','handlebars','models/user'],function($,_,Backbone,signUpTemplate,hbs,User){
	return Backbone.View.extend({
		//cache template
		template: hbs.compile(signUpTemplate)({}),
		events:{
			'click #submitButton':"signUp"
		},
		initialize: function(opts){
			this.el = opts.el;
			this.$el = $(this.el);
			this.render();
			this.getControls();
		},
		render:function(){
			this.$el.html(this.template);
		},
		close:function(){
			delete this;
		},
		signUp:function(e){
			e.preventDefault();

			//get Data
			var json = {
				username: this.$usernameTxt.val(),
				password: this.$passwordTxt.val(),
				email: this.$emailTxt.val(),
				name: this.$nameTxt.val(),
				birthdate: this.$birthdateDate.val(),
				country: this.$countrySelect.val()
			};

			//Persist User
			var user = new User(_.extend(json));
			user.save();
		},
		getControls:function(){
			this.$usernameTxt = $(this.el + ' #username-txt');
			this.$passwordTxt = $(this.el + ' #password-txt');
			this.$repeatPasswordTxt = $(this.el + ' #password2-txt');
			this.$emailTxt = $(this.el + ' #email-txt');
			this.$nameTxt = $(this.el + ' #name-txt');
			this.$birthdateDate = $(this.el + ' #birthdate-date');
			this.$countrySelect = $(this.el + ' #country-select');
		}
	});
});