document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニューの制御
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    function toggleMenu() {
        const isOpening = !navMenu.classList.contains('active');
        navMenu.classList.toggle('active');
        mobileMenuBtn.classList.toggle('active');
        menuOverlay.classList.toggle('active');
        document.body.style.overflow = isOpening ? 'hidden' : '';
    }

    mobileMenuBtn.addEventListener('click', toggleMenu);

    // メニュー外クリックで閉じる
    menuOverlay.addEventListener('click', () => {
        toggleMenu(false);
    });

    // メニューリンククリック時にメニューを閉じる
    document.querySelectorAll('.nav-menu a').forEach(link => {
        link.addEventListener('click', () => {
            toggleMenu(false);
        });
    });

    // アニメーション効果の追加
    const sections = document.querySelectorAll('section');
    
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = 1;
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        section.style.opacity = 0;
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    // Simple animation on scroll for .animate elements
    const animateElements = document.querySelectorAll('.animate');
    
    function checkIfInView() {
        animateElements.forEach(element => {
            const elementTop = element.getBoundingClientRect().top;
            const elementVisible = 150;
            
            if (elementTop < window.innerHeight - elementVisible) {
                element.style.opacity = '1';
                element.style.transform = 'translateY(0)';
            }
        });
    }
    
    // Set initial state for animations
    animateElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(20px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
    });
    
    // Check if elements are in view on load and scroll
    window.addEventListener('scroll', checkIfInView);
    window.addEventListener('resize', checkIfInView);
    checkIfInView();
});

// Smooth scroll for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        if (targetId === '#') return;
        
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});
