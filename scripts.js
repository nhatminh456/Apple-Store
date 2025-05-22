document.addEventListener('DOMContentLoaded', () => {
    // Chức năng giỏ hàng
    const cartButton = document.querySelector('.cart');
    let cartCount = parseInt(cartButton.dataset.count) || 0;

    // Cập nhật số lượng sản phẩm trong giỏ hàng
    const updateCartCount = (count) => {
        cartButton.textContent = `Giỏ Hàng (${count})`;
        cartButton.dataset.count = count;
    };

    // Xử lý sự kiện khi thêm sản phẩm vào giỏ hàng
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            cartCount += 1;
            updateCartCount(cartCount);
            alert('Sản phẩm đã được thêm vào giỏ hàng!');
        });
    });

    // Chức năng trình chiếu (carousel)
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    let currentIndex = 0;

    // Hiển thị slide theo chỉ số
    const showSlide = (index) => {
        if (index >= totalSlides) {
            currentIndex = 0;
        } else if (index < 0) {
            currentIndex = totalSlides - 1;
        } else {
            currentIndex = index;
        }
        slides.style.transform = `translateX(${-currentIndex * 100}%)`;
    };

    // Chuyển đến slide tiếp theo
    const nextSlide = () => showSlide(currentIndex + 1);
    // Chuyển đến slide trước đó
    const prevSlide = () => showSlide(currentIndex - 1);

    // Tự động chuyển slide mỗi 5 giây
    let autoSlideInterval = setInterval(nextSlide, 5000);

    // Đặt lại tính năng tự động chuyển slide
    const resetAutoSlide = () => {
        clearInterval(autoSlideInterval);
        autoSlideInterval = setInterval(nextSlide, 5000);
    };

    // Xử lý sự kiện chuyển đến slide tiếp theo khi nhấp vào nút
    document.querySelector('.next')?.addEventListener('click', () => {
        nextSlide();
        resetAutoSlide();
    });

    // Xử lý sự kiện chuyển đến slide trước đó khi nhấp vào nút
    document.querySelector('.prev')?.addEventListener('click', () => {
        prevSlide();
        resetAutoSlide();
    });

    showSlide(currentIndex);

    // Chức năng nút "quay về đầu trang"
    const backToTopButton = document.querySelector('.back-to-top');
    window.addEventListener('scroll', () => {
        backToTopButton.style.display = window.scrollY > 300 ? 'block' : 'none';
    });

    // Cuộn trang về đầu khi nhấp vào nút
    backToTopButton.addEventListener('click', (event) => {
        event.preventDefault();
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });

    // Chức năng modals (cửa sổ bật lên)
    const openModal = (modalId) => {
        document.getElementById(modalId).style.display = 'block';
    };

    const closeModals = () => {
        document.querySelectorAll('.modal').forEach(modal => {
            modal.style.display = 'none';
        });
    };

    // Mở modal đăng nhập khi nhấp vào nút
    document.querySelector('#login-btn').addEventListener('click', () => {
        openModal('login-modal');
    });

    // Mở modal đăng ký khi nhấp vào liên kết
    document.querySelector('#register-link').addEventListener('click', () => {
        openModal('register-modal');
    });

    // Đóng tất cả modals khi nhấp vào nút đóng
    document.querySelectorAll('.modal .close').forEach(closeButton => {
        closeButton.addEventListener('click', closeModals);
    });

    // Đóng modal khi nhấp ra ngoài modal
    window.addEventListener('click', (event) => {
        if (event.target.classList.contains('modal')) {
            closeModals();
        }
    });

    // Xử lý mở modal đăng nhập khi nhấp vào nút
    const loginBtn = document.getElementById('login-btn');
    if (loginBtn) {
        loginBtn.addEventListener('click', (event) => {
            event.preventDefault();
            openModal('login-modal');
        });
    }
});
