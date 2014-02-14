var express = require('express'),
		http = require('http'),
		path = require('path');

// Start app
var start = function(done){
	http.createServer(app).listen(app.get('port'), function(){
		done();
	});
};

// Global for usage in models and controllers
global.app = express();
global.passport = require('passport');

//Load Config Files
require('./core/loadConfig');

// all environments
app.set('port', process.env.PORT || 3000);
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.json());
app.use(express.urlencoded());
app.use(express.methodOverride());
app.use(express.cookieParser());
app.use(express.bodyParser());
app.use(express.session({ secret: '245e2b98489cf1c1738f2f7d3180f712' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(express.static(path.join(__dirname, 'public')));
app.locals.pretty = true;

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

//load models,modules and controllers
require('./core/loadControllers');
require('./core/loadModels');
require('./core/loadRoutes');





exports.start = start;

if(require.main === module){
	start(function(){
		console.log('Express server listening on port ' + app.get('port'));
	});
}

