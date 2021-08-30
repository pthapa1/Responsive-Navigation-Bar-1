// toggle the menu when svg is clicked
const burgerMenu = document.querySelector(
  'body > header > nav > div > button > svg'
);
const navMenu = document.querySelector('.nav-menu');

burgerMenu.addEventListener('click', () => {
  navMenu.classList.toggle('active');
});

// Also remove the menu when each of the link is clicked)
const menuLinks = document.querySelectorAll('.menu-links');

menuLinks.forEach((link) => {
  link.addEventListener('click', () => {
    navMenu.classList.remove('active');
  });
});
