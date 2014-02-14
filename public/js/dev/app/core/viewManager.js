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

	return {setView:setView};
});