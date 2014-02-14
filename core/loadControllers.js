global.seneca = require('seneca')();

require("fs").readdirSync("./controllers").forEach(function(file) {
  require('../controllers/' + file);
});