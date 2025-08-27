// Mobile menu functionality
document.getElementById('mobile-menu-button').addEventListener('click', function() {
    document.getElementById('mobile-nav').classList.toggle('open');
});

// Close mobile menu when clicking outside
document.addEventListener('click', function(event) {
    const mobileNav = document.getElementById('mobile-nav');
    const menuButton = document.getElementById('mobile-menu-button');

    if (!mobileNav.contains(event.target) && !menuButton.contains(event.target) && mobileNav.classList.contains('open')) {
        mobileNav.classList.remove('open');
    }
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            // Close mobile menu if open
            document.getElementById('mobile-nav').classList.remove('open');
        }
    });
});

// Animate elements on scroll
function animateOnScroll() {
    const elements = document.querySelectorAll('.animate-in');

    elements.forEach(element => {
        const elementTop = element.getBoundingClientRect().top;
        const elementBottom = element.getBoundingClientRect().bottom;

        if (elementTop < window.innerHeight - 100 && elementBottom > 0) {
            element.style.opacity = '1';
            element.style.transform = 'translateY(0)';
        }
    });
}

// Initial check and scroll event listener
window.addEventListener('scroll', animateOnScroll);
window.addEventListener('load', animateOnScroll);

// Form submission handling
const form = document.querySelector('form');
if (form) {
    form.addEventListener('submit', function(e) {
        e.preventDefault();
        // Show success message
        alert('Order placed successfully! Our team will contact you shortly.');
        form.reset();
    });
}

   // script.js
const themeToggle = document.getElementById('theme-toggle');
const body = document.body;

themeToggle.addEventListener('click', () => {
    if (body.classList.contains('light-theme')) {
        body.classList.remove('light-theme');
        body.classList.add('dark-theme');
    } else {
        body.classList.remove('dark-theme');
        body.classList.add('light-theme');
    }
});

// Navigation to signup and login pages
document.querySelector('.hidden.md\\:flex .px-6.text-blue-600')?.addEventListener('click', function() {
    window.location.href = 'signup.html'; // Redirect to signup page
});

document.querySelector('.hidden.md\\:flex .px-6.bg-blue-600')?.addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to login page
});

// Mobile navigation buttons
document.getElementById('mobile-login-button')?.addEventListener('click', function() {
    window.location.href = 'login.html'; // Redirect to login page
});

document.getElementById('mobile-signup-button')?.addEventListener('click', function() {
    window.location.href = 'signup.html'; // Redirect to signup page
});

// 🌞🌙 Theme Toggle
const themeToggle = document.getElementById("themeToggle");

if (themeToggle) {
    themeToggle.addEventListener("click", () => {
        document.body.classList.toggle("dark");
        document.querySelector("header").classList.toggle("dark");

        // Change icon between sun/moon
        if (themeToggle.textContent === "🌙") {
            themeToggle.textContent = "☀️";
        } else {
            themeToggle.textContent = "🌙";
        }
    });
}
