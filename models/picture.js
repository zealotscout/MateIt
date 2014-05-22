var mongoose = require('mongoose');
var thumbnailPluginLib = require('mongoose-thumbnail');
var thumbnailPlugin = thumbnailPluginLib.thumbnailPlugin;
var make_upload_to_model = thumbnailPluginLib.make_upload_to_model;
var path = require('path');


var uploads_base = path.join(__dirname, "uploads");
var uploads = path.join(uploads_base, "u");


var Picture = new mongoose.Schema({
	title:{type:String}
  
});
Picture.plugin(thumbnailPlugin, {
    name: "photo",
    format: "jpg",
    upload_to: make_upload_to_model(uploads, 'photos'),
    relative_to: uploads_base
});
module.exports = Picture;