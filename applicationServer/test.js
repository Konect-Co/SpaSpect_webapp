var mysql = require('mysql');

var con = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mypass123',
    database: 'testDatabase'
});

con.connect();

var query1 = "SELECT the_time AND numPeople FROM Camera_1";

con.query(query1, function(err, rows, fields){
            if(err) throw err;
            console.log(rows);
            console.log(fields);
            //console.log(result);
});