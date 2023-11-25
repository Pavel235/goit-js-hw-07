'use strict'

const textInput = document.querySelector('input#name-input');

const output = document.querySelector('span#name-output');

textInput.addEventListener("input", newGreetings)


function newGreetings() {
    const inputValue = textInput.value.trim();

    const outputName = inputValue.length === 0 ? 'Anonymous' : inputValue;

    output.textContent = outputName; 
};





