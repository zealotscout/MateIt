var validate = require('mongoose-validator').validate;
var mongoose = require('mongoose');
var createdModifiedPlugin = require('mongoose-createdmodified').createdModifiedPlugin;
var troop = require('mongoose-troop');
var fs = require('fs');
var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;
var filePluginLib = require('mongoose-file');
var filePlugin = filePluginLib.filePlugin;
var path  = require('path');
var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");

var Schema = new mongoose.Schema({
	owner:{type:String,required:true,validate:[validate('len',1,50),validate('regex',/^[A-Za-z ]+$/)]},
	capacity:{type:Number,required:true,min:1},
	available:{type:Boolean,required:true,default:false},
	country:{type:String,required:true},
	address:{type:String,unique:true,required:true,validate:[validate('len',10,70)]},
	longitude:{type:Number,required:true,min:-180,max:180},
	lattitude:{type:Number,required:true,min:-90,max:90},
	price:{type:Number,required:true,min:100},
	createdAt:{type:Date,default:Date.now()},
	roomType:{type:String,required:true,validate:roomList},
	propertyType:{type:String,required:true,validate:propertyList},
	headLine:{type:String,required:true,validate:[validate('len',10,60)]},
	roomDescription:{type:String,required:true,validate:[validate('len',10,500)]},
	title:{type :String}
});


Schema.plugin(troop.timestamp);
module.exports = Schema;
//valida que entradas de roomType solo sean private o shared
function roomList(val,respond) //val tiene la informacion introducida en el campo
{	var value = val.toLowerCase();

	if(value==='private'||value==='shared')
		{
		 //console.log("<-----------------------------------correct------------------------->");
		respond(true);
		}
	else{
		// 
		//console.log("<--------------------------------------------input is not private------------------------------->");
		respond(false);
	}
	console.log("content of val  ",value);
}
//valida que propertyType solo sean apartment, house o other
function propertyList(val,respond)
	{
		var value = val.toLowerCase();
		if(value==='apartment'||value==='house'||value==='other')
		{
			respond(true);
		}
		else{
			respond(false);
		}
	}


//Schema.plugin(createdModifiedPlugin,{index:true});


/*Schema.post('remove',function(property){
console.log("removed at ", new Date()," and id deleted was ", property._id);
});
Schema.post('save',function(property){
console.log("created at ", new Date()," and id created  was ", property._id);
});*/


