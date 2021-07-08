// Scroll to top

hScrollTopBtn = document.getElementById("hong-scroll-top-btn");
window.onscroll = function(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        hScrollTopBtn.style.display = "block";
    }else{
        hScrollTopBtn.style.display = "none";
    }
}
function hongScrollTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};

// Gallery slider

$(document).ready(()=>{

});

$(window).on('load',function(){

});

var slideIndex = 1;
showSlides(slideIndex);

// Auto circulate

setInterval(function (){
    showSlides(slideIndex += 1);
}, 2000);

// Thumbnail image controls

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    var i;
    var slides = document.getElementsByClassName("slide");
    var thumbs = document.getElementsByClassName("thumb");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < thumbs.length; i++) {
        thumbs[i].className = thumbs[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    thumbs[slideIndex-1].className += " active";
}

// Product-description Tabs

function openTab(evt, tabName) {
    var i, tabContent, tabLink;

    tabContent = document.getElementsByClassName("tab-content");
    for (i = 0; i < tabContent.length; i++) {
        tabContent[i].style.display = "none";
    }

    tabLink = document.getElementsByClassName("tab-link");
    for (i = 0; i < tabLink.length; i++) {
        tabLink[i].className = tabLink[i].className.replace(" active", "");
    }

    document.getElementById(tabName).style.display = "block";
    evt.currentTarget.className += " active";
}