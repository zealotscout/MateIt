/* 
 * errorHandler Controller
 * @author: Rolilink
 */

//Error Logger
 seneca.add({action:'error'},function(args,cb){
 	//logs err
 });

 // User creation errorHandler
 seneca.add({model:'user',action:'error',when:'created'},function(args,cb){
 	return cb({errorMessage:args.error});
 });