/**
 * Shared animation utilities for the portfolio site
 * Uses GSAP + ScrollTrigger
 */

(function () {
    'use strict';

    // Respect user preference for reduced motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);

    /**
     * Split text into word spans for stagger animations
     */
    function splitWords(element) {
        const text = element.textContent;
        const words = text.split(/\s+/);
        element.innerHTML = words
            .map(word => `<span class="word" style="display:inline-block;"><span class="word-inner" style="display:inline-block;">${word}</span></span>`)
            .join(' ');
        return element.querySelectorAll('.word-inner');
    }

    /**
     * Header: hide on scroll down, show on scroll up
     */
    function initHeaderBehavior() {
        const header = document.querySelector('header');
        if (!header) return;

        let lastScrollY = 0;

        ScrollTrigger.create({
            start: 'top -80',
            onUpdate: (self) => {
                const currentScrollY = self.scroll();
                if (currentScrollY > lastScrollY && currentScrollY > 120) {
                    // Scrolling down
                    gsap.to(header, { y: -100, duration: 0.3, ease: 'power2.out' });
                } else {
                    // Scrolling up
                    gsap.to(header, { y: 0, duration: 0.3, ease: 'power2.out' });
                }
                lastScrollY = currentScrollY;
            }
        });
    }

    /**
     * Scroll reveal: fade-up elements as they enter viewport
     */
    function initScrollReveal() {
        const revealElements = document.querySelectorAll('[data-reveal]');
        if (!revealElements.length) return;

        // Set initial states
        gsap.set(revealElements, { y: 50, opacity: 0 });

        // Batch reveal for staggered effect
        ScrollTrigger.batch(revealElements, {
            onEnter: (batch) => {
                gsap.to(batch, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    stagger: 0.12,
                    overwrite: true
                });
            },
            start: 'top 88%'
        });
    }

    /**
     * Hero text: stagger words on page load
     */
    function initHeroReveal() {
        const heroH1 = document.querySelector('.hero h1');
        if (!heroH1) return;

        const words = splitWords(heroH1);

        gsap.set(heroH1, { visibility: 'visible' });
        gsap.from(words, {
            y: 40,
            opacity: 0,
            duration: 0.7,
            ease: 'power3.out',
            stagger: 0.06,
            delay: 0.2
        });
    }

    /**
     * Image reveal: clip-path wipe on scroll
     */
    function initImageReveal() {
        const fullImages = document.querySelectorAll('.image-full');
        const gridImages = document.querySelectorAll('.image-grid img');

        if (fullImages.length) {
            fullImages.forEach(img => {
                gsap.set(img, { clipPath: 'inset(0 0 100% 0)' });
                gsap.to(img, {
                    clipPath: 'inset(0 0 0% 0)',
                    duration: 1,
                    ease: 'power3.inOut',
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }

        if (gridImages.length) {
            gridImages.forEach((img, i) => {
                gsap.set(img, { y: 40, opacity: 0 });
                gsap.to(img, {
                    y: 0,
                    opacity: 1,
                    duration: 0.8,
                    ease: 'power3.out',
                    delay: (i % 2) * 0.15,
                    scrollTrigger: {
                        trigger: img,
                        start: 'top 85%',
                        toggleActions: 'play none none none'
                    }
                });
            });
        }
    }

    /**
     * Project header: animate title, subtitle, metadata on load
     */
    function initProjectHeaderReveal() {
        const header = document.querySelector('.project-header');
        if (!header) return;

        const title = header.querySelector('h1');
        const subtitle = header.querySelector('.project-subtitle');
        const backLink = header.querySelector('.back-link');
        const details = header.querySelectorAll('.project-detail');

        const tl = gsap.timeline({ delay: 0.15 });

        if (backLink) {
            gsap.set(backLink, { opacity: 0, x: -20 });
            tl.to(backLink, { opacity: 1, x: 0, duration: 0.5, ease: 'power3.out' });
        }

        if (title) {
            gsap.set(title, { opacity: 0, y: 30 });
            tl.to(title, { opacity: 1, y: 0, duration: 0.6, ease: 'power3.out' }, '-=0.3');
        }

        if (subtitle) {
            gsap.set(subtitle, { opacity: 0, y: 20 });
            tl.to(subtitle, { opacity: 1, y: 0, duration: 0.5, ease: 'power3.out' }, '-=0.3');
        }

        if (details.length) {
            gsap.set(details, { opacity: 0, y: 15 });
            tl.to(details, {
                opacity: 1, y: 0, duration: 0.5,
                ease: 'power3.out', stagger: 0.08
            }, '-=0.2');
        }
    }

    /**
     * Image text blocks: fade up on scroll
     */
    function initImageTextReveal() {
        const textBlocks = document.querySelectorAll('.image-text');
        if (!textBlocks.length) return;

        textBlocks.forEach(block => {
            gsap.set(block, { y: 30, opacity: 0 });
            gsap.to(block, {
                y: 0,
                opacity: 1,
                duration: 0.7,
                ease: 'power3.out',
                scrollTrigger: {
                    trigger: block,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                }
            });
        });
    }

    /**
     * Project nav: fade in on scroll
     */
    function initProjectNavReveal() {
        const projectNav = document.querySelector('.project-nav');
        if (!projectNav) return;

        gsap.set(projectNav, { y: 20, opacity: 0 });
        gsap.to(projectNav, {
            y: 0,
            opacity: 1,
            duration: 0.6,
            ease: 'power3.out',
            scrollTrigger: {
                trigger: projectNav,
                start: 'top 90%',
                toggleActions: 'play none none none'
            }
        });
    }

    /**
     * Image parallax: subtle vertical offset tied to scroll
     */
    function initImageParallax() {
        const projectImages = document.querySelectorAll('.project-image img');
        if (!projectImages.length) return;

        projectImages.forEach(img => {
            // Scale up slightly so there's room for parallax movement
            gsap.set(img, { scale: 1.08 });
            gsap.fromTo(img, {
                yPercent: -4
            }, {
                yPercent: 4,
                ease: 'none',
                scrollTrigger: {
                    trigger: img.parentElement,
                    start: 'top bottom',
                    end: 'bottom top',
                    scrub: 0.5
                }
            });
        });
    }

    /**
     * Initialize all animations based on page context
     */
    function init() {
        if (prefersReducedMotion) return;

        // Shared across all pages
        initHeaderBehavior();
        initScrollReveal();

        // Home page specific
        initHeroReveal();
        initImageParallax();

        // Project page specific
        initProjectHeaderReveal();
        initImageReveal();
        initImageTextReveal();
        initProjectNavReveal();

        // Refresh ScrollTrigger after all images load
        window.addEventListener('load', () => {
            ScrollTrigger.refresh();
        });
    }

    // Run on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
