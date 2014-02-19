var _ = require('underscore');
global.mongoose = require('mongoose').connect('mongodb://localhost/development');

mongoose.connection.on('error',function(err){
	console.log(err);
})

mongoose.connection.once('open',function(){
	console.log('mongoDB open');
	require("fs").readdirSync("./models").forEach(function(file) {
	  var modelName = file.charAt(0).toUpperCase() + file.slice(1).replace('.js','');
	  var modelSchema = require('../models/' + file);
	  global[modelName]  = mongoose.model(modelName,modelSchema);
	});
});



