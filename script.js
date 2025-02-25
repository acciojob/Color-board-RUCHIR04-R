//your JS code here. If required.
const colorBoard = document.getElementById('color-board');
function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}
for (let i = 0; i < 800; i++) {
    const square = document.createElement('div');
    square.classList.add('square');
    square.addEventListener('mouseover', () => {
        const color = getRandomColor();
        square.style.backgroundColor = color;
        setTimeout(() => {
            square.style.backgroundColor = '#ffffff'; // Reset to default color
        }, 1000);
    });

    colorBoard.appendChild(square);
}