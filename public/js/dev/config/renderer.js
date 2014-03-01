Backbone.Marionette.Renderer.render = function(template, data){
  if (!JST[template]) throw "Template '" + template + "' not found!";
  console.log(JST[template](data));
  return JST[template](data);
}