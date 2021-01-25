// SCRIPT POUR NAVBAR

const navBar = document.querySelector('#main');

function fixedNav() {
    if (window.scrollY >= topOfNav) {
        document.body.style.paddingTop = navBar.offsetHeight + 'px'
        document.body.classList.add('fixed-nav')
    } else {
        document.body.classList.remove('fixed-nav')
        document.body.style.paddingTop = 0;
    }
}

window.addEventListener('scroll', fixedNav);
const topOfNav = navBar.offsetTop;









// SCRIPT FOR PRODUITS.HTML

let previousProductButton = document.querySelector(".previousItemButton")
let nextProductButton = document.querySelector(".nextItemButton")
previousItemButton.addEventListener("click", previousOrNextItem)
nextItemButton.addEventListener("click", previousOrNextItem)

function previousOrNextItem(input) {
    if (input == previousItemButton) {

    } else { // input is nextItemButton

    }
}



let productTemplate = {
    title: "TITLE",
    description: "DESCRIPTION",
    price: 30,
    img: "PATH TO IMG",
    alt: "ALT DESC",

}




// END OF SCRIPT FOR PRODUITS.HTML