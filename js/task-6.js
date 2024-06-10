document.addEventListener('DOMContentLoaded', () => {
    const input = document.querySelector('#controls input');
    const createBtn = document.querySelector('button[data-create]');
    const destroyBtn = document.querySelector('button[data-destroy]');
    const boxesContainer = document.getElementById('boxes');

    createBtn.addEventListener('click', () => {
        const amount = parseInt(input.value);
        if (amount >= 1 && amount <= 100) {
            createBoxes(amount);
            input.value = '';
        } else {
            alert('Please enter a number between 1 and 100');
        }
    });

    destroyBtn.addEventListener('click', destroyBoxes);

    function createBoxes(amount) {
        destroyBoxes(); // Clear the existing boxes

        const fragment = document.createDocumentFragment();
        for (let i = 0; i < amount; i++) {
            const box = document.createElement('div');
            const size = 30 + i * 10;
            box.style.width = `${size}px`;
            box.style.height = `${size}px`;
            box.style.backgroundColor = getRandomHexColor();
            fragment.appendChild(box);
        }

        boxesContainer.appendChild(fragment);
    }

    function destroyBoxes() {
        boxesContainer.innerHTML = '';
    }

    function getRandomHexColor() {
        return `#${Math.floor(Math.random() * 16777215)
            .toString(16)
            .padStart(6, '0')}`;
    }
});
