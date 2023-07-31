const buttonReserva = document.querySelector('.header-button');
const conteudoReserva = document.querySelector('.tela-reserva');

const buttonFecharReserva = document.querySelector('.close-tela-reserva');

buttonReserva.addEventListener('click', () => {
    conteudoReserva.style.display = 'flex';

    const body = document.body;
    body.style.overflowY = 'hidden'
})

buttonFecharReserva.addEventListener('click', () => {
    conteudoReserva.style.display = 'none';

    const body = document.body;
    body.style.overflowY = 'scroll'
})



const menuIconMobile = document.querySelector('.menu-icon');
const menuMobile = document.querySelector('.menu-mobile');

menuIconMobile.addEventListener('click', () => {
    if (!menuMobile.style.display || menuMobile.style.display === "none") {
        menuMobile.classList.remove('slide-close-menu-mobile');
        menuMobile.classList.add('slide-open-menu-mobile');
        menuMobile.style.display = "block"
    } else {
        menuMobile.classList.remove('slide-open-menu-mobile');
        menuMobile.classList.add('slide-close-menu-mobile');
        setTimeout(() => {
            menuMobile.style.display = "none"
        }, 300);
    }
})
