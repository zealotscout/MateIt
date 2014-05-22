/*
app.post('/api/uploads',function(req,res,next){

});*/
app.get('/api/pictures',function(req,res,next){
	seneca.act({controller:'picture',action:'list'},function(err,result){
		if(err){
			return res.status(500).json({err:err});
			}
	res.status(200).json({pictures:result.pictures});

	//console.log("this is the result",result);

	});

});

app.get('/api/pictures/:id',function(req,res,next){
	seneca.act({controller:'picture',action:'get',id:req.param('id')},function(err,result){
		if(err){
			return res.status(500).json({err:err});
			}
	res.status(200).json({picture:result.picture});;
	
	//console.log("this is the result  ",req.param('id'));

	});

});
//data:req.body allows posting of title in the mongoose schema
//data:req.files allows posting of the asociated picture
app.post('/api/pictures',function(req,res,next){
	seneca.act({controller:'picture',action:'create',data:req.files,data2:req.body},function(err,result){
		if(err){
			return res.status(500).json({err:err});
		}
    console.log("title name >>>>",req.body);
		res.status(200).json({id:result.picture._id});
		//console.log(result.files.image);
	});
});

