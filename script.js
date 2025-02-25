document.addEventListener("DOMContentLoaded", function () {
    const container = document.querySelector('.container');

    for (let i = 0; i < 800; i++) {
        const square = document.createElement('div');
        square.classList.add('square');
        container.appendChild(square);

        square.addEventListener('mouseover', function () {
            square.style.backgroundColor = 'rgb(29, 29, 29)';
            setTimeout(function () {
                square.style.backgroundColor = '#fff';
            }, 1000);
        });
    }
});

