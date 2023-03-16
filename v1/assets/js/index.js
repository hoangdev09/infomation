const navbarList = document.querySelector('.header__navbar-list');
const mobileMenu = document.querySelector('.header__navbar-btn-js');

mobileMenu.onclick = function () {
    if (navbarList.style.display === 'none') {
        navbarList.style.display = 'block';
    } else {
        navbarList.style.display = 'none';
    }
};

const menuItems = document.querySelectorAll('.header__navbar-item');
for (let i = 0; i < menuItems.length; i++) {
    const menuItem = menuItems[i];
    menuItem.onclick = function () {
        navbarList.style.display = 'none';
    };
};