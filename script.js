document.addEventListener('DOMContentLoaded', () => {
    const isMobile = window.innerWidth <= 768 || 'ontouchstart' in window;

    // ===== STARFIELD =====
    const canvas = document.getElementById('starfield');
    if (canvas) {
        const ctx = canvas.getContext('2d');
        let stars = [];
        function resize() { canvas.width = window.innerWidth; canvas.height = window.innerHeight; }
        resize();
        window.addEventListener('resize', resize);

        class Star {
            constructor() { this.reset(); }
            reset() {
                this.x = Math.random() * canvas.width;
                this.y = Math.random() * canvas.height;
                this.size = Math.random() * 1.5 + 0.3;
                this.speed = Math.random() * 0.3 + 0.05;
                this.opacity = Math.random() * 0.6 + 0.1;
                this.pulse = Math.random() * Math.PI * 2;
            }
            update() {
                this.y += this.speed;
                this.pulse += 0.015;
                if (this.y > canvas.height) { this.y = 0; this.x = Math.random() * canvas.width; }
            }
            draw() {
                const o = this.opacity + Math.sin(this.pulse) * 0.2;
                ctx.beginPath();
                ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
                ctx.fillStyle = `rgba(140,130,255,${Math.max(0.05, o)})`;
                ctx.fill();
            }
        }

        const count = Math.min(150, Math.floor(canvas.width * canvas.height / 8000));
        for (let i = 0; i < count; i++) stars.push(new Star());

        // Draw connecting lines for nearby stars
        function drawConnections() {
            for (let i = 0; i < stars.length; i++) {
                for (let j = i + 1; j < stars.length; j++) {
                    const dx = stars[i].x - stars[j].x;
                    const dy = stars[i].y - stars[j].y;
                    const d = dx * dx + dy * dy;
                    if (d < 8000) {
                        ctx.beginPath();
                        ctx.strokeStyle = `rgba(108,99,255,${0.04 * (1 - d / 8000)})`;
                        ctx.lineWidth = 0.5;
                        ctx.moveTo(stars[i].x, stars[i].y);
                        ctx.lineTo(stars[j].x, stars[j].y);
                        ctx.stroke();
                    }
                }
            }
        }

        function animate() {
            ctx.clearRect(0, 0, canvas.width, canvas.height);
            stars.forEach(s => { s.update(); s.draw(); });
            drawConnections();
            requestAnimationFrame(animate);
        }
        animate();
    }

    // ===== MOUSE GLOW =====
    if (!isMobile) {
        const glow = document.getElementById('mouse-glow');
        if (glow) {
            document.addEventListener('mousemove', e => {
                glow.style.left = e.clientX + 'px';
                glow.style.top = e.clientY + 'px';
            });
        }
    }

    // ===== NAVBAR =====
    const navbar = document.getElementById('navbar');
    const scrollProgress = document.getElementById('scroll-progress');

    window.addEventListener('scroll', () => {
        const scrollY = window.scrollY;
        navbar.classList.toggle('scrolled', scrollY > 50);

        if (scrollProgress) {
            const max = document.documentElement.scrollHeight - window.innerHeight;
            scrollProgress.style.width = (scrollY / max * 100) + '%';
        }
    });

    // ===== MOBILE NAV =====
    const navToggle = document.getElementById('nav-toggle');
    const navLinks = document.getElementById('nav-links');
    if (navToggle) {
        navToggle.addEventListener('click', () => {
            navToggle.classList.toggle('active');
            navLinks.classList.toggle('active');
        });
    }

    // ===== SMOOTH SCROLL =====
    document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
            e.preventDefault();
            const t = document.querySelector(a.getAttribute('href'));
            if (t) {
                t.scrollIntoView({ behavior: 'smooth' });
                if (navLinks) navLinks.classList.remove('active');
                if (navToggle) navToggle.classList.remove('active');
            }
        });
    });

    // ===== SCROLL REVEAL =====
    const reveals = document.querySelectorAll('.reveal-up');
    const revealObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObs.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: '0px 0px -30px 0px' });
    reveals.forEach(el => revealObs.observe(el));

    // Auto-trigger hero elements
    setTimeout(() => {
        document.querySelectorAll('.hero .reveal-up').forEach(el => el.classList.add('visible'));
    }, 200);

    // ===== COUNTER ANIMATION =====
    const statNums = document.querySelectorAll('.stat-num');
    const counterObs = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = parseInt(el.dataset.target);
                let current = 0;
                const step = Math.ceil(target / 30);
                const timer = setInterval(() => {
                    current += step;
                    if (current >= target) { current = target; clearInterval(timer); }
                    el.textContent = current;
                }, 40);
                counterObs.unobserve(el);
            }
        });
    }, { threshold: 0.5 });
    statNums.forEach(el => counterObs.observe(el));

    // ===== 3D TILT ON CARDS =====
    if (!isMobile) {
        document.querySelectorAll('[data-tilt]').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = (e.clientX - rect.left) / rect.width - 0.5;
                const y = (e.clientY - rect.top) / rect.height - 0.5;
                card.style.transform = `perspective(800px) rotateX(${y * -6}deg) rotateY(${x * 6}deg)`;
            });
            card.addEventListener('mouseleave', () => {
                card.style.transform = 'perspective(800px) rotateX(0) rotateY(0)';
                card.style.transition = 'transform 0.5s ease';
            });
            card.addEventListener('mouseenter', () => {
                card.style.transition = 'none';
            });
        });
    }
});
