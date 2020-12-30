var mysql = require('mysql');

var con = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'mypass123',
	    database: 'testDatabase'
});

con.connect();

var query1 = "SELECT the_time, numPeople FROM Camera_1";

con.query(query1, function(err, result, fields){
	if(err) throw err;
	console.log(JSON.parse(JSON.stringify(result)));
});

con.end();
