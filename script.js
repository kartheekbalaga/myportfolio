// Detect if mobile
const isMobile = /iPhone|iPad|iPod|Android/i.test(navigator.userAgent);

// ------------------ AOS Animations ------------------
AOS.init({
    duration: 0,
    easing: 'ease-in-out',
    once: true,
    mirror: false,
    disable: isMobile // Disable AOS on mobile
});

// ------------------ EmailJS Initialization ------------------
document.addEventListener("DOMContentLoaded", function() {
    emailjs.init("50JHLZkVabanT4Ii-");
    console.log("EmailJS initialized successfully");

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
                emailjs.send("service_rlemr3r", "template_8k0v7dt", { name, user_email: email, message })
                .then(() => { updateStatus("Message sent! Auto-reply sent.", "success"); contactForm.reset(); })
                .catch(() => { updateStatus("Message sent! Auto-reply failed.", "success"); contactForm.reset(); });
            })
            .catch(() => { updateStatus("Failed to send message.", "error"); });
        });
    }
});

function updateStatus(msg, type) {
    const s = document.getElementById("status");
    if(s){ s.textContent = msg; s.className = "status " + type; }
}

// ------------------ Typed.js ------------------
if(!isMobile){ // Optional: skip typing effect on low-end phones
    new Typed('#typed-text', {
        strings: ['Web Developer 💻','Android Coder 📱','Placement-Ready 🎯','Problem Solver 🧠','Creative Designer 🎨'],
        typeSpeed: 40, backSpeed: 25, backDelay: 1500, loop: true, showCursor: true, cursorChar: '|'
    });
}

// ------------------ Mobile Navigation ------------------
const hamburger = document.querySelector('.hamburger');
const navMenu = document.querySelector('.nav-menu');
if(hamburger && navMenu){
    hamburger.addEventListener('click', () => { hamburger.classList.toggle('active'); navMenu.classList.toggle('active'); });
    document.querySelectorAll('.nav-link').forEach(n => n.addEventListener('click', () => { hamburger.classList.remove('active'); navMenu.classList.remove('active'); }));
}

// ------------------ Instant Anchor Navigation ------------------
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if(target){ window.scrollTo({ top: target.offsetTop-70, behavior:'auto' }); }
    });
});

// ------------------ Parallax Hero ------------------
if(!isMobile){ // Disable parallax on mobile
    window.addEventListener('scroll', () => {
        const hero = document.querySelector('.hero');
        if(hero) hero.style.transform = `translateY(${-0.5*window.pageYOffset}px)`;
    });
}

// ------------------ Skill Items Hover ------------------
if(!isMobile){
    document.querySelectorAll('.skill-item').forEach(item => {
        item.addEventListener('mouseenter', () => item.style.transform='scale(1.1) translateY(-5px)');
        item.addEventListener('mouseleave', () => item.style.transform='scale(1) translateY(0)');
    });
}

// ------------------ Project Card Tilt ------------------
if(!isMobile){
    document.querySelectorAll('.project-card').forEach(card => {
        card.addEventListener('mousemove', e => {
            const rect = card.getBoundingClientRect();
            card.style.transform = `perspective(1000px) rotateX(${(e.clientY-rect.top-rect.height/2)/10}deg) rotateY(${(rect.width/2-(e.clientX-rect.left))/10}deg) translateY(-10px)`;
        });
        card.addEventListener('mouseleave', () => { card.style.transform='perspective(1000px) rotateX(0) rotateY(0) translateY(0)'; });
    });
}

// ------------------ Cursor Trail ------------------
if(!isMobile){
    let mouseX=0, mouseY=0;
    document.addEventListener('mousemove', e => { mouseX=e.clientX; mouseY=e.clientY; if(Math.random()>0.9) createCursorTrail(); });
    function createCursorTrail(){
        const trail=document.createElement('div');
        trail.style.cssText=`position:fixed;width:4px;height:4px;background:#64ffda;border-radius:50%;pointer-events:none;z-index:9999;left:${mouseX}px;top:${mouseY}px;opacity:0.8`;
        document.body.appendChild(trail);
        let opacity=0.8;
        const fade=setInterval(()=>{ opacity-=0.02; trail.style.opacity=opacity; if(opacity<=0){ clearInterval(fade); trail.remove(); } },20);
    }
}

// ------------------ Intersection Observer ------------------
const observerOptions={threshold:0.1,rootMargin:'0px 0px -50px 0px'};
const observer=new IntersectionObserver(entries=>{
    entries.forEach(entry=>{
        if(entry.isIntersecting){ entry.target.style.opacity='1'; entry.target.style.transform='translateY(0)'; }
    });
}, observerOptions);
document.querySelectorAll('.skill-category, .project-card, .interest-card').forEach(el=>{
    el.style.opacity='0'; el.style.transform='translateY(30px)'; el.style.transition='opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// ------------------ Page Load Fade ------------------
window.addEventListener('load', ()=>{ document.body.style.opacity='0'; document.body.style.transition='opacity 0.5s ease'; setTimeout(()=>document.body.style.opacity='1',100); });
