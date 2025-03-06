document.addEventListener('DOMContentLoaded', () => {
    const projects = [
        {
            id: 'minigame',
            title: 'This Minigame Idea Does Not Exist',
            description: 'AI-generated minigame concepts brought to life.',
            url: 'https://websim.ai/@api/this-minigame-idea-does-not-exist',
            thumbnail: 'minigame'
        },
        {
            id: 'programming-language',
            title: 'This Programming Language Does Not Exist',
            description: 'Fictional programming languages with unique syntax and features.',
            url: 'https://websim.ai/@api/this-programming-language-does-not-exist',
            thumbnail: 'programming'
        },
        {
            id: 'date',
            title: 'This Date Does Not Exist',
            description: 'Generate fictitious calendar dates with imaginary events.',
            url: 'https://websim.ai/@api/this-date-does-not-exist',
            thumbnail: 'date'
        },
        {
            id: 'soda',
            title: 'This Soda Does Not Exist',
            description: 'Virtual soda flavors that have never been bottled.',
            url: 'https://websim.ai/@api/this-soda-does-not-exist',
            thumbnail: 'soda'
        },
        {
            id: 'cat',
            title: 'This Cat Does Not Exist',
            description: 'Playful virtual cats with unique personalities.',
            url: 'https://websim.ai/@api/this-cat-does-not-exist',
            thumbnail: 'cat'
        },
        {
            id: 'wireframe',
            title: 'This Wireframe Does Not Exist',
            description: 'AI-generated UI wireframes for non-existent applications.',
            url: 'https://websim.ai/@api/this-wireframe-does-not-exist/1',
            thumbnail: 'wireframe'
        },
        {
            id: 'arcade',
            title: 'This Classic Arcade Game Does Not Exist',
            description: 'Nostalgic arcade games from an alternate universe.',
            url: 'https://websim.ai/@api/this-classic-arcade-game-does-not-exist/',
            thumbnail: 'arcade'
        },
        {
            id: 'cartoon',
            title: 'This Slideshow Cartoon Does Not Exist',
            description: 'AI-generated cartoons that never aired on TV.',
            url: 'https://websim.ai/@api/this-slideshow-cartoon-does-not-exist',
            thumbnail: 'cartoon'
        },
        {
            id: 'fridge',
            title: 'This Fridge Does Not Exist',
            description: 'Virtual refrigerators with imaginary contents and features.',
            url: 'https://websim.ai/@api/this-fridge-does-not-exist/',
            thumbnail: 'fridge'
        },
        {
            id: 'planet',
            title: 'This Planet Does Not Exist',
            description: 'Explore fictional planets with unique characteristics.',
            url: 'https://websim.ai/@api/this-planet-does-not-exist',
            thumbnail: 'planet'
        },
        {
            id: 'tetris',
            title: 'This Tetris Game Does Not Exist',
            description: 'Tetris variants with unexpected twists and mechanics.',
            url: 'https://websim.ai/@api/this-tetris-game-does-not-exist',
            thumbnail: 'tetris'
        },
        {
            id: 'snake',
            title: 'This Snake Game Does Not Exist',
            description: 'Snake game variations that slither beyond the original.',
            url: 'https://websim.ai/@api/this-snake-game-does-not-exist',
            thumbnail: 'snake'
        }
    ];

    const projectsGrid = document.getElementById('projectsGrid');
    const fullscreenOverlay = document.getElementById('fullscreenOverlay');
    const projectFrame = document.getElementById('projectFrame');
    const projectTitle = document.getElementById('projectTitle');
    const closeFullscreen = document.getElementById('closeFullscreen');

    // Generate SVG colors for thumbnails
    const thumbnailColors = {
        minigame: ['#FF6B6B', '#4ECDC4'],
        programming: ['#6A0572', '#AB83A1'],
        date: ['#FC5C7D', '#6A82FB'],
        soda: ['#FF9A8B', '#FF6A88'],
        cat: ['#FDBB2D', '#22C1C3'],
        wireframe: ['#667EEA', '#764BA2'],
        arcade: ['#FF0099', '#493240'],
        cartoon: ['#FF416C', '#FF4B2B'],
        fridge: ['#004FF9', '#FFF94C'],
        planet: ['#2E3192', '#1BFFFF'],
        tetris: ['#A770EF', '#CF8BF3'],
        snake: ['#11998E', '#38EF7D']
    };

    // Create project cards
    projects.forEach(project => {
        const card = document.createElement('div');
        card.className = 'project-card';
        card.setAttribute('data-url', project.url);
        card.setAttribute('data-title', project.title);

        // Generate a simple SVG pattern as thumbnail
        const colors = thumbnailColors[project.thumbnail];
        const svgPattern = generateThumbnailSVG(project.id, colors[0], colors[1]);
        
        card.innerHTML = `
            <div class="project-preview" style="background-image: url('data:image/svg+xml;utf8,${encodeURIComponent(svgPattern)}')"></div>
            <div class="project-info">
                <h3 class="project-title">${project.title}</h3>
                <p class="project-description">${project.description}</p>
            </div>
            <div class="prompt-badge">
                <div class="prompt-icon">1</div>
                <span class="prompt-text">prompt</span>
            </div>
        `;

        card.addEventListener('click', () => {
            openFullscreen(project.url, project.title);
        });

        projectsGrid.appendChild(card);
    });

    // Function to generate SVG thumbnails
    function generateThumbnailSVG(id, color1, color2) {
        // Different patterns based on project id
        let pattern;
        
        switch(id) {
            case 'minigame':
                pattern = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${color1}" />
                                <stop offset="100%" stop-color="${color2}" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#g1)" />
                        <circle cx="75" cy="100" r="30" fill="white" opacity="0.7" />
                        <circle cx="225" cy="100" r="30" fill="white" opacity="0.7" />
                        <rect x="125" y="85" width="50" height="30" rx="5" fill="white" opacity="0.7" />
                    </svg>
                `;
                break;
            case 'programming-language':
                pattern = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${color1}" />
                                <stop offset="100%" stop-color="${color2}" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#g1)" />
                        <rect x="50" y="50" width="200" height="100" rx="5" fill="white" opacity="0.2" />
                        <text x="70" y="85" font-family="monospace" font-size="12" fill="white">function main() {</text>
                        <text x="90" y="105" font-family="monospace" font-size="12" fill="white">return code;</text>
                        <text x="70" y="125" font-family="monospace" font-size="12" fill="white">}</text>
                    </svg>
                `;
                break;
            case 'date':
                pattern = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${color1}" />
                                <stop offset="100%" stop-color="${color2}" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#g1)" />
                        <rect x="75" y="50" width="150" height="100" rx="5" fill="white" opacity="0.7" />
                        <line x1="75" y1="80" x2="225" y2="80" stroke="black" opacity="0.5" />
                        <text x="150" y="70" font-family="Arial" font-size="14" text-anchor="middle" fill="black">CALENDAR</text>
                        <circle cx="100" cy="105" r="10" fill="${color1}" opacity="0.8" />
                        <circle cx="150" cy="105" r="10" fill="${color1}" opacity="0.8" />
                        <circle cx="200" cy="105" r="10" fill="${color1}" opacity="0.8" />
                        <circle cx="100" cy="135" r="10" fill="${color1}" opacity="0.8" />
                        <circle cx="150" cy="135" r="10" fill="${color1}" opacity="0.8" />
                        <circle cx="200" cy="135" r="10" fill="${color1}" opacity="0.8" />
                    </svg>
                `;
                break;
            case 'soda':
                pattern = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${color1}" />
                                <stop offset="100%" stop-color="${color2}" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#g1)" />
                        <path d="M125,50 L175,50 L185,170 L115,170 Z" fill="white" opacity="0.7" />
                        <ellipse cx="150" cy="50" rx="25" ry="5" fill="white" opacity="0.7" />
                        <ellipse cx="150" cy="170" rx="35" ry="5" fill="white" opacity="0.7" />
                        <circle cx="150" cy="100" r="20" fill="${color1}" opacity="0.5" />
                        <circle cx="155" cy="90" r="3" fill="white" opacity="0.8" />
                        <circle cx="160" cy="110" r="2" fill="white" opacity="0.8" />
                        <circle cx="140" cy="105" r="4" fill="white" opacity="0.8" />
                    </svg>
                `;
                break;
            // And so on for other patterns...
            default:
                pattern = `
                    <svg xmlns="http://www.w3.org/2000/svg" width="300" height="200" viewBox="0 0 300 200">
                        <defs>
                            <linearGradient id="g1" x1="0%" y1="0%" x2="100%" y2="100%">
                                <stop offset="0%" stop-color="${color1}" />
                                <stop offset="100%" stop-color="${color2}" />
                            </linearGradient>
                        </defs>
                        <rect width="100%" height="100%" fill="url(#g1)" />
                        <circle cx="150" cy="100" r="50" fill="white" opacity="0.3" />
                        <circle cx="150" cy="100" r="30" fill="white" opacity="0.3" />
                    </svg>
                `;
        }
        
        return pattern;
    }

    // Open fullscreen iframe
    function openFullscreen(url, title) {
        projectFrame.src = url;
        projectTitle.textContent = title;
        fullscreenOverlay.style.display = 'flex';
        document.body.style.overflow = 'hidden';
    }

    // Close fullscreen
    closeFullscreen.addEventListener('click', () => {
        fullscreenOverlay.style.display = 'none';
        document.body.style.overflow = 'auto';
        setTimeout(() => {
            projectFrame.src = '';
        }, 300);
    });

    // Close on escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && fullscreenOverlay.style.display === 'flex') {
            closeFullscreen.click();
        }
    });

    // Prevent body scrolling when overlay is active
    fullscreenOverlay.addEventListener('touchmove', (e) => {
        e.preventDefault();
    }, { passive: false });
});

