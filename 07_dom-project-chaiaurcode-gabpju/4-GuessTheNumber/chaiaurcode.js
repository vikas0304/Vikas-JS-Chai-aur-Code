const randomNumber = parseInt(Math.random() * 100 + 1);

const submit = document.querySelector('#subt');

const userInput = document.querySelector('#guessField');

const guesSlot = document.querySelector('.guesses');

const result = document.querySelector('.lastResult');

const lowOrHi = document.querySelector('lowOrHi');

const startOver = document.querySelector('.resultParas');

let previousGuess = [];
let numGuess = 1;

