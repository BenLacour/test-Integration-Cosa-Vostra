// Déclaration des variables

const menuShow = document.querySelector(".menu");
const bodyNoScroll = document.querySelector("body");

// NavBar elements
const openMenu = document.getElementById("openMenu");
const closeMenu = document.getElementById("closeMenu");
const navBar = document.getElementById("navBar");
const socialMedias1 = document.querySelector(".socialMedias1");

// Cacher le closeMenu en début de page

closeMenu.hidden = true;

// --------------------- Toggle openMenu

openMenu.addEventListener("click", function() {
// console.log("open"); // Vérification de la validité de l'eventListener
openMenu.hidden = true;
closeMenu.hidden = false;

// Apparition du menu

menuShow.classList.remove("menu");
menuShow.classList.add("menuOn");

// Changement de couleur Hey Logo

document.getElementById("heyLogo").src="./assets/logo/Logo_menu.png";

// No Scroll de la page

bodyNoScroll.classList.add("noScroll");

});

// --------------------- Toggle closeMenu

closeMenu.addEventListener("click", function() {
// console.log("close"); // Vérification de la validité de l'eventListener
openMenu.hidden = false;
closeMenu.hidden = true;

// Disparition du menu

menuShow.classList.remove("menuOn");
menuShow.classList.add("menu");

// Changement de couleur Hey Logo

document.getElementById("heyLogo").src="./assets/logo/Logo_main.png";

// Scroll de la page

bodyNoScroll.classList.remove("noScroll");
});