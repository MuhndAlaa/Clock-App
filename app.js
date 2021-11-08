var interval;
var clockId = document.getElementById("clock");
var dateId = document.getElementById("date");
var months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];


function clock(){
    var date = new Date();
    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var day = date.getDate();
    var month = date.getMonth();
    var year = date.getFullYear();

    if(hour < 12) {interval = "AM";}
    if(hour == 0){h = 12}
    if(hour > 12) {interval = "PM"; hour = hour -12}

    hour = hour < 10 ? "0" + hour : hour;
    minute = minute < 10 ? "0" + minute : minute;
    second = second < 10 ? "0" + second : second;


    var totalTime = hour + " : " + minute + " : " + second + " : " + " " + interval;
    var totalDay = day + " " + months[month] + " " + year;
    
    clockId.innerText = totalTime;
    dateId.innerText = totalDay;
}

setInterval(clock , 1000);