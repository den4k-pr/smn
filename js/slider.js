document.addEventListener("DOMContentLoaded", () => {
    const commonSettings = {
        loop: true,
        spaceBetween: 20,
        slidesPerView: 1.3,
        breakpoints: {
            800: { slidesPerView: 4 },
        }
    };

    // Слайдер 1
    if (document.querySelector(".first-swiper")) {
        new Swiper(".first-swiper", {
            ...commonSettings,
            pagination: {
                el: ".first-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".first-slider-next",
                prevEl: ".first-slider-prev",
            },
        });
    }

    // Слайдер 2
    if (document.querySelector(".second-swiper")) {
        new Swiper(".second-swiper", {
            ...commonSettings,
            pagination: {
                el: ".second-slider-pagination",
                clickable: true,
            },
            navigation: {
                nextEl: ".second-slider-next",
                prevEl: ".second-slider-prev",
            },
        });
    }
});