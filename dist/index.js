const express = require("express");
var app = express();

app.use(express.static(__dirname + "/client"));
app.use("/bower_components", express.static(__dirname + "/bower_components"));

app.get("*", (req, res, next) => {
  console.log(__dirname);
  res.sendFile (__dirname + "/client/index.html");
});

app.listen(8152, function() {
  console.log("ASPA started on 8152");
});
