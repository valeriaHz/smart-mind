const words = [
    { word: "ballena", image: "./img/ballena.avif" },
    { word: "arbol", image: "./img/arbol.jpg" },
    { word: "conejo", image: "./img/conejo.jpg" },
    { word: "escalera", image: "./img/escalera.jpg" }
];

let currentWordIndex = 0;
let currentWord = words[currentWordIndex].word;
let displayWord = Array(currentWord.length).fill('');
let guessedLetters = [];

function setup() {
    displayGuessWord();
    displayImage();  
    document.addEventListener('keydown', handleKeyPress);
}

function displayGuessWord() {
    const guessWordContainer = document.getElementById('guessWord');
    guessWordContainer.innerHTML = '';
    displayWord.forEach(letter => {
        const letterBox = document.createElement('span');
        letterBox.className = 'letterBox';
        letterBox.textContent = letter || '';
        guessWordContainer.appendChild(letterBox);
    });
}

function displayImage() {
    document.getElementById('imageContainer').innerHTML = `<img src="${words[currentWordIndex].image}" 
    alt="${currentWord}">`;
}

function handleKeyPress(event) {
    const letter = event.key.toLowerCase();
    if (letter.match(/[a-z]/) && letter.length === 1) {
        handleGuess(letter);
    }
}

function handleGuess(letter) {
    if (guessedLetters.includes(letter) || !currentWord.includes(letter)) return;
    guessedLetters.push(letter);

    let correctGuess = false;
    for (let i = 0; i < currentWord.length; i++) {
        if (currentWord[i] === letter) {
            displayWord[i] = letter;
            correctGuess = true;
        }
    }
    displayGuessWord();
    if (correctGuess) {
        checkGameStatus();
    }
}

function checkGameStatus() {
    if (displayWord.join('') === currentWord) {
        document.getElementById('infoText').textContent = '¡Correcto! Pasando a la siguiente palabra...';
        setTimeout(nextWord, 2000);
    }
}

function nextWord() {
    currentWordIndex++;
    if (currentWordIndex >= words.length) {
        document.getElementById('infoText').textContent = 
        '¡Juego terminado! Felicidades, has completado todas las palabras.';
        return;
    }
    currentWord = words[currentWordIndex].word;
    displayWord = Array(currentWord.length).fill('');
    guessedLetters = [];
    displayGuessWord();
    displayImage(); 
    document.getElementById('infoText').textContent = '';
}

setup();
