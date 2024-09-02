// Smooth Scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Mobile Menu Toggle
const menuToggle = document.getElementById('menuToggle');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Animation on Scroll
const sections = document.querySelectorAll('.section');

function animateOnScroll() {
    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        const viewportHeight = window.innerHeight;

        if (sectionTop < viewportHeight * 0.75) {
            section.classList.add('fade-in');
        } else {
            section.classList.remove('fade-in');
        }
    });
}

window.addEventListener('scroll', animateOnScroll);
animateOnScroll();  // Trigger animation on initial load

// CSS for the fade-in effect
const style = document.createElement('style');
style.innerHTML = `
    .fade-in {
        opacity: 1;
        transition: opacity 0.6s ease-out;
    }
    .section {
        opacity: 0;
    }
`;
document.head.appendChild(style);
