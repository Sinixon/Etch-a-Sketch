const divContainer = document.getElementById("grid-container");

const containerSize = divContainer.clientWidth;
const num = 16;
const itemSize = Math.floor(containerSize / num);

let isDrawing = false;

function makeDivs(num, itemSize) {
    divContainer.style.gridTemplateColumns = `repeat(${num}, ${itemSize}px)`;
    divContainer.style.gridTemplateRows = `repeat(${num}, ${itemSize}px)`;

    for (let i = 0; i < num * num; i++) {
        const div = document.createElement("div");
        divContainer.appendChild(div).className = "grid-item";
    }
}

makeDivs(num, itemSize);