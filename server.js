var express = require('express');
var methodOverride = require('method-override');
var bodyParser = require('body-parser');

// Port
var PORT
 = process.env.PORT || 8080;

var app = express();

app.use(express.static("public"));


app.use(bodyParser.urlencoded({
    extended: false
}));

app.use(methodOverride("_method"));


var exphbs = require("express-handlebars");

app.engine("handlebars", exphbs({
    defaultLayout: "main"
}));
app.set("view engine", "handlebars");

var routes = require("./controllers/burgers_controller");

app.use("/", routes);

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});