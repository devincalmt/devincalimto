$(document).ready(function () {
    $(document).on('click', 'a[href^="#"]', function (event) {
        event.preventDefault();

        if($.attr(this, 'href') !== "#") {
            $('html, body').animate({
                scrollTop: $($.attr(this, 'href')).offset().top
            }, 500);
        }
    });

    $('button#mobile-menu-button').on('click', function(){
        $('#mobile-menu').toggle()
    })
})