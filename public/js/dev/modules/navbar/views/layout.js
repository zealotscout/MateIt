//NavBar Layout
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	NavBar.Layout = Marionette.Layout.extend({
		template:template,
		regions:{
			logoRegion:"#logoRegion",
			linksRegion:"#linksRegion"
		}
	});	
});
