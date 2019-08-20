// $(".hamburger-menu").on("click", function(){
//     $(this).toggleClass("active");
//     $(".overlay").toggleClass("menu-open");
// });

// $(".main-navbar__link").on("click", function(){
//     $(".hamburger-menu").removeClass("active");
//     $(".overlay").removeClass("menu-open");
// });

const hamburgerMenu = document.querySelector(".hamburger-menu");
const overlay = document.querySelector(".overlay");
const mainNavbarLink = document.querySelector(".main-navbar__link");

function toggleHamburgerMenu(){
    hamburgerMenu.classList.toggle("active");
    overlay.classList.toggle("menu-open");
}

function navbarClassRemove(){
    hamburgerMenu.classList.remove("active");
    overlay.classList.remove("menu-open");
}

hamburgerMenu.addEventListener("click", toggleHamburgerMenu);
mainNavbarLink.addEventListener("click", navbarClassRemove);
