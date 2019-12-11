// Select the elements on the page - canvas, shake button
const canvas = document.querySelector('#etch-a-sketch');
const button = document.querySelector('.shake');
const ctx = canvas.getContext('2d');
const MOVE_AMOUNT = 50;

// make a variable called height and width from the same properties on our canvas.
const { height } = canvas;
const { width } = canvas;

// Setup canvas for drawing
ctx.lineJoin = 'round';
ctx.lineCap = 'round';
ctx.lineWidth = MOVE_AMOUNT;
// create random x and y starting points on the canvas
let hue = Math.floor(Math.random() * 360);
ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
ctx.beginPath();
let strokeStartX = Math.floor(Math.random() * width) + MOVE_AMOUNT;
let strokeStartY = Math.floor(Math.random() * height) + MOVE_AMOUNT;
ctx.moveTo(strokeStartX, strokeStartY);
ctx.lineTo(strokeStartX, strokeStartY);
ctx.stroke();
// write a draw function
function draw(options) {
        // increment the hue
        hue += 10;
        ctx.beginPath();
        ctx.moveTo(strokeStartX, strokeStartY);
        ctx.lineTo(strokeStartX, strokeStartY);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        ctx.stroke();
        switch (options.key) {
                // move our x and y values depending on what the user did
                case 'ArrowUp':
                        strokeStartY -= MOVE_AMOUNT;
                        ctx.stroke();
                        break;
                case 'ArrowDown':
                        strokeStartY += MOVE_AMOUNT;
                        break;
                case 'ArrowLeft':
                        strokeStartX -= MOVE_AMOUNT;
                        break;
                case 'ArrowRight':
                        strokeStartX += MOVE_AMOUNT;
                        break;
                default:
                        break;
        }
        ctx.lineTo(strokeStartX, strokeStartY);
        ctx.stroke();
}

// write a handler for the keys
function handleKey(e) {
        if (e.key.includes('Arrow')) {
                e.preventDefault();
                draw({ key: e.key });
        }
}

// listen for arrow keys
window.addEventListener('keydown', handleKey);

// clear /shake function
function clearCanvas() {
        canvas.classList.add('shake');
        ctx.clearRect(0, 0, width, height);
        document.addEventListener(
                'animationend',
                function() {
                        canvas.classList.remove('shake');
                        setupCanvas();
                },
                { once: true }
        );
}

button.addEventListener('click', clearCanvas);

function setupCanvas() {
        ctx.beginPath();
        hue = Math.floor(Math.random() * 360);
        ctx.strokeStyle = `hsl(${hue}, 100%, 50%)`;
        strokeStartX = Math.floor(Math.random() * width) + MOVE_AMOUNT;
        strokeStartY = Math.floor(Math.random() * height) + MOVE_AMOUNT;
        ctx.moveTo(strokeStartX, strokeStartY);
        ctx.lineTo(strokeStartX, strokeStartY);
        ctx.stroke();
}
