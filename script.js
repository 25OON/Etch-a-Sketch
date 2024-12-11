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
        document.querySelector(".error").style.display = "none";
        populateBoard(input)
    }
    else{
        document.querySelector(".error").style.display = "flex";
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
document.querySelector(".board").addEventListener('click', () => {
    click = !click;
    if(click){
        document.querySelector(".mode").textContent = "Coloring: On";
    }
    else{
        document.querySelector(".mode").textContent ="Coloring: Off";
    }
});

//