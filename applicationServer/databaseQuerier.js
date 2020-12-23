function getLocationVal() {
	var location = "Times Square, NY";
	return location;
}

function getPeopleTime() {
	var ppl_time = [12,3,6,109,10];
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
		"center": [lat_prefix, lon_prefix],
		"latCoords":[lat_prefix+'27',lat_prefix+'38',lat_prefix+'58'],
		"lonCoords":[lon_prefix+'27',lon_prefix+'23',lon_prefix+'50']
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

//TODO: Santript - Add the remaining helper functions for get_aggregate data
//No need to implement them now. Just use enforcement status as an example.

function get_aggregate_data() {
	var enforcement_status_value = get_enforcement_status();

	return {
		enforcement_status: enforcement_status_value,
		average_dist: 4.32,
		average_unmasked: 9,
		average_undistanced: 5,
		cl_val: 980,
		violations_per_hr: 323
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

exports.get_full_data = get_full_data;