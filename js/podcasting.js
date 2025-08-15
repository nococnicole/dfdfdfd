// Podcasting content
document.addEventListener('DOMContentLoaded', function() {
    // Podcasts
    const driveBaseUrl = "https://drive.google.com/drive/folders/1IylYd79sJjAZ5zKekyLZzQCJL3EvF1zO";
    const podcastList = document.getElementById('podcast-list');
    
    if (podcastList) {
        [
            { name: "Dashboard Effect Ep. 1: Data Visualization", url: driveBaseUrl },
            { name: "Dashboard Effect Ep. 2: Business Intelligence", url: driveBaseUrl },
            { name: "Dashboard Effect Ep. 3: Data-Driven Decision Making", url: driveBaseUrl }
        ].forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2 p-2 border-b";
            li.innerHTML = `
                <img src="https://img.icons8.com/color/24/000000/microphone.png" alt="Podcast" class="w-6 h-6" />
                <a href="${item.url}" target="_blank" class="hover:text-primary text-base">${item.name}</a>
            `;
            podcastList.appendChild(li);
        });
    }
});