const weekday = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];

const d = new Date();
let day = weekday[d.getDay()];
document.getElementById("day").innerHTML = day;

var today = document.getElementById(weekday[d.getDay()]);
today.style.display = (today.style.display == 'block') ? 'none' : 'block';
