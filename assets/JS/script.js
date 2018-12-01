let buttonMenuMobile = document.querySelector(".button-menu-mobile");
let menuMobile = document.querySelector(".menu-mobile");

buttonMenuMobile.onclick = () => {
    buttonMenuMobile.classList.toggle("active");
    menuMobile.classList.toggle("hide");
}