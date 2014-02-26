define(['hbs!./template'], function(template) {
  return {
    type: 'Backbone',
    initialize: function() {
      this.render();
      this.sandbox.start([{name:'navbar',options:{el:'header'}}]);
    },
    render: function() {
      this.html(template());
    }
  };
});