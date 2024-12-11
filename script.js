let color = 'black';
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
    if(input >=2 || input <= 100){
        populateBoard(input)
    }
    else{
        console.log("Too many squares");
    }
}
function colorSquare(){
    //this object = square
    if(color = 'random'){
    this.style.backgroundColor = `#${Math.floor(Math.random() * 16777215).toString(16)}`;
    }
    else{
    this.style.backgroundColor = color;
    }
}
//for button 
function changeColor(choice){
    color = choice;
}