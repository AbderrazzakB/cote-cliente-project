$(document).ready(function() {
    $.getJSON("script/data.json",
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
    $("a").on('click', function(event) {

        if (this.hash !== "") {
            event.preventDefault();

            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {

                window.location.hash = hash;
            });
        }
    });

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