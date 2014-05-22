
app.get('/api/countries',function(req,res,next){
	seneca.act({controller:'countries',action:'list'},function(err,result){
				if(err){
			return res.status(500).json({err:err});
		}
		res.status(200).json({countries:result.countries});
		
	});
});


	/*
	var createdCountry;
	createdCountry = new Countries({code:'NAR',countryName:'Narnia'});
	console.log(createdCountry);
	createdCountry.save(function(err){
	if(err){
		console.log(err);
		return;
		}

	});
*/
		//console.log(createdCountry);
	
/*
Countries.count({},function(err,count){
	console.log(count);
	}); 

	res.status(200).end();
});

*/