const firebaseConfig = {
    apiKey: "AIzaSyA_fac89wpzdEv-m4A8iemVDEgwaB3qwhc",
    authDomain: "iots-43546.firebaseapp.com",
    databaseURL:
        "https://iots-43546-default-rtdb.asia-southeast1.firebasedatabase.app",
    projectId: "iots-43546",
    storageBucket: "iots-43546.appspot.com",
    messagingSenderId: "448994359206",
    appId: "1:448994359206:web:ca80fc8b42edb00fa08167",
    measurementId: "G-3K8J69RXH7",
};

firebase.initializeApp(firebaseConfig);
firebase.analytics();

var chartT = new Highcharts.Chart({
    chart: { renderTo: "chart-temperature" },
    title: { text: "BIỂU ĐỒ NHIỆT ĐỘ" },
    time: {
        useUTC: false,
    },
    series: [
        {
            showInLegend: false,
            data: [],
        },
    ],
    plotOptions: {
        line: { animation: false, dataLabels: { enabled: true } },
        series: { color: "#18009c" },
    },
    xAxis: {
        type: "datetime",
        dateTimeLabelFormats: { second: "%H:%M:%S" },
    },
    yAxis: {
        title: { text: "NHIỆT ĐỘ (Celsius)" },
    },
    credits: { enabled: false },
});
setInterval(function () {
    var x = new Date().getTime(),
        y = parseInt(document.getElementById("temp").innerText);
    if (chartT.series[0].data.length > 40) {
        chartT.series[0].addPoint([x, y], true, true, true);
    } else {
        chartT.series[0].addPoint([x, y], true, false, true);
    }
}, 3000); // read data delay
var dbTemp = firebase.database().ref().child("DỮ LIỆU/NHIỆT ĐỘ");
var temparute = document.getElementById("temp");
dbTemp.on("value", (snap) => (temparute.innerText = snap.val() + " °C"));
console.log(temparute.innerText);
