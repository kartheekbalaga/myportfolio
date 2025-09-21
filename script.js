// ------------------ AOS Animations ------------------
AOS.init({
    duration: 0,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    disable: true
});

// ------------------ EmailJS Initialization ------------------
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("50JHLZkVabanT4Ii-");
    console.log("EmailJS initialized successfully");

    // ------------------ Contact Form ------------------
    const contactForm = document.getElementById("contact-form");
    if(contactForm){
        contactForm.addEventListener("submit", function(e){
            e.preventDefault();

            const name = document.getElementById("name").value.trim();
            const email = document.getElementById("email").value.trim();
            const message = document.getElementById("message").value.trim();

            if(!name || !email || !message){
                updateStatus("Please fill all fields!", "error");
                return;
            }

            updateStatus("Sending message...", "success");

            emailjs.send("service_rlemr3r", "template_6hnljlh", { from_name: name, user_email: email, message: message })
            .then(res => {
                emailjs.send("service_rlemr3r", "template_8k0v7dt", { name: name, user_email: email, message: message })
                .then(res2 => {
                    updateStatus("Message sent! Auto-reply sent to you.", "success");
                    contactForm.reset();
                })
                .catch(err2 => {
                    updateStatus("Message sent! Auto-reply failed.", "success");
                    contactForm.reset();
                });
            })
            .catch(err => {
                updateStatus("Failed to send message.", "error");
            });
        });
    }
});

// ------------------ Update Status ------------------
function updateStatus(msg, type) {
    const s = document.getElementById("status");
    if(s){
        s.textContent = msg;
        s.className = "status " + type;
    }
}

// ------------------ Typed.js ------------------
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

// ------------------ Mobile Navigation ------------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');

if(hamburger && navMenu){
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    }));
}

// ------------------ Instant Anchor Navigation ------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            const offsetTop = target.offsetTop - 70; 
            window.scrollTo({ top: offsetTop, behavior: 'auto' });
        }
    });
});

// ------------------ Resume Download ------------------
const downloadBtn = document.getElementById('download-resume');
if(downloadBtn){
    downloadBtn.addEventListener('click', function(e) {
        e.preventDefault();
        const resumeUrl = 'path/to/your/resume.pdf'; 
        const link = document.createElement('a');
        link.href = resumeUrl;
        link.download = 'YourName_Resume.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        showNotification('Resume download started!');
    });
}

// ------------------ Parallax Hero ------------------
window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const hero = document.querySelector('.hero');
    if (hero) hero.style.transform = `translateY(${-0.5 * scrolled}px)`;
});

// ------------------ Skill Items Hover ------------------
document.querySelectorAll('.skill-item').forEach(item => {
    item.addEventListener('mouseenter', function() {
        this.style.transform = 'scale(1.1) translateY(-5px)';
    });
    item.addEventListener('mouseleave', function() {
        this.style.transform = 'scale(1) translateY(0)';
    });
});

// ------------------ Project Card Tilt ------------------
document.querySelectorAll('.project-card').forEach(card => {
    card.addEventListener('mousemove', function(e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        this.style.transform = `perspective(1000px) rotateX(${(y-centerY)/10}deg) rotateY(${(centerX-x)/10}deg) translateY(-10px)`;
    });
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) translateY(0)';
    });
});

// ------------------ Interest Card ------------------
window.selectInterest = function(card){
    document.querySelectorAll('.interest-card').forEach(c => c.classList.remove('selected'));
    card.classList.add('selected');
};

// ------------------ Fade-in Intersection Observer ------------------
const observerOptions = { threshold: 0.1, rootMargin: '0px 0px -50px 0px' };
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
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

// ------------------ Page Load Fade ------------------
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.5s ease';
    setTimeout(() => document.body.style.opacity = '1', 100);
});

// ------------------ Cursor Trail ------------------
let mouseX = 0, mouseY = 0;
document.addEventListener('mousemove', e => {
    mouseX = e.clientX; mouseY = e.clientY;
    if(Math.random() > 0.9) createCursorTrail();
});

function createCursorTrail(){
    const trail = document.createElement('div');
    trail.style.cssText = `
        position: fixed; width: 4px; height: 4px; background: #64ffda;
        border-radius: 50%; pointer-events: none; z-index: 9999;
        left: ${mouseX}px; top: ${mouseY}px; opacity: 0.8;
    `;
    document.body.appendChild(trail);
    let opacity = 0.8;
    const fadeInterval = setInterval(() => {
        opacity -= 0.02;
        trail.style.opacity = opacity;
        if(opacity <= 0){ clearInterval(fadeInterval); trail.remove(); }
    }, 20);
}

// ------------------ Active Nav Link CSS ------------------
const style = document.createElement('style');
style.textContent = `
.nav-link.active { color: #64ffda !important; }
.nav-link.active::after { width: 100% !important; }
.notification-content { display: flex; align-items: center; justify-content: space-between; gap: 1rem; }
.notification-close { background: none; border: none; color: inherit; font-size: 1.2rem; cursor: pointer; padding: 0; line-height: 1; }
.notification-close:hover { opacity: 0.7; }
`;
document.head.appendChild(style);

// ------------------ Throttle Scroll ------------------
function throttle(func, limit){
    let inThrottle;
    return function(){
        if(!inThrottle){
            func.apply(this, arguments);
            inThrottle = true;
            setTimeout(() => inThrottle = false, limit);
        }
    }
}

window.addEventListener('scroll', throttle(() => {
    const navbar = document.querySelector('.navbar');
    if(navbar){
        navbar.style.background = 'rgba(0,0,0,0.9)';
        navbar.style.boxShadow = '0 4px 20px rgba(100,255,218,0.1)';
        navbar.style.borderBottom = '2px solid rgba(100,255,218,0.3)';
    }

    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - 100;
        const sectionHeight = section.clientHeight;
        if(window.scrollY >= sectionTop && window.scrollY < sectionTop + sectionHeight){
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if(link.getAttribute('href') === `#${current}`) link.classList.add('active');
    });
}, 50));

// ------------------ Console Welcome ------------------
console.log(`%c🚀 Welcome to Your Portfolio! 🚀
%cThis portfolio was built with HTML, CSS, JS, AOS, Typed.js, EmailJS, Responsive Design, Dark Theme
%cReady to make an impact! 💪`,
'color:#64ffda;font-size:20px;font-weight:bold;',
'color:#8892b0;font-size:14px;',
'color:#00d4ff;font-size:16px;font-weight:bold;');
