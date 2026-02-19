// Mobile Menu Toggle
const mobileMenuToggle = document.querySelector('.mobile-menu-toggle');
const navMenu = document.querySelector('.nav-menu');
const navActions = document.querySelector('.nav-actions');

if (mobileMenuToggle) {
    mobileMenuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        if (navActions) {
            navActions.classList.toggle('active');
        }
        const icon = mobileMenuToggle.querySelector('i');
        if (navMenu.classList.contains('active')) {
            icon.classList.remove('fa-bars');
            icon.classList.add('fa-times');
        } else {
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
}

// Close mobile menu when clicking outside
document.addEventListener('click', (e) => {
    if (navMenu && navMenu.classList.contains('active')) {
        if (!e.target.closest('.nav-container')) {
            navMenu.classList.remove('active');
            if (navActions) {
                navActions.classList.remove('active');
            }
            const icon = mobileMenuToggle.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    }
});

// Programs Tab Functionality
const tabButtons = document.querySelectorAll('.tab-btn');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        const targetTab = button.getAttribute('data-tab');
        
        // Remove active class from all buttons and contents
        tabButtons.forEach(btn => btn.classList.remove('active'));
        tabContents.forEach(content => content.classList.remove('active'));
        
        // Add active class to clicked button and corresponding content
        button.classList.add('active');
        document.getElementById(targetTab).classList.add('active');
    });
});

// Testimonial Slider
let currentSlide = 0;
const testimonialCards = document.querySelectorAll('.testimonial-card');
const prevBtn = document.querySelector('.slider-btn.prev');
const nextBtn = document.querySelector('.slider-btn.next');

function updateSlider() {
    const cards = document.querySelectorAll('.testimonial-card');
    if (cards.length === 0) return;
    
    // Hide all cards
    cards.forEach(card => {
        card.style.display = 'none';
    });
    
    // Show cards based on screen size
    const screenWidth = window.innerWidth;
    let cardsToShow = 3;
    
    if (screenWidth < 768) {
        cardsToShow = 1;
    } else if (screenWidth < 1024) {
        cardsToShow = 2;
    }
    
    // Show the appropriate cards
    for (let i = 0; i < cardsToShow; i++) {
        const index = (currentSlide + i) % cards.length;
        cards[index].style.display = 'block';
    }
}

// Make updateSlider globally accessible for router
window.updateSlider = updateSlider;

if (prevBtn && nextBtn) {
    prevBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.testimonial-card');
        currentSlide = (currentSlide - 1 + cards.length) % cards.length;
        updateSlider();
    });

    nextBtn.addEventListener('click', () => {
        const cards = document.querySelectorAll('.testimonial-card');
        currentSlide = (currentSlide + 1) % cards.length;
        updateSlider();
    });

    // Initialize slider
    updateSlider();

    // Update on window resize
    window.addEventListener('resize', updateSlider);
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href !== '') {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
                
                // Close mobile menu if open
                if (navMenu && navMenu.classList.contains('active')) {
                    navMenu.classList.remove('active');
                    const icon = mobileMenuToggle.querySelector('i');
                    icon.classList.remove('fa-times');
                    icon.classList.add('fa-bars');
                }
            }
        }
    });
});

// Form Validation
const contactForms = document.querySelectorAll('.contact-form');

contactForms.forEach(form => {
    form.addEventListener('submit', (e) => {
        const phone = form.querySelector('#phone');
        const parentName = form.querySelector('#parent-name');
        const studentClass = form.querySelector('#class');
        
        let isValid = true;
        
        // Validate parent name
        if (parentName && parentName.value.trim() === '') {
            alert('Please enter parent\'s name');
            parentName.focus();
            isValid = false;
            e.preventDefault();
            return;
        }
        
        // Validate phone number
        if (phone && phone.value.trim() === '') {
            alert('Please enter phone number');
            phone.focus();
            isValid = false;
            e.preventDefault();
            return;
        }
        
        // Basic phone validation (10 digits)
        if (phone && !/^\d{10}$/.test(phone.value.replace(/\D/g, ''))) {
            alert('Please enter a valid 10-digit phone number');
            phone.focus();
            isValid = false;
            e.preventDefault();
            return;
        }
        
        // Validate class selection
        if (studentClass && studentClass.value === '') {
            alert('Please select student\'s class');
            studentClass.focus();
            isValid = false;
            e.preventDefault();
            return;
        }
        
        if (isValid) {
            // Show success message (you can customize this)
            console.log('Form submitted successfully');
        }
    });
});

// Lazy Loading Images
if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                if (img.dataset.src) {
                    img.src = img.dataset.src;
                    img.removeAttribute('data-src');
                }
                observer.unobserve(img);
            }
        });
    });

    document.querySelectorAll('img[data-src]').forEach(img => {
        imageObserver.observe(img);
    });
}

// Add animation on scroll
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

// Observe elements for animation
document.querySelectorAll('.benefit-card, .testimonial-card, .step, .program-card, .value-card, .faculty-card').forEach(el => {
    el.style.opacity = '0';
    el.style.transform = 'translateY(20px)';
    el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    observer.observe(el);
});

// Header scroll effect
let lastScroll = 0;
const header = document.querySelector('.header');

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;
    
    if (currentScroll > 100) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 10px rgba(0, 0, 0, 0.1)';
    }
    
    lastScroll = currentScroll;
});


// Language Switcher
let currentLanguage = localStorage.getItem('language') || 'en';

function switchLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Update all elements with data-en and data-as attributes
    document.querySelectorAll('[data-en][data-as]').forEach(element => {
        const englishText = element.getAttribute('data-en');
        const assameseText = element.getAttribute('data-as');
        
        if (lang === 'as') {
            element.textContent = assameseText;
        } else {
            element.textContent = englishText;
        }
    });
    
    // Update language button text
    const currentLangSpan = document.getElementById('currentLang');
    if (currentLangSpan) {
        currentLangSpan.textContent = lang === 'en' ? 'অসমীয়া' : 'English';
    }
    
    // Update HTML lang attribute
    document.documentElement.lang = lang === 'en' ? 'en' : 'as';
}

// Make switchLanguage globally accessible for router
window.switchLanguage = switchLanguage;

// Language toggle button
const languageToggle = document.getElementById('languageToggle');
if (languageToggle) {
    languageToggle.addEventListener('click', () => {
        const newLang = currentLanguage === 'en' ? 'as' : 'en';
        switchLanguage(newLang);
    });
}

// Initialize language on page load
document.addEventListener('DOMContentLoaded', () => {
    switchLanguage(currentLanguage);
});
