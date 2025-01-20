// Generate a 16 x 16 grid upon loading page
generateGrid(16);

// Global bool tracking whether hovering over a grid square turns it rainbow or grey
let colourise = false; 

// Global int tracking the size of the grid to reset to
let rescaleSize = 16

// Rescale the current grid to the specified size
const rescale = document.querySelector('.rescale-button');
rescale.addEventListener('click', () => {
    clearGrid();

    rescaleSize = parseInt(prompt('Enter the new number of squares per side: '));
    while (isNaN(rescaleSize) || rescaleSize > 100 || rescaleSize < 1) {
        rescaleSize = parseInt(prompt('Please enter a valid integer from 1 to 100: '));
    }

    generateGrid(rescaleSize);
});

// Toggle random colours or grey when colourise button is clicked
const colour = document.querySelector('.colourise-button');
colour.addEventListener('click', () => {
    colourise = !colourise;
}); 

// Resets the grid to have no colour
const reset = document.querySelector('.reset-button');
reset.addEventListener('click', () => {
    clearGrid();
    generateGrid(rescaleSize);
});

// Creates a new [size] x [size] grid
function generateGrid(size) {
    const container = document.querySelector('.container');
    
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++) {
            const gridSquare = document.createElement('div');
            gridSquare.className = 'grid-square';
            gridSquare.style.flex = `0 0 ${100 / size}%`;

            container.appendChild(gridSquare);

            gridSquare.addEventListener('mouseover', () => {
                // Change colour randomly when hovering over
                if (colourise) {
                    const randomR = Math.floor(Math.random() * 255);
                    const randomG = Math.floor(Math.random() * 255);
                    const randomB = Math.floor(Math.random() * 255);
                    gridSquare.style.backgroundColor = `rgb(${randomR}, ${randomG}, ${randomB})`;

                    // Change colour to grey when hovering over
                } else {
                    gridSquare.style.backgroundColor = 'grey';
                }
            });
        }
    }
}

// Clears the current grid
function clearGrid() {
    const container = document.querySelector('.container');
    container.textContent = '';
}