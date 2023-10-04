let darkModeIcon = document.querySelector('#darkMode-icon');

darkModeIcon.onclick = () => {
    darkModeIcon.classList.toggle("ri-sun-line");
    document.body.classList.toggle('dark-mode');
}


ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay: 200
   });

   ScrollReveal().reveal('.home-content, .heading,  ,.footer-iconTop', { origin: 'top' });
   ScrollReveal().reveal('.home-image ,  .portfolio-container,.section-header,.skills-head,.contact', { origin: 'bottom' });
   ScrollReveal().reveal('.home-content h1,.skills-main, .social,.port', { origin: 'left' });
   ScrollReveal().reveal('.home-content h3,.home-content p, .inner-section, .contact-image', { origin: 'right' });



