const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = mobileMenu.querySelector('.mobile-menu__button');

const openMenu = () => {
  mobileMenu.classList.add('mobile-menu_opened');
}

const closeMenu = () => {
  mobileMenu.classList.remove('mobile-menu_opened');
}

burgerButton.addEventListener('click', openMenu);
closeButton.addEventListener('click', closeMenu);
