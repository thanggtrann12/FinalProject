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

var chartMS = new Highcharts.Chart({
  chart: { renderTo: "chart-solid" },
  title: {
    text: "BIỂU ĐỒ ĐỘ ẨM ĐÁT",
    style: {
      color: "#000",
      font: "bold 25px sans-serif",
    },
  },
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
    series: { color: "#5F464B" },
  },
  xAxis: {
    type: "datetime",
    dateTimeLabelFormats: { second: "%H:%M:%S" },
  },
  yAxis: {
    title: {
      text: "ĐỘ ẨM ĐẤT (%)",
      style: {
        color: "#000",
        font: "20px sans-serif",
      },
    },
  },
  credits: { enabled: false },
});
setInterval(function () {
  var x = new Date().getTime(),
    y = parseInt(document.getElementById("solid").innerText);
  if (chartMS.series[0].data.length > 40) {
    chartT.series[0].addPoint([x, y], true, true, true);
  } else {
    chartMS.series[0].addPoint([x, y], true, false, true);
  }
}, 2000);
var dbSolid = firebase.database().ref().child("DỮ LIỆU/ĐỘ ẨM ĐẤT");
var solidhumidity = document.getElementById("solid");
dbSolid.on("value", (snap) => (solidhumidity.innerText = snap.val() + " %"));
