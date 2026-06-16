document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const hintText = document.getElementById('hintText');
    const particlesContainer = document.getElementById('particles');

    // Tıklanınca Açılma / Kapanma
    envelopeWrapper.addEventListener('click', (e) => {
        if (e.target.closest('.action-zone')) return; // Butona tıklanınca zarf kapanmasın

        envelopeWrapper.classList.toggle('open');
        
        if (envelopeWrapper.classList.contains('open')) {
            hintText.style.display = 'none';
        } else {
            hintText.style.display = 'block';
        }
    });

    // Hafif Parıltı Efekt Algoritması
    function createParticle() {
        if (!particlesContainer) return;
        const particle = document.createElement('div');
        particle.classList.add('particle');
        
        const size = Math.random() * 3 + 2; 
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;
        particle.style.left = `${Math.random() * 100}vw`;
        
        const duration = Math.random() * 5 + 5;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
        setTimeout(() => { particle.remove(); }, duration * 1000);
    }
    setInterval(createParticle, 200);
});