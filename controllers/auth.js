/* 
 * Auth Controller
 * @author: Rolilink
 */

 /*
 	* Setup passport local strategy
  */

var LocalStrategy = require('passport-local').Strategy;

passport.use(new LocalStrategy(function(username,password,done){
	seneca.act({controller:'auth',action:'login',username:username,password:password},function(err,result){
	if(err){
		if(err.err == 'missing username' || err.err == 'missing password' || err.err == 'user is not active' || err.err == 'invalid password')
			return done(null,false,{message:{err:err.err}});

			return done(err)
	}
		
		done(null,result.user)
	});
}));

passport.serializeUser(function(user, done) {
    done(null, user.id);
});

passport.deserializeUser(function(id,done){
	seneca.act({controller:'auth',action:'deserialize',id:id},function(err,result){
		if(err)
			return done(err);
		done(null,result.user);
	})
});


/*
 * Login Action: Find user in database and set session
 * controller: auth
 * action: login
 */
seneca.add({controller:'auth',action:'login'},function(args,cb){
	if(!args.username)
		return cb({err:'missing username'});
	if(!args.password)
		return cb({err:'missing password'});

	User.findOne({username:args.username},function(err,user){
		if(err)
			return cb({err:err});
		
		/*if(!user.isActive())
			return cb({err:'user is not active'});*/

		if(!user.compareHash(args.password))
			return cb({err:'invalid password'});

		return cb(null,{user: user});
	});
});

/*
 * Deserialize Action: Find user by id in the database and returns it
 * controller: auth
 * action: deserialize
 */
 seneca.add({controller:'auth',action:'deserialize'},function(args,cb){
 	User.findById(args.id,function(err,user){
 		if(err)
 			cb(err)

 		cb(null,{user:user});
 	});
 });