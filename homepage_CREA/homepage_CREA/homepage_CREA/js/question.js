document.addEventListener('DOMContentLoaded', function() {
    // モバイルメニューの機能
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navMenu = document.querySelector('.nav-menu');
    const menuOverlay = document.querySelector('.menu-overlay');

    mobileMenuBtn?.addEventListener('click', function() {
        this.classList.toggle('active');
        navMenu?.classList.toggle('active');
        menuOverlay?.classList.toggle('active');
    });

    menuOverlay?.addEventListener('click', function() {
        mobileMenuBtn?.classList.remove('active');
        navMenu?.classList.remove('active');
        this.classList.remove('active');
    });

    // FAQ機能の実装
    const categoryButtons = document.querySelectorAll('.category-btn');
    const faqLists = document.querySelectorAll('.faq-list');
    const faqItems = document.querySelectorAll('.faq-item');

    // カテゴリー切り替え
    categoryButtons.forEach(button => {
        button.addEventListener('click', () => {
            const category = button.dataset.category;
            
            // ボタンのアクティブ状態を更新
            categoryButtons.forEach(btn => btn.classList.remove('active'));
            button.classList.add('active');

            // FAQ リストの表示/非表示を切り替え
            faqLists.forEach(list => {
                if (list.id === category) {
                    list.classList.remove('hidden');
                } else {
                    list.classList.add('hidden');
                }
            });
        });
    });

    // アコーディオンの開閉
    faqItems.forEach(item => {
        const question = item.querySelector('.faq-question');
        question?.addEventListener('click', () => {
            // 現在開いている他のアイテムを閉じる
            const currentlyActive = document.querySelector('.faq-item.active');
            if (currentlyActive && currentlyActive !== item) {
                currentlyActive.classList.remove('active');
            }

            // クリックされたアイテムの開閉を切り替え
            item.classList.toggle('active');
        });
    });

    // トップへ戻るボタンの実装
    const backToTop = document.querySelector('.back-to-top');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 200) {
            backToTop?.classList.add('visible');
        } else {
            backToTop?.classList.remove('visible');
        }
    });
});
