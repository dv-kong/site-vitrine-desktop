// SCRIPT POUR NAVBAR

const navBar = document.querySelector('#main');

function fixedNav() {  
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = navBar.offsetHeight + 'px'
    document.body.classList.add('fixed-nav')
  }
  else {
    document.body.classList.remove('fixed-nav')
    document.body.style.paddingTop = 0
  }
}

window.addEventListener('scroll', fixedNav);
const topOfNav = navBar.offsetTop  ;