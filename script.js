var dt = new Date();
document
    .getElementById("date")
    .innerHTML = dt.toLocaleDateString();
var tm = new Date();
for (var i; i <= 60; i++) {
    tm.toLocaleTimeString();
}
document
    .getElementById("time")
    .innerHTML = tm.toLocaleTimeString();