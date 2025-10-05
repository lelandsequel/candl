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

// C&L Match Form Handler
class CandlMatchForm {
  constructor() {
    this.appState = {
      currentStep: 1,
      selectedService: null,
      formData: {},
      selectedTier: null,
      selectedAncillary: [],
      totalPrice: 0
    };

    // Pricing data
    this.pricingTiers = {
      jobs: [
        { name: "Job Match Report", price: 99, features: ["Targeted list of high-fit roles", "Per-role alignment notes", "Application strategy guide"], recommended: false },
        { name: "Resume Redo (ATS Optimized)", price: 79, features: ["ATS-optimized master resume", "Keyword optimization", "Human readability focus"], recommended: false },
        { name: "Complete Bundle", price: 149, features: ["Everything in Job Match Report", "Everything in Resume Redo", "Role-specific resume variants", "LinkedIn profile recommendations"], recommended: true }
      ],
      scholarships: [
        { name: "Basic Match", price: 147, features: ["15-20 scholarship opportunities", "Basic application timeline"], recommended: false },
        { name: "Premium Match", price: 247, features: ["30-40 scholarship opportunities", "Application strategy guide", "Deadline reminder system"], recommended: true },
        { name: "Elite Match", price: 347, features: ["50+ scholarship opportunities", "Essay review template", "Application timeline & calendar", "Scholarship interview tips"], recommended: false }
      ],
      educationalGrants: [
        { name: "Foundation Match", price: 297, description: "Grants up to $50K", features: ["10-15 foundation grant opportunities", "Grant writing resources"], recommended: false },
        { name: "Research Match", price: 447, description: "Grants $50K-$250K", features: ["15-20 research grant opportunities", "Budget template", "Timeline planning guide"], recommended: true },
        { name: "Major Grants Match", price: 697, description: "Grants $250K+", features: ["20+ major grant opportunities", "Preliminary review call", "Grant strategy consultation"], recommended: false }
      ],
      businessGrants: [
        { name: "Small Business Match", price: 347, description: "Grants up to $100K", features: ["15-20 small business grant opportunities", "Application checklist"], recommended: false },
        { name: "Growth Match", price: 597, description: "Grants $100K-$500K", features: ["20-25 growth grant opportunities", "Compliance checklist", "Financial documentation guide"], recommended: true },
        { name: "Enterprise Match", price: 897, description: "Grants $500K+", features: ["25+ enterprise grant opportunities", "Strategy consultation (30 min)", "Priority support"], recommended: false }
      ],
      rfps: [
        { name: "Small Contract Match", price: 397, description: "RFPs up to $250K", features: ["10-15 RFP opportunities", "Basic capability statement tips"], recommended: false },
        { name: "Mid-Tier Match", price: 697, description: "RFPs $250K-$5M", features: ["15-20 RFP opportunities", "SAM.gov optimization tips", "Compliance checklist"], recommended: true },
        { name: "Large Contract Match", price: 1247, description: "RFPs $5M+", features: ["20+ large RFP opportunities", "Capture strategy session (45 min)", "Past performance template"], recommended: false }
      ],
      boardSeats: [
        { name: "Advisory Match", price: 497, description: "Advisory & startup boards", features: ["5-10 advisory board opportunities", "Board service guide"], recommended: false },
        { name: "Director Match", price: 897, description: "Paid corporate boards", features: ["10-15 board director opportunities", "Interview preparation guide", "Board compensation insights"], recommended: true },
        { name: "Elite Board Match", price: 1697, description: "Public company boards", features: ["15+ premium board opportunities", "Personal branding review (30 min)", "LinkedIn profile optimization", "Board readiness assessment"], recommended: false }
      ]
    };

    this.ancillaryServices = {
      scholarships: [
        { id: 'essay_coaching', name: 'Essay Editing/Coaching', price: 150 },
        { id: 'app_review', name: 'Application Package Review', price: 147 },
        { id: 'interview_prep', name: 'Interview Prep', price: 127 }
      ],
      educationalGrants: [
        { id: 'proposal_review', name: 'Grant Proposal Review', price: 297 },
        { id: 'budget_dev', name: 'Budget Development', price: 197 },
        { id: 'monthly_alerts', name: 'Monthly Grant Alerts', price: 67, recurring: 'monthly' }
      ],
      businessGrants: [
        { id: 'app_package', name: 'Application Package Development', price: 397 },
        { id: 'compliance', name: 'Compliance Review', price: 297 },
        { id: 'quarterly_monitoring', name: 'Quarterly Monitoring', price: 137, recurring: 'quarterly' }
      ],
      rfps: [
        { id: 'capability_stmt', name: 'Capability Statement Development', price: 347 },
        { id: 'rfp_review', name: 'RFP Response Review', price: 547 },
        { id: 'teaming', name: 'Teaming Partner Matching', price: 297 },
        { id: 'monthly_opps', name: 'Monthly Opportunity Alerts', price: 97, recurring: 'monthly' }
      ],
      boardSeats: [
        { id: 'bio_opt', name: 'Board Bio Optimization', price: 197 },
        { id: 'interview_coach', name: 'Board Interview Coaching', price: 347 },
        { id: 'linkedin_audit', name: 'LinkedIn Executive Audit', price: 297 },
        { id: 'quarterly_insights', name: 'Quarterly Board Insights', price: 137, recurring: 'quarterly' }
      ],
      universal: [
        { id: 'rush', name: 'Rush Processing (48hr)', price: 200 },
        { id: 'premium_report', name: 'Premium AI Industry Report', price: 97 }
      ]
    };

    this.init();
  }

  init() {
    // Make functions globally available
    window.selectService = (serviceType) => this.selectService(serviceType);
    window.goBack = () => this.goBack();
    window.handleFormSubmit = (event) => this.handleFormSubmit(event);
    window.selectTier = (tierName, price) => this.selectTier(tierName, price);
    window.toggleAncillary = (id, price, name) => this.toggleAncillary(id, price, name);
    window.proceedToReview = () => this.proceedToReview();
    window.submitOrder = () => this.submitOrder();
    window.startOver = () => this.startOver();
  }

  selectService(serviceType) {
    this.appState.selectedService = serviceType;
    this.appState.currentStep = 2;
    this.hideAllSections();
    document.getElementById('progress-bar').style.display = 'block';
    document.getElementById('form-section').style.display = 'block';
    document.getElementById('form-section').classList.add('active');
    this.updateProgress(2);
    this.loadForm(serviceType);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  hideAllSections() {
    document.querySelectorAll('.step').forEach(section => {
      section.style.display = 'none';
      section.classList.remove('active');
    });
  }

  updateProgress(step) {
    document.querySelectorAll('.progress-step').forEach((el, index) => {
      el.classList.remove('active', 'completed');
      if (index + 1 < step) {
        el.classList.add('completed');
      } else if (index + 1 === step) {
        el.classList.add('active');
      }
    });
  }

  goBack() {
    if (this.appState.currentStep === 2) {
      this.hideAllSections();
      document.getElementById('progress-bar').style.display = 'none';
      document.getElementById('service-selection').style.display = 'block';
      document.getElementById('service-selection').classList.add('active');
      this.appState.currentStep = 1;
    } else if (this.appState.currentStep === 3) {
      this.hideAllSections();
      document.getElementById('progress-bar').style.display = 'block';
      document.getElementById('form-section').style.display = 'block';
      document.getElementById('form-section').classList.add('active');
      this.appState.currentStep = 2;
      this.updateProgress(2);
    } else if (this.appState.currentStep === 4) {
      this.hideAllSections();
      document.getElementById('progress-bar').style.display = 'block';
      document.getElementById('pricing-section').style.display = 'block';
      document.getElementById('pricing-section').classList.add('active');
      this.appState.currentStep = 3;
      this.updateProgress(3);
    }
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  handleFormSubmit(event) {
    event.preventDefault();
    const form = document.getElementById('match-form');
    const formData = new FormData(form);
    this.appState.formData = {};
    
    for (let [key, value] of formData.entries()) {
      if (key.endsWith('[]')) {
        const realKey = key.replace('[]', '');
        if (!this.appState.formData[realKey]) this.appState.formData[realKey] = [];
        this.appState.formData[realKey].push(value);
      } else {
        this.appState.formData[key] = value;
      }
    }
    
    this.appState.currentStep = 3;
    this.hideAllSections();
    document.getElementById('pricing-section').style.display = 'block';
    document.getElementById('pricing-section').classList.add('active');
    this.updateProgress(3);
    this.loadPricingTiers(this.appState.selectedService);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  loadForm(serviceType) {
    const formFields = this.getFormFields(serviceType);
    const serviceNames = {
      jobs: 'Job Matching',
      scholarships: 'Educational Scholarships',
      educationalGrants: 'Educational Grants',
      businessGrants: 'Business Grants',
      rfps: 'Public Sector RFPs',
      boardSeats: 'Board Director Seats'
    };
    
    document.getElementById('form-title').textContent = `${serviceNames[serviceType]} - Your Information`;
    const container = document.getElementById('form-fields');
    container.innerHTML = '';
    
    formFields.forEach(field => {
      container.innerHTML += this.createFormField(field);
    });
  }

  getFormFields(serviceType) {
    const fields = {
      jobs: [
        { name: 'current_title', type: 'text', label: 'Current Job Title', required: true },
        { name: 'years_experience', type: 'number', label: 'Years of Experience', required: true },
        { name: 'target_roles', type: 'textarea', label: 'Target Role(s)', required: true },
        { name: 'salary_min', type: 'number', label: 'Minimum Desired Salary', required: true },
        { name: 'salary_max', type: 'number', label: 'Maximum Desired Salary', required: true },
        { name: 'location_type', type: 'select', label: 'Location Preference', options: ['Remote', 'Hybrid', 'Onsite', 'Flexible'], required: true },
        { name: 'location_area', type: 'text', label: 'Geographic Location (if applicable)' },
        { name: 'resume', type: 'file', label: 'Resume Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone' }
      ],
      scholarships: [
        { name: 'education_level', type: 'select', label: 'Current Education Level', required: true, options: ['High School Senior', 'Undergrad Year 1', 'Undergrad Year 2', 'Undergrad Year 3', 'Undergrad Year 4', 'Graduate Student', 'Doctoral Candidate'] },
        { name: 'major', type: 'text', label: 'Intended/Current Major', required: true },
        { name: 'gpa', type: 'number', label: 'Current GPA (0.0-4.0)', min: 0, max: 4, step: 0.01, required: true },
        { name: 'target_degree', type: 'select', label: 'Target Degree Level', required: true, options: ['Associates', 'Bachelors', 'Masters', 'Doctoral'] },
        { name: 'financial_need', type: 'select', label: 'Estimated Financial Need', required: true, options: ['Under $10,000', '$10,000-$25,000', '$25,000-$50,000', '$50,000-$75,000', 'Over $75,000'] },
        { name: 'geographic_pref', type: 'text', label: 'Geographic Preferences (states/regions)' },
        { name: 'special_categories', type: 'checkbox', label: 'Special Categories (check all that apply)', options: ['First-Generation College Student', 'Minority Student', 'Veteran', 'Disability', 'Other'] },
        { name: 'achievements', type: 'textarea', label: 'Academic Achievements', maxlength: 500, required: true },
        { name: 'extracurriculars', type: 'textarea', label: 'Extracurricular Activities', maxlength: 500 },
        { name: 'resume', type: 'file', label: 'Resume/CV Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone' }
      ],
      educationalGrants: [
        { name: 'institution', type: 'text', label: 'Current Institution', required: true },
        { name: 'position', type: 'text', label: 'Current Position/Title', required: true },
        { name: 'research_area', type: 'text', label: 'Research Area/Field', required: true },
        { name: 'grant_purpose', type: 'textarea', label: 'Grant Purpose & Project Description', maxlength: 1000, required: true },
        { name: 'funding_needed', type: 'number', label: 'Funding Amount Needed ($)', required: true },
        { name: 'project_timeline', type: 'text', label: 'Project Timeline', placeholder: 'e.g., 24 months, Jan 2026 - Dec 2027' },
        { name: 'previous_grants', type: 'textarea', label: 'Previous Grants Received (if any)', maxlength: 500 },
        { name: 'publications', type: 'textarea', label: 'Publications/Credentials Summary', maxlength: 500 },
        { name: 'cv', type: 'file', label: 'CV Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone' }
      ],
      businessGrants: [
        { name: 'business_name', type: 'text', label: 'Business Name', required: true },
        { name: 'industry', type: 'select', label: 'Industry', required: true, options: ['Agriculture', 'Construction', 'Manufacturing', 'Technology', 'Healthcare', 'Retail', 'Services', 'Other'] },
        { name: 'business_stage', type: 'select', label: 'Business Stage', required: true, options: ['Startup (0-2 years)', 'Early-stage (2-5 years)', 'Growth (5-10 years)', 'Established (10+ years)'] },
        { name: 'years_operating', type: 'number', label: 'Years in Operation', required: true },
        { name: 'annual_revenue', type: 'select', label: 'Annual Revenue Range', required: true, options: ['Under $100K', '$100K-$500K', '$500K-$1M', '$1M-$5M', '$5M-$10M', 'Over $10M'] },
        { name: 'employees', type: 'number', label: 'Number of Employees', required: true },
        { name: 'ownership', type: 'checkbox', label: 'Ownership Structure (check all that apply)', options: ['Minority-Owned', 'Women-Owned', 'Veteran-Owned', 'None of the above'] },
        { name: 'grant_purpose', type: 'checkbox', label: 'Grant Purpose (check all that apply)', required: true, options: ['Business Expansion', 'R&D', 'Equipment Purchase', 'Working Capital', 'Marketing', 'Hiring', 'Other'] },
        { name: 'location', type: 'text', label: 'Business Location (City, State)', required: true },
        { name: 'funding_needed', type: 'number', label: 'Funding Amount Needed ($)', required: true },
        { name: 'business_plan', type: 'file', label: 'Business Plan/Executive Summary Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone', required: true }
      ],
      rfps: [
        { name: 'naics_codes', type: 'text', label: 'Primary NAICS Codes (comma-separated)', required: true, placeholder: 'e.g., 541511, 541512' },
        { name: 'gsa_schedule', type: 'select', label: 'GSA Schedule Status', options: ['Active', 'In Progress', 'Not Applicable'], required: true },
        { name: 'certifications', type: 'checkbox', label: 'Certifications (check all that apply)', options: ['8(a)', 'HUBZone', 'WOSB (Women-Owned Small Business)', 'SDVOSB (Service-Disabled Veteran-Owned)', 'SDB (Small Disadvantaged Business)', 'VOSB (Veteran-Owned)', 'None'] },
        { name: 'past_performance', type: 'textarea', label: 'Past Performance Summary', required: true, placeholder: 'Include contract numbers, values, and agencies worked with', maxlength: 1000 },
        { name: 'bonding_capacity', type: 'number', label: 'Bonding Capacity ($)' },
        { name: 'service_areas', type: 'text', label: 'Geographic Service Areas', required: true, placeholder: 'e.g., Texas, Louisiana, Oklahoma OR Nationwide' },
        { name: 'contract_size', type: 'checkbox', label: 'Contract Size Preference (check all that apply)', options: ['Micro (under $10K)', 'Small ($10K-$250K)', 'Medium ($250K-$5M)', 'Large ($5M+)'] },
        { name: 'capability_statement', type: 'file', label: 'Capability Statement Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone', required: true }
      ],
      boardSeats: [
        { name: 'executive_experience', type: 'textarea', label: 'Current/Recent Executive Experience', required: true, placeholder: 'List titles, companies, and years of service', maxlength: 1000 },
        { name: 'board_experience', type: 'textarea', label: 'Previous Board Experience (if any)', placeholder: 'Number of boards, types, years served', maxlength: 500 },
        { name: 'industry_expertise', type: 'checkbox', label: 'Industry Expertise (check all that apply)', required: true, options: ['Technology', 'Finance/Banking', 'Healthcare', 'Manufacturing', 'Retail/E-commerce', 'Energy', 'Real Estate', 'Nonprofit', 'Other'] },
        { name: 'functional_expertise', type: 'checkbox', label: 'Functional Expertise (check all that apply)', required: true, options: ['Finance/Audit', 'Technology/Digital', 'Legal/Compliance', 'Marketing/Sales', 'Operations', 'Human Resources', 'Strategy', 'Other'] },
        { name: 'board_preferences', type: 'checkbox', label: 'Board Type Preferences (check all that apply)', options: ['Startup', 'Growth-stage Private', 'Public Company', 'Nonprofit', 'Family Business'] },
        { name: 'compensation_pref', type: 'checkbox', label: 'Compensation Preference (check all that apply)', options: ['Paid (Cash)', 'Equity', 'Unpaid/Pro-bono', 'Flexible'] },
        { name: 'geographic_pref', type: 'text', label: 'Geographic Preferences (if any)' },
        { name: 'diversity_focus', type: 'text', label: 'Diversity/ESG Focus Areas (if any)' },
        { name: 'time_commitment', type: 'select', label: 'Monthly Time Commitment Available', options: ['5-10 hours', '10-20 hours', '20+ hours'] },
        { name: 'linkedin_url', type: 'url', label: 'LinkedIn Profile URL', required: true },
        { name: 'board_bio', type: 'file', label: 'Board Bio/Executive Summary Upload', accept: '.pdf,.docx', required: true },
        { name: 'email', type: 'email', label: 'Email', required: true },
        { name: 'phone', type: 'tel', label: 'Phone', required: true }
      ]
    };
    return fields[serviceType] || [];
  }

  createFormField(field) {
    let html = `<div class="form-group"><label for="${field.name}">${field.label}${field.required ? ' *' : ''}</label>`;
    
    switch(field.type) {
      case 'text':
      case 'email':
      case 'tel':
      case 'number':
      case 'url':
        html += `<input type="${field.type}" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.placeholder ? `placeholder="${field.placeholder}"` : ''} ${field.min !== undefined ? `min="${field.min}"` : ''} ${field.max !== undefined ? `max="${field.max}"` : ''} ${field.step ? `step="${field.step}"` : ''}>`;
        break;
      case 'textarea':
        html += `<textarea id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.maxlength ? `maxlength="${field.maxlength}"` : ''} ${field.placeholder ? `placeholder="${field.placeholder}"` : ''} rows="4"></textarea>`;
        if (field.maxlength) html += `<span class="char-count">0/${field.maxlength}</span>`;
        break;
      case 'select':
        html += `<select id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''}><option value="">-- Select --</option>`;
        field.options.forEach(opt => { html += `<option value="${opt}">${opt}</option>`; });
        html += `</select>`;
        break;
      case 'checkbox':
        field.options.forEach(opt => {
          html += `<div class="checkbox-option"><input type="checkbox" id="${field.name}_${opt}" name="${field.name}[]" value="${opt}"><label for="${field.name}_${opt}">${opt}</label></div>`;
        });
        break;
      case 'file':
        html += `<input type="file" id="${field.name}" name="${field.name}" ${field.required ? 'required' : ''} ${field.accept ? `accept="${field.accept}"` : ''}><small>Max file size: 5MB. Accepted formats: PDF, DOCX</small>`;
        break;
    }
    html += `<div class="error-message" id="${field.name}-error"></div></div>`;
    return html;
  }

  loadPricingTiers(serviceType) {
    const tiers = this.pricingTiers[serviceType];
    const container = document.getElementById('pricing-tiers');
    container.innerHTML = '';
    
    tiers.forEach(tier => {
      const tierCard = `<div class="pricing-tier ${tier.recommended ? 'recommended' : ''}" onclick="selectTier('${tier.name}', ${tier.price})">
        ${tier.recommended ? '<div class="recommended-badge">RECOMMENDED</div>' : ''}
        <h3 class="tier-name">${tier.name}</h3>
        ${tier.description ? `<p class="tier-description">${tier.description}</p>` : ''}
        <div class="tier-price">${tier.price}</div>
        <ul class="tier-features">${tier.features.map(f => `<li>${f}</li>`).join('')}</ul>
        <button class="select-tier-btn">Select This Tier</button>
      </div>`;
      container.innerHTML += tierCard;
    });
    
    this.loadAncillaryServices(serviceType);
  }

  selectTier(tierName, price) {
    this.appState.selectedTier = { name: tierName, price: price };
    document.querySelectorAll('.pricing-tier').forEach(el => el.classList.remove('selected'));
    event.currentTarget.classList.add('selected');
    this.calculateTotal();
  }

  loadAncillaryServices(serviceType) {
    const services = this.ancillaryServices[serviceType] || [];
    const universal = this.ancillaryServices.universal || [];
    const allServices = [...services, ...universal];
    const container = document.getElementById('ancillary-options');
    container.innerHTML = '';
    
    allServices.forEach(svc => {
      const priceDisplay = svc.priceHigh ? `$${svc.price}-$${svc.priceHigh}` : `$${svc.price}${svc.recurring ? `/${svc.recurring}` : ''}`;
      container.innerHTML += `<div class="ancillary-option">
        <input type="checkbox" id="${svc.id}" onchange="toggleAncillary('${svc.id}', ${svc.price}, '${svc.name}')">
        <label for="${svc.id}">
          <span class="service-name">${svc.name}</span>
          <span class="service-price">${priceDisplay}</span>
        </label>
      </div>`;
    });
  }

  toggleAncillary(id, price, name) {
    const checkbox = document.getElementById(id);
    if (checkbox.checked) {
      this.appState.selectedAncillary.push({ id, price, name });
    } else {
      this.appState.selectedAncillary = this.appState.selectedAncillary.filter(a => a.id !== id);
    }
    this.calculateTotal();
  }

  calculateTotal() {
    const tierPrice = this.appState.selectedTier ? this.appState.selectedTier.price : 0;
    const ancillaryTotal = this.appState.selectedAncillary.reduce((sum, a) => sum + a.price, 0);
    this.appState.totalPrice = tierPrice + ancillaryTotal;
    document.getElementById('running-total').textContent = `$${this.appState.totalPrice}`;
  }

  proceedToReview() {
    if (!this.appState.selectedTier) {
      alert('Please select a pricing tier first');
      return;
    }
    this.appState.currentStep = 4;
    this.hideAllSections();
    document.getElementById('review-section').style.display = 'block';
    document.getElementById('review-section').classList.add('active');
    this.updateProgress(4);
    this.displayOrderSummary();
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  displayOrderSummary() {
    const summary = document.getElementById('order-summary');
    const serviceNames = {
      jobs: 'Job Matching',
      scholarships: 'Educational Scholarships',
      educationalGrants: 'Educational Grants',
      businessGrants: 'Business Grants',
      rfps: 'Public Sector RFPs',
      boardSeats: 'Board Director Seats'
    };
    
    let html = `<div class="summary-section">
      <h3>Service Selected</h3>
      <p>${serviceNames[this.appState.selectedService]}</p>
    </div>
    <div class="summary-section">
      <h3>Tier Selected</h3>
      <p>${this.appState.selectedTier.name} - $${this.appState.selectedTier.price}</p>
    </div>
    <div class="summary-section">
      <h3>Your Information</h3>
      <ul>`;
    
    for (let [key, value] of Object.entries(this.appState.formData)) {
      if (!['resume', 'cv', 'business_plan', 'capability_statement', 'board_bio'].includes(key)) {
        html += `<li><strong>${this.formatFieldName(key)}:</strong> ${Array.isArray(value) ? value.join(', ') : value}</li>`;
      }
    }
    html += `</ul></div>`;
    
    if (this.appState.selectedAncillary.length > 0) {
      html += `<div class="summary-section"><h3>Add-On Services</h3><ul>`;
      this.appState.selectedAncillary.forEach(a => {
        html += `<li>${a.name} - $${a.price}</li>`;
      });
      html += `</ul></div>`;
    }
    
    html += `<div class="summary-section total-section">
      <h3>Total Investment</h3>
      <p class="total-price">$${this.appState.totalPrice}</p>
    </div>`;
    
    summary.innerHTML = html;
  }

  formatFieldName(key) {
    return key.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  }

  async submitOrder() {
    const btn = event.target;
    btn.disabled = true;
    btn.textContent = 'Submitting...';
    
    try {
      // Get the appropriate Netlify form based on service type
      let formName = `candlmatch-${this.appState.selectedService}`;
      if (this.appState.selectedService === 'educationalGrants') {
        formName = 'candlmatch-educational-grants';
      } else if (this.appState.selectedService === 'businessGrants') {
        formName = 'candlmatch-business-grants';
      } else if (this.appState.selectedService === 'boardSeats') {
        formName = 'candlmatch-board-seats';
      }
      
      const netlifyForm = document.querySelector(`form[name="${formName}"]`);
      
      if (!netlifyForm) {
        throw new Error(`Form not found: ${formName}`);
      }

      // Create FormData and populate with our collected data
      const formData = new FormData(netlifyForm);
      
      // Clear existing data and populate with our data
      for (let [key, value] of formData.entries()) {
        formData.delete(key);
      }
      
      // Add form identification
      formData.append('form-name', formName);
      formData.append('service-type', this.getServiceDisplayName(this.appState.selectedService));
      formData.append('selected_tier', JSON.stringify(this.appState.selectedTier));
      formData.append('ancillary_services', JSON.stringify(this.appState.selectedAncillary));
      formData.append('total_price', this.appState.totalPrice);

      // Add all collected form data
      for (let [key, value] of Object.entries(this.appState.formData)) {
        if (Array.isArray(value)) {
          formData.append(key, value.join(', '));
        } else {
          formData.append(key, value);
        }
      }

      // Handle file upload if present
      const fileInput = document.querySelector('#match-form input[type="file"]');
      if (fileInput && fileInput.files[0]) {
        const fileFieldName = fileInput.name;
        formData.append(fileFieldName, fileInput.files[0]);
      }

      // Submit to Netlify using the form's action or default
      const response = await fetch(netlifyForm.action || '/', {
        method: 'POST',
        body: formData
      });

      if (!response.ok) {
        throw new Error(`Submission failed: ${response.status}`);
      }

      // Generate order ID
      const orderId = 'CLM-' + this.appState.selectedService.toUpperCase().substring(0, 3) + '-' + Date.now().toString().slice(-6);
      
      this.hideAllSections();
      document.getElementById('progress-bar').style.display = 'none';
      document.getElementById('success-section').style.display = 'block';
      document.getElementById('success-section').classList.add('active');
      this.displayFinalOrderDetails(orderId);
      window.scrollTo({ top: 0, behavior: 'smooth' });
      
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was an error submitting your order. Please try again or contact us at match@candlstrategy.com');
      btn.disabled = false;
      btn.textContent = 'Submit Order';
    }
  }

  getServiceDisplayName(serviceType) {
    const names = {
      jobs: 'Job Matching',
      scholarships: 'Educational Scholarships',
      educationalGrants: 'Educational Grants',
      businessGrants: 'Business Grants',
      rfps: 'Public Sector RFPs',
      boardSeats: 'Board Director Seats'
    };
    return names[serviceType] || serviceType;
  }

  displayFinalOrderDetails(orderId) {
    const container = document.getElementById('final-order-details');
    const serviceNames = {
      jobs: 'Job Matching',
      scholarships: 'Educational Scholarships',
      educationalGrants: 'Educational Grants',
      businessGrants: 'Business Grants',
      rfps: 'Public Sector RFPs',
      boardSeats: 'Board Director Seats'
    };
    
    container.innerHTML = `
      <p><strong>Service:</strong> ${serviceNames[this.appState.selectedService]}</p>
      <p><strong>Tier:</strong> ${this.appState.selectedTier.name}</p>
      <p><strong>Total:</strong> $${this.appState.totalPrice}</p>
      <p><strong>Order ID:</strong> ${orderId}</p>
    `;
  }

  startOver() {
    this.appState = {
      currentStep: 1,
      selectedService: null,
      formData: {},
      selectedTier: null,
      selectedAncillary: [],
      totalPrice: 0
    };
    
    this.hideAllSections();
    document.getElementById('progress-bar').style.display = 'none';
    document.getElementById('service-selection').style.display = 'block';
    document.getElementById('service-selection').classList.add('active');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }
}

// Character count functionality for textareas
document.addEventListener('input', (e) => {
  if (e.target.tagName === 'TEXTAREA' && e.target.hasAttribute('maxlength')) {
    const charCount = e.target.parentElement.querySelector('.char-count');
    if (charCount) {
      charCount.textContent = `${e.target.value.length}/${e.target.getAttribute('maxlength')}`;
    }
  }
});

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
  new CandlMatchForm();

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