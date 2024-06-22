const hamburger = document.getElementById('btn');
const menu = document.getElementById('menu');
const hLink = document.getElementById('hLink');
const burger = document.querySelector('.fa-solid');
hamburger.addEventListener('click', () => {
    menu.classList.toggle('hidden');
    burger.classList.toggle('fa-xmark');
});
hLink.forEach(link => {
    link.addEventListener('click', () => {
        menu.classList.toggle('show');
        burger.classList.toggle('fa-xmark');
    })
});
 
 








/* 
 21) DOM
 22) project
 23) project
 24) project
 25) project
 26) project
 27-29) Ana College API
*/
 

  






 

 
