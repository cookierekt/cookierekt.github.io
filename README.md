# Personal Portfolio Website

A modern, responsive portfolio website built with HTML, CSS, and JavaScript. Features a beautiful design with smooth animations, mobile-friendly navigation, and interactive elements.

## Features

- ✨ **Modern Design**: Clean and professional layout with gradient backgrounds
- 📱 **Responsive**: Works perfectly on all devices (desktop, tablet, mobile)
- 🎨 **Smooth Animations**: CSS animations and JavaScript interactions
- 📧 **Contact Form**: Functional contact form with validation
- 🚀 **Fast Loading**: Optimized for performance
- 🎯 **SEO Friendly**: Semantic HTML structure
- 🌙 **Accessible**: Built with accessibility in mind

## Sections

1. **Hero Section**: Eye-catching introduction with call-to-action buttons
2. **About**: Personal information and statistics
3. **Projects**: Showcase of your work with technology tags
4. **Skills**: Technical skills organized by category
5. **Contact**: Contact information and form
6. **Footer**: Social media links and copyright

## Customization Guide

### 1. Personal Information

Edit the following in `index.html`:

```html
<!-- Replace "Your Name" with your actual name -->
<title>Your Name - Portfolio</title>
<a href="#home">Your Name</a>

<!-- Update hero section -->
<h1 class="hero-title">
    Hi, I'm <span class="highlight">Your Name</span>
</h1>
<p class="hero-subtitle">Full Stack Developer & Designer</p>

<!-- Update contact information -->
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, Country</span>
```

### 2. About Section

Update the about text and statistics in the About section:

```html
<div class="about-text">
    <p>Your personal description here...</p>
    <p>Additional information about yourself...</p>
</div>

<div class="about-stats">
    <div class="stat">
        <h3>3+</h3>
        <p>Years Experience</p>
    </div>
    <!-- Add more stats as needed -->
</div>
```

### 3. Projects

Replace the sample projects with your own:

```html
<div class="project-card">
    <div class="project-image">
        <i class="fas fa-laptop-code"></i>
    </div>
    <div class="project-content">
        <h3>Your Project Name</h3>
        <p>Project description...</p>
        <div class="project-tech">
            <span class="tech-tag">Technology 1</span>
            <span class="tech-tag">Technology 2</span>
        </div>
        <div class="project-links">
            <a href="your-demo-link" class="project-link">
                <i class="fas fa-external-link-alt"></i> Live Demo
            </a>
            <a href="your-github-link" class="project-link">
                <i class="fab fa-github"></i> Code
            </a>
        </div>
    </div>
</div>
```

### 4. Skills

Update the skills section with your actual skills:

```html
<div class="skill-category">
    <h3>Frontend</h3>
    <div class="skill-items">
        <div class="skill-item">
            <i class="fab fa-html5"></i>
            <span>HTML5</span>
        </div>
        <!-- Add more skills -->
    </div>
</div>
```

### 5. Social Media Links

Update the footer social links:

```html
<div class="footer-social">
    <a href="your-github-url" class="social-link">
        <i class="fab fa-github"></i>
    </a>
    <a href="your-linkedin-url" class="social-link">
        <i class="fab fa-linkedin"></i>
    </a>
    <!-- Add more social links -->
</div>
```

### 6. Colors and Styling

Customize the color scheme in `styles.css`:

```css
/* Primary colors */
--primary-color: #2563eb;
--secondary-color: #fbbf24;
--accent-color: #667eea;

/* Background colors */
--bg-primary: #ffffff;
--bg-secondary: #f8fafc;
```

## File Structure

```
portfolio/
├── index.html          # Main HTML file
├── styles.css          # CSS styles
├── script.js           # JavaScript functionality
└── README.md           # This file
```

## Deployment

### Option 1: GitHub Pages (Free)

1. Create a new repository on GitHub
2. Upload your files to the repository
3. Go to Settings > Pages
4. Select "Deploy from a branch"
5. Choose the main branch
6. Your site will be available at `https://yourusername.github.io/repository-name`

### Option 2: Netlify (Free)

1. Go to [netlify.com](https://netlify.com)
2. Drag and drop your project folder
3. Your site will be deployed instantly
4. You can add a custom domain later

### Option 3: Vercel (Free)

1. Go to [vercel.com](https://vercel.com)
2. Connect your GitHub account
3. Import your repository
4. Deploy with one click

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers

## Performance Tips

1. **Optimize Images**: Use WebP format and compress images
2. **Minimize CSS/JS**: Use minified versions for production
3. **Enable Caching**: Set up proper cache headers
4. **Use CDN**: Serve fonts and libraries from CDN

## Customization Tips

### Adding a Profile Picture

Replace the icon in the hero section:

```html
<div class="profile-image">
    <img src="path/to/your/image.jpg" alt="Your Name">
</div>
```

### Adding More Sections

You can easily add new sections by following the existing pattern:

```html
<section id="new-section" class="new-section">
    <div class="container">
        <h2 class="section-title">Section Title</h2>
        <!-- Your content here -->
    </div>
</section>
```

### Changing Fonts

Update the Google Fonts link in the HTML head:

```html
<link href="https://fonts.googleapis.com/css2?family=Your+Font:wght@300;400;500;600;700&display=swap" rel="stylesheet">
```

Then update the font-family in CSS:

```css
body {
    font-family: 'Your Font', sans-serif;
}
```

## Support

If you need help customizing your portfolio:

1. Check the comments in the code
2. Refer to this README
3. Look up CSS and JavaScript documentation
4. Test changes in a local environment first

## License

This project is open source and available under the [MIT License](LICENSE).

---

**Happy coding! 🚀** 