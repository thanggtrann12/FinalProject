const config = {
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

// Initialize Firebase
firebase.initializeApp(config);
// firebase.analytics();

const solid = document.getElementById("solid");
const huminity = document.getElementById("humi");
const temparute = document.getElementById("temp");

const dbSolid = firebase.database().ref().child("DỮ LIỆU/ĐỘ ẨM ĐẤT");
const dbHumi = firebase.database().ref().child("DỮ LIỆU/ĐỘ ẨM");
const dbTemp = firebase.database().ref().child("DỮ LIỆU/NHIỆT ĐỘ");

dbSolid.on("value", (snap) => (solid.innerText = snap.val() + " %"));
dbHumi.on("value", (snap) => (huminity.innerText = snap.val() + " %"));
dbTemp.on("value", (snap) => (temparute.innerText = snap.val() + " °C"));
// end

function toggleCheckbox(element) {
  let state;
  if (element.checked) {
    firebase.database().ref(element.id.toString()).set({ Status: "On" });
  } else firebase.database().ref(element.id.toString()).set({ Status: "Off" });
}

function mode(element) {
  let state;
  if (element.checked) {
    firebase.database().ref(element.id.toString()).set({ Status: "Manual" });
  } else {
    firebase.database().ref(element.id.toString()).set({ Status: "Auto" });
  }
}
