

var _ = require('underscore');
var express = require('express');
path = require('path')
var mongooseThumbnailLib = require('mongoose-thumbnail');
var mongooseThumbnailPlugin = mongooseThumbnailLib.thumbnailPlugin;
var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");
var  gbldata;
app.use('/', express.static(path.join(__dirname, 'public')))
app.use('/uploads', express.static(uploads_base));
//adds functionality to create picture
//acts triggers upon model error 
//creates new picture object, once initliazited it is saved with the data passed onto it.
seneca.add({controller:'picture',action:'create'},function(args,cb){
	var data = args.data;
	 data.title = args.data2;

	createdPicture = new Picture(data);
	//createdPicture.set('photo.file',data.files.photo);
	console.log("data contents for name value",data.title);
	//createdPicture.set('photo.file',data.photo);
	//console.log(createdPicture);
	createdPicture.save(function(err){
		if(err){
			seneca.act({model:'picture',action:'error',when:'created',data:data,error:err},cb);
			console.log(err);
			return;
			}
			cb(null,{picture:createdPicture});				
			
	});
});

//adds functionality to list pictures 
//acts triggers upon model error
//finds all pictures instances and returns pure javascript options.
seneca.add({controller:'picture',action:'list'},function(args,cb){
	Picture.find({}).lean().exec(function(err,pictures){
		if(err){
			seneca.act({model:'picture',action:'error',when:'listing',data:data,error:err},cb);
			return;
		}
		cb(null,{pictures:pictures});
	});

});
//adds funcitonality to get a specific picture of id:id
//acts triggers upon model error
//picture.findbyid is provided with ID from the arguments
seneca.add({controller:'picture',action:'get'},function(args,cb){
	var id = args.id;
	Picture.findById(id,function(err,picture){
		console.log(id);
		if(err){
			seneca.act({model:'picture',action:'error',when:'getting',id:id,error:err})
				console.log(err);
				return;
		}
		cb(null,{picture:picture});
		//console.log("this is content of args  ",args);

	});
});
