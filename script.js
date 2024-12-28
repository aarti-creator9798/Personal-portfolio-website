// Smooth Scrolling for Navigation Links
document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault(); // Prevent default anchor click behavior

        // Scroll smoothly to the target section
        const targetId = this.getAttribute('href').slice(1);
        const targetSection = document.getElementById(targetId);
        if (targetSection) {
            targetSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start',
            });
        }
    });
});

// Highlight Active Navigation Link on Scroll
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-links a');

window.addEventListener('scroll', () => {
    let current = '';

    // Check the current section in view
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100; // Adjust for the header height
        const sectionHeight = section.offsetHeight;
        if (scrollY >= sectionTop && scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    // Update active link in navigation
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Mobile Navigation Toggle (if you plan to add a mobile menu)
const nav = document.querySelector('nav');
const menuToggle = document.createElement('button');
menuToggle.classList.add('menu-toggle');
menuToggle.textContent = '☰'; // Hamburger menu icon
nav.insertBefore(menuToggle, nav.firstChild);

menuToggle.addEventListener('click', () => {
    nav.classList.toggle('open');
});

// Change Hero Image on Mouse Hover (Optional)
const heroImage = document.querySelector('.hero-image img');
if (heroImage) {
    heroImage.addEventListener('mouseenter', () => {
        heroImage.style.transform = 'scale(1.1)';
        heroImage.style.transition = 'transform 0.3s ease-in-out';
    });

    heroImage.addEventListener('mouseleave', () => {
        heroImage.style.transform = 'scale(1)';
    });
}
