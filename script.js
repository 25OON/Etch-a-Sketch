let board = document.querySelector(".board");
//create 16 columns & 1/16 width
board.style.gridTemplateColumns = 'repeat(16, 1fr)';
//create row == 16x16
board.style.gridTemplateRows = 'repeat(16, 1fr)';

for(let i=0; i < 256; i++){
    let square = document.createElement("div");
    square.style.backgroundColor = "blue";
    board.insertAdjacentElement("beforeend", square);
}