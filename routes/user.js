
//req.body holds parameters that are sent up from the client as part of a post request.
app.post('/api/users',function(req,res,next){
	seneca.act({controller:'user',action:'create',data:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({id:result.user._id});
		
	});
});
//returns the list of users
app.get('/api/users',function(req,res,next){
	seneca.act({controller:'user',action:'list'},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({users:result.users});
	});
});
//returns the value of parameter 'id' brings back a specific user id: id
app.get('/api/users/:id',function(req,res,next){
	seneca.act({controller:'user',action:'get',id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		
		if(result.user===null)
		{
			console.log("result of user ",result.user);
			res.status(404).json({message:'User does not exist'});	
		}
		else{
			res.status(200).json({user:result.user});
		}
	});
});

app.del('/api/users/:id',function(req,res,next){
	seneca.act({controller:'user',action:'delete',id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({message:'deleted'});
	});
});

app.put('/api/users/:id',function(req,res,next){
	seneca.act({controller:'user',action:'update',data:req.body,id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({message:'updated'});
	});
});;
