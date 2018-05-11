var myVar = setInterval(myTimer(), 1000);
var dt = new Date();
function date() {
    document
        .getElementById("date")
        .innerHTML = dt.toLocaleDateString();
}
var myVar = setInterval(myTimer, 1000);
function myTimer() {
    var d = new Date();
    document
        .getElementById("demo")
        .innerHTML = d.toLocaleTimeString();
}
date();
myTimer();