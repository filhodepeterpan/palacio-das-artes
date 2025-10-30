// BOTÃO VOLTAR AO TOPO
const cabecalho = document.getElementById('cabecalho');
const botaoVoltar = document.getElementById('botao-voltar');

window.addEventListener('scroll', () => {
    botaoVoltar.style.display = window.scrollY > cabecalho.offsetHeight ? 'block' : 'none';
});


// CARROSSEL
let indice = 0;
const slides = document.getElementById('slides');
const totalSlides = slides.children.length;
const visiveis = 1;
const fotos = document.querySelectorAll('.slide img');
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
const closeBtn = document.querySelector('.lightbox .close');

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


// PAINEL DINÂMICO

function exibeDiagrama(diagrama) {
    const diagramas = [
    {
        index: 1,
        nome: 'Diagrama de Casos de Uso',
        img: '../img/diagramas-uml/casos-de-uso.png'
    },
    {
        index: 2,
        nome: 'Diagrama de Classes',
        img: '../img/diagramas-uml/classes.png'
    },
    {
        index: 3,
        nome: 'Diagrama de Objetos',
        img: '../img/diagramas-uml/objetos.png'
    },
    {
        index: 4,
        nome: 'Diagrama de Sequência',
        img: '../img/diagramas-uml/sequencia.png'
    },
    {
        index: 5,
        nome: 'Diagrama de Componentes',
        img: '../img/diagramas-uml/componentes.png'
    },
    {
        index: 6,
        nome: 'Diagrama de Implementação',
        img: '../img/diagramas-uml/implementacao.png'
    },
    {
        index: 7,
        nome: 'Diagrama de Pacotes',
        img: '../img/diagramas-uml/pacotes.png'
    }
    ];

    const painelImg = document.querySelector('.painel-img img');
    
    const texto = document.querySelector('#painel-diagramas-uml h2');
    const img = document.querySelector('#painel-diagramas-uml img');

    const item = diagramas.find(d => d.index === diagrama);

    texto.textContent = item.nome;

    painelImg.classList.add('fade-out');
    setTimeout(() => {
        img.src = item.img;            
        img.alt = item.nome;  

        void painelImg.offsetWidth;

        painelImg.classList.remove('fade-out');
    }, 300);         
}

function exibeModelo(modelo) {
    const modelos = [
    {
        index: 1,
        nome: 'Modelo Conceitual',
        img: '../img/banco-de-dados/conceitual.png'
    },
    {
        index: 2,
        nome: 'Modelo Lógico',
        img: '../img/banco-de-dados/logico.png'
    },
    {
        index: 3,
        nome: 'Modelo Fisico',
        img: '../img/banco-de-dados/fisico.png'
    },
    {
        index: 4,
        nome: 'Exemplos de INSERT',
        img: '../img/banco-de-dados/inserts.png'
    },
    ];

    const painelImg = document.querySelector('.painel-img img');

    const texto = document.querySelector('#painel-banco-de-dados h2');
    const img = document.querySelector('#painel-banco-de-dados img');

    const item = modelos.find(d => d.index === modelo);

    texto.textContent = item.nome;

    painelImg.classList.add('fade-out');
    setTimeout(() => {
        img.src = item.img;            
        img.alt = item.nome;  

        void painelImg.offsetWidth;

        painelImg.classList.remove('fade-out');
    }, 300);     
}
