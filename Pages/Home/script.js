let indiceSlide = 0;
mostrarSlide(indiceSlide);

function mudarSlide(n) {
    mostrarSlide(indiceSlide += n);
}

function mostrarSlide(n) {
    const slides = document.querySelectorAll(".slide");
    indiceSlide = (n + slides.length) % slides.length;

    for (let i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }

    slides[indiceSlide].style.display = "block";
}

