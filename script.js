/* ============================================
   PERSONAL WEBSITE — SCRIPT
   黃喻琦
   ============================================ */

// ─── Clock ────────────────────────────────────
function updateClock() {
    const now = new Date();

    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const seconds = String(now.getSeconds()).padStart(2, '0');

    // Hero clock
    const clockHours = document.getElementById('clockHours');
    const clockMinutes = document.getElementById('clockMinutes');
    const clockSeconds = document.getElementById('clockSeconds');
    const clockDate = document.getElementById('clockDate');

    if (clockHours) clockHours.textContent = hours;
    if (clockMinutes) clockMinutes.textContent = minutes;
    if (clockSeconds) clockSeconds.textContent = seconds;

    // Date display
    const days = ['日', '一', '二', '三', '四', '五', '六'];
    const year = now.getFullYear();
    const month = now.getMonth() + 1;
    const date = now.getDate();
    const day = days[now.getDay()];
    const dateStr = `${year}年${month}月${date}日 星期${day}`;
    if (clockDate) clockDate.textContent = dateStr;

    // Nav time
    const navTime = document.getElementById('navTime');
    if (navTime) navTime.textContent = `${hours}:${minutes}:${seconds}`;

    // Footer time
    const footerTime = document.getElementById('footerTime');
    if (footerTime) footerTime.textContent = `${dateStr} ${hours}:${minutes}`;
}

updateClock();
setInterval(updateClock, 1000);


// ─── Cursor Glow ──────────────────────────────
const cursorGlow = document.getElementById('cursorGlow');
let mouseX = 0, mouseY = 0;
let glowX = 0, glowY = 0;

document.addEventListener('mousemove', (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
});

function animateGlow() {
    glowX += (mouseX - glowX) * 0.08;
    glowY += (mouseY - glowY) * 0.08;
    if (cursorGlow) {
        cursorGlow.style.left = glowX + 'px';
        cursorGlow.style.top = glowY + 'px';
    }
    requestAnimationFrame(animateGlow);
}
animateGlow();


// ─── Scroll Reveal ────────────────────────────
function initReveal() {
    const revealElements = document.querySelectorAll(
        '.section-label, .about-heading, .about-text, .about-stats, ' +
        '.contact-heading, .contact-text, .contact-btn'
    );

    revealElements.forEach(el => el.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    });

    revealElements.forEach(el => observer.observe(el));
}

initReveal();


// ─── Active Nav Link ──────────────────────────
function updateActiveNav() {
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const id = entry.target.getAttribute('id');
                navLinks.forEach(link => {
                    link.classList.toggle('active', link.dataset.section === id);
                });
            }
        });
    }, {
        threshold: 0.3,
        rootMargin: '-100px 0px -100px 0px'
    });

    sections.forEach(section => observer.observe(section));
}

updateActiveNav();


// ─── Counter Animation ────────────────────────
function animateCounters() {
    const counters = document.querySelectorAll('.stat-number[data-count]');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const el = entry.target;
                const target = el.getAttribute('data-count');

                if (target === '∞' || target === '1') {
                    el.textContent = target;
                    return;
                }

                const targetNum = parseInt(target);
                if (isNaN(targetNum)) return;

                let current = 0;
                const increment = targetNum / 60;
                const duration = 2000;
                const stepTime = duration / 60;

                const timer = setInterval(() => {
                    current += increment;
                    if (current >= targetNum) {
                        current = targetNum;
                        clearInterval(timer);
                    }
                    el.textContent = Math.floor(current);
                }, stepTime);

                observer.unobserve(el);
            }
        });
    }, { threshold: 0.5 });

    counters.forEach(counter => observer.observe(counter));
}

animateCounters();


// ─── Smooth Scroll for Nav Links ──────────────
document.querySelectorAll('.nav-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const targetId = link.getAttribute('href').substring(1);
        const targetEl = document.getElementById(targetId);
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    });
});


// ─── Hamburger Menu Toggle ────────────────────
const hamburger = document.getElementById('hamburger');
const mobileMenu = document.getElementById('mobileMenu');

if (hamburger && mobileMenu) {
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        mobileMenu.classList.toggle('active');
        document.body.style.overflow = mobileMenu.classList.contains('active') ? 'hidden' : '';
    });

    // Close menu when a mobile link is clicked
    document.querySelectorAll('.mobile-link').forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetEl = document.getElementById(targetId);

            hamburger.classList.remove('active');
            mobileMenu.classList.remove('active');
            document.body.style.overflow = '';

            if (targetEl) {
                setTimeout(() => {
                    targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 300);
            }
        });
    });
}


// ─── Mobile Time Update ───────────────────────
function updateMobileTime() {
    const mobileTime = document.getElementById('mobileTime');
    if (mobileTime) {
        const now = new Date();
        const hours = String(now.getHours()).padStart(2, '0');
        const minutes = String(now.getMinutes()).padStart(2, '0');
        const seconds = String(now.getSeconds()).padStart(2, '0');
        mobileTime.textContent = `${hours} : ${minutes} : ${seconds}`;
    }
}
setInterval(updateMobileTime, 1000);
updateMobileTime();


// ─── Parallax on Hero Decorations ─────────────
let ticking = false;

window.addEventListener('scroll', () => {
    if (!ticking) {
        requestAnimationFrame(() => {
            const scrollY = window.scrollY;
            const circles = document.querySelectorAll('.deco-circle');

            circles.forEach((circle, i) => {
                const speed = (i + 1) * 0.05;
                circle.style.transform = `translate(-50%, calc(-50% + ${scrollY * speed}px))`;
            });

            // Fade hero on scroll
            const hero = document.querySelector('.hero-content');
            if (hero) {
                const opacity = Math.max(0, 1 - scrollY / 600);
                hero.style.opacity = opacity;
                hero.style.transform = `translateY(${scrollY * 0.15}px)`;
            }

            ticking = false;
        });
        ticking = true;
    }
});


// ─── Page Load Animation ──────────────────────
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    document.body.style.transition = 'opacity 0.6s ease';
    requestAnimationFrame(() => {
        document.body.style.opacity = '1';
    });
});
