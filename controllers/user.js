/* 
 * User Controller
 * @author: Rolilink
 */


/*
 * Login Action: Creates User
 * controller: user
 * action: create
 */
seneca.add({controller:'user',action:'create'},function(args,cb){
	var data = args.data,
			createdUser = new User(data);

	createdUser.save(function(err){
		if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'user',action:'error',when:'created',data:data,error:err},cb);
			return;
		}

		//sends message to other microservices to act
		seneca.act({model:'user',action:'created',user:createdUser},cb);
		// run the callback = user created
		cb(null,{user:createdUser});
	});
});

