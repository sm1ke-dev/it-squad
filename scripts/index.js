const burgerButton = document.querySelector('.header__burger');
const mobileMenu = document.querySelector('.mobile-menu');
const closeButton = mobileMenu.querySelector('.mobile-menu__button');
const mobileMenuLinks = [...mobileMenu.querySelectorAll('.mobile-menu__link')];

const listItem = [...document.querySelectorAll('.customers__item')];

listItem.forEach(item => {
  const link = item.querySelector('.customers__text');
  const arrow = item.querySelector('.button');
  const pic = item.querySelector(`#${link.id}-pic`);

  link.addEventListener('mouseover', () => {
    arrow.classList.add('button_hover');

    if (pic) {
      pic.classList.add(`customers__photo-${link.id}`);
    } else {
      console.log('Пасхалочка');
    }
  });

  link.addEventListener('mouseout', () => {
    arrow.classList.remove('button_hover');
    pic.classList.remove(`customers__photo-${link.id}`);
  });
});

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
