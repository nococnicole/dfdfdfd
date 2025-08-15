// Event Marketing and One Pagers content
document.addEventListener('DOMContentLoaded', function() {
    // Event Marketing
    const eventMarketingList = document.getElementById('event-marketing-list');
    if (eventMarketingList) {
        eventMarketingList.className = "grid grid-cols-1 md:grid-cols-3 gap-4 list-none";
        
        [
            {
                name: "Spadafy Booth Design",
                img: "images/spadbooth1.png",
                modalImages: ["images/spadbooth1.png"],
                summary: "Booth design for Spadafy at industry conferences, showcasing their VDI managed services."
            },
            {
                name: "Blue Margin Banner Design",
                img: "images/bluem-confsign.png",
                modalImages: ["images/bluem-confsign.png"],
                summary: "Banner design for Blue Margin's conference presence, highlighting their data intelligence services."
            },
            {
                name: "Value Technology Alliance Booth Design",
                img: "images/ValueTechBooth.jpg",
                modalImages: ["images/ValueTechBooth.jpg"],
                summary: "Booth design for Value Technology Alliance at blockchain and cryptocurrency conferences."
            }
        ].forEach((item, index) => {
            const li = document.createElement('li');
            li.className = "rounded-lg bg-white shadow-sm hover:shadow-md transition-all cursor-pointer";
            li.setAttribute('data-modal-target', `event-modal-${index}`);
            
            // Make the entire card clickable
            li.addEventListener('click', function() {
                openEventModal(item.name, item.modalImages);
            });
            
            li.innerHTML = `
                <div class="p-3">
                    <div class="flex items-center gap-2">
                        <img src="${item.img}" alt="${item.name}" class="w-12 h-12 object-cover rounded" />
                        <h4 class="text-base font-medium font-heading text-black">${item.name}</h4>
                    </div>
                    <p class="text-xs text-gray-600 mt-2">${item.summary}</p>
                </div>
            `;
            eventMarketingList.appendChild(li);
        });
    }
    
    // One Pagers
    const onePagerslist = document.getElementById('one-pagers-list');
    if (onePagerslist) {
        onePagerslist.className = "grid grid-cols-1 md:grid-cols-3 gap-4 list-none";
        
        [
            {
                name: "Blue Margin 2025",
                url: "https://drive.google.com/file/d/1LsO96yiQwFwL50u8afOWnSKq3NeAJ3eQ/view",
                img: "images/bm1pg01.png",
                summary: "Overview of Blue Margin's services and vision for 2025."
            },
            {
                name: "Service Tiers Overview",
                url: "https://drive.google.com/file/d/1biVgETD62nIzqrAYx82UjvG9wd3I2SkW/view",
                img: "images/bm1pg02.png",
                summary: "Comprehensive breakdown of Blue Margin's service tier offerings."
            },
            {
                name: "Blue Margin Wrapped",
                url: "https://drive.google.com/file/d/1Gh30MHX7qmC8CgmqBEWDzGyKjGEl9ljf/view",
                img: "images/bmwrapped1pg.png",
                summary: "Annual summary of Blue Margin's achievements and milestones."
            },
            {
                name: "BM Case Study",
                url: "https://drive.google.com/file/d/1v6EFACscOBbcYTEzSGjw83knwqH1tSSk/view?usp=drive_link",
                img: "images/pin1pg.png",
                summary: "Detailed case study showcasing Blue Margin's successful client implementation."
            },
            {
                name: "Hedera April 2024",
                url: "https://drive.google.com/file/d/1PmGrHFr2PRAmLQWj7FLJ1puvwO8DJ2s4/view",
                img: "images/hedera1pg.png",
                summary: "Overview of Hedera blockchain technology and applications as of April 2024."
            },
            {
                name: "Spadafy VDI Managed Services",
                url: "https://drive.google.com/file/d/1gaP-AU0tWmLBBAr4yAuIjG3blwy8oFLL/view",
                img: "images/spad1pg.png",
                summary: "Comprehensive overview of Spadafy's VDI Managed Services offerings."
            }
        ].forEach(item => {
            const li = document.createElement('div');
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
            onePagerslist.appendChild(li);
        });
    }
});