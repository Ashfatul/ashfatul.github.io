$(document).ready(function(){
    $(".loader-container").fadeOut(2000);
    $(".owl-carousel").owlCarousel();
});

// Javascript for skills
let  numberPercent = document.querySelectorAll('.countbar')
let getPercent = Array.from(numberPercent)

getPercent.map((items) => {
    let startCount = 0
    let progressBar = () => {
        startCount ++
        items.innerHTML = `<h3>${startCount}%</h3>`
        items.style.width = `${startCount}%`
        if(startCount == items.dataset.percentnumber) {
            clearInterval(stop)
        }
    }
    let stop = setInterval(() => {
        progressBar()
    },25)
})

// javascript for skills end

$('.owl-carousel').owlCarousel({
    loop:true,
    autoplay:true,
    autoplayTimeout:4000,
    margin:15,
    nav:true,
    navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
    responsive:{
        0:{
            items:1,
        },
        600:{
            items:1,
        },
        1000:{
            items:1,
        }
    }
});

// Back to top
var btn = $('#back-to-top-button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});

btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:0}, '300');
});

// Activating Animation on scroll
AOS.init();

// Menu
$('#menu-toggler').click(function(){
    $('#sidebar').addClass('show-on-top');
});
$('#menu-closer').click(function(){
    $('#sidebar').removeClass('show-on-top');
});
$('#sidebar-menu-main a').click(function(){
    $('#sidebar').removeClass('show-on-top');
});

// Warning
$('.agree-btn').click(function(){
    $('.page-warning').hide();
    $('.job-attempt-content').show();
});
// Job Attempt
// $('.job-attempt-table tr').each(function() {
//     var test_status = $(this).find(".written-test").html();
//     if (test_status = 'Passed') {
//         $('.written-test').each(function(){
//             $('.written-test').addClass('test-passed');
//         });
//     } else {
//         $('.written-test').addClass('test-failed');
//     }
//  });