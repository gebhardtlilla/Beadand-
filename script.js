const n= 5;
const m = 12;
const fox = { x: n-1, y: m-1 }; // x: sor, y: oszlop
const nyuszi = {x: randint(0,n), y: randint(0,m/2)};

const table = document.querySelector("table")

function randint(a,b){
    return Math.floor(Math.random() * (b-a+1)) + a;
}


