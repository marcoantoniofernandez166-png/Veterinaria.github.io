const burger = document.querySelector('.burger');
const nav = document.getElementById('main-nav');

burger.addEventListener('click', () => {
  nav.classList.toggle('active');
  burger.classList.toggle('open');
  burger.setAttribute('aria-expanded', nav.classList.contains('active'));
});
