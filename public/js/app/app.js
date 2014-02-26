
require(['bower_components/aura/lib/aura'], function(Aura) {
  Aura()
    .use('extensions/aura-backbone')
    .use('extensions/aura-handlebars')
    .use('extensions/aura-appRouter')
    .start('body').then(function() {
      console.warn('Aura started...');
    });
});
