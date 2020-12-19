var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

    var realtimeData = {
        Camera_num: 1,
        Location: "Times Square, NY",
        X3D_vals: 82.734,
        Y3D_vals: 9.672,
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

    var mysql = require('mysql');

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
    // LON AND LAT CAUSING PROBLEMS CUZ THERE IS NO ARRAY DATATYPE IN MYSQL
    //var sql_update10 = "UPDATE SpaSpect_realtime SET latitude = " + realtimeData["overheadMapData"]["latitude"] + " WHERE Camera_num = " + realtimeData["Camera_num"];
    //var sql_update11 = "UPDATE SpaSpect_realtime SET longitude = " + realtimeData["overheadMapData"]["longitude"] + " WHERE Camera_num = " + realtimeData["Camera_num"];


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
    con.end();