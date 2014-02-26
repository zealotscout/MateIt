define({
    initialize: function(app) {
        var catchLinks = function(){
            var $ = app.core.mvc.$;
            $(document).on('click','a',function(e){
                var href = $(this).attr('href');
                if(href != '#'){
                    app.core.router.navigate(href,{trigger:true});
                }
                e.preventDefault(); 
            });
        }
    	
    	var AppRouter = app.core.mvc.Router.extend({
    		routes:{
    			"":"showLanding",
    			"/app/signup":"showSignup",
    			"/app/login":"showLogin"
    		},
    		showLanding:function(){
    			app.sandbox.start([{name:'home',options:{el:'#appContainer'}}],{reset:true});
    		},
    		showSignup: function(){

    		},
    		showLogin: function(){

    		}
    	});

    	app.core.router = new AppRouter();
    	catchLinks();
    }
});