//Composite View or Link List
//= require ./linkview.js
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	NavBar.LinksView = Marionette.CollectionView.extend({
		itemView: NavBar.LinkView,
		attributes:{
			"id":"linksContainer",
			"class":"nav navbar-nav navbar-right"
		}
	});	
});
