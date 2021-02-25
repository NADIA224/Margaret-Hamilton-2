const burger = document.querySelector('.burger');
const menu = document.querySelector('nav');

const lien1 = document.querySelector('.closeMenu1');
const lien2 = document.querySelector('.closeMenu2');
const lien3 = document.querySelector('.closeMenu3');
const lien4 = document.querySelector('.closeMenu4');
const lien5 = document.querySelector('.closeMenu5');

burger.addEventListener('click', function(){
    menu.classList.toggle('menu-open');
});


lien1.addEventListener('click', function () {
    menu.classList.remove('menu-open');
});
lien2.addEventListener('click', function () {
    menu.classList.remove('menu-open');
});
lien3.addEventListener('click', function () {
    menu.classList.remove('menu-open');
});
lien4.addEventListener('click', function () {
    menu.classList.remove('menu-open');
});
lien5.addEventListener('click', function () {
    menu.classList.remove('menu-open');
});