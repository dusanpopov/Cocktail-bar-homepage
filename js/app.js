const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const mainNavbarLink = document.querySelector(".main-navbar__link");

const toggleHamburgerMenu = () => {
    hamburgerMenu.classList.toggle("active");
    overlay.classList.toggle("menu-open");
}

const navbarClassRemove = () =>{
    hamburgerMenu.classList.remove("active");
    overlay.classList.remove("menu-open");
}

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);
mainNavbarLink.addEventListener("click", navbarClassRemove);
