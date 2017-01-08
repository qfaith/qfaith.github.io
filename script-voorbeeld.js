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
        [new Date(2013, 1, 2, 10, 0, 0), 25, 1],
        [new Date(2013, 1, 2, 10, 5, 0), 25, 2],
        [new Date(2013, 1, 2, 10, 10, 0), 27, 3],
        [new Date(2013, 1, 2, 10, 15, 0), 27, 4],
        [new Date(2013, 1, 2, 10, 20, 0), 29, 5],
        [new Date(2013, 1, 2, 10, 25, 0), 29, 6],
        [new Date(2013, 1, 3, 10, 0, 0), 35, 1],
        [new Date(2013, 1, 3, 10, 5, 0), 36, 2],
        [new Date(2013, 1, 3, 10, 10, 0), 34, 3],
        [new Date(2013, 1, 3, 10, 15, 0), 32, 4],
        [new Date(2013, 1, 3, 10, 20, 0), 35, 5],
        [new Date(2013, 1, 3, 10, 25, 0), 35, 6],
        [new Date(2013, 1, 3, 10, 30, 0), 35, 7],
        [new Date(2013, 1, 4, 10, 0, 0), 25, 1],
        [new Date(2013, 1, 4, 10, 5, 0), 25, 2],
        [new Date(2013, 1, 4, 10, 10, 0), 70, 2.5],
        [new Date(2013, 1, 4, 10, 15, 0), 25, 3],
        [new Date(2013, 1, 4, 10, 20, 0), 25, 4],]);

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
        'width': 400,
        'height': 300
    };

    // Instantiate and draw our chart, passing in some options.
    //var chart = new google.visualization.ColumnChart(document.getElementById('chart_div'));
    //chart.draw(newData, options);

    var materialChart = new google.charts.Line(chartDiv);
    materialChart.draw(newData, options);
};
