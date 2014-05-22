// Login route
app.post('/api/auth/login',passport.authenticate('local'),function(req,res) {
    // If this function gets called, authentication was successful.
    // `req.user` contains the authenticated user.
    
    res.redirect('/users/' + req.user.username);
    console.log("user data",req.user.username);
  });
//isLogedIn Route
app.get('/api/auth/logedin',function(req,res){
	if(req.isAuthenticated())
		res.status(200).json({authenticated:true});
	else
		res.status(200).json({authenticated:false});
});


app.get('/api/auth/login',function(req,res,next){
res.status(200).json({message:'git gud ;)'});
});