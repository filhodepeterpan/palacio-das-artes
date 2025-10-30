let indice = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const visiveis = 1;
const fotos = document.querySelectorAll('.slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');
const botaoVoltar = document.getElementById('botao-voltar');
const cabecalho = document.getElementById('cabecalho');

window.addEventListener('scroll', () => {
    botaoVoltar.style.display = window.scrollY > cabecalho.offsetHeight ? 'block' : 'none';
});

function mudaSlide(direcao) {
    indice = indice + direcao * visiveis;

    if (indice < 0) indice = 0;
    if (indice > totalSlides - visiveis) indice = totalSlides - visiveis;

    slides.style.transform = `translateX(${-indice * (100 / visiveis)}%)`;
}

fotos.forEach(foto => {
    foto.addEventListener('click', () => {
        lightbox.style.display = 'block';
        lightboxImg.src = foto.src;
        lightboxImg.alt = foto.alt;
    });
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        lightbox.style.display = 'none';
    }
});

closeBtn.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

// IMPORT do ionicons

const ioniconsModule = document.createElement('script');
ioniconsModule.type = 'module';
ioniconsModule.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.esm.js';
document.body.appendChild(ioniconsModule);

const ioniconsFallback = document.createElement('script');
ioniconsFallback.nomodule = true;
ioniconsFallback.src = 'https://unpkg.com/ionicons@7.1.0/dist/ionicons/ionicons.js';
document.body.appendChild(ioniconsFallback);
