// Portfolio functionality
document.addEventListener('DOMContentLoaded', function() {
    // Category cards functionality
    const categoryCards = document.querySelectorAll('.category-card');
    const categoryContents = document.querySelectorAll('.category-content');
    const backButton = document.getElementById('back-to-categories');
    // Use a more specific selector to target only the grid in the portfolio section
    const portfolioCardsContainer = document.querySelector('#portfolio .grid');
    
    // Add click event to category cards
    categoryCards.forEach(card => {
        card.addEventListener('click', () => {
            const category = card.getAttribute('data-category');
            
            // Set flag to indicate a portfolio item is selected
            window.portfolioItemSelected = true;
            
            // Hide all cards
            portfolioCardsContainer.classList.add('hidden');
            
            // Hide all category contents
            categoryContents.forEach(content => {
                content.classList.add('hidden');
            });
            
            // Show selected category content
            document.getElementById(`${category}-content`).classList.remove('hidden');
            
            // Show back button
            backButton.classList.remove('hidden');
            
            // Ensure About section remains visible by removing it from Intersection Observer
            const aboutSection = document.getElementById('about');
            if (aboutSection) {
                // Add visible class
                aboutSection.classList.add('visible');
                
                // Add a style attribute to force visibility regardless of other classes
                aboutSection.style.opacity = '1';
                aboutSection.style.transform = 'translateY(0)';
            }
            
            // No scrolling to content
            // document.getElementById(`${category}-content`).scrollIntoView({ behavior: 'smooth' });
        });
    });
    
    // Back button functionality
    backButton.addEventListener('click', () => {
        // Reset flag when returning to main view
        window.portfolioItemSelected = false;
        
        // Hide all category contents
        categoryContents.forEach(content => {
            content.classList.add('hidden');
        });
        
        // Show all cards
        portfolioCardsContainer.classList.remove('hidden');
        
        // Hide back button
        backButton.classList.add('hidden');
        
        // Make sure all sections are visible when returning to main view
        document.querySelectorAll('.section-fade').forEach(section => {
            section.classList.add('visible');
            
            // Remove any inline styles we added
            if (section.id === 'about') {
                section.style.opacity = '';
                section.style.transform = '';
            }
        });
        
        // No scrolling to portfolio section
        // document.getElementById('portfolio').scrollIntoView({ behavior: 'smooth' });
    });
});