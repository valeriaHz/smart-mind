document.addEventListener('DOMContentLoaded', function () {
    const palabras = [
        { original: ['ga', 'to'], extra: ['la', 'do'], imagen: './img/gato.avif' },
        { original: ['pa', 'to'], extra: ['llo', 'da'], imagen: './img/pato.webp' },
        { original: ['can', 'gre'], extra: ['jo', 'go'], imagen: './img/cangrejo.jpg' },
        { original: ['mon', 'ta'], extra: ['ña', 'na'], imagen: './img/montaña.avif' },
        { original: ['ca', 'ba'], extra: ['llo', 'sa'], imagen: './img/caballo.png' },
        { original: ['pa', 'la'], extra: ['mon', 'sa'], imagen: './img/pala.png' },
        { original: ['li', 'bros'], extra: ['rio', 'sa'], imagen: './img/libros.avif' }
    ];

    let currentIndex = 0;

    function displayWord(index) {
        const container = document.getElementById('palabras');
        container.innerHTML = ''; 
        const palabra = palabras[index];
        
        let todasLasSilabas = [...palabra.original.map(silaba => ({ texto: silaba, correcta: true })),
        ...palabra.extra.map(silaba => ({ texto: silaba, correcta: false }))];
        todasLasSilabas = mezclarSilabas(todasLasSilabas);

        let palabraDiv = document.createElement('div');
        palabraDiv.classList.add('palabra-div');
        
        let imgContainer = document.createElement('div');
        imgContainer.classList.add('imagen-container');
        let img = document.createElement('img');
        img.src = palabra.imagen;
        img.classList.add('imagen-palabra');
        imgContainer.appendChild(img);
        palabraDiv.appendChild(imgContainer);

        let silabasContainer = document.createElement('div');
        silabasContainer.classList.add('silabas-container');
        todasLasSilabas.forEach(silaba => {
            let span = document.createElement('span');
            span.classList.add('silaba');
            span.textContent = silaba.texto + ' ';
            span.dataset.correcta = silaba.correcta;
            span.onclick = function() { colorearSiCorrecta(span, index); };
            silabasContainer.appendChild(span);
        });
        palabraDiv.appendChild(silabasContainer);
        container.appendChild(palabraDiv);
    }

    function mezclarSilabas(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
        return array;
    }

    function colorearSiCorrecta(span, index) {
        if (span.dataset.correcta === 'true') {
            span.style.backgroundColor = 'green';
            span.onclick = null; 
            checkCompletion(index);
        } else {
            span.style.backgroundColor = 'red';
        }
    }

    function checkCompletion(index) {
        const silabasContainer = document.querySelector('.silabas-container');
        const spans = silabasContainer.querySelectorAll('.silaba');
        const allCorrect = Array.from(spans).every(span => span.dataset.correcta !== 'true' || span.style.backgroundColor === 'green');
        if (allCorrect) {
            if (index < palabras.length - 1) {
                setTimeout(() => displayWord(index + 1), 1000); 
                alert('¡Felicidades! Has completado todas las palabras.');
            }
        }
    }

    displayWord(currentIndex); 
});