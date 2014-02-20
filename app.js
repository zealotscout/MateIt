var express = require('express'),
		http = require('http'),
		path = require('path'),
		Acl = require('acl');

// Start app
var start = function(done){
	http.createServer(app).listen(app.get('port'), function(){
		done();
	});
};

// Global for usage in models and controllers
global.app = express();
global.passport = require('passport');
global.express = express;
global.acl = new Acl(new Acl.memoryBackend());
var roles = require('./roles/roles');
acl.allow(roles,function(err){});

// load permissions


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
app.use(express.session({ secret: 'gato' }));
app.use(passport.initialize());
app.use(passport.session());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')),{maxAge:1});
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

