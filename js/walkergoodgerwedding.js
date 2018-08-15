
var countDownDate = new Date("July 14, 2018 14:00:00").getTime();

var x = setInterval(function() {

    var now = new Date().getTime();

    var distance = countDownDate - now;

    var weeks = Math.floor(distance / (1000 * 60 * 60 * 24) / (7));
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("weeks").innerHTML = weeks;
    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if (distance < 0) {
        clearInterval(x);
        document.getElementById("countdown").html = '<a href="" class="btn pri">View Property</a>';
    }
}, 1000);




$(document).ready(function(){
    $('.tab-wrap .tab').click(function(){
        var tabId = $(this).attr('data-tab');
        var checked = 'checked';

        $(this).addClass(checked).siblings().removeClass(checked);
        $("#"+tabId).addClass(checked).siblings().removeClass(checked);
    })

    $('.menu-item').addClass('menu-trigger');

    $('.menu-trigger').click(function(){
        $('#menu-trigger').toggleClass('clicked');
        $('.container').toggleClass('push');
        $('.menu-type').toggleClass('open');
        $('body > .logo').toggleClass('hide-logo');
    });

    $('.container').click(function(){
        $(this).removeClass('push');
        $('.menu').removeClass('open');
        $('#menu-trigger').removeClass('clicked');
        $('body > .logo').removeClass('hide-logo');
    });

    $("a[href^='#']").click(function(e) {
        e.preventDefault();

        var position = $($(this).attr("href")).offset().top;

        $("body, html").animate({
            scrollTop: position
        }, 500);
    });
})









