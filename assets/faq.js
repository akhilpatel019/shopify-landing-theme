// FAQ Accordion
const faqItems = document.querySelectorAll('.faq-item');
faqItems.forEach(item => {
  const btn = item.querySelector('.faq-question');
  btn.addEventListener('click', () => {
    const isOpen = item.classList.contains('active');
    item.classList.toggle('active');
    btn.setAttribute('aria-expanded', String(!isOpen));
  });
});