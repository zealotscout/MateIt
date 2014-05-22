//Routes for Property
//req.body holds parameters that are sent up from the client as part of a post request.
app.post('/api/properties',function(req,res,next){
	seneca.act({controller:'property',action:'create',data:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({id:result.property._id});

	})
});
 
 //returns the value of parameter 'id' brings back a specific property of id: id
app.get('/api/properties/:id',function(req,res,next){
	seneca.act({controller:'property',action:'get',id:req.param('id')},function(err,result){
		
		if(err){
			return res.status(500).json({err:err});
		}
		

		if(result.property===null){
		console.log("result of property ",result.property);
		return res.status(404).json({message:'Property does not exist'});
		}
		else{
			res.status(200).json({property:result.property});
		}
	});
});
//returns list of properties 
app.get('/api/properties',function(req,res,next){
	seneca.act({controller:'property',action:'list'},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({properties:result.properties});
	});
});
//deletes property of id: id brining back the parameter id
app.del('/api/properties/:id',function(req,res,next){
	seneca.act({controller:'property',action:'delete',id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({message:'deleted'});
	});
});
//updates property of id:id bringing back the parameter of id, then sends back the object.
app.put('/api/properties/:id',function(req,res,next){
	seneca.act({controller:'property',action:'update',data:req.body,id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({message:'updated'});
	});
});
