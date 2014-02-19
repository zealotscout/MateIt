app.post('/api/users',function(req,res,next){
	seneca.act({controller:'user',action:'create',data:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({id:result.user._id});
	})
});

app.post('/api/users/:id',function(req,res,next){
	seneca.act({controller:'user',action:'create',data:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({id:result.user._id});
	})
});
