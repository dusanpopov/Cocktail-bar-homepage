$(".hamburger-menu").on("click", function(){
    $(this).toggleClass("active");
    $(".overlay").toggleClass("menu-open");
});

$(".main-navbar__link").on("click", function(){
    $(".hamburger-menu").removeClass("active");
    $(".overlay").removeClass("menu-open");
});