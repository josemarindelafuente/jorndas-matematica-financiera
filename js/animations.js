// Animación para el texto del header
document.addEventListener('DOMContentLoaded', function() {
    const header = document.querySelector('.bg-gradient-custom');
    const title = header.querySelector('h1');
    const subtitle = header.querySelector('h2');
    const description = header.querySelector('.lead');

    // Función para animar el texto letra por letra
    function animateText(element, delay = 0) {
        const text = element.textContent;
        element.textContent = '';
        element.style.opacity = '1';
        
        let i = 0;
        const interval = setInterval(() => {
            if (i < text.length) {
                element.textContent += text.charAt(i);
                i++;
            } else {
                clearInterval(interval);
            }
        }, 50);
    }

    // Función para crear el efecto de partículas
    function createParticles() {
        const particlesContainer = document.createElement('div');
        particlesContainer.className = 'particles-container';
        header.appendChild(particlesContainer);

        for (let i = 0; i < 50; i++) {
            const particle = document.createElement('div');
            particle.className = 'particle';
            particlesContainer.appendChild(particle);

            // Posición aleatoria
            const x = Math.random() * 100;
            const y = Math.random() * 100;
            const size = Math.random() * 3 + 1;
            const duration = Math.random() * 20 + 10;

            particle.style.cssText = `
                left: ${x}%;
                top: ${y}%;
                width: ${size}px;
                height: ${size}px;
                animation-duration: ${duration}s;
            `;
        }
    }

    // Iniciar animaciones
    setTimeout(() => {
        title.style.opacity = '0';
        subtitle.style.opacity = '0';
        description.style.opacity = '0';

        setTimeout(() => {
            animateText(title);
            setTimeout(() => {
                animateText(subtitle);
                setTimeout(() => {
                    animateText(description);
                }, 500);
            }, 500);
        }, 100);
    }, 500);

    // Crear partículas
    createParticles();
}); 