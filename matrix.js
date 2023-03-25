// Get the canvas element
const canvas = document.getElementById('matrix');
const ctx = canvas.getContext('2d');

// Set the canvas dimensions to match the window
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Set the characters to use in the Matrix rain effect
const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';

// Set the font size and style
const fontSize = 16;
const fontFamily = 'monospace';

// Calculate the number of columns and rows to display
const columns = Math.floor(canvas.width / fontSize);
const rows = Math.floor(canvas.height / fontSize);

// Create an array to store the character positions
const positions = [];

// Initialize the positions with random characters
for (let i = 0; i < columns; i++) {
    positions[i] = Math.floor(Math.random() * rows);
}

// Set the text color and font
ctx.fillStyle = '#0f0';
ctx.font = `${fontSize}px ${fontFamily}`;

// Create the matrix rain animation
function draw() {
    // Set the background color and clear the canvas
    ctx.fillStyle = 'rgba(0, 0, 0, 0.05)';
    ctx.fillRect(0, 0, canvas.width, canvas.height);

    // Set the text color
    ctx.fillStyle = '#0f0';

    // Loop through the columns
    for (let i = 0; i < columns; i++) {
        // Get a random character from the character set
        const char = characters[Math.floor(Math.random() * characters.length)];

        // Set the character position
        const x = i * fontSize;
        const y = positions[i] * fontSize;

        // Draw the character
        ctx.fillText(char, x, y);

        // Move the character down by one row
        positions[i]++;

        // If the character has reached the bottom, reset its position to the top
        if (positions[i] * fontSize > canvas.height && Math.random() > 0.975) {
            positions[i] = 0;
        }
    }
}

// Start the animation
setInterval(draw, 50);
