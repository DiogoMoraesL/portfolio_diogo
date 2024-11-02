const menuToggle = document.querySelector('.menu-toggle');
const navbarDireita = document.querySelector('.navbar_direita');

// Adicione log para verificação
menuToggle.addEventListener('click', () => {
    console.log('Menu toggle clicado'); // Verifique se aparece no console
    navbarDireita.classList.toggle('active');
});