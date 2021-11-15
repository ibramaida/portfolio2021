
const menuBtn = document.querySelector('.menu-btn');

const nav = document.querySelector('.nav-primary')

let isOpen = false;

menuBtn.addEventListener('click', () => {
    
    if (!isOpen) {
        menuBtn.classList.add('open');
        nav.classList.add('open')
        isOpen = true;
    } else {
        menuBtn.classList.remove('open');
        nav.classList.remove('open')
        isOpen = false;
    }
});