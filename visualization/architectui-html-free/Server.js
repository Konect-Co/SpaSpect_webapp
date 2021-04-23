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

var databaseQuerier = require("./databaseQuerier"); 


app.use(
  express.urlencoded({
    extended: true
  })
);
/*
function updateRecord(realtimeData) {
	var con = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'mypass123',
	    database: 'spaspect_data'
	});

	con.connect();

    var sql_update1 = "UPDATE SpaSpect_realtime SET X3D_vals = " + realtimeData["X3D_vals"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update2 = "UPDATE SpaSpect_realtime SET Y3D_vals = " + realtimeData["Y3D_vals"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update3 = "UPDATE SpaSpect_realtime SET Z3D_vals = " + realtimeData["Z3D_vals"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update4 = "UPDATE SpaSpect_realtime SET total_count_frame = " + realtimeData["total_count_frame"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update5 = "UPDATE SpaSpect_realtime SET undistanced = " + realtimeData["undistanced"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update6 = "UPDATE SpaSpect_realtime SET unmasked = " + realtimeData["unmasked"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update7 = "UPDATE SpaSpect_realtime SET violations = " + realtimeData["violations"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update8 = "UPDATE SpaSpect_realtime SET time_elapsed = " + realtimeData["time_elapsed"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    var sql_update9 = "UPDATE SpaSpect_realtime SET total_count_start = " + realtimeData["total_count_start"] + " WHERE Camera_num = " + realtimeData["Camera_num"];

    con.query(sql_update1, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update2, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update3, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update4, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update5, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update6, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update7, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update8, function(err, rows, fields){
	    if(err) throw err;
    });

    con.query(sql_update9, function(err, rows, fields){
	    if(err) throw err;
    });

    con.end();
}
*/

app.post('/sendData', function (req, res) {
  /*
	Interface of the application server to the database.
	1. Check if data is correctly formatted.
	2. Add data to the MySql Database.
	3. Return/Conclude the function as necessary.
  */
/*
  var data = "";
  req.on('data', chunk => data += chunk );

  req.on('end', () => {
  	var realtimeData = JSON.parse(data);
  	updateRecord(realtimeData);
  });

  res.send('POST request to the homepage');
});

app.post('/requestData', function (req, res) {

var data = "";
  req.on('data', chunk => data += chunk );

  req.on('end', () => {
    var dashboardParameters = JSON.parse(data);

    databaseQuerier.get_realtime_data(function(realtime_data){
	    databaseQuerier.get_aggregate_data(function(aggregate_data){
		    var dashboardData = {
			    "realtime": realtime_data,
			    "aggregate": aggregate_data
		    };
		    res.setHeader('Content-Type', 'application/json');
		    res.end(JSON.stringify(dashboardData));
	    });
    });
  });
*/
  /*
	Return:
		- people vs time graph
		- cross location graph
		- violation per hour
		- enforcement status
		- total count, unmasked count, undistanced count, violations count
		- birds-eye view
		- 3D coordinates
		- time elapsed
		- total count since start
		- average distance
		- average # of unmasked
		- average # of undistanced
  */

  /*
	Interface of the application server to the browser.
	1. Check if request for data is valid and correctly formatted.
	2. Query MySql database for information and return to HTTP request.
	3. Conclude the function as necessary.
  */
});

var PORT = 3000;
app.listen(PORT, function() {
    console.log("Listening on port " + PORT);
});
