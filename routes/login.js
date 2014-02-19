// Login route
app.post('/api/auth/login',passport.authenticate('local',{successRedirect:'/',failureRedirect:'/login'}));

//isLogedIn Route
app.get('/api/auth/logedin',function(req,res){
	if(req.isAuthenticated())
		res.status(200).json({authenticated:true});
	else
		res.status(200).json({authenticated:false});
});
