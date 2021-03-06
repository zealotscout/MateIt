app.post('/api/users',function(req,res,next){
	seneca.act({controller:'user',action:'create',data:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({id:result.user._id});
	})
});

app.get('/api/users',function(req,res,next){
	seneca.act({controller:'user',action:'list'},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({users:result.users});
	});
});

app.get('/api/users/:id',function(req,res,next){
	seneca.act({controller:'user',action:'get',id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({user:result.user});
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