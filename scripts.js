document.addEventListener('DOMContentLoaded', function() {
    // Add a typing effect to the main heading
    const terminalText = document.querySelector('h1.terminal-text');
    if (terminalText) {
        const originalText = terminalText.textContent;
        terminalText.textContent = '';
        let i = 0;
        
        function typeWriter() {
            if (i < originalText.length) {
                terminalText.textContent += originalText.charAt(i);
                i++;
                setTimeout(typeWriter, 100);
            }
        }
        
        typeWriter();
    }
    
    // Add data-text attribute to card titles for glitch effect
    document.querySelectorAll('.card-title.terminal-text').forEach(title => {
        title.setAttribute('data-text', title.textContent);
    });
    
    // Add scroll reveal effect to sections
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });
    
    sections.forEach(section => {
        section.classList.add('reveal-section');
        observer.observe(section);
    });
    
    // Add terminal boot sequence effect
    function simulateTerminalBoot() {
        const bootSequence = [
            '> Initializing KAPSULE showcase...',
            '> Loading project data...',
            '> Establishing secure connection...',
            '> Retrieving project assets...',
            '> Rendering interface...',
            '> KAPSULE terminal activated. Welcome.'
        ];
        
        const bootOverlay = document.createElement('div');
        bootOverlay.className = 'boot-overlay';
        bootOverlay.innerHTML = '<div class="boot-content"><div class="boot-text"></div></div>';
        document.body.appendChild(bootOverlay);
        
        const bootText = document.querySelector('.boot-text');
        let lineIndex = 0;
        
        function typeLine() {
            if (lineIndex < bootSequence.length) {
                const line = document.createElement('div');
                line.className = 'boot-line';
                bootText.appendChild(line);
                
                let charIndex = 0;
                
                function typeChar() {
                    if (charIndex < bootSequence[lineIndex].length) {
                        line.textContent += bootSequence[lineIndex].charAt(charIndex);
                        charIndex++;
                        setTimeout(typeChar, 30);
                    } else {
                        lineIndex++;
                        setTimeout(typeLine, 500);
                    }
                }
                
                typeChar();
            } else {
                setTimeout(() => {
                    bootOverlay.style.opacity = '0';
                    setTimeout(() => {
                        bootOverlay.remove();
                    }, 1000);
                }, 500);
            }
        }
        
        // Add delay before starting boot sequence
        setTimeout(typeLine, 500);
    }
    
    // Add CSS for boot sequence
    const bootStyle = document.createElement('style');
    bootStyle.textContent = `
        .boot-overlay {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: #000;
            z-index: 9999;
            display: flex;
            justify-content: center;
            align-items: center;
            transition: opacity 1s ease;
        }
        
        .boot-content {
            max-width: 80%;
            font-family: 'Share Tech Mono', monospace;
            color: #0cce6b;
        }
        
        .boot-line {
            margin-bottom: 10px;
            white-space: nowrap;
        }
        
        .reveal-section {
            opacity: 0;
            transform: translateY(20px);
            transition: opacity 0.8s ease, transform 0.8s ease;
        }
        
        .reveal-section.visible {
            opacity: 1;
            transform: translateY(0);
        }
    `;
    
    document.head.appendChild(bootStyle);
    
    // Start boot sequence
    simulateTerminalBoot();
    
    // Add smooth scrolling for navigation
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - 70,
                    behavior: 'smooth'
                });
            }
        });
    });
}); 