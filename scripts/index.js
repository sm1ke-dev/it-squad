const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = mobileMenu.querySelector('.mobile-menu__button');
const mobileMenuLinks = [...mobileMenu.querySelectorAll('.mobile-menu__link')];

const openMenu = () => {
  mobileMenu.classList.add('mobile-menu_opened');
}

const closeMenu = () => {
  mobileMenu.classList.remove('mobile-menu_opened');
}

mobileMenuLinks.forEach(link => {
  link.addEventListener('click', closeMenu);
})

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
