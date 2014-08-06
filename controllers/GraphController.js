$(function () {
    $('#graphContainer').highcharts({
        chart: {
            type: 'column'
        },
        title: {
            text: 'Monthly Net Worth'
        },
        subtitle: {
            text: 'How much do you really make?'
        },
        xAxis: {
            type: 'category',
            labels: {
                rotation: -45,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Helvetica, sans-serif'
                }
            }
        },
        yAxis: {
            min: 0,
            title: {
                text: 'Dollars'
            }
        },
        legend: {
            enabled: false
        },
        tooltip: {
            pointFormat: 'Population in 2008: <b>{point.y:.1f} millions</b>',
        },
        series: [{
            name: 'Population',
            data: [
                ['Income', 4247.62],
                ['Expense', 3888.10],
                ['Net', 359.52]
            ],
            dataLabels: {
                enabled: true,
                rotation: 0,
                color: '#FFFFFF',
                align: 'right',
                x: -50,
                y: 25,
                style: {
                    fontSize: '13px',
                    fontFamily: 'Helvetica, sans-serif',
                    textShadow: '0 0 3px black'
                }
            }
        }]
    });
});