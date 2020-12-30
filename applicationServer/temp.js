var mysql = require('mysql');

var con = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'mypass123',
	    database: 'testDatabase'
});

con.connect();


function getPeopleTime(callback) {
	var query1 = "SELECT the_time, numPeople FROM Camera_1";

	var ppl_time = null;

	con.query(query1, callback);
	console.log("Sent request to MySql");
}

function callback(err, result, fields) {
	if(err) throw err;
	ppl_time = JSON.parse(JSON.stringify(result));
	console.log("MySql has replied");
}

getPeopleTime(callback);
con.end();

//exports.get_full_data = get_full_data;
