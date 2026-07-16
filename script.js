document.addEventListener('DOMContentLoaded', () => {
    const envelopeWrapper = document.getElementById('envelopeWrapper');
    const particlesContainer = document.getElementById('particles');
    const invitationScroll = document.getElementById('invitationScroll');
    const attendanceForm = document.getElementById('attendanceForm');
    const scrollButtons = document.querySelectorAll('[data-scroll-next]');

    let countdownTimer = null;

    envelopeWrapper.addEventListener('click', () => {
        document.body.classList.add('invitation-open');
        startCountdown();
    });

    scrollButtons.forEach((button) => {
        button.addEventListener('click', () => {
            invitationScroll.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
        });
    });

    if (attendanceForm) {
        attendanceForm.addEventListener('submit', (event) => {
            event.preventDefault();
            alert('Teşekkür ederiz! Katılım bilginiz alındı.');
            attendanceForm.reset();
        });
    }

    function startCountdown() {
        if (countdownTimer) return;

        const targetDate = new Date('2026-08-23T19:00:00+03:00').getTime();
        const daysEl = document.getElementById('days');
        const hoursEl = document.getElementById('hours');
        const minutesEl = document.getElementById('minutes');

        function updateCountdown() {
            const distance = targetDate - Date.now();

            if (distance <= 0) {
                daysEl.textContent = '00';
                hoursEl.textContent = '00';
                minutesEl.textContent = '00';
                clearInterval(countdownTimer);
                countdownTimer = null;
                return;
            }

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

            daysEl.textContent = String(days).padStart(2, '0');
            hoursEl.textContent = String(hours).padStart(2, '0');
            minutesEl.textContent = String(minutes).padStart(2, '0');
        }

        updateCountdown();
        countdownTimer = setInterval(updateCountdown, 1000);
    }

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