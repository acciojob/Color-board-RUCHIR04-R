document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = getRandomColor();
            setTimeout(function () {
                square.style.backgroundColor = '#fff';
            }, 1000);
        });
    }

    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }
});
