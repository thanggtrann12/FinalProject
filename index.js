var btn2 = document.getElementById('btn2')

function leftclick2() {
    btn2.style.left = '0'
}

function rightclick2() {
    btn2.style.left = '110px'
}

var btn3 = document.getElementById('btn3')

function leftclick3() {
    btn3.style.left = '0'
}

function rightclick3() {
    btn3.style.left = '110px'
}

var btn4 = document.getElementById('btn4')

function leftclick4() {
    btn4.style.left = '0'
}

function rightclick4() {
    btn4.style.left = '110px'
}

var btn5 = document.getElementById('btn5')

function leftclick5() {
    btn5.style.left = '0'
}

function rightclick5() {
    btn5.style.left = '110px'
}

const chk = document.getElementById('chk');

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

var btn = document.getElementById('btn1')

function intext1(){
    btn.style.left = '0px'
}

function intext2(){
    btn.style.left = '150px'
}

////////////////// get value Temperature and Humidity from firebase/////
var valueTemp = firebase.database().ref('Dữ liệu').child('Nhiệt độ');
valueTemp.on('value', snap =>{
    console.log("Nhiet do :  "+snap.val());
    document.getElementById("nhietdo").innerHTML = snap.val()+" °C";
});
var valueHumid = firebase.database().ref('Dữ liệu').child('Độ ẩm');
valueHumid.on('value', snap =>{
    console.log("Do am :  "+snap.val());
    document.getElementById("doam").innerHTML = snap.val()+" %";
});
var valueHumgr = firebase.database().ref('Dữ liệu').child('Độ ẩm đất');
valueHumgr.on('value', snap =>{
    console.log("Do am :  "+snap.val());
    document.getElementById("doamdat").innerHTML = snap.val()+" %";
});