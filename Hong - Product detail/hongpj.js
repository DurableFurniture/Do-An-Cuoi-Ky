//scrollToTop
hScrollToTopBtn = document.getElementById("hong-scrollToTopBtn");
window.onscroll = function(){
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
        hScrollToTopBtn.style.display = "block";
    }else{
        hScrollToTopBtn.style.display = "none";
    }
}
function hongScrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
};