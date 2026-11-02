// review slider js
const reviewWrapper = document.querySelector('.review-swiper .swiper-wrapper');
if (reviewWrapper) {
  // Multiply the 5 slides in DOM so Swiper's loop engine has plenty of slides to loop forever seamlessly
  const baseSlides = reviewWrapper.innerHTML;
  reviewWrapper.innerHTML = baseSlides + baseSlides + baseSlides;
}

const reviewSwiper = new Swiper('.review-swiper', {
  loop: true,
  centeredSlides: true,
  grabCursor: true,
  speed: 600,

  slidesPerView: 1.3,
  spaceBetween: 16,

  breakpoints: {
    576: {
      slidesPerView: 2.2,
      spaceBetween: 20,
    },
    992: {
      slidesPerView: 3.6,
      spaceBetween: 30,
    }
  }
});