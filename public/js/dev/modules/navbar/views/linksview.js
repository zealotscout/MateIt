//Composite View or Link List
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	NavBar.LinksView = Marionette.CompositeView.extend({
		template:template,
		itemView:NavBar.LinkView,
		itemViewContainer:'#linksContainer'
	});	
});
