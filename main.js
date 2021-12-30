'use strict';

let toggle = document.querySelector('.nav__toggleBtn');
let menu = document.querySelector('.menu__list');
let icon = document.querySelector('.icon__list');

console.log(toggle);
toggle.addEventListener('click', () => {
  menu.classList.toggle('active');
  icon.classList.toggle('active');
});
