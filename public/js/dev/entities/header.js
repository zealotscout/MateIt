// Entities for the Header Module
MateIt.app.module('Entities.Header',function(Header,app,Backbone,Marionette,$,_){
	// Initialize clases
	Header.linkModel = Backbone.Model.extend({});

	Header.LinksCollection = Backbone.Collection.extend({
		model: Header.linkModel
	});

	Header.API = {
		getLinks: function(){
			return new Header.LinksCollection([
					{name:"login" ,domId:"loginBtn"},
					{name:"signup" ,domId:"signupBtn"}
				]);
		}
	}

	app.reqres.setHandler("Entities:Header.Links",function(){
		return Header.API.getLinks();
	});
});
