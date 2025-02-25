//your JS code here. If required.
// script.js

const container = document.querySelector('.container');
for (let i = 0; i < 800; i++) {
    const div = document.createElement('div');
    div.classList.add('square');
    container.appendChild(div);
}