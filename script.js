let color = 'black';
let click = true;
//create size x size board    
function populateBoard(size){
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((div) => div.remove());
    board.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    board.style.gridTemplateRows = `repeat(${size}, 1fr)`;
    
    let amount = size*size;
    for(let i=0; i < amount; i++){
    let square = document.createElement("div");
    square.addEventListener("mouseover", colorSquare)
    square.style.backgroundColor = "white";
    board.insertAdjacentElement("beforeend", square);
}
}
//generate grid size by input
function changeSize(input){
    if(input >=2 && input <= 100){
        populateBoard(input)
    }
    else{
        console.log("Too many squares");
    }
}
function colorSquare(){
    if(click){
        if(color === 'rainbow'){
        //this object = square
        this.style.backgroundColor = `hsl(${Math.random() * 360}, 100%, 50%)`; //rainbow
        }
        else{
        this.style.backgroundColor = color;
        }
    }
}
//for button 
function changeColor(choice){
    color = choice;
}
//reset board
function clearBoard() {
    let board = document.querySelector(".board");
    let squares = board.querySelectorAll("div");
    squares.forEach((square) => {
        square.style.backgroundColor = "white"; // Reset background color
    });
}
//click to color
document.querySelector("body").addEventListener('click', () => {
    click = !click;
});