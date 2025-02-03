const n= 5;
const m = 12;
const fox = { x: n-1, y: m-1 }; // x: sor, y: oszlop
const nyuszi = {x: randint(0,n-1), y: randint(0,(m/2)-1)};
let jatek_fut = false;
let szint = 1;
let ido = 0;

const table = document.querySelector("table")

document.addEventListener("keydown", (event) => {
    if (!jatek_fut) return;
    moveFox(event).then(updateTable);
});


function randint(a,b){
    return Math.floor(Math.random() * (b-a+1)) + a;
}

function moveFox(event) {
    return new Promise((resolve) => {
        if (event.key === "ArrowUp" && fox.x > 0) {
            fox.x--;
        } else if (event.key === "ArrowDown" && fox.x < n - 1) {
            fox.x++;
        } else if (event.key === "ArrowLeft" && fox.y > 0) {
            fox.y--;
        } else if (event.key === "ArrowRight" && fox.y < m - 1) {
            fox.y++;
        }
        resolve();
    });
}

function updateTable() {
    table.innerHTML = "";
    for (let i = 0; i < n; i++) {
        let row = table.insertRow();
        for (let j = 0; j < m; j++) {
            let cell = row.insertCell();
            if (i === fox.x && j === fox.y) {
                cell.textContent = "🦊";
            } else if (i === nyuszi.x && j === nyuszi.y) {
                cell.textContent = "🐰";
            }
        }
    }
}

document.querySelector(".lilla").addEventListener("click", () => {
    jatek_fut = true;
    updateTable();
});

