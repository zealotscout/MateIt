/* 
 * Property Controller
 * @author: Zealotscout
 */

//
/*
 * Creates Property
 * controller: Property
 * action: create
 */
/*
function readJSON() {
  var countries = JSON.parse(countries);
  return countries
};*/

var _ = require('underscore');
var express = require('express');

seneca.add({controller:'property',action:'create'},function(args,cb){
var data = args.data,
createdProperty = new Property(data);
console.log(createdProperty);
	createdProperty.save(function(err){
		if(err){
			seneca.act({model:'property',action:'error',when:'created',data:data,error:err},cb);
			console.log(err);
			
			return;
		}

	
		//cb(null,{property:createdProperty});
		//console.log("input country ",createdProperty.country,"  country from json" ,countries.name);
		//console.log("created property vs json", countries);
	cb(null,{property:createdProperty});
	});
});

seneca.add({controller:'property',action:'get'},function(args,cb,res){
	var id = args.id;
	Property.findById(id,function(err,property){
	console.log(id);
	if(err){
			//pass error to be handled for error handler			
			seneca.act({model:'property',action:'error',when:'getting',id:id,error:err},cb);
				console.log(err);
				return;
			}
			//console.log(property);
	cb(null,{property:property});
	});
});

seneca.add({controller:'property',action:'list'},function(args,cb){
	Property.find({}).lean().exec(function(err,properties){
		if(err){
			seneca.act({model:'property',action:'error',when:'listing',data:data,error:err},cb);
			return;
		}
		cb(null,{properties:properties})
	});
	//console.log("  country from json" ,countries['PA']);
});



seneca.add({controller:'property',action:'delete'},function(args,cb){
	var id = args.id;
	Property.findById(id,function(err,property){
		console.log("id que se esta borrando es ",id);
		if(err){
			seneca.act({model:'property',action:'error',when:'deleting',id:id,error:err},cb);
			return;
		}
		property.remove(function(err,result){
			if(err){
				seneca.act({model:'property',action:'error',when:'deleting',id:id,error:err},cb);
				return
			}
			cb(null,{property:property});
		});
	});
});

seneca.add({controller:'property',action:'update'},function(args,cb){
	var data = args.data;
	var id = args.id;
	Property.findById(id,function(err,property){
		console.log("id que se esta actualizando es ",id);
		if(err){
			seneca.act({model:'property',action:'error',when:'deleting',id:id,error:err},cb);
			return;
		}
		var property = _.extend(property,data);
		property.save(function(err){
			if(err){
				seneca.act({model:'property',action:'error',when:'updating',id:id,error:err},cb);
				return;
			}
			cb(null,{property:property});
		});
	});
});

