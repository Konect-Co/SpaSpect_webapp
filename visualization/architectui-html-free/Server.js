var express = require("express");
const app = express();
var XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

app.use("", express.static(__dirname));

app.post('/requestData', function (req, res) {
	var data = "";
	req.on('data', chunk => data += chunk );

	req.on('end', () => {
		//var dashboardParameters = JSON.parse(data);

		var dashboardDataRequest  = new XMLHttpRequest();
		dashboardDataRequest.open("POST", "http://3.137.221.232/requestData");
		dashboardDataRequest.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
		dashboardDataRequest.send(data);
		dashboardDataRequest.onload = function(e) {
			var responseText = dashboardDataRequest.responseText;

			res.setHeader('Content-Type', 'application/json');
			res.end(responseText);
		}
	});
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});
