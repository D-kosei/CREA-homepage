// モバイルメニューの制御
const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
const navMenu = document.querySelector('.nav-menu');
const menuOverlay = document.querySelector('.menu-overlay');

function toggleMobileMenu() {
    mobileMenuBtn.classList.toggle('active');
    navMenu.classList.toggle('active');
    menuOverlay.classList.toggle('active');
    document.body.style.overflow = navMenu.classList.contains('active') ? 'hidden' : '';
}

mobileMenuBtn.addEventListener('click', toggleMobileMenu);
menuOverlay.addEventListener('click', toggleMobileMenu);

// バックトップボタンの制御
const backToTop = document.querySelector('.back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 300) {
        backToTop.classList.add('visible');
    } else {
        backToTop.classList.remove('visible');
    }
});

backToTop.addEventListener('click', (e) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// フォームバリデーション
function validateForm(event) {
    event.preventDefault();
    
    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const subject = document.getElementById('subject');
    const message = document.getElementById('message');
    const privacy = document.getElementById('privacy');
    
    let isValid = true;
    const errors = [];

    // 名前の検証
    if (!name.value.trim()) {
        errors.push('お名前を入力してください。');
        isValid = false;
        name.classList.add('error');
    } else {
        name.classList.remove('error');
    }

    // メールアドレスの検証
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.value.trim() || !emailRegex.test(email.value)) {
        errors.push('有効なメールアドレスを入力してください。');
        isValid = false;
        email.classList.add('error');
    } else {
        email.classList.remove('error');
    }

    // お問い合わせ種別の検証
    if (!subject.value) {
        errors.push('お問い合わせ種別を選択してください。');
        isValid = false;
        subject.classList.add('error');
    } else {
        subject.classList.remove('error');
    }

    // メッセージの検証
    if (!message.value.trim()) {
        errors.push('お問い合わせ内容を入力してください。');
        isValid = false;
        message.classList.add('error');
    } else {
        message.classList.remove('error');
    }

    // プライバシーポリシーの同意確認
    if (!privacy.checked) {
        errors.push('プライバシーポリシーに同意してください。');
        isValid = false;
    }

    // エラーメッセージの表示
    const existingAlert = document.querySelector('.alert');
    if (existingAlert) {
        existingAlert.remove();
    }

    if (!isValid) {
        const alert = document.createElement('div');
        alert.className = 'alert alert-error';
        alert.innerHTML = errors.map(error => `<p>${error}</p>`).join('');
        
        const form = document.getElementById('contactForm');
        form.insertBefore(alert, form.firstChild);
        
        alert.scrollIntoView({ behavior: 'smooth', block: 'start' });
    } else {
        // フォーム送信処理
        const successMessage = document.createElement('div');
        successMessage.className = 'alert alert-success';
        successMessage.innerHTML = '<p>お問い合わせを受け付けました。<br>担当者より順次ご連絡させていただきます。</p>';
        
        const formContainer = document.querySelector('.form-container');
        const form = document.getElementById('contactForm');
        
        form.style.display = 'none';
        formContainer.appendChild(successMessage);
        
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    return false;
}

// Alertスタイルを動的に追加
const style = document.createElement('style');
style.textContent = `
    .alert {
        padding: 1rem;
        border-radius: var(--border-radius);
        margin-bottom: 1.5rem;
    }

    .alert-error {
        background-color: #ffe3e3;
        border: 1px solid #ff8a8a;
        color: #cf2e2e;
    }

    .alert-error p {
        margin: 0.5rem 0;
    }

    .alert-success {
        background-color: #d4edda;
        border: 1px solid #c3e6cb;
        color: #155724;
        text-align: center;
        padding: 2rem;
    }

    .error {
        border-color: #ff8a8a !important;
    }
`;
document.head.appendChild(style);


