//Single Link in NavBar
MateIt.app.module('NavBar',function(NavBar,app,Backbone,Marionette,$,_){
	NavBar.LinkView = Marionette.ItemView.extend({
		template:'js/dev/modules/navbar/views/templates/linkview',
		tagName:'li'
	});	
});
