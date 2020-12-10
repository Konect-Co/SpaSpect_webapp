var express = require("express");
const app = express();

app.use("", express.static(__dirname));


var PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});