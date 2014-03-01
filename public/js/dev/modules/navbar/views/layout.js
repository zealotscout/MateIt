//NavBar Layout
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	NavBar.Layout = Marionette.Layout.extend({
		template:'js/dev/modules/navbar/views/templates/layout',
		regions:{
			logoRegion:"#logoRegion",
			linksRegion:"#linksRegion"
		},
		className:"navbar navbar-default navbar-inverse",
		tagName:"nav",
		attributes:{"role":"navigation"}
	});	
});
