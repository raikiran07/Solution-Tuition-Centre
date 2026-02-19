// SPA Router for SOLUTION Tuition Centre Website
// Handles client-side routing without full page reloads

class SPARouter {
    constructor() {
        this.routes = {};
        this.currentPage = '';
        this.cache = {};
        this.init();
    }

    init() {
        // Register routes
        this.registerRoute('/', 'index.html');
        this.registerRoute('/index.html', 'index.html');
        this.registerRoute('/about.html', 'about.html');
        this.registerRoute('/programs.html', 'programs.html');
        this.registerRoute('/contact.html', 'contact.html');

        // Handle browser back/forward buttons
        window.addEventListener('popstate', (e) => {
            if (e.state && e.state.page) {
                this.loadPage(e.state.page, false);
            }
        });

        // Intercept all link clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('a');
            if (link && this.shouldIntercept(link)) {
                e.preventDefault();
                const href = link.getAttribute('href');
                this.navigate(href);
            }
        });

        // Load initial page
        const currentPath = window.location.pathname;
        const page = currentPath === '/' ? 'index.html' : currentPath.substring(1);
        this.loadPage(page, false);
    }

    registerRoute(path, page) {
        this.routes[path] = page;
    }

    shouldIntercept(link) {
        const href = link.getAttribute('href');
        
        // Don't intercept external links, anchors, tel, mailto, etc.
        if (!href || 
            href.startsWith('#') || 
            href.startsWith('tel:') || 
            href.startsWith('mailto:') || 
            href.startsWith('http://') || 
            href.startsWith('https://') ||
            href.startsWith('//') ||
            link.hasAttribute('target')) {
            return false;
        }

        // Only intercept HTML page links
        return href.endsWith('.html') || href === '/';
    }

    async navigate(href) {
        const page = href === '/' ? 'index.html' : href;
        
        // Update URL without reload
        window.history.pushState({ page }, '', href);
        
        // Load the page content
        await this.loadPage(page, true);
    }

    async loadPage(page, addToHistory = true) {
        if (this.currentPage === page) return;

        try {
            // Show loading state
            this.showLoadingState();

            // Fetch page content (use cache if available)
            let html;
            if (this.cache[page]) {
                html = this.cache[page];
            } else {
                const response = await fetch(page);
                if (!response.ok) throw new Error('Page not found');
                html = await response.text();
                this.cache[page] = html;
            }

            // Parse the HTML
            const parser = new DOMParser();
            const doc = parser.parseFromString(html, 'text/html');

            // Extract main content (everything except header and footer)
            const newContent = this.extractMainContent(doc);
            
            // Update the page
            this.updateContent(newContent);
            
            // Update active nav links
            this.updateActiveNav(page);
            
            // Update page title
            document.title = doc.title;

            // Update meta description
            const metaDesc = doc.querySelector('meta[name="description"]');
            if (metaDesc) {
                let existingMeta = document.querySelector('meta[name="description"]');
                if (existingMeta) {
                    existingMeta.setAttribute('content', metaDesc.getAttribute('content'));
                }
            }

            // Scroll to top smoothly
            window.scrollTo({ top: 0, behavior: 'smooth' });

            // Re-initialize page-specific scripts
            this.reinitializeScripts();

            // Apply current language
            if (typeof switchLanguage === 'function') {
                const currentLang = localStorage.getItem('language') || 'en';
                switchLanguage(currentLang);
            }

            this.currentPage = page;
            this.hideLoadingState();

        } catch (error) {
            console.error('Error loading page:', error);
            // Fallback to normal navigation
            window.location.href = page;
        }
    }

    extractMainContent(doc) {
        // Get all sections between header and footer
        const sections = [];
        const body = doc.body;
        let capturing = false;

        for (let child of body.children) {
            if (child.tagName === 'HEADER') {
                capturing = true;
                continue;
            }
            if (child.tagName === 'FOOTER') {
                break;
            }
            if (capturing && child.tagName !== 'SCRIPT') {
                sections.push(child.cloneNode(true));
            }
        }

        return sections;
    }

    updateContent(newSections) {
        const body = document.body;
        const header = body.querySelector('header');
        const footer = body.querySelector('footer');
        const whatsappFloat = body.querySelector('.whatsapp-float');

        // Remove all content between header and footer
        let current = header.nextElementSibling;
        while (current && current !== footer && current !== whatsappFloat) {
            const next = current.nextElementSibling;
            current.remove();
            current = next;
        }

        // Insert new content
        newSections.forEach(section => {
            body.insertBefore(section, footer);
        });
    }

    updateActiveNav(page) {
        // Remove all active classes
        document.querySelectorAll('.nav-menu a').forEach(link => {
            link.classList.remove('active');
        });

        // Add active class to current page
        const activeLink = document.querySelector(`.nav-menu a[href="${page}"]`) ||
                          document.querySelector(`.nav-menu a[href="/${page}"]`);
        if (activeLink) {
            activeLink.classList.add('active');
        }
    }

    reinitializeScripts() {
        // Reinitialize tab functionality
        const tabButtons = document.querySelectorAll('.tab-btn');
        const tabContents = document.querySelectorAll('.tab-content');

        tabButtons.forEach(button => {
            button.addEventListener('click', () => {
                const targetTab = button.getAttribute('data-tab');
                
                tabButtons.forEach(btn => btn.classList.remove('active'));
                tabContents.forEach(content => content.classList.remove('active'));
                
                button.classList.add('active');
                const targetContent = document.getElementById(targetTab);
                if (targetContent) {
                    targetContent.classList.add('active');
                }
            });
        });

        // Reinitialize testimonial slider
        if (typeof updateSlider === 'function') {
            updateSlider();
        }

        // Reinitialize form validation
        const contactForms = document.querySelectorAll('.contact-form');
        contactForms.forEach(form => {
            form.addEventListener('submit', (e) => {
                const phone = form.querySelector('#phone');
                const parentName = form.querySelector('#parent-name');
                const studentClass = form.querySelector('#class');
                
                let isValid = true;
                
                if (parentName && parentName.value.trim() === '') {
                    alert('Please enter parent\'s name');
                    parentName.focus();
                    isValid = false;
                    e.preventDefault();
                    return;
                }
                
                if (phone && phone.value.trim() === '') {
                    alert('Please enter phone number');
                    phone.focus();
                    isValid = false;
                    e.preventDefault();
                    return;
                }
                
                if (phone && !/^\d{10}$/.test(phone.value.replace(/\D/g, ''))) {
                    alert('Please enter a valid 10-digit phone number');
                    phone.focus();
                    isValid = false;
                    e.preventDefault();
                    return;
                }
                
                if (studentClass && studentClass.value === '') {
                    alert('Please select student\'s class');
                    studentClass.focus();
                    isValid = false;
                    e.preventDefault();
                    return;
                }
            });
        });

        // Reinitialize scroll animations
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

        document.querySelectorAll('.benefit-card, .testimonial-card, .step, .program-card, .value-card, .faculty-card').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });

        // Reinitialize smooth scroll for anchor links
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
                    }
                }
            });
        });
    }

    showLoadingState() {
        // Add a subtle loading indicator
        let loader = document.getElementById('page-loader');
        if (!loader) {
            loader = document.createElement('div');
            loader.id = 'page-loader';
            loader.style.cssText = `
                position: fixed;
                top: 0;
                left: 0;
                width: 100%;
                height: 3px;
                background: linear-gradient(90deg, var(--primary-blue), var(--secondary-orange));
                z-index: 9999;
                animation: loading 1s ease-in-out infinite;
            `;
            document.body.appendChild(loader);

            // Add animation
            const style = document.createElement('style');
            style.textContent = `
                @keyframes loading {
                    0% { transform: translateX(-100%); }
                    100% { transform: translateX(100%); }
                }
            `;
            document.head.appendChild(style);
        }
        loader.style.display = 'block';
    }

    hideLoadingState() {
        const loader = document.getElementById('page-loader');
        if (loader) {
            setTimeout(() => {
                loader.style.display = 'none';
            }, 300);
        }
    }
}

// Initialize router when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', () => {
        window.spaRouter = new SPARouter();
    });
} else {
    window.spaRouter = new SPARouter();
}
