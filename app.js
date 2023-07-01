const divContainer = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resize");

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

resizeBtn.onclick = () => {
    const gridSize = parseInt(prompt("Enter the desired grid size:"));

    if (!isNaN(gridSize) && gridSize > 0 && gridSize <= 100) {
        const itemSize = Math.floor(containerSize / gridSize);

        clearGrid();
        makeDivs(gridSize, itemSize);
    } else {
        alert("Invalid grid size! Please enter a positive number.");
    }
};

function clearGrid() {
    while (divContainer.firstChild) {
        divContainer.removeChild(divContainer.firstChild);
    }
}

makeDivs(num, itemSize);