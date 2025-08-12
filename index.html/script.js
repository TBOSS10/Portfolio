const hamburger = document.querySelector('.hamburger');
const navLinks = document.querySelector('.nav-links');

hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('active');
    hamburger.classList.toggle('active');
});

document.querySelectorAll('nav-links a').forEach(link => {
    link.ariaEventListener('click',() => {
        navLinks.classList.remove('active');
        hamburger.classList.remove('active');
   } ); 
});   

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        target.scrollIntoView ( {
            behavior: 'smooth',
            block:'start'
        });
    });
});