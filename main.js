$(document).ready(function() {
    $.getJSON("data.json",
        function(data) {
            var l = data.map(function(obj) {
                return obj.date;
            });
            var e = data.map(function(obj) {
                return obj.efective;
            });
            visualiser(l, e);
        }
    );

});

function visualiser(l, e) {
    var ctx = document.getElementById("myChart").getContext('2d');
    var myChart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: l,
            datasets: [{
                label: 'المستفيذين من النقل المدرسي',
                data: e,
                backgroundColor: '#2196F3',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                yAxes: [{
                    ticks: {
                        beginAtZero: true
                    }
                }]
            }
        }
    });
}