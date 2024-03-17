const menuIcon = document.querySelector('.menu-icon');
const nav = document.querySelector('ul')
menuIcon.addEventListener('click',()=>{
    nav.classList.toggle('showData');
})