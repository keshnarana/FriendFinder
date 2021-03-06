var express = require("express");
var path = require("path");

var app = express();

var PORT = process.env.PORT || 8080;
app.use(express.json()) // for parsing application/json
app.use(express.urlencoded({ extended: true }))



// API and HTML routes
require("./app/routing/apiRoutes.js")(app);
require("./app/routing/htmlRoutes.js")(app);

app.listen(PORT, function() {
	console.log("App listening on PORT: " + PORT);
});