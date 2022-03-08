/*=============== SHOW SCROLL UP ===============*/ 
function scrollUp(){
    const scrollUp = document.getElementById('scroll-up');
    // When the scroll is higher than 200 viewport height, add the show-scroll class to the a tag with the scroll-top class
    if(this.scrollY >= 200) scrollUp.classList.add('show-scroll'); else scrollUp.classList.remove('show-scroll')
}
window.addEventListener('scroll', scrollUp)

/*=============== CHANGE BACKGROUND HEADER ===============*/

function scrollHeader(){
    const header = document.getElementById('header')
    const navBar = document.querySelector('.nav')
    // When the scroll is greater than 50 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 100) {
        header.classList.add('scroll-header'); 
        header.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0.1)";
        navBar.style.transition = ".3s ease";
    }
    else {
        header.classList.remove('scroll-header');
        header.style.boxShadow = "0 2px 4px 0 rgba(0, 0, 0, 0)";
    }
}
window.addEventListener('scroll', scrollHeader)

//Scroll Reveal
const sr = ScrollReveal({
    distance: '60px',
    duration: 2500,
    delay: 100,
    // reset: true
})

sr.reveal(`#home`,{delay: 30})
sr.reveal(`.nav__logo, .nav__menu`,{delay: 300})
sr.reveal(`.nav__toggle`,{delay: 300})
sr.reveal(`.home__title`,{delay: 400})
sr.reveal(`#arrow__down`,{delay: 500})
sr.reveal(`.creations_content`,{delay: 400})
sr.reveal(`#clients`,{delay: 200})
sr.reveal(`.about__img`,{origin: 'bottom', interval: 100})
sr.reveal(`.content__text`,{origin: 'bottom', interval: 100})
sr.reveal(`.footer__logo, .footer__content`,{origin: 'top', interval: 100})
sr.reveal(`#gallery`,{origin: 'bottom', interval: 100})

/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('side-nav'),
      navToggle = document.getElementById('nav-toggle'),
      navClose = document.getElementById('nav__close')
      sideNav = document.querySelector('.side__nav')

/*===== MENU SHOW =====*/
/* Validate if constant exists */
if(navToggle){
    navToggle.addEventListener('click', () =>{
        sideNav.style.transform ="scale(1)";

        navToggle.style.visibility = "hidden";
        navClose.style.visibility = "visible";
    })
}

/*===== MENU HIDDEN =====*/
/* Validate if constant exists */
if(navClose){
    navClose.addEventListener('click', () =>{
        sideNav.style.transform ="scale(0)";

        navClose.style.visibility = "hidden";
        navToggle.style.visibility = "visible";
       
    })
}
