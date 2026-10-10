// Le Labo Durable — comportements communs à toutes les pages
// (menu mobile, accordéons .accordion, apparition au défilement)
(function () {
    document.documentElement.classList.add('js');

    // Menu mobile
    const toggle = document.getElementById('navToggle');
    const links = document.getElementById('navLinks');
    if (toggle && links) {
        toggle.setAttribute('aria-controls', 'navLinks');
        toggle.setAttribute('aria-expanded', 'false');
        const setOpen = (open) => {
            toggle.classList.toggle('open', open);
            links.classList.toggle('open', open);
            toggle.setAttribute('aria-expanded', String(open));
        };
        toggle.addEventListener('click', () => setOpen(!links.classList.contains('open')));
        links.querySelectorAll('a').forEach((a) => a.addEventListener('click', () => setOpen(false)));
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') setOpen(false); });
        window.addEventListener('resize', () => { if (window.innerWidth > 960) setOpen(false); });
        // Lien de la page courante
        links.querySelectorAll('a.active').forEach((a) => a.setAttribute('aria-current', 'page'));
    }

    // Accordéons : un seul élément ouvert par accordéon
    document.querySelectorAll('.accordion-trigger').forEach((btn) => {
        if (!btn.hasAttribute('aria-expanded')) btn.setAttribute('aria-expanded', 'false');
        btn.addEventListener('click', () => {
            const item = btn.closest('.accordion-item');
            const content = item.querySelector('.accordion-content');
            const isOpen = item.classList.contains('open');
            item.parentElement.querySelectorAll('.accordion-item.open').forEach((sib) => {
                if (sib === item) return;
                sib.classList.remove('open');
                sib.querySelector('.accordion-content').style.maxHeight = null;
                sib.querySelector('.accordion-trigger').setAttribute('aria-expanded', 'false');
            });
            item.classList.toggle('open', !isOpen);
            content.style.maxHeight = isOpen ? null : content.scrollHeight + 'px';
            btn.setAttribute('aria-expanded', String(!isOpen));
        });
    });

    // Apparition au défilement (le contenu reste visible sans JS)
    const els = document.querySelectorAll('.fade-up');
    if ('IntersectionObserver' in window) {
        const io = new IntersectionObserver((entries) => {
            entries.forEach((e) => {
                if (e.isIntersecting) { e.target.classList.add('visible'); io.unobserve(e.target); }
            });
        }, { threshold: 0.08, rootMargin: '0px 0px -40px 0px' });
        els.forEach((el) => io.observe(el));
    } else {
        els.forEach((el) => el.classList.add('visible'));
    }
})();
