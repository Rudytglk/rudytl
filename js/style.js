let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmark');
    navbar.classList.toggle('active');
};
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });

            let header = document.querySelector('header');

            header.classList.toggle('sticky', window.scrollY > 100);
        };
    });
    menuIcon.classList.remove('fa-xmark');
    navbar.classList.remove('active');
};

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
});

ScrollReveal().reveal('.home-content, .heading, .portofolio-box', { origin: 'top' });
ScrollReveal().reveal('.contact form, .home-img, .motivation-container, .about-img', { origin: 'bottom' });


window.addEventListener("scroll", function(){
    var header = document.querySelector("header");
    header.classList.toggle("sticky",  window.scrollY > 0);
})

// const text = document.querySelector("-");
// const textLoad = () => {
//   setTimeout(() => {
//     text.textContent = "AZZELLO";
//   }, 0);
//   setTimeout(() => {
//     text.textContent = "AZZELLO ۞";
//   }, 2000);
// }
// textLoad();
// setInterval(textLoad, 4000); 

const text = document.querySelector(".op");
const textLoad = () => {
  setTimeout(() => {
    text.textContent = "🤔";
  }, 0);

  setTimeout(() => {
    text.textContent = "Manusia Biasa";
  }, 2000);

  setTimeout(() => {
    text.textContent = "Makan Nasi";
  }, 4000);
  
  setTimeout(() => {
    text.textContent = "Kya Eluu";
  }, 6000);
  
  setTimeout(() => {
    text.textContent = "Apa lagi ya??";
  }, 8000);
}
textLoad();
setInterval(textLoad, 10000);

