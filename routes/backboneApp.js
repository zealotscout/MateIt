app.get('/app/*',function(req,res,next){
	res.sendfile('./public/index.html');
});

app.get('/',function(req,res,next){
	res.sendfile('./public/index.html');
});