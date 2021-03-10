    /*
    Command to create SQL database: 

    create table Camera_1(the_time timestamp, location varchar(25), X3D_vals float(25), Y3D_vals float(25), Z3D_vals float(25), 
    longitude float(25), latitude float(25), total_count_frame int, undistanced int, unmasked int, violations int, time_elapsed int, 
    total_count_start int, enforcement_status varchar(25), average_dist float(25), average_unmasked float(25), average_undistanced float(25), 
    cl_val int, violations_per_hr int);

    insert into Camera_1(the_time,location,X3D_vals,Y3D_vals,Z3D_vals,longitude,latitude,total_count_frame,undistanced,unmasked,violations,
    time_elapsed,total_count_start,enforcement_status,average_dist,average_unmasked,average_undistanced,cl_val,violations_per_hr)
    values('2020-01-01 10:10:10','Times Square,NY',82.734,12.67,10.456,38.889,-77.036,60,20,30,48,2200,4598,'Good',8.32,9,5,980,323);
    */


    var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

    var realtimeData = {
        num:1,
        time_stamp: '1970-01-01 00:00:01',
        location: 'Times Square,NY',
        X3D_vals: 82.734,
        Y3D_vals: 12.67,
        Z3D_vals: 10.456,
        total_count_frame: 60,
        undistanced: 20,
        unmasked: 30,
        violations: 48,
        time_elapsed: 2200,
        total_count_start: 4598,
        overheadMapData: {
            "center": [lat_prefix, lon_prefix],
            "latitude":[lat_prefix+'27',lat_prefix+'38',lat_prefix+'58'],
            "longitude":[lon_prefix+'27',lon_prefix+'23',lon_prefix+'50']
        }
    };

    var aggregateData = {
        enforcement_status: 'Critical',
        average_dist: 4.32,
        average_unmasked: 9,
        average_undistanced: 5,
        cl_val: 980,
        violations_per_hr: 323
    };

    var mysql = require('mysql');

    var con = mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: 'mypass123',
        database: 'spaspect_data'
    });

    con.connect();

    var sql_update1 = "UPDATE Camera_1 SET X3D_vals = " + realtimeData["X3D_vals"] + " WHERE num = " + realtimeData["num"];
    var sql_update2 = "UPDATE Camera_1 SET Y3D_vals = " + realtimeData["Y3D_vals"] + " WHERE num = " + realtimeData["num"];
    var sql_update3 = "UPDATE Camera_1 SET Z3D_vals = " + realtimeData["Z3D_vals"] + " WHERE num = " + realtimeData["num"];
    var sql_update4 = "UPDATE Camera_1 SET total_count_frame = " + realtimeData["total_count_frame"] + " WHERE num = " + realtimeData["num"];
    var sql_update5 = "UPDATE Camera_1 SET undistanced = " + realtimeData["undistanced"] + " WHERE num = " + realtimeData["num"];
    var sql_update6 = "UPDATE Camera_1 SET unmasked = " + realtimeData["unmasked"] + " WHERE num = " + realtimeData["num"];
    var sql_update7 = "UPDATE Camera_1 SET violations = " + realtimeData["violations"] + " WHERE num = " + realtimeData["num"];
    var sql_update8 = "UPDATE Camera_1 SET time_elapsed = " + realtimeData["time_elapsed"] + " WHERE num = " + realtimeData["num"];
    var sql_update9 = "UPDATE Camera_1 SET total_count_start = " + realtimeData["total_count_start"] + " WHERE num = " + realtimeData["num"];
    // LON AND LAT CAUSING PROBLEMS CUZ THERE IS NO ARRAY DATATYPE IN MYSQL
    //var sql_update10 = "UPDATE Camera_1 SET latitude = " + realtimeData["overheadMapData"]["latitude"] + " WHERE Camera_num = " + realtimeData["location"];
    //var sql_update11 = "UPDATE Camera_1 SET longitude = " + realtimeData["overheadMapData"]["longitude"] + " WHERE Camera_num = " + realtimeData["location"];
    //var sql_update12 = "UPDATE Camera_1 SET enforcement_status = " + aggregateData["enforcement_status"] + " WHERE num = " + realtimeData["num"];
    var sql_update13 = "UPDATE Camera_1 SET average_dist = " + aggregateData["average_dist"] + " WHERE num = " + realtimeData["num"];
    var sql_update14 = "UPDATE Camera_1 SET average_unmasked = " + aggregateData["average_unmasked"] + " WHERE num = " + realtimeData["num"];
    var sql_update15 = "UPDATE Camera_1 SET average_undistanced = " + aggregateData["average_undistanced"] + " WHERE num = " + realtimeData["num"];
    var sql_update16 = "UPDATE Camera_1 SET cl_val = " + aggregateData["cl_val"] + " WHERE num = " + realtimeData["num"];
    var sql_update17 = "UPDATE Camera_1 SET violations_per_hr = " + aggregateData["violations_per_hr"] + " WHERE num = " + realtimeData["num"];
    var sql_update18 = "UPDATE Camera_1 SET time_stamp = " + realtimeData["time_stamp"] + " WHERE num = " + realtimeData["num"];

    con.query(sql_update1, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update2, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update3, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update4, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update5, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update6, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update7, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update8, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update9, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });


/*
    con.query(sql_update10, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update11, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });
    */

    /*
    con.query(sql_update12, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });
*/
    con.query(sql_update13, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update14, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update15, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update16, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update17, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.query(sql_update18, function(err, rows, fields){
                if(err) throw err;
                console.log("record was updated");
                //console.log(result);
    });

    con.end();