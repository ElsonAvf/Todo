const menuButton = document.querySelector('#menu-bar');
const closeAsideButton = document.querySelector('#close');
const aside = document.querySelector('aside');
 
const displayAside = () => {
   aside.classList.remove('hidden');
 };
 const hideAside = () => {
   aside.classList.add('hidden');
 };
 
menuButton.addEventListener('click', displayAside);
closeAsideButton.addEventListener('click', hideAside);
