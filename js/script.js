var swiper = new Swiper(".carrousel-content", {
    slidesPerView: 3,
    spaceBetween: 24,
    centerSlide: "true",
    fade: true,
    grabCursor: "true",
    loop: true,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
      dynamicBullets: true,
    },
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    breakpoints: {
      0: {
        slidesPerView: 1,
        spaceBetween: 24,
      },
      576: {
        slidesPerView: 2,
        spaceBetween: 24,
      },
    
      992: {
        slidesPerView: 3,
        spaceBetween: 24,
      },
  
    },
  });
  