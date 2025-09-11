let indice = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const visiveis = 1;

function mudaSlide(direcao) {
    indice = indice + direcao * visiveis;

    if (indice < 0) indice = 0;
    if (indice > totalSlides - visiveis) indice = totalSlides - visiveis;

    slides.style.transform = `translateX(${-indice * (100 / visiveis)}%)`;
}