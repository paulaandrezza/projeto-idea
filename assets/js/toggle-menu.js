const menuIcon = document.getElementById('menu-icon');
const nav = document.querySelector('nav');

menuIcon.addEventListener('click', () => {
  menuIcon.classList.toggle('open');
  nav.classList.toggle('show');
})