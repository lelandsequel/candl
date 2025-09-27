/**
 * C&L Strategy - Main JavaScript File
 * Illuminating interactive experiences with professional polish
 */


// Form submission configuration
// If you have a backend/form service (e.g., Formspree, Getform, Netlify Forms), set FORM_ENDPOINT to that POST URL.
// Otherwise, the code will fall back to a mailto: to send details to FORM_TO (attachments cannot be auto-attached via mailto).
const FORM_TO = 'info@candlstrategy.com';
const FORM_ENDPOINT = 'https://formspree.io/f/xovkjdpl';
const FILE_UPLOAD_ENDPOINT = 'https://getform.io/f/amdyrexb';


// Optional Google reCAPTCHA v3 integration
const RECAPTCHA_SITE_KEY = '';
function loadRecaptcha() {
  return new Promise((resolve) => {
    if (!RECAPTCHA_SITE_KEY) return resolve(false);
    if (window.grecaptcha) return resolve(true);
    const s = document.createElement('script');
    s.src = `https://www.google.com/recaptcha/api.js?render=${RECAPTCHA_SITE_KEY}`;
    s.async = true; s.defer = true;
    s.onload = () => resolve(true);
    s.onerror = () => resolve(false);
    document.head.appendChild(s);
  });
}
async function getRecaptchaToken(action = 'submit') {
  if (!RECAPTCHA_SITE_KEY || !window.grecaptcha) return null;
  try {
    await window.grecaptcha.ready(() => {});
    const token = await window.grecaptcha.execute(RECAPTCHA_SITE_KEY, { action });
    return token;
  } catch { return null; }
}

async function submitFormData(form, recaptchaToken) {
  if (FORM_ENDPOINT && FORM_ENDPOINT.length > 0) {
    const fd = new FormData(form);
    // Add common fields for services like Formspree/Getform
    const subject = form.dataset.subject || 'New Submission from C&L Strategy Website';
    if (!fd.has('_subject')) fd.append('_subject', subject);
    const replyTo = fd.get('email') || fd.get('contact-email') || '';
    if (replyTo && !fd.has('_replyto')) fd.append('_replyto', replyTo);
    if (!fd.has('form_name')) fd.append('form_name', form.id || 'web-form');
    if (recaptchaToken && !fd.has('g-recaptcha-response')) fd.append('g-recaptcha-response', recaptchaToken);

    const hasFile = Array.from(form.querySelectorAll('input[type="file"]'))
      .some(inp => inp.files && inp.files.length > 0);

    // Choose endpoint: prefer dedicated file endpoint when a file is present
    const primaryEndpoint = (hasFile && FILE_UPLOAD_ENDPOINT) ? FILE_UPLOAD_ENDPOINT : FORM_ENDPOINT;

    let res = await fetch(primaryEndpoint, {
      method: 'POST',
      body: fd,
      headers: { 'Accept': 'application/json' }
    });

    if (!res.ok) {
      // Try to parse error details
      let data = {};
      try { data = await res.json(); } catch {}

      // If file uploads are blocked, attempt fallback strategies
      const fileNotAllowed = (data.error || '').includes('File Uploads Not Permitted');

      if (fileNotAllowed && hasFile) {
        // Strategy A: if we didn't try FILE_UPLOAD_ENDPOINT yet, try it now
        if (primaryEndpoint !== FILE_UPLOAD_ENDPOINT && FILE_UPLOAD_ENDPOINT) {
          res = await fetch(FILE_UPLOAD_ENDPOINT, { method: 'POST', body: fd, headers: { 'Accept': 'application/json' } });
          if (res.ok) return { success: true, fileStripped: false };
        }
        // Strategy B: strip file and resubmit to FORM_ENDPOINT with a note
        const fd2 = new FormData(form);
        // Remove common file fields
        ['resume', 'attachment', 'file'].forEach(name => fd2.delete(name));
        fd2.append('upload_notice', 'User attempted to upload a file, but provider blocked file uploads. Ask user to email resume.');
        if (recaptchaToken && !fd2.has('g-recaptcha-response')) fd2.append('g-recaptcha-response', recaptchaToken);
        const res2 = await fetch(FORM_ENDPOINT, { method: 'POST', body: fd2, headers: { 'Accept': 'application/json' } });
        if (res2.ok) return { success: true, fileStripped: true };
      }

      // Last resort: fail
      throw new Error('Submission failed');
    }
    return { success: true, fileStripped: false };
  } else {
    // Mailto fallback (no file attachment support)
    const payload = new FormData(form);
    const subject = encodeURIComponent(form.dataset.subject || 'New Inquiry from C&L Strategy Website');
    const entries = [];
    payload.forEach((v, k) => { if (k !== 'resume') entries.push(`${k}: ${v}`); });
    entries.push('—');
    entries.push('If you uploaded a resume, please attach it to this email before sending.');
    const body = encodeURIComponent(entries.join('\n'));
    window.location.href = `mailto:${FORM_TO}?subject=${subject}&body=${body}`;
    return { success: true, fileStripped: false };
  }
}

// Utility functions
const utils = {
  // Throttle function for performance
  throttle(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  },

  // Smooth scroll to element
  scrollTo(element, duration = 1000) {
    const targetPosition = element.offsetTop - 80; // Account for navbar height
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
      if (startTime === null) startTime = currentTime;
      const timeElapsed = currentTime - startTime;
      const run = easeInOutQuad(timeElapsed, startPosition, distance, duration);
      window.scrollTo(0, run);
      if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function easeInOutQuad(t, b, c, d) {
      t /= d / 2;
      if (t < 1) return c / 2 * t * t + b;
      t--;
      return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
  },

  // Check if element is in viewport
  isInViewport(element, offset = 0) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= -offset &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) + offset &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
};

// Navigation functionality
class Navigation {
  constructor() {
    this.navbar = document.getElementById('navbar');
    this.navToggle = document.getElementById('nav-toggle');
    this.navMenu = document.getElementById('nav-menu');
    this.navLinks = document.querySelectorAll('.nav-link');

    this.init();
  }

  init() {
    // Mobile menu toggle
    this.navToggle.addEventListener('click', () => this.toggleMobileMenu());

    // Close mobile menu when link is clicked
    this.navLinks.forEach(link => {
      link.addEventListener('click', (e) => {
        this.closeMobileMenu();
        this.smoothScrollToSection(e);
      });
    });

    // Navbar scroll effect
    window.addEventListener('scroll', utils.throttle(() => this.handleScroll(), 10));

    // Handle initial scroll state
    this.handleScroll();
  }

  toggleMobileMenu() {
    this.navMenu.classList.toggle('active');
    this.navToggle.classList.toggle('active');
  }

  closeMobileMenu() {
    this.navMenu.classList.remove('active');
    this.navToggle.classList.remove('active');
  }

  handleScroll() {
    const scrolled = window.pageYOffset > 50;
    this.navbar.classList.toggle('scrolled', scrolled);
  }

  smoothScrollToSection(e) {
    const href = e.target.getAttribute('href');

    // Check if it's an anchor link on the same page
    if (href.startsWith('#')) {
      e.preventDefault();
      const targetElement = document.querySelector(href);

      if (targetElement) {
        utils.scrollTo(targetElement);

        // Update active nav link
        this.navLinks.forEach(link => link.classList.remove('active'));
        e.target.classList.add('active');
      }
    }
    // If it's a different page, let it navigate normally
  }
}

// Hero Statistics Counter Animation
class StatsCounter {
  constructor() {
    this.stats = document.querySelectorAll('.stat-number');
    this.hasAnimated = false;
    this.init();
  }

  init() {
    window.addEventListener('scroll', utils.throttle(() => this.checkVisibility(), 100));
    this.checkVisibility();
  }

  checkVisibility() {
    if (this.hasAnimated) return;

    const heroStats = document.querySelector('.hero-stats');
    if (heroStats && utils.isInViewport(heroStats, 200)) {
      this.animateCounters();
      this.hasAnimated = true;
    }
  }

  animateCounters() {
    this.stats.forEach(stat => {
      const target = parseInt(stat.getAttribute('data-target'));
      const increment = target / 100; // Animation duration
      let current = 0;

      const updateCounter = () => {
        if (current < target) {
          current += increment;
          stat.textContent = Math.ceil(current);
          requestAnimationFrame(updateCounter);
        } else {
          stat.textContent = target;
        }
      };

      updateCounter();
    });
  }
}

// Scroll Animations for Service Cards and Other Elements
class ScrollAnimations {
  constructor() {
    this.observedElements = new Set();
    this.init();
  }

  init() {
    // Create intersection observer
    this.observer = new IntersectionObserver(
      (entries) => this.handleIntersection(entries),
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    // Observe elements for animation
    this.observeElements();
  }

  observeElements() {
    const elementsToAnimate = [
      '.service-card',
      '.insight-card',
      '.value',
      '.contact-method',
      '.about-story',
      '.section-header'
    ];

    elementsToAnimate.forEach(selector => {
      const elements = document.querySelectorAll(selector);
      elements.forEach((element, index) => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = `opacity 0.6s ease ${index * 0.1}s, transform 0.6s ease ${index * 0.1}s`;
        this.observer.observe(element);
      });
    });
  }

  handleIntersection(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting && !this.observedElements.has(entry.target)) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
        this.observedElements.add(entry.target);
      }
    });
  }
}

// Interactive Illumination Effects
class IlluminationEffects {
  constructor() {
    this.init();
  }

  init() {
    // Add mouseover glow effects to interactive elements
    this.addGlowEffects();

    // Enhanced candle flame animation
    this.enhanceCandleFlame();

    // Interactive hero orb
    this.makeHeroOrbInteractive();
  }

  addGlowEffects() {
    const glowElements = document.querySelectorAll('.service-card, .btn, .insight-card, .contact-method');

    glowElements.forEach(element => {
      element.addEventListener('mouseenter', (e) => {
        e.target.style.boxShadow = '0 8px 32px rgba(212, 175, 55, 0.3)';
      });

      element.addEventListener('mouseleave', (e) => {
        e.target.style.boxShadow = ''; // Reset to CSS default
      });
    });
  }

  enhanceCandleFlame() {
    const flame = document.querySelector('.candle-flame');
    if (flame) {
      // Add random flicker intensity
      setInterval(() => {
        const intensity = Math.random() * 0.2 + 0.9; // 0.9 to 1.1
        flame.style.transform = `scale(${intensity})`;
        flame.style.filter = `brightness(${intensity})`;
      }, 200);
    }
  }

  makeHeroOrbInteractive() {
    const orb = document.querySelector('.glow-orb');
    if (orb) {
      orb.addEventListener('mouseenter', () => {
        orb.style.transform = 'translate(-50%, -50%) scale(1.1)';
        orb.style.boxShadow = `
          0 0 60px rgba(212, 175, 55, 0.6),
          0 0 120px rgba(212, 175, 55, 0.4),
          0 0 180px rgba(212, 175, 55, 0.2)
        `;
      });

      orb.addEventListener('mouseleave', () => {
        orb.style.transform = 'translate(-50%, -50%) scale(1)';
        orb.style.boxShadow = ''; // Reset to CSS
      });
    }
  }
}

// Contact Form Handling
class ContactForm {
  constructor() {
    this.form = document.getElementById('contact-form');
    this.init();
  }

  init() {
    if (this.form) {
      this.form.addEventListener('submit', (e) => this.handleSubmit(e));
      this.addValidation();
    }
  }

  async handleSubmit(e) {
    e.preventDefault();

    // Honeypot spam trap
    const hp = this.form.querySelector('input[name="hp_field"]');
    if (hp && hp.value) return;

    const formData = new FormData(this.form);
    const email = formData.get('email') || formData.get('contact-email');
    const firstName = formData.get('firstName') || formData.get('name') || '';
    const lastName = formData.get('lastName') || '';
    const message = formData.get('message') || '';

    if (!email || !this.isValidEmail(email) || !firstName || !message) {
      this.showError('Please complete Name, Email, and Message with a valid email.');
      return;
    }

    try {
      this.form.dataset.subject = 'New Website Inquiry — C&L Strategy';
      const token = await getRecaptchaToken('contact');
      const result = await submitFormData(this.form, token);
      window.location.href = 'thank-you.html';
    } catch (err) {
      this.showError('Sorry, we could not send your message. Please email info@candlstrategy.com.');
    }
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  addValidation() {
    const inputs = this.form.querySelectorAll('input[required], textarea[required], select[required]');
    inputs.forEach(input => {
      input.addEventListener('blur', () => this.validateField(input));
      input.addEventListener('input', () => this.clearFieldError(input));
    });

    const emailInput = this.form.querySelector('input[type="email"]');
    if (emailInput) {
      emailInput.addEventListener('blur', () => {
        if (emailInput.value && !this.isValidEmail(emailInput.value)) {
          this.showFieldError(emailInput, 'Please enter a valid email address.');
        }
      });
    }
  }

  validateField(field) {
    if (!field.value.trim()) {
      this.showFieldError(field, 'This field is required.');
      return false;
    }
    this.clearFieldError(field);
    return true;
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    field.style.borderColor = '#e74c3c';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    field.style.borderColor = '';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) errorDiv.remove();
  }

  showSuccess(msg) {
    this.showNotification(msg || 'Thank you for your message! We\'ll illuminate your path to success soon.', 'success');
  }

  showError(message) {
    this.showNotification(message, 'error');
  }

  showNotification(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed; top: 100px; right: 20px; padding: 1rem 1.5rem; border-radius: 10px;
      color: white; font-weight: 600; z-index: 10000; transform: translateX(400px);
      transition: transform 0.3s ease; max-width: 400px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    `;
    notification.style.background = (type === 'success')
      ? 'linear-gradient(135deg, #27ae60, #2ecc71)'
      : 'linear-gradient(135deg, #e74c3c, #c0392b)';
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => { notification.style.transform = 'translateX(400px)'; setTimeout(() => notification.remove(), 300); }, 4000);
  }
}

// Smooth Page Loading Animation
class PageLoader {
  constructor() {
    this.init();
  }

  init() {
    // Add loading class to body
    document.body.classList.add('loading');

    // Remove loading class when page is fully loaded
    window.addEventListener('load', () => {
      setTimeout(() => {
        document.body.classList.remove('loading');
        document.body.classList.add('loaded');
      }, 500);
    });
  }
}

// SequelMatch AI Order Form
class OrderForm {
  constructor() {
    this.form = document.getElementById('order-form');
    this.init();
  }

  init() {
    if (!this.form) return;
    this.form.addEventListener('submit', (e) => this.handleSubmit(e));
    this.addValidation();
  }

  async handleSubmit(e) {
    e.preventDefault();
    // Honeypot spam trap
    const hp = this.form.querySelector('input[name="hp_field"]');
    if (hp && hp.value) return;

    const formData = new FormData(this.form);
    const email = formData.get('email');
    const firstName = formData.get('firstName') || '';
    const lastName = formData.get('lastName') || '';
    const service = formData.get('service') || 'SequelMatch AI';

    if (!email || !this.isValidEmail(email) || !firstName || !service) {
      this.showError('Please complete Name, Email, and Service with a valid email.');
      return;
    }

    // Subject hint for backend/email services
    this.form.dataset.subject = `SequelMatch Order: ${service} — ${firstName} ${lastName}`;

    try {
      const token = await getRecaptchaToken('order');
      const result = await submitFormData(this.form, token);
      if (result && result.fileStripped) {
        this.showError('We received your order, but the resume upload could not be attached. Please email your resume to info@candlstrategy.com.');
        setTimeout(() => { window.location.href = 'thank-you.html?resume=email'; }, 1600);
      } else {
        window.location.href = 'thank-you.html';
      }
    } catch (err) {
      this.showError('Could not submit order. Please email info@candlstrategy.com.');
    }
  }

  addValidation() {
    const required = this.form.querySelectorAll('input[required], select[required], textarea[required]');
    required.forEach(el => {
      el.addEventListener('blur', () => this.validateField(el));
      el.addEventListener('input', () => this.clearFieldError(el));
    });
  }

  validateField(field) {
    if (!field.value.trim()) {
      this.showFieldError(field, 'This field is required.');
      return false;
    }
    this.clearFieldError(field);
    return true;
  }

  isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  }

  showFieldError(field, message) {
    this.clearFieldError(field);
    field.style.borderColor = '#e74c3c';
    const errorDiv = document.createElement('div');
    errorDiv.className = 'field-error';
    errorDiv.textContent = message;
    errorDiv.style.color = '#e74c3c';
    errorDiv.style.fontSize = '0.9rem';
    errorDiv.style.marginTop = '0.5rem';
    field.parentNode.appendChild(errorDiv);
  }

  clearFieldError(field) {
    field.style.borderColor = '';
    const errorDiv = field.parentNode.querySelector('.field-error');
    if (errorDiv) errorDiv.remove();
  }

  showSuccess(msg) {
    this.showNotification(msg, 'success');
  }
  showError(msg) {
    this.showNotification(msg, 'error');
  }
  showNotification(message, type) {
    const existing = document.querySelector('.notification');
    if (existing) existing.remove();
    const notification = document.createElement('div');
    notification.className = `notification notification-${type}`;
    notification.textContent = message;
    notification.style.cssText = `
      position: fixed; top: 100px; right: 20px; padding: 1rem 1.5rem; border-radius: 10px;
      color: white; font-weight: 600; z-index: 10000; transform: translateX(400px);
      transition: transform 0.3s ease; max-width: 400px; box-shadow: 0 4px 20px rgba(0,0,0,0.15);
    `;
    notification.style.background = (type === 'success')
      ? 'linear-gradient(135deg, #27ae60, #2ecc71)'
      : 'linear-gradient(135deg, #e74c3c, #c0392b)';
    document.body.appendChild(notification);
    setTimeout(() => { notification.style.transform = 'translateX(0)'; }, 100);
    setTimeout(() => { notification.style.transform = 'translateX(400px)'; setTimeout(() => notification.remove(), 300); }, 4000);
  }
}

// Rotating Text Effect for Hero Title
class RotatingText {
  constructor() {
    this.rotatingElement = document.getElementById('rotating-text');
    this.phrases = [
      'Digital Excellence',
      'Financial Clarity',
      'Process Optimization',
      'Real Estate Success',
      'Business Development',
      'Strategic Growth',
      'Operational Innovation'
    ];
    this.currentIndex = 0;
    this.init();
  }

  init() {
    if (this.rotatingElement) {
      this.startRotation();
    }
  }

  startRotation() {
    setInterval(() => {
      this.typeOutText(() => {
        this.currentIndex = (this.currentIndex + 1) % this.phrases.length;
        setTimeout(() => {
          this.typeInText();
        }, 500);
      });
    }, 5000); // Change every 5 seconds
  }

  typeOutText(callback) {
    const currentText = this.rotatingElement.textContent;
    let i = currentText.length;

    const deleteChar = () => {
      if (i > 0) {
        this.rotatingElement.textContent = currentText.substring(0, i - 1);
        i--;
        setTimeout(deleteChar, 50);
      } else {
        callback();
      }
    };

    deleteChar();
  }

  typeInText() {
    const newText = this.phrases[this.currentIndex];
    let i = 0;

    const addChar = () => {
      if (i < newText.length) {
        this.rotatingElement.textContent = newText.substring(0, i + 1);
        i++;
        setTimeout(addChar, 100);
      }
    };

    addChar();
  }
}

// Performance Monitoring
class PerformanceMonitor {
  constructor() {
    this.init();
  }

  init() {
    // Monitor scroll performance
    let ticking = false;

    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          ticking = false;
        });
        ticking = true;
      }
    });

    // Preload critical images
    this.preloadImages();
  }

  preloadImages() {
    // Add any critical images that need preloading
    const criticalImages = [
      // Add image URLs here if needed
    ];

    criticalImages.forEach(src => {
      const img = new Image();
      img.src = src;
    });
  }
}

// Accessibility Enhancements
class AccessibilityEnhancer {
  constructor() {
    this.init();
  }

  init() {
    // Skip to main content link
    this.addSkipLink();

    // Keyboard navigation
    this.enhanceKeyboardNavigation();

    // Reduce motion for users who prefer it
    this.respectMotionPreferences();
  }

  addSkipLink() {
    const skipLink = document.createElement('a');
    skipLink.href = '#main-content';
    skipLink.textContent = 'Skip to main content';
    skipLink.className = 'skip-link';

    skipLink.style.cssText = `
      position: absolute;
      top: -40px;
      left: 6px;
      background: var(--primary-gold);
      color: var(--charcoal);
      padding: 8px;
      text-decoration: none;
      border-radius: 4px;
      font-weight: 600;
      z-index: 10000;
      transition: top 0.3s ease;
    `;

    skipLink.addEventListener('focus', () => {
      skipLink.style.top = '6px';
    });

    skipLink.addEventListener('blur', () => {
      skipLink.style.top = '-40px';
    });

    document.body.insertBefore(skipLink, document.body.firstChild);
  }

  enhanceKeyboardNavigation() {
    // Add focus indicators
    const focusableElements = document.querySelectorAll('a, button, input, textarea, select');

    focusableElements.forEach(element => {
      element.addEventListener('focus', (e) => {
        e.target.style.outline = '2px solid var(--primary-gold)';
        e.target.style.outlineOffset = '2px';
      });

      element.addEventListener('blur', (e) => {
        e.target.style.outline = '';
        e.target.style.outlineOffset = '';
      });
    });
  }

  respectMotionPreferences() {
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReducedMotion) {
      // Disable animations
      const style = document.createElement('style');
      style.textContent = `
        *, *::before, *::after {
          animation-duration: 0.01ms !important;
          animation-iteration-count: 1 !important;
          transition-duration: 0.01ms !important;
        }
      `;
      document.head.appendChild(style);
    }
  }
}

// Initialize everything when DOM is ready
document.addEventListener('DOMContentLoaded', () => {
  console.log('🕯️ C&L Strategy - Illuminating your digital experience...');

  // Load reCAPTCHA v3 if configured
  if (RECAPTCHA_SITE_KEY) { loadRecaptcha(); }

  // Initialize all components
  new PageLoader();
  new Navigation();
  new StatsCounter();
  new ScrollAnimations();
  new IlluminationEffects();
  new ContactForm();
  new RotatingText();
  new PerformanceMonitor();
  new AccessibilityEnhancer();
  new OrderForm();

  console.log('✨ All systems illuminated and ready for strategic excellence!');
});

// Add some CSS for loading states and typing cursor
const additionalStyles = `
  .loading * {
    animation-play-state: paused !important;
  }

  .typing-cursor {
    animation: blink 1s infinite;
    font-weight: normal;
  }

  @keyframes blink {
    0%, 50% { opacity: 1; }
    51%, 100% { opacity: 0; }
  }

  .notification {
    animation: slideInRight 0.3s ease;
  }

  @keyframes slideInRight {
    from { transform: translateX(400px); }
    to { transform: translateX(0); }
  }

  /* Focus management */
  .js-focus-visible :focus:not(.focus-visible) {
    outline: none;
  }
`;

// Inject additional styles
const styleSheet = document.createElement('style');
styleSheet.textContent = additionalStyles;
document.head.appendChild(styleSheet);