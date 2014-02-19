//Application Core
define(function(require){
	var Mediator = require('libs/pubsub'),
			modules = {},
			subscriptions = {};

	var requireModule = function(id,cb){
		require(['modules/' + id] ,function(module){
			if(!modules[id]){
				modules[id] = module;
				cb();
			}
		});
	};

	var initializeModule = function(id,cb){
		modules[id].initialize(facade,cb);
	};

	var stopModule = function(id,cb){
		Mediator.unsubscribe(subscriptions[id]);
		modules[id].stop();
		delete modules[id];
		delete subscriptions[id];
	}

	var subscribe = function(subscriber,msg,cb){
		subscriptions[subscriber] = Mediator.subscribe(msg,cb);
	};

	var publish = function(msg,content){
		Mediator.publish(msg,content);
	};

	var unsubscribe = function(cb){
		Mediator.unsubscribe(cb);
	}

	var runModule = function(id,cb){
		requireModule(id,function(){
			initializeModule(id,cb);
		});
	}

	var facade = {
		f:{
			sub: subscribe,
			pub: publish,
			unsub: unsubscribe,
			runModule: runModule,
			stopModule: stopModule
		}
	};

	return facade;
});