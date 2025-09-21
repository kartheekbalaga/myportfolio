// Disable AOS animations for instant navigation
AOS.init({
    duration: 0,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    disable: true
});

// Initialize EmailJS with your actual public key
(function(){
    emailjs.init("50JHLZkVabanT4Ii-"); // ✅ Replace with your EmailJS Public Key
    console.log("EmailJS initialized successfully");
})();

// Typed.js Configuration
const typed = new Typed('#typed-text', {
    strings: [
        'Web Developer 💻',
        'Android Coder 📱', 
        'Placement-Ready 🎯',
        'Problem Solver 🧠',
        'Creative Designer 🎨'
    ],
    typeSpeed: 40,
    backSpeed: 25,
    backDelay: 1500,
    loop: true,
    showCursor: true,
    cursorChar: '|'
});

// Mobile Navigation Toggle
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu when clicking on a link
document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
    hamburger.classList.remove('active');
    navMenu.classList.remove('active');
}));

// Instant navigation - no smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; // Account for fixed navbar
            window.scrollTo({
                top: offsetTop,
                behavior: 'auto' // Instant jump
            });
        }
    });
});

/* Removed scroll indicator functionality */

// Navbar stays static - no color changes on scroll

// Active navigation link highlighting
window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
});

// Download Resume functionality
document.getElementById('download-resume').addEventListener('click', function(e) {
    e.preventDefault();
    const resumeUrl = 'path/to/your/resume.pdf'; // replace with your file
    
    const link = document.createElement('a');
    link.href = resumeUrl;
    link.download = 'YourName_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    showNotification('Resume download started!');
});

// =============================
// Contact form handling (fixed - no redirect)
// =============================
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        e.stopPropagation();

        const formMessage = document.getElementById('form-message');
        const submitBtn = contactForm.querySelector("button[type='submit']");
        
        // Show loading state
        submitBtn.disabled = true;
        submitBtn.innerText = "Sending...";

        // Get form data
        const formData = new FormData(contactForm);
        const name = formData.get('from_name');
        const email = formData.get('user_email');
        const message = formData.get('message');

        // Send form using EmailJS
        emailjs.send("service_rlemr3r", "template_6hnljlh", {
            from_name: name,
            user_email: email,
            message: message
        })
        .then(() => {
            showNotification("✅ Message sent successfully! You'll receive a confirmation shortly.", 'success');
            formMessage.innerText = "✅ Message sent successfully! You'll receive a confirmation shortly.";
            contactForm.reset();
        })
        .catch((error) => {
            console.error("FAILED...", error);
            showNotification("❌ Failed to send. Please try again.", 'error');
            formMessage.innerText = "❌ Failed to send. Please try again.";
        })
        .finally(() => {
            submitBtn.disabled = false;
            submitBtn.innerText = "Send Message";
        });

        return false;
    });
}

// =============================
// Email validation
// =============================
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Notification system
function showNotification(message, type = 'info') {
    const existingNotification = document.querySelector('.notification');
    if (existingNotification) existingNotification.remove();
    
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.innerHTML = `
        <div class="notification-content">
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
    `;
    
    notification.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: ${type === 'success' ? '#64ffda' : type === 'error' ? '#ff6b6b' : '#64ffda'};
        color: ${type === 'success' || type === 'info' ? '#0d1b2a' : '#ffffff'};
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        z-index: 10000;
        transform: translateX(100%);
        transition: transform 0.3s ease;
        max-width: 300px;
    `;
    
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(0)';
    }, 100);
    
    setTimeout(() => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 300);
    }, 5000);
    
    notification.querySelector('.notification-close').addEventListener('click', () => {
        notification.style.transform = 'translateX(100%)';
        setTimeout(() => {
            if (notification.parentNode) notification.remove();
        }, 300);
    });
}

// Parallax effect for hero section
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) {
        const rate = scrolled * -0.5;
        hero.style.transform = `translateY(${rate}px)`;
    }
});

// Skill items animation on hover
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
    });
    
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// Project cards tilt effect
document.querySelectorAll('.social-link').forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();  
    });
});
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;
        
        this.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-10px)`;
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// --- INTERESTS CARD INTERACTIVITY ---
window.selectInterest = function(card) {
    document.querySelectorAll('.interest-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
};

// Intersection Observer for fade-in animations
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

document.querySelectorAll('.skill-category, .project-card, .interest-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(30px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    
    setTimeout(() => {
        document.body.style.opacity = '1';
    }, 100);
});

// Cursor trail effect
let mouseX = 0;
let mouseY = 0;
document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
    if (Math.random() > 0.9) createCursorTrail();
});

function createCursorTrail() {
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed;
        width: 4px;
        height: 4px;
        background: #64ffda;
        border-radius: 50%;
        pointer-events: none;
        z-index: 9999;
        left: ${mouseX}px;
        top: ${mouseY}px;
        opacity: 0.8;
    `;
    
    document.body.appendChild(trail);
    let opacity = 0.8;
    const fadeInterval = setInterval(() => {
        opacity -= 0.02;
        trail.style.opacity = opacity;
        if (opacity <= 0) {
            clearInterval(fadeInterval);
            trail.remove();
        }
    }, 20);
}

// Add CSS for active navigation link
const style = document.createElement('style');
style.textContent = `
    .nav-link.active { color: #64ffda !important; }
    .nav-link.active::after { width: 100% !important; }
    .notification-content { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
    .notification-close { background: none; border: none; color: inherit; font-size: 1.2rem; cursor: pointer; padding: 0; line-height: 1; }
    .notification-close:hover { opacity: 0.7; }
`;
document.head.appendChild(style);

// Throttle scroll events
function throttle(func, limit) {
    let inThrottle;
    return function() {
        if (!inThrottle) {
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

window.addEventListener('scroll', throttle(() => {
    // Navbar stays consistent - no color changes
    const navbar = document.querySelector('.navbar');
    navbar.style.background = 'rgba(0, 0, 0, 0.9)';
    navbar.style.boxShadow = '0 4px 20px rgba(100, 255, 218, 0.1)';
    navbar.style.borderBottom = '2px solid rgba(100, 255, 218, 0.3)';
    
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href') === `#${current}`) {
            link.classList.add('active');
        }
    });
}, 50));

// Console welcome message
console.log(`%c🚀 Welcome to Your Portfolio! 🚀
%c
%cThis portfolio was built with:
%c• HTML5, CSS3, JavaScript
%c• AOS (Animate On Scroll)
%c• Typed.js for animations
%c• EmailJS for contact form
%c• Responsive design
%c• Dark theme with gradients
%c
%cReady to make an impact! 💪
`, 
'color: #64ffda; font-size: 20px; font-weight: bold;',
'color: #8892b0; font-size: 14px;',
'color: #ffffff; font-size: 14px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #64ffda; font-size: 12px;',
'color: #00d4ff; font-size: 16px; font-weight: bold;'
);
