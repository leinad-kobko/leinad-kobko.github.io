function currentTime() {
    
    // Create date object
    var date = new Date();
    
    // Set time
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();
    
    // Live update
    hour = updateTime(hour);
    min = updateTime(min);
    sec = updateTime(sec);

    document.getElementById("clock").textContent = hour + " : " + min + " : " + sec; /* adding time to the div */
    var t = setTimeout(function(){ currentTime() }, 1000); /* setting timer */
}

function updateTime(time) {
    if (time < 10) {
        return "0" + time;
    } else {
        return time;
    }
}

currentTime();