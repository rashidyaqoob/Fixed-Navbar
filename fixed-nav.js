const nav = document.querySelector(".navbar");
const topOfNav = nav.offsetTop;


window.addEventListener("scroll", fixedNav);


function fixedNav() {
    if (window.scrollY >= topOfNav) {
        document.body.classList.add("fixedNav");
        document.body.style.paddingTop=nav.offsetHeight+'px';

    }
    else {
        document.body.classList.remove("fixedNav");
        document.body.style.paddingTop='0px';
    }
}
