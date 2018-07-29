
$('.navtrigger').click(function(){
    $('.navigation').toggleClass('active');
});

$('.navclose').click(function(){
    $('.navigation').removeClass('active');
})

$(document).ready(function(){
    var navHeight = $('.navbar').height()
    $('body').css('margin-top', navHeight+'px');

    $('.parent span').click(function(){
        $('.parent span').not(this).next('ul').slideUp();
        $(this).next('ul').slideToggle();
    });
});

// Hide Header on on scroll down
var didScroll;
var lastScrollTop = 0;
var delta = 15;
var navbarHeight = $('.navbar').outerHeight();

$(window).scroll(function (event) {
    didScroll = true;
});

setInterval(function () {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);

function hasScrolled() {
    var st = $(this).scrollTop();

    // Make sure they scroll more than delta
    if (Math.abs(lastScrollTop - st) <= delta)
        return;

    if (st > lastScrollTop && st > navbarHeight) {
        // Scroll Down
        $('.navbar').css('top', navbarHeight*-1+'px');
    } else {
        // Scroll Up
        if (st + $(window).height() < $(document).height()) {
            $('.navbar').css('top', 0);
        }
    }

    lastScrollTop = st;
}