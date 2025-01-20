generateGrid(16);

const button = document.querySelector('.rescale-button');
button.addEventListener('click', () => {
    clearGrid();

    size = parseInt(prompt('Enter the new number of squares per side: '));
    while (isNaN(size) || size > 100 || size < 1) {
        size = parseInt(prompt('Please enter a valid integer from 1 to 100: '));
    }

    generateGrid(size);
});

// Creates a new [size] x [size] grid
function generateGrid(size) {
    const container = document.querySelector('.container');

    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.flex = '0 0 ' + 100 / size.toString() + '%';
            console.log(gridSquare.style.flex);
            // gridSquare.textContent = (j + 1).toString();
            // gridSquare.textContent = (i + 1).toString();
            container.appendChild(gridSquare);
            
            // Change colour when hovering over
            gridSquare.addEventListener('mouseover', () => {
                gridSquare.classList.add('hovered');
            });
        }
    }
}

// Clears the current grid
function clearGrid() {
    const container = document.querySelector('.container');
    container.textContent = '';
}