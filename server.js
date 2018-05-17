const express = require("express"),
      path = require("path"),
      app = express(),
      bodyParser = require('body-parser');

app.use(bodyParser.json());

app.use(express.static( __dirname + '/AngularApp/dist/AngularApp' ));

require('./server/config/mongoose.js')();
require('./server/config/routes.js')(app);

app.all("*", (req,res,next) => {
  res.sendFile(path.resolve("./AngularApp/dist/AngularApp/index.html"))
});

app.listen(8000, function() {
  console.log("listening on port 8000");
})