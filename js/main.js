$(function () {
    $('.works__item').hover(function() {
        $(this).toggleClass('active');
    }, function() {
        $(this).removeClass('active')
    });
    $(".menu").on("click", "a", function (event) {
        event.preventDefault();
        var id = $(this).attr('href'),
            top = $(id).offset().top;
        $('body,html').animate({ scrollTop: top }, 1000);
    });
});