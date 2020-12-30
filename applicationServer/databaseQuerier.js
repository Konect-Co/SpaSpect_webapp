var mysql = require('mysql');

var con = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'mypass123',
	    database: 'testDatabase'
});

con.connect();

function getLocationVal() {
	var location = "Times Square, NY";
	return location;
}

function getPeopleTime() {

	var query1 = "SELECT the_time, numPeople FROM Camera_1";

	var ppl_time = null;

	con.query(query1, function(err, result, fields){
		if(err) throw err;
		ppl_time = JSON.parse(JSON.stringify(result));
		console.log("MySql has replied");
	});
	console.log("Sent request to MySql");

	while (ppl_time == null) {
		//wait
	}

	return ppl_time;
}

function getSpatialCoordinates() {
	var spatial_coordinates = {
		X3D_vals: [2.734],
		Y3D_vals: [9.672],
		Z3D_vals: [10.456]
	};
	return spatial_coordinates;
}

function getTallies() {
	var tallies = {
		total_count_frame: 80,
		undistanced: 20,
		unmasked: 30,
		violations: 40
	};
	return tallies;
}

function getTimeElapsed() {
	var timeElapsed = 2200;
	return timeElapsed;
}

function getTotalCount() {
	var totalCount = 4598;
	return totalCount;
}

function getOverheadMapData() {
    var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

	var mapData = {
		"center": [parseFloat(lat_prefix), parseFloat(lon_prefix)],
		"latCoords":[parseFloat(lat_prefix+'27'),parseFloat(lat_prefix+'38'),parseFloat(lat_prefix+'58')],
		"lonCoords":[parseFloat(lon_prefix+'27'),parseFloat(lon_prefix+'23'),parseFloat(lon_prefix+'50')]
	};
	return mapData;
}

function get_realtime_data() {
    var location_Val = getLocationVal();
    var people_time_val = getPeopleTime();
    var spatial_coordinates_val = getSpatialCoordinates();
    var tallies_val = getTallies();
    var time_elapsed_val = getTimeElapsed();
    var total_count_val = getTotalCount();
    var overhead_map_val = getOverheadMapData();

	return {
		location: location_Val,
		spatial_coordinates: spatial_coordinates_val,
		tallies: tallies_val,
		time_elapsed: time_elapsed_val,
		total_count_start: total_count_val,
		people_time: people_time_val,
		overheadMapData: overhead_map_val
	};
}

function get_enforcement_status() {
	return "Medium";
}

function get_average_dist(){
	return 4.32;
}

function get_average_unmasked(){
	return 9;
}

function get_average_undistanced(){
	return 5;
}

function get_cl_val(){
	return 980;
}

function get_violations_per_hr(){
	return 323;
}

//TODO: Santript - Add the remaining helper functions for get_aggregate data
//No need to implement them now. Just use enforcement status as an example.


function get_aggregate_data() {
	var enforcement_status_value = get_enforcement_status();
	var average_dist_value = get_average_dist();
	var average_unmasked_value = get_average_unmasked();
	var average_undistanced_value = get_average_undistanced();
	var cl_val_value = get_cl_val();
	var violations_per_hr_value = get_violations_per_hr();

	return {
		enforcement_status: enforcement_status_value,
		average_dist: average_dist_value,
		average_unmasked: average_unmasked_value,
		average_undistanced: average_unmasked_value,
		cl_val: cl_val_value,
		violations_per_hr: violations_per_hr_value
	};
}

function get_full_data(dashboardParameters) {
    var realtime_data = get_realtime_data();
    var aggregate_data = get_aggregate_data();

    var all_spaspect_data = {
        realtime: realtime_data,
        aggregatetime: aggregate_data
    };
    return all_spaspect_data
}

getPeopleTime();
con.end();

//exports.get_full_data = get_full_data;
