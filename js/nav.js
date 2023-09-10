export { menu, close };

const menu = document.querySelector('.hamburger__icon');

const close = document.querySelector('.close__icon');

const nav = document.querySelector('nav ul');

menu.addEventListener('click', () => {
  nav.classList.add('active');
});

close.addEventListener('click', () => {
  nav.classList.remove('active');
});
