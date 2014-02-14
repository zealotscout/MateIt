app.config = {};
require("fs").readdirSync("./conf").forEach(function(file) {
  var configName = file.charAt(0).toUpperCase() + file.slice(1).replace('.js','');
  app.config[configName] = require('../conf/' + file);
});