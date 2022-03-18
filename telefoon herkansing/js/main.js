$(".divlink").click(function() {
    window.location = $(this).find("a").attr("href");
    return false;
});

function startTime() {
    const today = new Date();
    let h = today.getHours();
    let m = today.getMinutes();
    m = checkTime(m);
    document.getElementsByClassName('clock')[0].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[1].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[2].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[3].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[4].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[5].innerHTML = h + ":" + m;
    document.getElementsByClassName('clock')[6].innerHTML = h + ":" + m;

    setTimeout(startTime, 1000);
}

function checkTime(i) {
    if (i < 10) { i = "0" + i }; // add zero in front of numbers < 10
    return i;
}