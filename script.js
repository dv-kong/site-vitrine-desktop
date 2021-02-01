// SCRIPT POUR NAVBAR

const navBar = document.querySelector("#main");

function fixedNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navBar.offsetHeight + "px";
        document.body.classList.add("fixed-nav");
    } else {
        document.body.classList.remove("fixed-nav");
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener("scroll", fixedNav);
const topOfNav = navBar.offsetTop;

// SCRIPT FOR INDEX HTML VNCENT

let imageElement = document.querySelectorAll("img");
let indexImg = document.querySelectorAll(".indexImg");
let imageDisplay = document.querySelector(".productImg");
let img = document.querySelectorAll(".productCard");
let indexHtmlImageDisplayDivImg = document.querySelector(
    ".indexHtmlImageDisplayDivImg"
);
let indexHtmlImageDisplayDiv = document.querySelector(
    ".indexHtmlImageDisplayDiv"
);
let sideContainerImgArray = [];

let closeButton = document.querySelector(".closeButton");
// END OF SCRIPT FOR INDEX HTML VNCENT

// SCRIPT FOR PRODUITS.HTML

img.forEach((e) => {
    e.addEventListener("click", () => {
        imageDisplay.src = e.src; // set imageDisplay src as target src
    });
});

// CLICK TO DISPLAY IMG FULLSCREEN IN INDEX.HTML

indexImg.forEach((el) => {
    el.addEventListener("click", () => {
        indexDisplayDiv.style.display = "flex";
        indexHtmlImageDisplayDivImg.src = el.src;
    });
});

// END OF SCRIPT FOR PRODUITS.HTML