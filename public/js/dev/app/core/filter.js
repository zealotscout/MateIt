define(function(require){
	var _ = require('underscore'),
			async = require('libs/async');
	var runFilters = function(filters){
		var result = _.every(filters,function(filter){
			return filter;
		});
		return result;
	};

	var getFilters = function(filters,cb){
		filters = filters || [];
		async.mapSeries(filters,getFilter,function(err,results){
			cb(results);
		});
	}

	var getFilter = function(filter,cb){
		require(['filters/' + filter],function(runnableFilter){
			cb(null,runnableFilter);
		});
	}


	var register = function(filters,fn,context){
		return function(){
			var args = Array.prototype.slice.apply(arguments),
					self = this;
			getFilters(filters,function(runnableFilters){
				if(runFilters(runnableFilters)){
					fn.apply(context,args);
				}
			});
		}
	}
	return{
		register: register
	}
});