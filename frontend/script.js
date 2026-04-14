document.addEventListener('DOMContentLoaded', () => {
    // Scroll Animation Observer for 'fade-in' elements
    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.1
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    document.querySelectorAll('.fade-in').forEach(el => {
        observer.observe(el);
    });

    // Dynamic Navigation Highlighting
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('nav a').forEach(link => {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    // Handle Ticker duplicates for infinite loop
    const ticker = document.querySelector('.ticker');
    if (ticker) {
        const children = Array.from(ticker.children);
        children.forEach(child => {
            const clone = child.cloneNode(true);
            ticker.appendChild(clone);
        });
    }

    // Typewriter effect
    const typewriters = document.querySelectorAll('.typewriter');
    typewriters.forEach(el => {
        const text = el.getAttribute('data-text');
        el.textContent = '';
        let i = 0;
        setTimeout(() => {
            const interval = setInterval(() => {
                if (i < text.length) {
                    el.textContent += text.charAt(i);
                    i++;
                } else {
                    clearInterval(interval);
                }
            }, 30); // typing speed
        }, 800); // initial delay
    });
});
