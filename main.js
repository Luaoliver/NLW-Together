const nav = document.querySelector('#header nav')
// const does not allow changing values
// object 'document' searches for the selector (queryselector) the one corresponding to '#header nav', after that, the corresponding is placed in the const nav
const toggle = document.querySelectorAll('nav .toggle')
// 'querySelectorAll' is a resource that receives *All* matching css selectors

const links = document.querySelectorAll('nav ul li a')

for (const element of toggle) {
  element.addEventListener('click', function () {
    nav.classList.toggle('show')
    // toggle is a function that already exists in the DOM mapping, it makes a switch. In this case, it will see if there is the 'show' class ('through the 'classList'), if it does, ir will be dropped, if not, it will be added.
  })
  // addEventListener is a feature that adds a listener event, that is, it receives something through a performed event.
  // The first argument passed is the event, in this case is the 'click'. The second is the function, in this case it is the anonymous function, represents what will be accomplished
}
// for each element corresponding to the alternator, this series of actions will be performed

for (const link of links) {
  link.addEventListener('click', function () {
    nav.classList.remove('show')
  })
}

/* Change header on scroll */
function changeHeaderWhenScroll() {
  const header = document.querySelector('#header')
  const navHeight = header.offsetHeight

  if (window.scrollY >= navHeight) {
    header.classList.add('scroll')
  } else {
    header.classList.remove('scroll')
  }
}

/* Testimonials slider swiper */
const swiper = new Swiper('.swiper-container', {
  slidesPerView: 1,
  pagination: {
    el: '.swiper-pagination'
  },
  mousewheel: true,
  keyboard: true
})

/* Scroll reveal */
const scrollReveal = ScrollReveal({
  origin: 'top',
  distance: '30px',
  duration: 700,
  reset: true
})

scrollReveal.reveal(
  `#home .image, #home .text,
  #about .image, #about .text,
  #sevices header, #services .card,
  #testimonials header, #testimonials .testimonials,
  #contact .text, #contact .links,
  footer .brand, footer .social
  `,
  { interval: 100 }
)

/* Back to top */
function backToTop() {
  const backToTopButton = document.querySelector('.back-to-top')

  if (window.scrollY >= 560) {
    backToTopButton.classList.add('show')
  } else {
    backToTopButton.classList.remove('show')
  }
}

/* When Scroll */
window.addEventListener('scroll', function () {
  changeHeaderWhenScroll()
  backToTop()
})
