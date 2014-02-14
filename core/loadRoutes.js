require("fs").readdirSync("./routes").forEach(function(file) {
  require('../routes/' + file);
});