// Portfolio content loading
document.addEventListener('DOMContentLoaded', function() {
    const driveBaseUrl = "https://drive.google.com/drive/folders/1IylYd79sJjAZ5zKekyLZzQCJL3EvF1zO";
    
    // Digital Marketing - Videos
    const videosList = document.getElementById('videos-list');
    if (videosList) {
        videosList.className = "grid grid-cols-1 md:grid-cols-2 gap-4";
        
        [
            {
                name: "Private Equity - Blue Margin Promo",
                url: "https://www.youtube.com/watch?v=aehQFf3euU8",
                img: "images/f1vid.png"
            },
            {
                name: "BitCoin Node Assembly - TikTok",
                url: "https://drive.google.com/file/d/1nMj9pAk_7vDhCjf9eWmy7Uwdbp6s20kk/view",
                img: "images/node.png"
            },
            {
                name: "VMware Explore - Tradeshow Booth Loop",
                url: "https://drive.google.com/file/d/1Tt3CXlcGNJZDKj5ZzjHfedUq_juWPkCw/view",
                img: "images/vmware.png"
            },
            {
                name: "Bolt.new Promo - Linkedin Personal Branding",
                url: "https://drive.google.com/file/d/1-Q_amga5bijbqqPPyuTmR_CEBcOpY1cT/view?usp=drive_link",
                img: "images/boltnew.png"
            }
        ].forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-3 border rounded-lg p-3 shadow-sm hover:shadow-md transition-all";
            li.innerHTML = `
                <div class="flex-shrink-0">
                    <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />
                </div>
                <div class="flex-grow">
                    <a href="${item.url}" target="_blank" class="hover:text-primary text-base font-medium">${item.name}</a>
                </div>
            `;
            videosList.appendChild(li);
        });
        
        // Add "More videos on LinkedIn" link
        const moreVideosContainer = document.createElement('div');
        moreVideosContainer.className = "mt-6 col-span-1 md:col-span-2";
        moreVideosContainer.innerHTML = `
            <a href="https://linkedin.com/in/nicoleannen" target="_blank" class="flex items-center gap-2 hover:text-primary">
                <svg class="w-5 h-5" fill="#9ac5b1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512">
                    <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z"/>
                </svg>
                <span class="text-base">More videos on LinkedIn</span>
            </a>
        `;
        videosList.appendChild(moreVideosContainer);
    }
    
    // Digital Marketing - Social Media
    const socialMediaList = document.getElementById('social-media-list');
    if (socialMediaList) {
        [
            {
                name: "Managed Data Services 2024 Campaign",
                img: "images/MDA125.png"
            },
            {
                name: "Spadafy VDI Managed Services Campaign",
                img: "images/vdi-li.png"
            },
            {
                name: "ValueTech Group - Bitcoin Conference Campaign",
                img: "images/btc23.png"
            }
        ].forEach((item, index) => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2 p-2 border-b cursor-pointer";
            li.setAttribute('data-modal-target', `social-modal-${index}`);
            li.innerHTML = `
                <img src="images/icons8-linkedin.svg" alt="LinkedIn" class="w-6 h-6" />
                <span class="hover:text-primary text-base">${item.name}</span>
            `;
            li.addEventListener('click', function() {
                openModal(item.name, item.img);
            });
            socialMediaList.appendChild(li);
        });
    }
    
    // Digital Marketing - Slides
    const slidesList = document.getElementById('slides-list');
    if (slidesList) {
        [
            {
                name: "Managed Data Services Base Slides",
                url: "https://drive.google.com/file/d/16nnRKl7SEoFqmzDNw57b8yq4nmF46HQj/view?usp=drive_link",
                img: "images/mds.png"
            },
            {
                name: "Future of Digital Assets Congressional Presentation",
                url: "https://docs.google.com/presentation/d/1V2E9XLU-ERiiuTg1Sxmt5t0t8aGVueAv/edit?usp=drive_link&ouid=111114964086462007418&rtpof=true&sd=true",
                img: "images/digitalassets.png"
            },
            {
                name: "Identity Overview Template",
                url: "https://docs.google.com/presentation/d/1icfcWjo03vJgLDnBIXhCq1CbvMdZnurS/edit?usp=drive_link&ouid=111114964086462007418&rtpof=true&sd=true",
                img: "images/identity.png"
            }
        ].forEach(item => {
            const li = document.createElement('li');
            li.className = "flex items-center gap-2 p-2 border-b";
            li.innerHTML = `
                <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />
                <a href="${item.url}" target="_blank" class="hover:text-primary text-base">${item.name}</a>
            `;
            slidesList.appendChild(li);
        });
    }
    
    // Digital Marketing - Guides
    const guidesList = document.getElementById('guides-list');
    if (guidesList) {
        [
            {
                name: "2024 AI Guide",
                url: "https://drive.google.com/file/d/1zTBTn6UJAIm4rW4GRch2JoaIzTIaNglf/view?usp=drive_link",
                img: "images/2024aiguide.png",
                summary: "My 2024 AI Data Guide showcases our expertise in AI data prep, overcoming challenges with strategic solutions that boost mid-market success, innovation, and readiness for generative AI tools."
            },
            {
                name: "Blue Margin Buyers Guide 2024",
                url: "https://drive.google.com/file/d/16ZQ89Sjg-XFWe0G40ZFmoQRRO3bOdDPU/view?usp=drive_link",
                img: "images/buyersguide.png",
                summary: "In my 2024 Blue Margin Data Services Buyer's Guide, I distilled data management for mid-market firms, showing how my strategies, backed by case studies like a 30% production boost, drive efficiency and growth."
            },
            {
                name: "Playbook for Data Intelligence in Private Equity's New Era",
                url: "https://drive.google.com/file/d/1bG6l7nzDViM4-ZyUuJq_WkvugvbKQq8W/view?usp=drive_link",
                img: "images/playbook-pe.png",
                summary: "In my 2024 PE Data Intelligence Guide, I highlighted data intelligence as key to private equity success, showing how my strategies boost efficiency and growth for mid-market firms. Through case studies, I demonstrated my ability to turn data challenges into valuable opportunities for PE portfolios."
            }
        ].forEach(item => {
            const li = document.createElement('li');
            li.className = "border rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer";
            
            // Make the entire card clickable
            li.onclick = function() {
                window.open(item.url, '_blank');
            };
            
            li.innerHTML = `
                <div class="p-3">
                    <div class="flex items-center gap-2">
                        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />
                        <h4 class="text-base font-medium font-heading text-black">${item.name}</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-2">${item.summary}</p>
                </div>
            `;
            guidesList.appendChild(li);
        });
    }
});