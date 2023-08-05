const text = document.querySelector('.particle-text h1');
const particles = [];
const particleCount = 150;

function createParticle() {
    const particle = document.createElement('span');
    particle.classList.add('particle');
    particle.innerHTML = '*';
    document.body.appendChild(particle);
    particles.push(particle);
}

function animateParticles() {
    particles.forEach((particle) => {
        particle.style.left = Math.random() * window.innerWidth + 'px';
        particle.style.top = Math.random() * window.innerHeight + 'px';
        particle.style.animationDuration = Math.random() * 3 + 2 + 's';
        particle.style.fontSize = Math.random() * 10 + 8 + 'px';
    });
}

function removeParticles() {
    particles.forEach((particle) => {
        particle.remove();
    });
    particles.length = 0;
}

text.addEventListener('mouseover', () => {
    for (let i = 0; i < particleCount; i++) {
        createParticle();
    }
    animateParticles();
});

text.addEventListener('mouseout', () => {
    removeParticles();
});
