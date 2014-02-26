/* 
 * User Controller
 * @author: Rolilink
 */


/*
 * Login Action: Creates User
 * controller: user
 * action: create
 */

 var _ = require('underscore');

 //TODO: Recreate as promise based chain
seneca.add({controller:'user',action:'create'},function(args,cb){
	User.count(function(err,count){
		var data = args.data,
			createdUser = new User(data)
			roles = ['user'];

		createdUser.save(function(err){
			if(err){
				//pass error to be handled for error handler			
				seneca.act({model:'user',action:'error',when:'created',data:data,error:err},cb);
				return;
			}

			if(count === 0)
				roles = ['admin'];
			
			seneca.act({action:'add',controller:'role',id:createdUser.id,roles:roles},function(err,result){
				if(err)
					cb(err);

				//sends message to other microservices to act
				//seneca.act({model:'user',action:'created',user:createdUser},cb);
				// run the callback = user created
				cb(null,{user:createdUser});
			});
		});
	});
});

seneca.add({controller:'user',action:'list'},function(args,cb){
	User.find({},'-password -emailKey').lean().exec(function(err,users){
		if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'user',action:'error',when:'listing',data:data,error:err},cb);
			return;
		}

		cb(null,{users:users});
	});
});

seneca.add({controller:'user',action:'get'},function(args,cb){
	var id = args.id;
	User.findById(id,'-password -emailKey').lean().exec(function(err,user){
		if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'user',action:'error',when:'getting',id:id,error:err},cb);
			return;
		}

		cb(null,{user:user});
	});
});

seneca.add({controller:'user',action:'delete'},function(args,cb){
	var id = args.id;
	User.findById(id).exec(function(err,user){
		if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'user',action:'error',when:'deleting',id:id,error:err},cb);
			return;
		}
		user.remove(function(err,product){
			if(err){
				//pass error to be handled for error handler			
				seneca.act({model:'user',action:'error',when:'deleting',id:id,error:err},cb);
				return;
			}
			cb(null,{user:user});
		});
	});
});

seneca.add({controller:'user',action:'update'},function(args,cb){
	var data = args.data,
			id = args.id;
	User.findById(id,'-password -emailKey',function(err,user){
		if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'user',action:'error',when:'updating',id:id,error:err},cb);
			return;
		}
		var user = _.extend(user,data);
		user.save(function(err){
			if(err){
				//pass error to be handled for error handler			
				seneca.act({model:'user',action:'error',when:'updating',id:id,error:err},cb);
				return;
			}
			cb(null,{user:user});
		});
	});
});

