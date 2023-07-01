const divContainer = document.getElementById("grid-container");
const resizeBtn = document.getElementById("resize");
const clearBtn = document.getElementById("clear");
const rainbowBtn = document.getElementById("rainbow");

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

        div.addEventListener("mousedown", () => {
            isDrawing = true;
            div.style.backgroundColor = "black";
        });

        div.addEventListener("mousemove", () => {
            if (isDrawing) {
                div.style.backgroundColor = "black";
            }
        });

        div.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    }
}

resizeBtn.onclick = () => {
    const gridSize = parseInt(prompt("Enter the desired grid size (100 max) :"));

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

clearBtn.onclick = () => {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => {
        div.style.backgroundColor = "white";
    });
};

rainbowBtn.onclick = () => {
    let divs = document.querySelectorAll(".grid-item");
    divs.forEach((div) => {
        div.addEventListener("mousedown", () => {
            isDrawing = true;
            div.style.backgroundColor = `rgb(${Math.floor(
                Math.random() * 256
            )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                Math.random() * 256
            )})`;
        });

        div.addEventListener("mousemove", () => {
            if (isDrawing) {
                div.style.backgroundColor = `rgb(${Math.floor(
                    Math.random() * 256
                )}, ${Math.floor(Math.random() * 256)}, ${Math.floor(
                    Math.random() * 256
                )})`;
            }
        });

        div.addEventListener("mouseup", () => {
            isDrawing = false;
        });
    });
};


makeDivs(num, itemSize);