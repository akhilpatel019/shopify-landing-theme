// Suggested use slider
const useSwiper = new Swiper('.use-slider', {
  effect: 'fade',
  fadeEffect: {
    crossFade: true,
  },
  speed: 500,
  loop: true,
  allowTouchMove: true,
  navigation: {
    prevEl: '.use-btn-prev',
    nextEl: '.use-btn-next',
  },
});