const menuToggle = document.querySelector('.menu-toggle');
const navbarDireita = document.querySelector('.navbar_direita');

menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicado'); 
    navbarDireita.classList.toggle('active');
});

