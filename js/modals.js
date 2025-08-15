// Modal functionality
document.addEventListener('DOMContentLoaded', function() {
    // Add modal functionality
    window.openModal = function(title, imageSrc) {
        // Create modal backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        
        // Create modal content
        const modal = document.createElement('div');
        modal.className = 'bg-white rounded-lg max-w-3xl w-full mx-4 overflow-hidden shadow-xl';
        
        // Modal header
        const header = document.createElement('div');
        header.className = 'flex items-center justify-between p-4 border-b';
        header.innerHTML = `
            <h3 class="text-lg font-medium">${title}</h3>
            <button class="text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        `;
        
        // Modal body
        const body = document.createElement('div');
        body.className = 'p-4';
        body.innerHTML = `<img src="${imageSrc}" alt="${title}" class="w-full h-auto">`;
        
        // Assemble modal
        modal.appendChild(header);
        modal.appendChild(body);
        backdrop.appendChild(modal);
        document.body.appendChild(backdrop);
        
        // Close button functionality
        header.querySelector('button').addEventListener('click', function() {
            document.body.removeChild(backdrop);
        });
        
        // Close on backdrop click
        backdrop.addEventListener('click', function(e) {
            if (e.target === backdrop) {
                document.body.removeChild(backdrop);
            }
        });
    };
    
    // Event Marketing Modal Function
    window.openEventModal = function(title, imageSrcs) {
        // Create modal backdrop
        const backdrop = document.createElement('div');
        backdrop.className = 'fixed inset-0 bg-black bg-opacity-50 z-50 flex items-center justify-center';
        
        // Create modal content
        const modal = document.createElement('div');
        modal.className = 'bg-white rounded-lg max-w-4xl w-full mx-4 overflow-hidden shadow-xl';
        
        // Modal header
        const header = document.createElement('div');
        header.className = 'flex items-center justify-between p-4 border-b';
        header.innerHTML = `
            <h3 class="text-lg font-medium">${title}</h3>
            <button class="text-gray-500 hover:text-gray-700">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
            </button>
        `;
        
        // Modal body
        const body = document.createElement('div');
        body.className = 'p-4';
        
        // Create image container
        const imageContainer = document.createElement('div');
        imageContainer.className = 'flex flex-col gap-4';
        
        // Add each image
        imageSrcs.forEach(src => {
            const imgWrapper = document.createElement('div');
            imgWrapper.className = 'w-full';
            imgWrapper.innerHTML = `<img src="${src}" alt="${title}" class="w-full h-auto rounded max-h-[600px] object-contain" onerror="this.onerror=null;this.src='images/eventmarketing.png'">`;
            imageContainer.appendChild(imgWrapper);
        });
        
        body.appendChild(imageContainer);
        
        // Assemble modal
        modal.appendChild(header);
        modal.appendChild(body);
        backdrop.appendChild(modal);
        document.body.appendChild(backdrop);
        
        // Close button functionality
        header.querySelector('button').addEventListener('click', function() {
            document.body.removeChild(backdrop);
        });
        
        // Close on backdrop click
        backdrop.addEventListener('click', function(e) {
            if (e.target === backdrop) {
                document.body.removeChild(backdrop);
            }
        });
    };
});