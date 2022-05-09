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
responsive:{
    0:{
        items:1,
    },
    600:{
        items:2,
    },
    1000:{
        items:3,
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