const iconMenu = document.querySelector('.icon-menu');
const iconMenuClose = document.querySelector('.icon-menu-close');
const showNav = document.querySelector('.nav-mobile');

const showMenu = () => {
  if (showNav.id === 'hide') {
    showNav.id = 'show';
  } else {
    showNav.id = 'hide';
  }
};

iconMenu.addEventListener('click', showMenu);
iconMenuClose.addEventListener('click', showMenu);
