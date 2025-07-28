<<<<<<< HEAD
# 🚀 Professional Portfolio Website

A modern, dark-themed portfolio website built with HTML, CSS, and JavaScript. Features smooth animations, responsive design, and professional styling perfect for showcasing your skills and projects.

## ✨ Features

- **Dark Theme Design** - Professional dark theme with radial gradient background
- **Smooth Animations** - AOS (Animate On Scroll) and Typed.js for engaging animations
- **Responsive Design** - Fully responsive across all devices
- **Interactive Elements** - Hover effects, tilt animations, and smooth transitions
- **Professional Sections** - About, Skills, Projects, Interests, Goals, and Contact
- **Mobile Navigation** - Hamburger menu for mobile devices
- **Contact Form** - Functional contact form with validation
- **Social Media Integration** - Easy to add your social media links
- **Download Resume** - One-click resume download functionality

## 🎯 Sections Included

1. **Hero Section** - Animated headline with Typed.js
2. **About Me** - Personal introduction and stats
3. **Skills** - Technical skills organized by category
4. **Projects** - Featured projects with descriptions and links
5. **Interests** - Areas of interest and passion
6. **Goals** - Career and personal goals with timeline
7. **Contact** - Contact information and form

## 🛠️ Technologies Used

- **HTML5** - Semantic markup
- **CSS3** - Modern styling with Flexbox and Grid
- **JavaScript (ES6+)** - Interactive functionality
- **AOS Library** - Animate On Scroll effects
- **Typed.js** - Typing animation for headlines
- **Font Awesome** - Icons
- **Google Fonts** - Typography

## 📦 Installation & Setup

1. **Clone or Download** the project files
2. **Open** `index.html` in your browser
3. **Customize** the content as needed (see customization guide below)

## 🎨 Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Update your name -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>

<!-- Update contact information -->
<p>your.email@example.com</p>
<p>Your City, Country</p>
<p>+1 234 567 8900</p>
```

### 2. Typed.js Animation

Modify the typing animation in `script.js`:

```javascript
const typed = new Typed('#typed-text', {
    strings: [
        'Web Developer 💻',
        'Android Coder 📱', 
        'Placement-Ready 🎯',
        'Problem Solver 🧠',
        'Creative Designer 🎨'
    ],
    // ... other options
});
```

### 3. Skills Section

Update your skills in `index.html`:

```html
<div class="skill-items">
    <div class="skill-item">
        <i class="fab fa-react"></i>
        <span>React</span>
    </div>
    <!-- Add more skills as needed -->
</div>
```

### 4. Projects

Replace the project cards with your own:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-project-icon"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span>Technology 1</span>
            <span>Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> View Code
            </a>
            <a href="your-live-demo" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
        </div>
    </div>
</div>
```

### 5. Social Media Links

Update your social media links in `index.html`:

```html
<div class="social-links">
    <a href="your-linkedin" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <a href="your-github" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <!-- Add more social links -->
</div>
```

### 6. Resume Download

Update the resume download functionality in `script.js`:

```javascript
const resumeUrl = 'path/to/your/actual/resume.pdf';
link.download = 'YourName_Resume.pdf';
```

### 7. Color Scheme

The main colors used are:
- Primary: `#64ffda` (Cyan)
- Secondary: `#00d4ff` (Blue)
- Background: `#0d1b2a` to `#000000` (Dark gradient)
- Text: `#ffffff` (White) and `#8892b0` (Gray)

You can customize these in `styles.css`.

## 📱 Responsive Design

The portfolio is fully responsive and includes:
- Mobile-first approach
- Hamburger menu for mobile devices
- Flexible grid layouts
- Optimized typography for all screen sizes

## 🚀 Performance Features

- **Optimized Animations** - Smooth 60fps animations
- **Lazy Loading** - Intersection Observer for performance
- **Throttled Events** - Optimized scroll event handling
- **Minimal Dependencies** - Only essential external libraries

## 🎭 Animation Features

- **AOS Animations** - Fade, slide, and zoom effects
- **Typed.js** - Typing animation for headlines
- **Hover Effects** - Interactive card animations
- **Parallax Effects** - Subtle background movement
- **Cursor Trail** - Optional mouse trail effect

## 📧 Contact Form

The contact form includes:
- Form validation
- Success/error notifications
- Email format validation
- Responsive design

## 🔧 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## 📄 License

This project is open source and available under the [MIT License](LICENSE).

## 🤝 Contributing

Feel free to fork this project and customize it for your needs. If you have suggestions or improvements, pull requests are welcome!

## 📞 Support

If you need help customizing your portfolio or have questions, feel free to reach out!

---

**Made with ❤️ for developers who want to stand out in their placements!** 
=======
# myportfolio
to check my portfolio
>>>>>>> 5ff71e305fe83d2ee4403a11f71ed1a57554a8b9
