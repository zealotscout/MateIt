app.get('/app/*',function(req,res,next){
	res.render('bootstrap',{});
});

app.get('/',function(req,res,next){
	res.render('bootstrap',{});
});