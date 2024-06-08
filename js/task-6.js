function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, '0')}`;
}

function createBoxes(amount) {
  const boxesContainer = document.querySelector('#boxes');
  
  // Очищаємо попередні елементи, якщо вони є
  boxesContainer.innerHTML = '';

  // Перевіряємо, чи введене число в межах 1-100
  if (amount < 1 || amount > 100) {
    console.log('Please enter a number between 1 and 100.');
    return;
  }

  // Створюємо і додаємо елементи div
  let size = 30;
  for (let i = 0; i < amount; i++) {
    const box = document.createElement('div');
    box.style.width = `${size}px`;
    box.style.height = `${size}px`;
    box.style.backgroundColor = getRandomHexColor();
    boxesContainer.appendChild(box);
    size += 10;
  }
}

function destroyBoxes() {
  const boxesContainer = document.querySelector('#boxes');
  boxesContainer.innerHTML = '';
}

document.addEventListener('DOMContentLoaded', () => {
  const createButton = document.querySelector('[data-create]');
  const destroyButton = document.querySelector('[data-destroy]');
  const input = document.querySelector('input[type="number"]');

  createButton.addEventListener('click', () => {
    createBoxes(Number(input.value));
    input.value = ''; // Очистка значення в input
  });

  destroyButton.addEventListener('click', () => {
    destroyBoxes();
  });
});
