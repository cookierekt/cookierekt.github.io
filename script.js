// Theme toggle will be initialized in DOMContentLoaded

// All UI initialization moved to DOMContentLoaded event

// Custom smooth scroll function with easing
function smoothScrollTo(targetPosition, duration) {
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    // Easing function (easeInOutCubic)
    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t * t + b;
        t -= 2;
        return c / 2 * (t * t * t + 2) + b;
    }

    requestAnimationFrame(animation);
}

// Enhanced Navbar Scroll Effects
let lastScrollTop = 0;
const navbar = document.querySelector('.navbar');

window.addEventListener('scroll', () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    
    // Add glass effect and shadow when scrolling
    if (scrollTop > 50) {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.backdropFilter = 'blur(20px)';
        navbar.style.boxShadow = 'var(--glass-shadow)';
        navbar.style.borderBottom = '1px solid var(--glass-border)';
    } else {
        navbar.style.background = 'var(--glass-bg)';
        navbar.style.backdropFilter = 'blur(10px)';
        navbar.style.boxShadow = 'none';
        navbar.style.borderBottom = '1px solid transparent';
    }
    
    // Hide/show navbar on scroll
    if (scrollTop > lastScrollTop && scrollTop > 200) {
        navbar.style.transform = 'translateY(-100%)';
    } else {
        navbar.style.transform = 'translateY(0)';
    }
    
    lastScrollTop = scrollTop;
});

// Scroll animations completely disabled for better text readability
// All intersection observer animations removed for perfect text legibility

// Enhanced Contact Form with Futuristic Feedback
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', function(e) {
        e.preventDefault();
        
        // Get form elements
        const nameInput = this.querySelector('input[type="text"]');
        const emailInput = this.querySelector('input[type="email"]');
        const subjectInput = this.querySelector('input[placeholder="Subject"]');
        const messageTextarea = this.querySelector('textarea');
        const submitButton = this.querySelector('button[type="submit"]');
        
        // Get form values
        const name = nameInput.value.trim();
        const email = emailInput.value.trim();
        const subject = subjectInput.value.trim();
        const message = messageTextarea.value.trim();
        
        // Enhanced validation
        if (!name || !email || !subject || !message) {
            showFuturisticNotification('⚠️ Please fill in all fields', 'error');
            shakeInvalidFields([nameInput, emailInput, subjectInput, messageTextarea]);
            return;
        }
        
        // Advanced email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            showFuturisticNotification('⚠️ Please enter a valid email address', 'error');
            shakeInvalidFields([emailInput]);
            return;
        }
        
        // Loading state
        submitButton.style.transform = 'scale(0.95)';
        submitButton.innerHTML = '<i class="fas fa-spinner fa-spin"></i> Transmitting...';
        submitButton.disabled = true;
        
        // Simulate form submission with futuristic effect
        setTimeout(() => {
            showFuturisticNotification('🚀 Message transmitted successfully! I\'ll respond soon.', 'success');
            this.reset();
            
            // Reset button
            submitButton.innerHTML = 'Send Message';
            submitButton.disabled = false;
            submitButton.style.transform = 'scale(1)';
            
            // Add success effect to form
            this.style.transform = 'scale(1.02)';
            this.style.boxShadow = '0 0 50px rgba(0, 255, 136, 0.3)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.boxShadow = 'var(--glass-shadow)';
            }, 300);
            
        }, 1500);
    });
}

// Shake animation for invalid fields
function shakeInvalidFields(fields) {
    fields.forEach(field => {
        if (!field.value.trim()) {
            field.style.animation = 'shake 0.5s ease-in-out';
            field.style.borderColor = 'var(--neon-pink)';
            field.style.boxShadow = '0 0 20px rgba(255, 0, 110, 0.3)';
            
            setTimeout(() => {
                field.style.animation = '';
                field.style.borderColor = 'var(--glass-border)';
                field.style.boxShadow = '';
            }, 500);
        }
    });
}

// Enhanced Futuristic Notification System
function showFuturisticNotification(message, type = 'info') {
    // Remove existing notifications
    const existingNotifications = document.querySelectorAll('.futuristic-notification');
    existingNotifications.forEach(notification => {
        notification.style.transform = 'translateX(400px) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
    
    // Create notification element
    const notification = document.createElement('div');
    notification.className = `futuristic-notification notification-${type}`;
    
    // Choose colors and icons based on type
    let bgColor, borderColor, icon;
    switch(type) {
        case 'success':
            bgColor = 'linear-gradient(135deg, rgba(0, 255, 136, 0.9), rgba(0, 212, 255, 0.8))';
            borderColor = 'var(--neon-green)';
            icon = '✅';
            break;
        case 'error':
            bgColor = 'linear-gradient(135deg, rgba(255, 0, 110, 0.9), rgba(182, 36, 255, 0.8))';
            borderColor = 'var(--neon-pink)';
            icon = '❌';
            break;
        default:
            bgColor = 'linear-gradient(135deg, rgba(0, 212, 255, 0.9), rgba(102, 126, 234, 0.8))';
            borderColor = 'var(--neon-blue)';
            icon = 'ℹ️';
    }
    
    notification.innerHTML = `
        <div class="notification-content">
            <div class="notification-icon">${icon}</div>
            <span class="notification-message">${message}</span>
            <button class="notification-close">&times;</button>
        </div>
        <div class="notification-progress"></div>
    `;
    
    // Apply futuristic styles
    notification.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${bgColor};
        backdrop-filter: blur(20px);
        color: white;
        padding: 0;
        border-radius: 15px;
        box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3), 0 0 30px ${borderColor}50;
        z-index: 10000;
        transform: translateX(400px) scale(0.8);
        transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
        max-width: 400px;
        border: 2px solid ${borderColor};
        overflow: hidden;
        font-family: 'Space Grotesk', sans-serif;
    `;
    
    // Style the content
    const content = notification.querySelector('.notification-content');
    content.style.cssText = `
        display: flex;
        align-items: center;
        gap: 1rem;
        padding: 1.5rem 2rem;
        position: relative;
    `;
    
    const iconEl = notification.querySelector('.notification-icon');
    iconEl.style.cssText = `
        font-size: 1.5rem;
        filter: drop-shadow(0 0 10px white);
    `;
    
    const messageEl = notification.querySelector('.notification-message');
    messageEl.style.cssText = `
        flex: 1;
        font-weight: 500;
        font-size: 1rem;
        text-shadow: 0 0 10px rgba(255, 255, 255, 0.5);
    `;
    
    const closeBtn = notification.querySelector('.notification-close');
    closeBtn.style.cssText = `
        background: none;
        border: none;
        color: white;
        font-size: 1.5rem;
        cursor: pointer;
        width: 30px;
        height: 30px;
        display: flex;
        align-items: center;
        justify-content: center;
        border-radius: 50%;
        transition: all 0.3s ease;
        filter: drop-shadow(0 0 5px white);
    `;
    
    // Style the progress bar
    const progressBar = notification.querySelector('.notification-progress');
    progressBar.style.cssText = `
        position: absolute;
        bottom: 0;
        left: 0;
        height: 3px;
        background: linear-gradient(90deg, white, rgba(255, 255, 255, 0.7));
        width: 100%;
        transform: scaleX(1);
        transform-origin: left;
        animation: shrinkProgress 5s linear;
        box-shadow: 0 0 10px white;
    `;
    
    // Add to page
    document.body.appendChild(notification);
    
    // Animate in
    setTimeout(() => {
        notification.style.transform = 'translateX(0) scale(1)';
    }, 100);
    
    // Close button functionality
    closeBtn.addEventListener('click', () => {
        notification.style.transform = 'translateX(400px) scale(0.8)';
        notification.style.opacity = '0';
        setTimeout(() => notification.remove(), 300);
    });
    
    closeBtn.addEventListener('mouseenter', () => {
        closeBtn.style.background = 'rgba(255, 255, 255, 0.2)';
        closeBtn.style.transform = 'scale(1.2)';
    });
    
    closeBtn.addEventListener('mouseleave', () => {
        closeBtn.style.background = 'none';
        closeBtn.style.transform = 'scale(1)';
    });
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (notification.parentNode) {
            notification.style.transform = 'translateX(400px) scale(0.8)';
            notification.style.opacity = '0';
            setTimeout(() => notification.remove(), 300);
        }
    }, 5000);
}

// Add CSS for animations
const style = document.createElement('style');
style.textContent = `
    @keyframes shake {
        0%, 100% { transform: translateX(0); }
        25% { transform: translateX(-10px); }
        75% { transform: translateX(10px); }
    }
    
    @keyframes shrinkProgress {
        0% { transform: scaleX(1); }
        100% { transform: scaleX(0); }
    }
    
    .futuristic-notification {
        animation: slideInRight 0.4s cubic-bezier(0.4, 0, 0.2, 1);
    }
    
    @keyframes slideInRight {
        0% {
            transform: translateX(400px) scale(0.8);
            opacity: 0;
        }
        100% {
            transform: translateX(0) scale(1);
            opacity: 1;
        }
    }
`;
document.head.appendChild(style);

// Magnetic Cursor Effect for Interactive Elements
let cursor = null;
let cursorDot = null;

function initMagneticCursor() {
    // Create custom cursor elements
    cursor = document.createElement('div');
    cursorDot = document.createElement('div');
    
    cursor.className = 'magnetic-cursor';
    cursorDot.className = 'magnetic-cursor-dot';
    
    cursor.style.cssText = `
        width: 40px;
        height: 40px;
        border: 2px solid var(--neon-blue);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 9999;
        transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
        backdrop-filter: blur(5px);
        mix-blend-mode: difference;
    `;
    
    cursorDot.style.cssText = `
        width: 6px;
        height: 6px;
        background: var(--neon-blue);
        border-radius: 50%;
        position: fixed;
        top: 0;
        left: 0;
        pointer-events: none;
        z-index: 10000;
        transition: all 0.1s ease;
        box-shadow: 0 0 20px var(--neon-blue);
    `;
    
    document.body.appendChild(cursor);
    document.body.appendChild(cursorDot);
    
    // Hide default cursor
    document.body.style.cursor = 'none';
    
    let mouseX = 0, mouseY = 0;
    let cursorX = 0, cursorY = 0;
    let dotX = 0, dotY = 0;
    
    // Track mouse movement
    document.addEventListener('mousemove', (e) => {
        mouseX = e.clientX;
        mouseY = e.clientY;
    });
    
    // Animate cursor with lerp
    function animateCursor() {
        // Smooth following for main cursor
        cursorX += (mouseX - cursorX) * 0.1;
        cursorY += (mouseY - cursorY) * 0.1;
        
        // Faster following for dot
        dotX += (mouseX - dotX) * 0.3;
        dotY += (mouseY - dotY) * 0.3;
        
        cursor.style.transform = `translate(${cursorX - 20}px, ${cursorY - 20}px)`;
        cursorDot.style.transform = `translate(${dotX - 3}px, ${dotY - 3}px)`;
        
        requestAnimationFrame(animateCursor);
    }
    animateCursor();
    
    // Magnetic effect for interactive elements
    const magneticElements = document.querySelectorAll('.btn, .nav-link, .project-card, .skill-item, .social-link, .tech-tag');
    
    magneticElements.forEach(el => {
        el.addEventListener('mouseenter', () => {
            cursor.style.width = '60px';
            cursor.style.height = '60px';
            cursor.style.borderColor = 'var(--neon-purple)';
            cursor.style.background = 'rgba(182, 36, 255, 0.1)';
            cursorDot.style.background = 'var(--neon-purple)';
            cursorDot.style.boxShadow = '0 0 20px var(--neon-purple)';
        });
        
        el.addEventListener('mouseleave', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.borderColor = 'var(--neon-blue)';
            cursor.style.background = 'transparent';
            cursorDot.style.background = 'var(--neon-blue)';
            cursorDot.style.boxShadow = '0 0 20px var(--neon-blue)';
        });
    });
    
    // Special effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(btn => {
        btn.addEventListener('mouseenter', () => {
            cursor.style.width = '80px';
            cursor.style.height = '80px';
            cursor.style.background = 'rgba(0, 212, 255, 0.1)';
            cursor.style.borderColor = 'var(--neon-green)';
            cursorDot.style.width = '10px';
            cursorDot.style.height = '10px';
            cursorDot.style.background = 'var(--neon-green)';
        });
        
        btn.addEventListener('mouseleave', () => {
            cursor.style.width = '40px';
            cursor.style.height = '40px';
            cursor.style.background = 'transparent';
            cursor.style.borderColor = 'var(--neon-blue)';
            cursorDot.style.width = '6px';
            cursorDot.style.height = '6px';
            cursorDot.style.background = 'var(--neon-blue)';
        });
    });
}

// Initialize magnetic cursor on desktop only
if (window.innerWidth > 768) {
    initMagneticCursor();
}

// Parallax Effect for Hero Section
const heroSection = document.querySelector('.hero');
const profileCard = document.querySelector('.profile-card');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    const parallaxSpeed = 0.5;
    
    if (heroSection) {
        heroSection.style.transform = `translateY(${scrolled * parallaxSpeed}px)`;
    }
    
    if (profileCard) {
        profileCard.style.transform = `translateY(${scrolled * 0.3}px) scale(${1 + scrolled * 0.0001})`;
    }
});

// Typing Effect for Hero Subtitle (Enhanced)
function typeWriter(element, text, speed = 100, callback = null) {
    let i = 0;
    element.textContent = '';
    element.style.borderRight = '3px solid var(--neon-blue)';
    
    function type() {
        if (i < text.length) {
            element.textContent += text.charAt(i);
            i++;
            setTimeout(type, speed + Math.random() * 50); // Add slight randomness
        } else {
            // Blinking cursor effect
            setInterval(() => {
                element.style.borderRightColor = element.style.borderRightColor === 'transparent' 
                    ? 'var(--neon-blue)' : 'transparent';
            }, 750);
            
            if (callback) callback();
        }
    }
    type();
}

// Initialize typing effect when page loads
document.addEventListener('DOMContentLoaded', () => {
    const heroSubtitle = document.querySelector('.hero-subtitle');
    if (heroSubtitle) {
        const originalText = heroSubtitle.textContent;
        setTimeout(() => {
            typeWriter(heroSubtitle, originalText, 80);
        }, 1000);
    }
});

// Easter Egg: Konami Code for Special Effect
let konamiCode = [];
const konamiSequence = [
    'ArrowUp', 'ArrowUp', 'ArrowDown', 'ArrowDown',
    'ArrowLeft', 'ArrowRight', 'ArrowLeft', 'ArrowRight',
    'KeyB', 'KeyA'
];

document.addEventListener('keydown', (e) => {
    konamiCode.push(e.code);
    
    if (konamiCode.length > konamiSequence.length) {
        konamiCode.shift();
    }
    
    if (JSON.stringify(konamiCode) === JSON.stringify(konamiSequence)) {
        activateMatrixMode();
        showFuturisticNotification('🎮 Matrix Mode Activated! Welcome to the future, Neo.', 'success');
        konamiCode = [];
    }
});

// Matrix Mode Easter Egg
function activateMatrixMode() {
    const matrix = document.createElement('div');
    matrix.style.cssText = `
        position: fixed;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        z-index: -2;
        background: radial-gradient(circle, rgba(0, 255, 0, 0.1), rgba(0, 100, 0, 0.05));
        pointer-events: none;
    `;
    
    document.body.appendChild(matrix);
    
    // Create falling matrix characters
    for (let i = 0; i < 50; i++) {
        createMatrixColumn();
    }
    
    // Remove after 10 seconds
    setTimeout(() => {
        matrix.remove();
        document.querySelectorAll('.matrix-column').forEach(col => col.remove());
    }, 10000);
}

function createMatrixColumn() {
    const column = document.createElement('div');
    column.className = 'matrix-column';
    column.style.cssText = `
        position: fixed;
        top: -100px;
        left: ${Math.random() * window.innerWidth}px;
        font-family: 'JetBrains Mono', monospace;
        font-size: 14px;
        color: #00ff00;
        text-shadow: 0 0 10px #00ff00;
        z-index: -1;
        pointer-events: none;
        animation: matrixFall ${3 + Math.random() * 3}s linear infinite;
    `;
    
    // Add random characters
    const chars = '01アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホマミムメモヤユヨラリルレロワヲン';
    let columnText = '';
    for (let i = 0; i < 20; i++) {
        columnText += chars[Math.floor(Math.random() * chars.length)] + '<br>';
    }
    column.innerHTML = columnText;
    
    document.body.appendChild(column);
}

// Add matrix animation CSS
const matrixStyle = document.createElement('style');
matrixStyle.textContent = `
    @keyframes matrixFall {
        0% {
            transform: translateY(-100vh);
            opacity: 1;
        }
        100% {
            transform: translateY(100vh);
            opacity: 0;
        }
    }
`;
document.head.appendChild(matrixStyle);

// Performance monitoring
function monitorPerformance() {
    if ('performance' in window) {
        window.addEventListener('load', () => {
            setTimeout(() => {
                const perfData = performance.getEntriesByType('navigation')[0];
                const loadTime = perfData.loadEventEnd - perfData.loadEventStart;
                
                if (loadTime > 3000) {
                    console.warn('⚡ Page load time is slow. Consider optimizing animations and images.');
                }
            }, 0);
        });
    }
}

monitorPerformance();

// Terminal Loading Screen
function initTerminalLoader() {
    const loader = document.getElementById('terminal-loader');
    const countdownEl = document.getElementById('countdown');
    const continueText = document.getElementById('continue-text');
    
    if (!loader) {
        console.error('Terminal loader not found!');
        return;
    }
    
    console.log('Terminal loader initialized');
    
    // Function to hide loader
    function hideLoader() {
        console.log('Hiding terminal loader...');
        
        // Play terminal completion sound
        if (window.portfolioSounds) {
            window.portfolioSounds.playTerminalSound('complete');
        }
        
        loader.classList.add('fade-out');
        
        setTimeout(() => {
            loader.style.display = 'none';
            console.log('Terminal loader hidden');
            initAllAnimations();
        }, 500);
    }
    
    // Hide immediately if user preference or debugging
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('skip-loader') === 'true') {
        hideLoader();
        return;
    }
    
    // Countdown functionality
    let countdown = 2;
    const countdownTimer = setInterval(() => {
        if (countdownEl) {
            countdownEl.textContent = countdown;
        }
        countdown--;
        
        if (countdown < 0) {
            clearInterval(countdownTimer);
            hideLoader();
        }
    }, 1000);
    
    // Allow manual dismissal by clicking anywhere on the loader
    loader.addEventListener('click', () => {
        console.log('Loader clicked - hiding');
        clearInterval(countdownTimer);
        if (continueText) {
            continueText.innerHTML = 'Click anywhere or press any key to continue...';
        }
        hideLoader();
    });
    
    // Also hide on any key press
    document.addEventListener('keydown', function onKeyPress(e) {
        console.log('Key pressed - hiding loader');
        clearInterval(countdownTimer);
        hideLoader();
        document.removeEventListener('keydown', onKeyPress);
    });
}

// Floating Navigation with Scroll Tracking
function initFloatingNav() {
    const floatingNav = document.getElementById('floating-nav');
    const indicators = document.querySelectorAll('.nav-indicator');
    const sections = document.querySelectorAll('section');
    
    // Add click handlers
    indicators.forEach(indicator => {
        indicator.addEventListener('click', () => {
            const sectionId = indicator.dataset.section;
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
                playClickSound();
            }
        });
    });
    
    // Update active indicator on scroll
    const observerOptions = {
        threshold: 0.6,
        rootMargin: '-50px 0px'
    };
    
    const navObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                indicators.forEach(ind => ind.classList.remove('active'));
                const activeIndicator = document.querySelector(`[data-section="${entry.target.id}"]`);
                if (activeIndicator) {
                    activeIndicator.classList.add('active');
                }
            }
        });
    }, observerOptions);
    
    sections.forEach(section => {
        navObserver.observe(section);
    });
}

// Resume Download with Progress Animation
function initResumeDownload() {
    const resumeBtn = document.querySelector('.resume-btn');
    const progressBar = document.querySelector('.download-progress');
    
    resumeBtn.addEventListener('click', () => {
        resumeBtn.classList.add('downloading');
        resumeBtn.innerHTML = '<i class="fas fa-spinner fa-spin"></i><span>Downloading...</span>';
        
        playDownloadSound();
        
        setTimeout(() => {
            resumeBtn.classList.remove('downloading');
            resumeBtn.innerHTML = '<i class="fas fa-check"></i><span>Downloaded!</span>';
            
            setTimeout(() => {
                resumeBtn.innerHTML = '<i class="fas fa-download"></i><span>Download Resume</span>';
            }, 2000);
        }, 2000);
    });
}

// Enhanced Skill Progress Bars with Intersection Observer
function initSkillBars() {
    const skillItems = document.querySelectorAll('.skill-item');
    const skillObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const skillBar = entry.target.querySelector('.skill-bar');
                const width = skillBar.dataset.width;
                
                setTimeout(() => {
                    skillBar.style.width = width + '%';
                    
                    // Animate percentage counter
                    const percentage = entry.target.querySelector('.skill-percentage');
                    animateCounter(percentage, 0, parseInt(width), 2000);
                }, 300);
            }
        });
    }, { threshold: 0.5 });
    
    skillItems.forEach(item => {
        skillObserver.observe(item);
    });
}

// Counter Animation
function animateCounter(element, start, end, duration) {
    const startTime = performance.now();
    
    function updateCounter(currentTime) {
        const elapsed = currentTime - startTime;
        const progress = Math.min(elapsed / duration, 1);
        
        const current = Math.floor(start + (end - start) * progress);
        element.textContent = current + '%';
        
        if (progress < 1) {
            requestAnimationFrame(updateCounter);
        }
    }
    
    requestAnimationFrame(updateCounter);
}

// 3D Tilt Effects for Cards
function init3DTiltEffects() {
    const tiltElements = document.querySelectorAll('.project-card, .stat');
    
    tiltElements.forEach(element => {
        element.addEventListener('mousemove', (e) => {
            const rect = element.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const centerX = rect.width / 2;
            const centerY = rect.height / 2;
            
            const rotateX = (y - centerY) / 10;
            const rotateY = (centerX - x) / 10;
            
            element.style.setProperty('--rotate-x', rotateX + 'deg');
            element.style.setProperty('--rotate-y', rotateY + 'deg');
            
            element.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
        });
    });
}

// Expandable Project Cards
function initExpandableProjects() {
    const projectCards = document.querySelectorAll('.project-card.expandable');
    
    projectCards.forEach(card => {
        const expandBtn = card.querySelector('.expand-btn');
        const overlay = card.querySelector('.project-detail-overlay');
        const closeBtn = overlay.querySelector('.close-detail');
        
        expandBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            overlay.classList.add('active');
            document.body.style.overflow = 'hidden';
            playExpandSound();
        });
        
        closeBtn.addEventListener('click', () => {
            overlay.classList.remove('active');
            document.body.style.overflow = 'auto';
            playCloseSound();
        });
        
        overlay.addEventListener('click', (e) => {
            if (e.target === overlay) {
                overlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                playCloseSound();
            }
        });
    });
    
    // ESC key to close overlay
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            const activeOverlay = document.querySelector('.project-detail-overlay.active');
            if (activeOverlay) {
                activeOverlay.classList.remove('active');
                document.body.style.overflow = 'auto';
                playCloseSound();
            }
        }
    });
}

// Advanced Particle System (Simple Version)
function initAdvancedParticles() {
    const particlesContainer = document.getElementById('particles-background');
    
    // Create floating particles
    for (let i = 0; i < 30; i++) {
        createFloatingParticle(particlesContainer);
    }
}

function createFloatingParticle(container) {
    const particle = document.createElement('div');
    particle.style.cssText = `
        position: absolute;
        width: ${Math.random() * 4 + 2}px;
        height: ${Math.random() * 4 + 2}px;
        background: var(--neon-blue);
        border-radius: 50%;
        pointer-events: none;
        box-shadow: 0 0 10px var(--neon-blue);
        animation: floatParticle ${20 + Math.random() * 20}s linear infinite;
        left: ${Math.random() * 100}%;
        top: ${Math.random() * 100}%;
        opacity: ${Math.random() * 0.5 + 0.2};
    `;
    
    container.appendChild(particle);
    
    // Remove and recreate after animation
    setTimeout(() => {
        particle.remove();
        createFloatingParticle(container);
    }, (20 + Math.random() * 20) * 1000);
}

// Sound Effects System
const audioContext = typeof AudioContext !== 'undefined' ? new AudioContext() : null;

function createBeep(frequency = 800, duration = 200, volume = 0.1) {
    if (!audioContext) return;
    
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);
    
    oscillator.frequency.setValueAtTime(frequency, audioContext.currentTime);
    oscillator.type = 'sine';
    
    gainNode.gain.setValueAtTime(0, audioContext.currentTime);
    gainNode.gain.linearRampToValueAtTime(volume, audioContext.currentTime + 0.01);
    gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + duration / 1000);
    
    oscillator.start(audioContext.currentTime);
    oscillator.stop(audioContext.currentTime + duration / 1000);
}

function playClickSound() {
    createBeep(1200, 150, 0.1);
    showSoundIndicator('🔊 Click');
}

function playExpandSound() {
    createBeep(800, 300, 0.15);
    showSoundIndicator('🚀 Expand');
}

function playCloseSound() {
    createBeep(600, 200, 0.1);
    showSoundIndicator('❌ Close');
}

function playDownloadSound() {
    // Create a more complex sound for download
    for (let i = 0; i < 3; i++) {
        setTimeout(() => {
            createBeep(400 + i * 200, 100, 0.08);
        }, i * 100);
    }
    showSoundIndicator('📥 Download');
}

function showSoundIndicator(text) {
    const indicator = document.createElement('div');
    indicator.className = 'sound-indicator';
    indicator.textContent = text;
    
    document.body.appendChild(indicator);
    
    setTimeout(() => {
        indicator.remove();
    }, 500);
}

// Micro-interactions and Haptic Feedback Simulation
function addMicroInteractions() {
    const interactiveElements = document.querySelectorAll('.btn, .nav-link, .tech-tag, .social-link, .skill-item');
    
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            element.style.transform = element.style.transform + ' scale(1.02)';
        });
        
        element.addEventListener('mouseleave', () => {
            element.style.transform = element.style.transform.replace(' scale(1.02)', '');
        });
        
        element.addEventListener('click', () => {
            if (audioContext && audioContext.state === 'suspended') {
                audioContext.resume();
            }
            
            // Visual feedback
            element.style.transform = element.style.transform + ' scale(0.98)';
            setTimeout(() => {
                element.style.transform = element.style.transform.replace(' scale(0.98)', '');
            }, 150);
        });
    });
}

// Enhanced Page Visibility API for Performance
function initPerformanceOptimizations() {
    let isVisible = true;
    
    document.addEventListener('visibilitychange', () => {
        isVisible = !document.hidden;
        
        // Pause/resume animations based on visibility
        const animatedElements = document.querySelectorAll('*');
        animatedElements.forEach(el => {
            if (!isVisible) {
                el.style.animationPlayState = 'paused';
            } else {
                el.style.animationPlayState = 'running';
            }
        });
    });
}

// Initialize all animations after loading
function initAllAnimations() {
    initFloatingNav();
    initResumeDownload();
    initSkillBars();
    init3DTiltEffects();
    initExpandableProjects();
    initAdvancedParticles();
    addMicroInteractions();
    initPerformanceOptimizations();
}

// Particle Cursor Trail System
class ParticleTrail {
    constructor() {
        this.particles = [];
        this.mousePos = { x: 0, y: 0 };
        this.colors = ['#00d4ff', '#b624ff', '#00ff88', '#ff006e', '#ffcc00'];
        this.init();
    }
    
    init() {
        // Track mouse position
        document.addEventListener('mousemove', (e) => {
            this.mousePos.x = e.clientX;
            this.mousePos.y = e.clientY;
            this.createParticle();
        });
        
        this.animate();
    }
    
    createParticle() {
        // Get current section to determine particle color
        const currentSection = this.getCurrentSection();
        const colorIndex = this.getSectionColorIndex(currentSection);
        
        const particle = {
            x: this.mousePos.x,
            y: this.mousePos.y,
            vx: (Math.random() - 0.5) * 2,
            vy: (Math.random() - 0.5) * 2,
            life: 1,
            decay: 0.02,
            size: Math.random() * 3 + 1,
            color: this.colors[colorIndex],
            element: this.createParticleElement()
        };
        
        this.particles.push(particle);
        document.body.appendChild(particle.element);
        
        // Limit particles to prevent performance issues
        if (this.particles.length > 30) {
            this.removeParticle(0);
        }
    }
    
    createParticleElement() {
        const particle = document.createElement('div');
        particle.style.cssText = `
            position: fixed;
            width: 4px;
            height: 4px;
            border-radius: 50%;
            pointer-events: none;
            z-index: 9999;
            transition: opacity 0.1s ease;
        `;
        return particle;
    }
    
    getCurrentSection() {
        const sections = document.querySelectorAll('section');
        const scrollPos = window.scrollY + window.innerHeight / 2;
        
        for (let section of sections) {
            const rect = section.getBoundingClientRect();
            const sectionTop = rect.top + window.scrollY;
            const sectionBottom = sectionTop + rect.height;
            
            if (scrollPos >= sectionTop && scrollPos <= sectionBottom) {
                return section.id;
            }
        }
        return 'home';
    }
    
    getSectionColorIndex(section) {
        const sectionColors = {
            'home': 0,      // neon-blue
            'about': 1,     // neon-purple  
            'experience': 2, // neon-green
            'skills': 3,    // neon-pink
            'projects': 4,  // neon-yellow
            'contact': 0    // neon-blue
        };
        return sectionColors[section] || 0;
    }
    
    animate() {
        this.particles.forEach((particle, index) => {
            // Update particle physics
            particle.x += particle.vx;
            particle.y += particle.vy;
            particle.life -= particle.decay;
            
            // Update visual properties
            particle.element.style.left = particle.x + 'px';
            particle.element.style.top = particle.y + 'px';
            particle.element.style.backgroundColor = particle.color;
            particle.element.style.opacity = particle.life;
            particle.element.style.transform = `scale(${particle.life})`;
            particle.element.style.boxShadow = `0 0 ${particle.size * 2}px ${particle.color}`;
            
            // Remove dead particles
            if (particle.life <= 0) {
                this.removeParticle(index);
            }
        });
        
        requestAnimationFrame(() => this.animate());
    }
    
    removeParticle(index) {
        const particle = this.particles[index];
        if (particle && particle.element && particle.element.parentNode) {
            particle.element.parentNode.removeChild(particle.element);
        }
        this.particles.splice(index, 1);
    }
}

// Typewriter Effect System
class Typewriter {
    constructor(element, phrases, options = {}) {
        this.element = element;
        this.phrases = phrases;
        this.currentPhraseIndex = 0;
        this.currentCharIndex = 0;
        this.isDeleting = false;
        this.typeSpeed = options.typeSpeed || 100;
        this.deleteSpeed = options.deleteSpeed || 50;
        this.pauseTime = options.pauseTime || 2000;
        
        this.init();
    }
    
    init() {
        this.type();
    }
    
    type() {
        const currentPhrase = this.phrases[this.currentPhraseIndex];
        
        if (this.isDeleting) {
            // Delete characters
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex - 1);
            this.currentCharIndex--;
            
            if (this.currentCharIndex === 0) {
                this.isDeleting = false;
                this.currentPhraseIndex = (this.currentPhraseIndex + 1) % this.phrases.length;
                setTimeout(() => this.type(), 500);
                return;
            }
        } else {
            // Type characters
            this.element.textContent = currentPhrase.substring(0, this.currentCharIndex + 1);
            this.currentCharIndex++;
            
            if (this.currentCharIndex === currentPhrase.length) {
                setTimeout(() => {
                    this.isDeleting = true;
                    this.type();
                }, this.pauseTime);
                return;
            }
        }
        
        const speed = this.isDeleting ? this.deleteSpeed : this.typeSpeed;
        setTimeout(() => this.type(), speed);
    }
}

// Sound Effects System
class SoundSystem {
    constructor() {
        this.enabled = localStorage.getItem('soundEnabled') === 'true'; // Default to OFF
        this.audioContext = null;
        this.lastSoundTime = {};
        this.playedElements = new Set(); // Track which elements have already played sounds
        this.soundCooldowns = {
            hover: 500,    // 500ms cooldown between hover sounds
            click: 200,    // 200ms cooldown between clicks
            select: 300,   // 300ms cooldown for selections
            toggle: 100,   // 100ms cooldown for toggles
            typing: 50     // 50ms cooldown for typing
        };
        this.init();
    }
    
    init() {
        // Initialize Web Audio API
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            this.audioContext = new (AudioContext || webkitAudioContext)();
        }
        
        this.createToggleButton();
        this.attachEventListeners();
    }
    
    createToggleButton() {
        const toggleButton = document.createElement('div');
        toggleButton.id = 'sound-toggle';
        toggleButton.innerHTML = `<i class="fas fa-volume-${this.enabled ? 'up' : 'mute'}"></i>`;
        toggleButton.style.cssText = `
            position: fixed;
            top: 20px;
            right: 100px;
            width: 60px;
            height: 60px;
            background: rgba(0, 212, 255, 0.1);
            backdrop-filter: blur(20px);
            border: 2px solid var(--neon-blue);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            z-index: 10002;
            color: var(--neon-blue);
            font-size: 1.5rem;
            transition: all 0.3s ease;
            box-shadow: 0 0 20px rgba(0, 212, 255, 0.3), var(--glass-shadow);
        `;
        
        toggleButton.addEventListener('click', () => this.toggle());
        toggleButton.addEventListener('mouseenter', () => {
            toggleButton.style.transform = 'scale(1.1)';
            toggleButton.style.borderColor = 'var(--neon-blue)';
            this.playSound('hover');
        });
        toggleButton.addEventListener('mouseleave', () => {
            toggleButton.style.transform = 'scale(1)';
            toggleButton.style.borderColor = 'var(--glass-border)';
        });
        
        document.body.appendChild(toggleButton);
        this.toggleButton = toggleButton;
        
        // Debug: log that button was created
        console.log('🔊 Sound toggle button created and added to page');
    }
    
    toggle() {
        this.enabled = !this.enabled;
        localStorage.setItem('soundEnabled', this.enabled);
        
        const icon = this.toggleButton.querySelector('i');
        icon.className = `fas fa-volume-${this.enabled ? 'up' : 'mute'}`;
        
        this.playSound('toggle');
        
        // Visual feedback
        this.toggleButton.style.background = this.enabled ? 
            'rgba(0, 212, 255, 0.2)' : 'var(--glass-bg)';
        
        // Update button appearance on creation
        setTimeout(() => {
            this.toggleButton.style.background = this.enabled ? 
                'rgba(0, 212, 255, 0.2)' : 'var(--glass-bg)';
        }, 100);
    }
    
    attachEventListeners() {
        // Theme toggle sound
        const themeToggle = document.querySelector('.theme-toggle');
        if (themeToggle) {
            themeToggle.addEventListener('click', () => this.playSound('toggle'));
        }
        
        // Sound toggle - only for the sound button itself  
        const soundToggle = document.getElementById('sound-toggle');
        if (soundToggle) {
            soundToggle.addEventListener('click', () => this.playSound('toggle'));
        }
        
        // Add some sounds back for testing when enabled
        document.querySelectorAll('.btn').forEach(btn => {
            btn.addEventListener('click', () => this.playSound('click'));
        });
        
        // Navigation sounds
        document.querySelectorAll('.nav-link').forEach(link => {
            link.addEventListener('click', () => this.playSound('select'));
        });
        
        // Skill item clicks
        document.querySelectorAll('.skill-item').forEach(skill => {
            skill.addEventListener('click', () => this.playSound('select'));
        });
    }
    
    playSoundOnce(elementId, type) {
        // Check if this element has already played a sound
        if (this.playedElements.has(elementId)) {
            return; // Skip if already played
        }
        
        // Mark this element as having played a sound
        this.playedElements.add(elementId);
        
        // Play the sound
        this.playSound(type);
    }
    
    playSound(type) {
        if (!this.enabled || !this.audioContext) return;
        
        // Check cooldown period
        const now = Date.now();
        const lastPlayed = this.lastSoundTime[type] || 0;
        const cooldown = this.soundCooldowns[type] || 300;
        
        if (now - lastPlayed < cooldown) {
            return; // Skip sound if in cooldown period
        }
        
        this.lastSoundTime[type] = now;
        
        // Resume AudioContext if suspended (browser autoplay policy)
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        const audioNow = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Define sound frequencies and patterns - much louder and more audible
        const sounds = {
            hover: {
                frequency: 800,
                type: 'sine',
                duration: 0.12,
                volume: 0.15  // Much louder - was 0.02
            },
            click: {
                frequency: 1000,
                type: 'sine',
                duration: 0.15,
                volume: 0.2   // Much louder - was 0.04
            },
            select: {
                frequency: 600,
                type: 'triangle',
                duration: 0.2,
                volume: 0.18  // Much louder - was 0.03
            },
            toggle: {
                frequency: 400,
                type: 'sine',
                duration: 0.25,
                volume: 0.15  // Much louder - was 0.03
            },
            typing: {
                frequency: 1200,
                type: 'sine',
                duration: 0.06,
                volume: 0.08  // Much louder - was 0.01
            }
        };
        
        const sound = sounds[type] || sounds.hover;
        
        oscillator.type = sound.type;
        oscillator.frequency.setValueAtTime(sound.frequency, audioNow);
        
        // Gentler frequency variation
        if (type === 'hover') {
            oscillator.frequency.exponentialRampToValueAtTime(sound.frequency * 1.05, audioNow + sound.duration * 0.7);
        }
        
        // Smoother gain envelope
        gainNode.gain.setValueAtTime(0, audioNow);
        gainNode.gain.linearRampToValueAtTime(sound.volume, audioNow + sound.duration * 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioNow + sound.duration);
        
        oscillator.start(audioNow);
        oscillator.stop(audioNow + sound.duration);
    }
    
    // Method to add typing sounds to the typewriter
    addTypingSounds() {
        const observer = new MutationObserver(() => {
            this.playSound('typing');
        });
        
        const typingElement = document.getElementById('typing-text');
        if (typingElement) {
            observer.observe(typingElement, { childList: true, subtree: true, characterData: true });
        }
    }
    
    // Terminal sounds always enabled (separate from main portfolio sounds)
    playTerminalSound(type) {
        if (!this.audioContext) {
            // Initialize Web Audio API if not already done
            if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
                this.audioContext = new (AudioContext || webkitAudioContext)();
            } else {
                return;
            }
        }
        
        // Resume AudioContext if suspended
        if (this.audioContext.state === 'suspended') {
            this.audioContext.resume();
        }
        
        const audioNow = this.audioContext.currentTime;
        const oscillator = this.audioContext.createOscillator();
        const gainNode = this.audioContext.createGain();
        
        oscillator.connect(gainNode);
        gainNode.connect(this.audioContext.destination);
        
        // Terminal-specific sounds
        const terminalSounds = {
            beep: {
                frequency: 800,
                type: 'sine',
                duration: 0.1,
                volume: 0.03
            },
            complete: {
                frequency: 1200,
                type: 'sine',
                duration: 0.2,
                volume: 0.04
            }
        };
        
        const sound = terminalSounds[type] || terminalSounds.beep;
        
        oscillator.type = sound.type;
        oscillator.frequency.setValueAtTime(sound.frequency, audioNow);
        
        gainNode.gain.setValueAtTime(0, audioNow);
        gainNode.gain.linearRampToValueAtTime(sound.volume, audioNow + sound.duration * 0.1);
        gainNode.gain.linearRampToValueAtTime(0, audioNow + sound.duration);
        
        oscillator.start(audioNow);
        oscillator.stop(audioNow + sound.duration);
    }
}

// Interactive Skill Progress Bars
class SkillProgressBars {
    constructor() {
        this.init();
    }
    
    init() {
        this.setupProgressBars();
        this.setupObserver();
    }
    
    setupProgressBars() {
        const skillItems = document.querySelectorAll('.skill-item');
        
        skillItems.forEach((item, index) => {
            const skillValue = item.dataset.skill || Math.floor(Math.random() * 40 + 60); // Default random if no data-skill
            const progressBar = item.querySelector('.skill-bar');
            const percentage = item.querySelector('.skill-percentage');
            
            if (progressBar && percentage) {
                // Reset progress bar
                progressBar.style.width = '0%';
                progressBar.style.transition = 'width 1.5s ease-out';
                
                // Add click to animate functionality
                item.addEventListener('click', () => {
                    this.animateProgressBar(progressBar, percentage, skillValue, index);
                });
                
                // Add tooltip with skill details
                this.addSkillTooltip(item, skillValue);
            }
        });
    }
    
    animateProgressBar(progressBar, percentage, value, index) {
        // Reset first
        progressBar.style.width = '0%';
        progressBar.style.background = 'var(--primary-gradient)';
        
        // Animate after a short delay
        setTimeout(() => {
            progressBar.style.width = value + '%';
            
            // Animate the percentage counter
            this.animateCounter(percentage, 0, value, 1500);
            
            // Add glow effect during animation
            progressBar.style.boxShadow = '0 0 20px var(--neon-blue)';
            
            // Remove glow after animation
            setTimeout(() => {
                progressBar.style.boxShadow = '0 0 10px var(--neon-blue)';
            }, 1500);
            
        }, index * 100); // Stagger animations
    }
    
    animateCounter(element, start, end, duration) {
        const startTime = performance.now();
        
        const updateCounter = (currentTime) => {
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            
            // Easing function for smooth animation
            const easeOut = 1 - Math.pow(1 - progress, 3);
            const current = Math.floor(start + (end - start) * easeOut);
            
            element.textContent = current + '%';
            
            if (progress < 1) {
                requestAnimationFrame(updateCounter);
            }
        };
        
        requestAnimationFrame(updateCounter);
    }
    
    addSkillTooltip(item, value) {
        const tooltip = document.createElement('div');
        tooltip.className = 'skill-tooltip';
        tooltip.innerHTML = `
            <div class="tooltip-content">
                <strong>Proficiency: ${value}%</strong>
                <p>Click to animate progress bar</p>
                <small>Hover for more interactions</small>
            </div>
        `;
        
        tooltip.style.cssText = `
            position: absolute;
            bottom: 120%;
            left: 50%;
            transform: translateX(-50%);
            background: var(--glass-bg);
            backdrop-filter: blur(20px);
            padding: 1rem;
            border-radius: 10px;
            border: 1px solid var(--glass-border);
            box-shadow: var(--glass-shadow);
            opacity: 0;
            pointer-events: none;
            transition: opacity 0.3s ease, transform 0.3s ease;
            z-index: 1000;
            min-width: 200px;
            text-align: center;
            color: var(--text-primary);
        `;
        
        item.style.position = 'relative';
        item.appendChild(tooltip);
        
        item.addEventListener('mouseenter', () => {
            tooltip.style.opacity = '1';
            tooltip.style.transform = 'translateX(-50%) translateY(-10px)';
        });
        
        item.addEventListener('mouseleave', () => {
            tooltip.style.opacity = '0';
            tooltip.style.transform = 'translateX(-50%) translateY(0)';
        });
    }
    
    setupObserver() {
        // Animate progress bars when they come into view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const skillItem = entry.target;
                    const progressBar = skillItem.querySelector('.skill-bar');
                    const percentage = skillItem.querySelector('.skill-percentage');
                    const skillValue = skillItem.dataset.skill || Math.floor(Math.random() * 40 + 60);
                    
                    if (progressBar && percentage && !skillItem.classList.contains('animated')) {
                        skillItem.classList.add('animated');
                        setTimeout(() => {
                            this.animateProgressBar(progressBar, percentage, skillValue, 0);
                        }, Math.random() * 500); // Random delay for staggered effect
                    }
                }
            });
        }, {
            threshold: 0.5,
            rootMargin: '0px 0px -100px 0px'
        });
        
        document.querySelectorAll('.skill-item').forEach(item => {
            observer.observe(item);
        });
    }
}

// Theme Toggle Initialization
function initThemeToggle() {
    let isDarkTheme = true;
    const themeToggle = document.querySelector('.theme-toggle');
    
    if (!themeToggle) {
        console.warn('Theme toggle button not found');
        return;
    }
    
    // Initialize theme
    document.body.classList.remove('light-theme');
    
    themeToggle.addEventListener('click', () => {
        isDarkTheme = !isDarkTheme;
        
        // Add transition class for smooth theme switching
        document.body.style.transition = 'all 0.5s cubic-bezier(0.4, 0, 0.2, 1)';
        
        if (isDarkTheme) {
            document.body.classList.remove('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
        } else {
            document.body.classList.add('light-theme');
            themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
        }
        
        // Remove transition class after animation
        setTimeout(() => {
            document.body.style.transition = '';
        }, 500);
    });
    
    console.log('✅ Theme toggle initialized');
}

// Mobile Navigation Initialization
function initMobileNavigation() {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');
    
    if (!hamburger || !navMenu) {
        console.warn('Mobile navigation elements not found');
        return;
    }
    
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
        
        // Animate hamburger bars
        const bars = hamburger.querySelectorAll('.bar');
        if (hamburger.classList.contains('active')) {
            bars[0].style.transform = 'rotate(45deg) translate(5px, 5px)';
            bars[1].style.opacity = '0';
            bars[2].style.transform = 'rotate(-45deg) translate(7px, -6px)';
        } else {
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        }
    });
    
    // Close mobile menu when clicking on a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
            
            // Reset hamburger bars
            const bars = hamburger.querySelectorAll('.bar');
            bars[0].style.transform = 'none';
            bars[1].style.opacity = '1';
            bars[2].style.transform = 'none';
        });
    });
    
    console.log('✅ Mobile navigation initialized');
}

// Smooth Scrolling Initialization
function initSmoothScrolling() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
                
                // Custom smooth scroll with easing
                smoothScrollTo(offsetPosition, 1000);
            }
        });
    });
    
    console.log('✅ Smooth scrolling initialized');
}

// Anime.js Animation System
class AnimeAnimationManager {
    constructor() {
        this.init();
    }

    init() {
        // Wait for DOM to be fully loaded
        if (document.readyState === 'loading') {
            document.addEventListener('DOMContentLoaded', () => this.loadAnimations());
        } else {
            this.loadAnimations();
        }
    }

    loadAnimations() {
        console.log('🎬 Loading Anime.js animations...');

        // Animate service icons
        this.animateServiceIcons();

        // Create floating particles
        this.createParticles();

        // Add card hover animations
        this.setupCardAnimations();

        console.log('✅ Anime.js animations initialized');
    }

    animateServiceIcons() {
        const icons = document.querySelectorAll('.service-icon');

        icons.forEach((icon, index) => {
            // Initial entrance animation
            anime({
                targets: icon,
                scale: [0, 1],
                rotate: [0, 360],
                opacity: [0, 1],
                duration: 1000,
                delay: index * 200,
                easing: 'easeOutElastic(1, .8)'
            });

            // Continuous floating animation
            anime({
                targets: icon,
                translateY: [-10, 10],
                duration: 2000,
                delay: index * 300,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutSine'
            });

            // Hover animation
            const card = icon.closest('.experience-card');
            if (card) {
                card.addEventListener('mouseenter', () => {
                    anime({
                        targets: icon,
                        scale: 1.2,
                        rotate: '+=360',
                        duration: 600,
                        easing: 'easeOutElastic(1, .6)'
                    });
                });

                card.addEventListener('mouseleave', () => {
                    anime({
                        targets: icon,
                        scale: 1,
                        duration: 400,
                        easing: 'easeOutQuad'
                    });
                });
            }
        });
    }

    createParticles() {
        const container = document.querySelector('.particles-container');
        if (!container) return;

        // Create 20 particles
        for (let i = 0; i < 20; i++) {
            const particle = document.createElement('div');
            particle.style.cssText = `
                position: absolute;
                width: 4px;
                height: 4px;
                background: linear-gradient(135deg, #2563eb, #0891b2);
                border-radius: 50%;
                opacity: 0.6;
            `;
            container.appendChild(particle);

            // Random starting position
            const startX = Math.random() * 100;
            const startY = Math.random() * 100;
            particle.style.left = startX + '%';
            particle.style.top = startY + '%';

            // Animate particle
            anime({
                targets: particle,
                translateX: () => anime.random(-100, 100),
                translateY: () => anime.random(-100, 100),
                scale: [0.5, 1.5],
                opacity: [0.3, 0.8],
                duration: () => anime.random(3000, 5000),
                delay: i * 100,
                loop: true,
                direction: 'alternate',
                easing: 'easeInOutQuad'
            });
        }
    }

    setupCardAnimations() {
        const cards = document.querySelectorAll('.experience-card');

        cards.forEach((card, index) => {
            // Entrance animation
            anime({
                targets: card,
                translateY: [50, 0],
                opacity: [0, 1],
                duration: 800,
                delay: index * 150,
                easing: 'easeOutCubic'
            });
        });
    }
}

// Initialize all enhancements
document.addEventListener('DOMContentLoaded', () => {
    console.log('DOM loaded - initializing portfolio...');

    // Initialize theme toggle
    initThemeToggle();

    // Initialize mobile navigation
    initMobileNavigation();

    // Initialize smooth scrolling
    initSmoothScrolling();

    // Initialize terminal loader
    initTerminalLoader();

    // Initialize particle trail
    new ParticleTrail();

    // Initialize sound system
    const soundSystem = new SoundSystem();

    // Make sound system available globally for terminal sounds
    window.portfolioSounds = soundSystem;

    // Initialize interactive skill progress bars
    new SkillProgressBars();

    // Initialize Anime.js animations
    const animeManager = new AnimeAnimationManager();
    window.animeManager = animeManager;

    // Initialize typewriter effect
    const typingElement = document.getElementById('typing-text');
    if (typingElement) {
        const phrases = [
            'Firmware & Hardware Solutions for Consumer Electronics',
            'ESP32/STM32 Development Services',
            'Custom PCB Design & Integration',
            'IoT & Smart Device Development',
            'Rapid Prototyping to Production',
            'Reduce Your R&D Time by 60%'
        ];

        new Typewriter(typingElement, phrases, {
            typeSpeed: 100,
            deleteSpeed: 50,
            pauseTime: 3000
        });

        // Add typing sounds to typewriter
        soundSystem.addTypingSounds();
    }

    console.log('🚀 Portfolio fully loaded and ready!');
    console.log('🌙 Theme toggle: Working');
    console.log('🔊 Sound system: Default OFF (click sound button to enable)');
    console.log('✨ Particle cursor trail: Active');
    console.log('⌨️  Dynamic typing animation: Active');
    console.log('📊 Interactive skill progress bars: Active');
    console.log('🎬 Lottie animations: Active');

    // Add welcome notification
    setTimeout(() => {
        if (typeof showNotification === 'function') {
            showNotification('🎉 Welcome to the enhanced portfolio experience!', 'success', 4000);
        }
    }, 2000);
});

// Add floating particle animation keyframes
const particleStyle = document.createElement('style');
particleStyle.textContent = `
    @keyframes floatParticle {
        0% {
            transform: translateY(100vh) rotate(0deg);
            opacity: 0;
        }
        10% {
            opacity: 1;
        }
        90% {
            opacity: 1;
        }
        100% {
            transform: translateY(-100px) rotate(360deg);
            opacity: 0;
        }
    }
`;
document.head.appendChild(particleStyle);

// Cleanup on page unload
window.addEventListener('beforeunload', () => {
    if (cursor) cursor.remove();
    if (cursorDot) cursorDot.remove();
});