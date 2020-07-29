function getDayTime(hour) { 
    if ((hour==24) || (hour<12)) {
        return " AM";
    } else {
        return " PM"
    }
}

function currentTime() {
    
    // Create date object
    var date = new Date();
    
    // Set time
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    var dayTime = getDayTime(hour);
    
    // Live update
    hour = updateHour(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").textContent = hour + ":" + min + ":" + sec + dayTime; /* adding time to the div */
    setTimeout(currentTime, 1000); /* setting timer */
}

function updateHour(hour) {
    if (hour > 12) {
        hour -= 12;
        return updateTime(hour);
    } else {
        return updateTime(hour);
    }
}

function updateTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

currentTime();