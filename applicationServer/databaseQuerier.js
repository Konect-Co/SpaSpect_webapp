var mysql = require('mysql');

var con = mysql.createConnection({
	    host: 'localhost',
	    user: 'root',
	    password: 'mypass123',
	    database: 'testDatabase'
});

con.connect();

//HELPER FUNCTION
function sendQuery(query, callback) {
	con.query(query, function(err, result, fields){
		if(err) {
			console.log("Error raised", err);
			callback(err, null);
		}
		else {
			callback(null, result);
		}
	});
}

function getMetadata(callback) {
	sendQuery("SELECT * FROM Camera_1_Metadata", callback);
}

function getPeopleTime(callback) {
	sendQuery("SELECT the_time, numPeople FROM Camera_1", callback);
}

function getLatestRow(callback) {
	sendQuery("SELECT * FROM Camera_1 ORDER BY the_time DESC LIMIT 1", callback);
}

function getTallies(latestRow) {
	var tallies = {
		total_count_frame: 80,
		undistanced: 20,
		unmasked: 30,
		violations: 40
	};
	tallies.undistanced = latestRow.numUndistanced;
	tallies.unmasked = latestRow.numUnmasked;
	tallies.violations = latestRow.numViolations;
	tallies.total_count_frame = latestRow.numPeople;
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

function getOverheadMapData(latestRow, metadata) {
    var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

	var mapData = {
		"center": null,
		"latCoords":[],
		"lonCoords":[]
	};

	temp_locations = JSON.parse(latestRow.locations);

	console.log(temp_locations);

	for (let i = 0; i < latestRow.locations.length; i++) {
		mapData.latCoords.push(temp_locations[i][0]);
		mapData.lonCoords.push(temp_locations[i][1]);
	}
	mapData.center = JSON.parse(metadata.cameraCoordinates);

	return mapData;
}

function get_realtime_data(callback) {
	returnVal = {
		location: null,
		tallies: null,
		time_elapsed: null,
		total_count_start: null,
		people_time: null,
		overheadMapData: null
	};

	getMetadata(function(err, metadata) {
		metadata = JSON.parse(JSON.stringify(metadata))[0];
		returnVal.location = metadata.location;
		getPeopleTime(function(err, people_time_val) {
			returnVal.people_time = JSON.parse(JSON.stringify(people_time_val));
			getLatestRow(function(err, latestRowVal) {
				//returnVal.latestRowVal = latestRowVal;
				latestRowVal = JSON.parse(JSON.stringify(latestRowVal))[0];
				console.log(latestRowVal);
				returnVal.tallies = getTallies(latestRowVal);
				returnVal.overheadMapData = getOverheadMapData(latestRowVal, metadata);
				console.log(latestRowVal);
				callback(returnVal);
			});
		});
	});
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

get_realtime_data(function(data) {
	console.log(data);
});

//con.end();

//exports.get_full_data = get_full_data;
