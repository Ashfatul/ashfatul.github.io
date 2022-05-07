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