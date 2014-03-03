// Entities for the Header Module
MateIt.app.module('Entities.Countries',function(Countries,app,Backbone,Marionette,$,_){
  // Initialize clases
  Countries.Country = Backbone.Model.extend({});

  Countries.CountryCollection = Backbone.Collection.extend({
    model: Countries.Country,
    url: '/api/entities/countries'
  });

  Countries.API = {
    getAll: function(){
      var deferred = $.Deferred();
      var countries = new Countries.CountryCollection();
      countries.fetch({
        success:function(collection,response,options){
          deferred.resolve(collection);
        },
        error:function(collection,response,options){
          deferred.resolve(collection);
        }
      });
      return deferred.promise();
    }
  }

  app.reqres.setHandler("Entities:Countries.All",function(){
    return Countries.API.getAll();
  });
});
