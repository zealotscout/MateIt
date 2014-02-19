app.get('/app/*',function(req,res,next){
	res.sendfile('./public/js/dev/index.html');
});

app.get('/',function(req,res,next){
	res.sendfile('./public/js/dev/index.html');
});