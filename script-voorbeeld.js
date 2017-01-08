function LoadGoogle() {
    if (typeof google != 'undefined' && google && google.charts.load) {
        google.charts.load('current', {'packages': ['line', 'corechart']});
        google.charts.setOnLoadCallback(drawChart);
    } else {
        setTimeout(LoadGoogle, 30);
    }
}

LoadGoogle();

function drawChart() {

    var button = document.getElementById('change-chart');
    var chartDiv = document.getElementById('chart_div');

    var data = new google.visualization.DataTable();
    data.addColumn('datetime', 'Time');
    data.addColumn('number', 'Temperature');
    data.addColumn('number', 'Rainfall');
    data.addRows([
		[new Date(2016, 6, 27 , 0, 0, 0), 8.5, 0],
		[new Date(2016, 6, 24 , 0, 0, 0), 4, 0],
		[new Date(2016, 6, 23 , 0, 0, 0), 9, 0],
		[new Date(2016, 6, 23 , 0, 0, 0), 7.5, 0],
		[new Date(2016, 6, 20 , 0, 0, 0), 8.5, 0],
		[new Date(2016, 6, 16 , 0, 0, 0), 10, 0],
		[new Date(2016, 6, 16 , 0, 0, 0), 8.7, 0],
		[new Date(2016, 6, 15 , 0, 0, 0), 8, 0],
		[new Date(2016, 6, 11 , 0, 0, 0), 5.5, 0],
		[new Date(2016, 6, 6 , 0, 0, 0), 7.5, 0],
		[new Date(2016, 6, 4 , 0, 0, 0), 8, 0],
		[new Date(2016, 6, 4 , 0, 0, 0), 7, 0],
		[new Date(2016, 6, 3 , 0, 0, 0), 10, 0],
		[new Date(2016, 6, 2 , 0, 0, 0), 7, 0],
		[new Date(2016, 6, 2 , 0, 0, 0), 5, 0],
		[new Date(2016, 6, 2 , 0, 0, 0), 6.2, 0],
		[new Date(2016, 5, 26 , 0, 0, 0), 3.7, 0],
		[new Date(2016, 5, 20 , 0, 0, 0), 4, 0],
		[new Date(2016, 5, 15 , 0, 0, 0), 6.4, 0],
		[new Date(2016, 4, 28 , 0, 0, 0), 8, 0],
		[new Date(2016, 4, 26 , 0, 0, 0), 7.5, 0],
		[new Date(2016, 4, 26 , 0, 0, 0), 7.5, 0],
		[new Date(2016, 4, 24 , 0, 0, 0), 6.2, 0],
		[new Date(2016, 4, 24 , 0, 0, 0), 8.9, 0],
		[new Date(2016, 4, 22 , 0, 0, 0), 7.3, 0],
		[new Date(2016, 4, 19 , 0, 0, 0), 6.7, 0],
		[new Date(2016, 4, 5 , 0, 0, 0), 6, 0],
		[new Date(2016, 4, 3 , 0, 0, 0), 6.3, 0],
		[new Date(2016, 3, 31 , 0, 0, 0), 6, 0],
		[new Date(2016, 3, 24 , 0, 0, 0), 10, 0],
		[new Date(2016, 3, 22 , 0, 0, 0), 6.4, 0],
		[new Date(2016, 3, 21 , 0, 0, 0), 7.6, 0],
		[new Date(2016, 3, 17 , 0, 0, 0), 8, 0],
		[new Date(2016, 3, 10 , 0, 0, 0), 9, 0],
		[new Date(2016, 3, 6 , 0, 0, 0), 5.5, 0],
		[new Date(2016, 3, 6 , 0, 0, 0), 5.9, 0],
		[new Date(2016, 3, 3 , 0, 0, 0), 9, 0],
		[new Date(2016, 2, 29 , 0, 0, 0), 4.2, 0],
		[new Date(2016, 2, 15 , 0, 0, 0), 8.4, 0],
		[new Date(2016, 2, 4 , 0, 0, 0), 6, 0],
		[new Date(2016, 2, 2 , 0, 0, 0), 7.6, 0],
		[new Date(2016, 2, 2 , 0, 0, 0), 4.9, 0],
		[new Date(2016, 2, 1 , 0, 0, 0), 7.5, 0],
		[new Date(2016, 1, 28 , 0, 0, 0), 6.5, 0],
		[new Date(2016, 1, 28 , 0, 0, 0), 6, 0],
		[new Date(2016, 1, 24 , 0, 0, 0), 8.5, 0],
		[new Date(2016, 1, 21 , 0, 0, 0), 8.5, 0],
		[new Date(2016, 1, 21 , 0, 0, 0), 3.9, 0],
		[new Date(2016, 1, 16 , 0, 0, 0), 8.5, 0],
		[new Date(2016, 1, 7 , 0, 0, 0), 6, 0],
		[new Date(2016, 1, 7 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 12, 18 , 0, 0, 0), 10, 0],
		[new Date(2015, 12, 17 , 0, 0, 0), 7.4, 0],
		[new Date(2015, 12, 16 , 0, 0, 0), 5.5, 0],
		[new Date(2015, 12, 14 , 0, 0, 0), 7, 0],
		[new Date(2015, 12, 14 , 0, 0, 0), 6.8, 0],
		[new Date(2015, 12, 10 , 0, 0, 0), 9, 0],
		[new Date(2015, 12, 9 , 0, 0, 0), 8.2, 0],
		[new Date(2015, 12, 1 , 0, 0, 0), 7.4, 0],
		[new Date(2015, 12, 1 , 0, 0, 0), 8.7, 0],
		[new Date(2015, 11, 26 , 0, 0, 0), 6.8, 0],
		[new Date(2015, 11, 26 , 0, 0, 0), 9.1, 0],
		[new Date(2015, 11, 24 , 0, 0, 0), 7.9, 0],
		[new Date(2015, 11, 23 , 0, 0, 0), 8.7, 0],
		[new Date(2015, 11, 21 , 0, 0, 0), 5.3, 0],
		[new Date(2015, 11, 19 , 0, 0, 0), 8, 0],
		[new Date(2015, 11, 19 , 0, 0, 0), 7.6, 0],
		[new Date(2015, 11, 12 , 0, 0, 0), 6.8, 0],
		[new Date(2015, 11, 8 , 0, 0, 0), 7.4, 0],
		[new Date(2015, 11, 5 , 0, 0, 0), 7, 0],
		[new Date(2015, 11, 5 , 0, 0, 0), 10, 0],
		[new Date(2015, 11, 5 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 11, 3 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 11, 2 , 0, 0, 0), 7.4, 0],
		[new Date(2015, 11, 1 , 0, 0, 0), 7.1, 0],
		[new Date(2015, 10, 29 , 0, 0, 0), 8, 0],
		[new Date(2015, 10, 12 , 0, 0, 0), 9, 0],
		[new Date(2015, 10, 9 , 0, 0, 0), 10, 0],
		[new Date(2015, 10, 8 , 0, 0, 0), 9, 0],
		[new Date(2015, 10, 8 , 0, 0, 0), 5.5, 0],
		[new Date(2015, 10, 8 , 0, 0, 0), 9, 0],
		[new Date(2015, 10, 6 , 0, 0, 0), 7, 0],
		[new Date(2015, 10, 6 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 10, 3 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 10, 1 , 0, 0, 0), 9, 0],
		[new Date(2015, 10, 1 , 0, 0, 0), 7.9, 0],
		[new Date(2015, 9, 30 , 0, 0, 0), 10, 0],
		[new Date(2015, 9, 30 , 0, 0, 0), 6.2, 0],
		[new Date(2015, 9, 28 , 0, 0, 0), 9.5, 0],
		[new Date(2015, 9, 25 , 0, 0, 0), 10, 0],
		[new Date(2015, 9, 15 , 0, 0, 0), 8.5, 0],
		[new Date(2015, 9, 14 , 0, 0, 0), 7.1, 0],
		[new Date(2015, 9, 8 , 0, 0, 0), 7.1, 0],
		[new Date(2015, 9, 7 , 0, 0, 0), 9.2, 0],
		[new Date(2015, 9, 3 , 0, 0, 0), 10, 0],]);

    function floorDate(datetime) {
        var newDate = new Date(datetime);
        newDate.setHours(0);
        newDate.setMinutes(0);
        newDate.setSeconds(0);
        return newDate;
    }

    var newData = google.visualization.data.group(data, [{
        column: 0,
        modifier: floorDate,
        type: 'date'
    }], [{
        column: 1,
        label: 'Avg Temp',
        aggregation: google.visualization.data.avg,
        type: 'number'
    }, {
        column: 2,
        label: 'Rainfall',
        aggregation: google.visualization.data.sum,
        type: 'number'
    }]);


    // Set chart options
    var options = {
        'title': 'Rainfall and Temperature',
        'width': 1280,
        'height': 620,
        'series': {
            0: { color: '#00CED1' },
            1: { color: '#FF1493' },
        }
    };

    // Instantiate and draw our chart, passing in some options.
    //var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    //chart.draw(newData, options);

    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(newData, options);
};
