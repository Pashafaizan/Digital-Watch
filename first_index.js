

function showTime() {
    var date = new Date();
    let hours = date.getHours();
    let min = date.getMinutes();
    let sec = date.getSeconds();
    let session = "AM";
    let clock = document.querySelector('.clock');
    if (hours > 12) {
        session = "PM";
        hours=hours-12;
    }

    hours=(hours <10 )?"0" + hours : hours;
    min=(min<10)? "0"+min: min;
    sec=(sec<10)? "0"+sec:sec;

    clock.innerHTML = `${hours} : ${min} : ${sec} : ${session}`;
    setTimeout(showTime, 1000);


}
showTime();

