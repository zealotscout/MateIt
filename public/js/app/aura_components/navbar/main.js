define(['hbs!./template'], function(template) {
  return {
    type: 'Backbone',
    initialize: function() {
      this.render();
    },
    render: function() {
      this.html(template());
    }
  };
});