const hamburger = document.querySelector('#ham');
const navlinks = document.querySelector('.navbar-desk');


hamburger.addEventListener('click', () => {
    navlinks.classList.toggle('active')
    if (navlinks.classList.contains('active')) {
        hamburger.src = "images/icon-close.svg"
    } else {
        hamburger.src = "images/icon-hamburger.svg"
    }

})