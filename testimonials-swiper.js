const swiper = new Swiper('.swiper', {
    speed: 500,
    loop: true,
    autoHeight: false,
    centeredSlides: true,
    followFinger: true,
    freeMode: false,
    slideToClickedSlide: true,
    slidesPerView: "auto",
    slidesPerView: 1.7,
    spaceBetween: "11%",
    rewind: false,
    mousewheel: {
      forceToAxis: true
    },
    keyboard: {
      enabled: true,
      onlyInViewport: true
    },
    breakpoints: {
      // small screens
      320: {
        slidesPerView: 1.2,
        spaceBetween: "11%"
      },
      // larger screens
      768: {
        slidesPerView: 1.7,
        spaceBetween: "11%"
      },
    },
});
