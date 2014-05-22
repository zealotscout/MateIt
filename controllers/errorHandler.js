/* 
 * errorHandler Controller
 * @author: Rolilink
 */

//Error Logger
 seneca.add({action:'error'},function(args,cb){
 	//logs err
 });

 // User creation errorHandler
 seneca.add({model:'user',action:'error'},function(args,cb){
 	console.log(args);
 	return cb({errorMessage:args.error});
 });

 seneca.add({model:'property',action:'error'},function(args,cb){
 	console.log(args);
 	return cb({errorMessage:args.error});
 });

seneca.add({model:'picture',action:'error'},function(args,cb){
	console.log(args);
	return cb({errorMessage:args.error});
 });
