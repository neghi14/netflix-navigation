const clicker = document.querySelector('.ico');
const nav = document.querySelectorAll('.nav')
// const navRed = document.querySelector('.navRed');
// const navWhite = document.querySelector('.navWhite');
// const navBlack = document.querySelector('.navBlack');

clicker.addEventListener('click', () => {
    nav.forEach(navbar => {
        navbar.classList.toggle('active')
        clicker.classList.toggle('ico-active');
        clicker.classList.toggle('anim');
        
    });
})