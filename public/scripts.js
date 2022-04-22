function getDurationLinkedin(date){
    const t2 = new Date().getTime();
    const t1 = new Date(date).getTime();

    var diff = Math.floor((t2-t1)/(24*3600*1000));

    const arr = []

    var y = parseInt(diff / 365);

    if(y > 0) {
        arr.push(y)
        arr.push(y == 1 ? "year" : "years")
    }

    var m = parseInt((diff - (y * 365)) / 30)

    if(m > 0) {
        arr.push(m)
        arr.push(m == 1 ? "month" : "months")
    }

    return arr.join(" ")
}

$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();
    
        $('html, body').animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    });
})