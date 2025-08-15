// Typewriter animation for header
document.addEventListener('DOMContentLoaded', function() {
    const typewriterElement = document.getElementById('typewriter-text');
    const phrases = [
        "Nicole Annen",
        "Full Stack Marketing Pro",
        "Brand Building for B2B",
        "Artist by Night, Marketing Unicorn by Day",
        "Creating a Signal that Shines Through The Noise"
    ];
    
    let phraseIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let isWaiting = false;
    let typingSpeed = 100; // Base typing speed in ms
    const promptText = ":> ";
    
    function typeWriter() {
        const currentPhrase = phrases[phraseIndex];
        
        if (isWaiting) {
            // If we're in waiting mode (showing complete phrase), do nothing until wait time is over
            return;
        }
        
        if (isDeleting) {
            // Deleting mode
            charIndex--;
            typingSpeed = 50; // Faster when deleting
        } else {
            // Typing mode
            charIndex++;
            typingSpeed = 100; // Normal speed when typing
        }
        
        // Set the text with the prompt and the current portion of the phrase
        typewriterElement.textContent = promptText + currentPhrase.substring(0, charIndex);
        
        // Check if we've completed typing the phrase
        if (!isDeleting && charIndex === currentPhrase.length) {
            // Complete phrase typed, start waiting period
            isWaiting = true;
            setTimeout(() => {
                isWaiting = false;
                isDeleting = true;
                typeWriter(); // Continue with deletion after wait
            }, 4000); // Wait 4 seconds before deleting
            return;
        }
        
        // Check if we've completed deleting the phrase
        if (isDeleting && charIndex === 0) {
            isDeleting = false;
            phraseIndex = (phraseIndex + 1) % phrases.length; // Move to next phrase
        }
        
        // Schedule the next update
        if (!isWaiting) {
            setTimeout(typeWriter, typingSpeed);
        }
    }
    
    // Start with just the prompt
    typewriterElement.textContent = promptText;
    
    // Start the animation after a short delay
    setTimeout(typeWriter, 1000);
});