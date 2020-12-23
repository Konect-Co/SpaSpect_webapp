function getPeople_Time() {
	var ppl_time = [12,3,6,89,10];
	return ppl_time;
}

function get_realtime_data() {
    var lat_prefix = '38.899';
    var lon_prefix = '-77.036';

    var people_time_data = getPeople_Time();

	return {
		location: "Times Square, NY",
		X3D_vals: [2.734],
		Y3D_vals: [9.672],
		Z3D_vals: [10.456],
		total_count_frame: 80,
		undistanced: 20,
		unmasked: 30,
		violations: 40,
		time_elapsed: 2200,
		total_count_start: 4598,
		people_time: people_time_data,
		overheadMapData: {
			"center": [lat_prefix, lon_prefix],
			"latCoords":[lat_prefix+'27',lat_prefix+'38',lat_prefix+'58'],
			"lonCoords":[lon_prefix+'27',lon_prefix+'23',lon_prefix+'50']
		}
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

exports.get_full_data = get_full_data;