seneca.add({controller:'role',action:'add'},function(args,cb){
	var userId = args.id,
			roles = args.roles;
	console.log('llego aca');
	acl.addUserRoles(userId,roles,function(err){
		if(err)
			return cb(err);
		acl.userRoles(userId,function(err,roles){
			console.log(roles);
		});
		return cb();
	});

});