//var mysql = require('mysql');
var express = require("express");
const app = express();
var get_data = require("./modules.js"); 

app.use(
  express.urlencoded({
    extended: true
  })
);

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

app.post('/sendData', function (req, res) {
  /*
	Interface of the application server to the database.

	1. Check if data is correctly formatted.
	2. Add data to the MySql Database.
	3. Return/Conclude the function as necessary.
  */

  var data = "";
  req.on('data', chunk => data += chunk );

  req.on('end', () => {
  	var realtimeData = JSON.parse(data);
  	updateRecord(realtimeData);
  });

  res.send('POST request to the homepage');
});

app.post('/requestData', function (req, res) {
//res.send('GET request to the homepage');

var data = "";
req.on('data', chunk => data += chunk );

req.on('end', () => {

  console.log(JSON.parse(data));
  var realtimeData = JSON.parse(data);
  var lat_prefix = '38.899';
  var lon_prefix = '-77.036';

  var all_spaspect_data = {
        realtime: {
            location: "Times Square, NY",
            X3D_vals: 2.734,
            Y3D_vals: 9.672,
            Z3D_vals: 10.456,
            total_count_frame: 80,
            undistanced: 20,
            unmasked: 30,
            violations: 40,
            time_elapsed: 2200,
            total_count_start: 4598,
            people_time: get_data.getPeople_time(),
            overheadMapData: {
                "center": [lat_prefix, lon_prefix],
                "latCoords":[lat_prefix+'27',lat_prefix+'38',lat_prefix+'58'],
                "lonCoords":[lon_prefix+'27',lon_prefix+'23',lon_prefix+'50']
            }
        },
        aggregatetime: {
            enforcement_status: "Medium",
            average_dist: 4.32,
            average_unmasked: 9,
            average_undistanced: 5,
            cl_val: 980,
            violations_per_hr: 323
        }
    };

    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify(all_spaspect_data));
});



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