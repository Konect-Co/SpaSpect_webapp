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

function getOverheadMapData(latestRow, metadata) {
    var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

	var mapData = {
		"center": null,
		"latCoords":[],
		"lonCoords":[]
	};

	temp_locations = JSON.parse(latestRow.locations);


	for (let i = 0; i < temp_locations.length; i++) {	
		mapData.latCoords.push(temp_locations[i][0]);
		mapData.lonCoords.push(temp_locations[i][1]);
	}
	mapData.center = JSON.parse(metadata.cameraCoordinates);

	return mapData;
}

function get_realtime_data(callback) {
	returnVal = {
	};

	getMetadata(function(err, metadata) {
		metadata = JSON.parse(JSON.stringify(metadata))[0];
		returnVal.location = metadata.location;
		getPeopleTime(function(err, people_time_val) {
			returnVal.people_time = JSON.parse(JSON.stringify(people_time_val));
			getLatestRow(function(err, latestRowVal) {
				//returnVal.latestRowVal = latestRowVal;
				latestRowVal = JSON.parse(JSON.stringify(latestRowVal))[0];
				returnVal.tallies = getTallies(latestRowVal);
				returnVal.overheadMapData = getOverheadMapData(latestRowVal, metadata);
				callback(returnVal);
			});
		});
	});
}

function get_enforcement_status(callback) {
	sendQuery("SELECT * FROM Camera_1_Aggregate", function(err, data) {
		if (!err)
			data = JSON.parse(JSON.stringify(data))[0].enforcement_status;
		callback(err, data);
	});
}

function get_rows_in_range(callback) {
	date_beginning = "'2020-12-29 00:23:20'";
	date_end = "'2020-12-29 00:25:20'";
	sendQuery("select * from Camera_1 WHERE the_time BETWEEN " + date_beginning + " and " + date_end + ";", function(err, data) {
                if (!err)
                        data = JSON.parse(JSON.stringify(data));
                callback(err, data);

	});
}

function get_average_dist(relevantRows){
	return 4.32;
}

function get_average_unmasked(relevantRows){
	return 9;
}

function get_average_undistanced(relevantRows){
	return 5;
}

function get_average_num_people(relevantRows){
	return 980;
}


//TODO: Santript - Add the remaining helper functions for get_aggregate data
//No need to implement them now. Just use enforcement status as an example.


function get_aggregate_data(callback) {
	get_rows_in_range(function(err, relevantRows) {
		get_enforcement_status(function(err, enforcement_status_value) {
			var average_dist_value = get_average_dist(relevantRows);
			var average_unmasked_value = get_average_unmasked(relevantRows);
			var average_undistanced_value = get_average_undistanced(relevantRows);
			var average_num_people_value = get_average_num_people(relevantRows);

			callback({
				enforcement_status: enforcement_status_value,
				average_dist: average_dist_value,
				average_unmasked: average_unmasked_value,
				average_undistanced: average_unmasked_value,
				average_num_people: average_num_people_value,
			});
		});
	});
}

exports.get_realtime_data = get_realtime_data;
exports.get_aggregate_data = get_aggregate_data;
