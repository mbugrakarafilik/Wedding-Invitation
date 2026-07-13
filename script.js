document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const returnBtn = document.getElementById('returnBtn');
    const particlesContainer = document.getElementById('particles');

    envelopeWrapper.addEventListener('click', () => {
        document.body.classList.add('invitation-open');
    });

    returnBtn.addEventListener('click', () => {
        document.body.classList.remove('invitation-open');
    });

    function createParticle() {
        if (!particlesContainer || document.body.classList.contains('invitation-open')) return;

        const particle = document.createElement('div');
        particle.classList.add('particle');

        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;

        const duration = Math.random() * 5 + 5;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
        setTimeout(() => {
            particle.remove();
        }, duration * 1000);
    }

    setInterval(createParticle, 220);
});
