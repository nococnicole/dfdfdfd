// Main JavaScript functionality

document.addEventListener('DOMContentLoaded', function() {
    // Mobile menu toggle
    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');
    
    mobileMenuButton.addEventListener('click', function() {
        mobileMenu.classList.toggle('hidden');
    });
    
    // Close mobile menu when clicking on a link
    const mobileLinks = mobileMenu.querySelectorAll('a');
    mobileLinks.forEach(link => {
        link.addEventListener('click', function() {
            mobileMenu.classList.add('hidden');
        });
    });
    
    // Flag to track if a portfolio item is selected
    window.portfolioItemSelected = false;
    
    // Intersection Observer for section fade animations
    const sections = document.querySelectorAll('.section-fade');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            // Skip processing if this is the About section and a portfolio item is selected
            if (entry.target.id === 'about' && window.portfolioItemSelected) {
                return; // Don't change visibility state at all
            }
            
            // Always add 'visible' class when section comes into view
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
            // For sections going out of view
            else {
                entry.target.classList.remove('visible');
            }
        });
    }, { threshold: 0.1 });
    
    sections.forEach(section => {
        observer.observe(section);
    });
});