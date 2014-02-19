define(function(require){
	var actualView = null,
			el = '#appContainer',
			_ = require('underscore');

	var removeActualView = function(){
		actualView.close();
		delete actualView;
	}

	var setView = function(view,args){

		require(['views/' + view] , function(View){
		if(actualView)
			removeActualView();

		if(args)
			actualView = new View(_.extend(args,{el:el}));
		else
			actualView = new View({el:el});
		});
	}

	var listenAttachView = function(msg,data){
		var view = data.view;
		setView(view);
	}

	var initialize = function(core){
		this.core = core;
		this.core.f.sub('viewManager','viewManager.setView',listenAttachView);
	};

	return {
			initialize: initialize,
			setView:setView
		};
});