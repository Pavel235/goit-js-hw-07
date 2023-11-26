'use strict'

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const inputBtn = document.querySelector('input.input-numbers');
const createBtn = document.querySelector('[data-create]');
const destroyBtn = document.querySelector('[data-destroy]');
const boxesRef = document.getElementById('boxes');

function createBoxes(amount) {
  const newBoxes = [];
  let size = 30;

  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    newBoxes.push(box); 
    size += 10; 
  }

  boxesRef.append(...newBoxes);
}

function destroyBoxes() {
  boxesRef.innerHTML = '';
}

createBtn.addEventListener('click', () => {
   const amount = Number(inputBtn.value);

   if (amount >= 1 && amount <= 100) {
    createBoxes(amount);
    inputBtn.value = '';
  }
})

destroyBtn.addEventListener('click', destroyBoxes); 
