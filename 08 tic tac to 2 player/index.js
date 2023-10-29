let boxes = document.querySelectorAll('.box');
const gameInfo = document.querySelector('.game-info');
const button = document.querySelector('.btn');

let currentPlayer;
let gameGrid;

const winingPosition = [
     [0,1,2],
     [3,4,5],
     [6,7,8],
     [0,3,6],
     [1,4,7],
     [2,5,8],
     [0,4,8],
     [2,4,6]
];

// function for initialization of the game
function gameInit(){
     currentPlayer = 'X';
     gameGrid = ["","","","","","","","",""];
     // empty in logic but we need to empty in the game UI
     boxes.forEach((box,index) => {
          box.innerText = "";
          box.classList.remove("win");
          boxes[index].style.pointerEvents = "all";
     })
     button.classList.remove("active");
     gameInfo.innerHTML = `Current Player  -  ${currentPlayer}`;
}

gameInit();

function swapTurn(){
     if(currentPlayer === 'X'){
          currentPlayer = 'O';
     }
     else{
          currentPlayer = 'X'
     }
     // update ui
     gameInfo.innerText = `Current Player  -  ${currentPlayer}`
}

function checkGameOver(){
     let ans = "";
     winingPosition.forEach((position)=>{
          if((gameGrid[position[0]] !== "" || gameGrid[position[1]] !== ""|| gameGrid[position[2]] !== "" ) &&(gameGrid[position[0]]===gameGrid[position[1]])&&(gameGrid[position[1]]===gameGrid[position[2]])){
               if(gameGrid[position[0]]==="X"){
                    ans = "X";
               }
               else{
                    ans = "O";
               }
               // stop game, if game is over
               boxes.forEach((box)=>{
                    box.style.pointerEvents = "none";
               })
               boxes[position[0]].classList.add("win");
               boxes[position[1]].classList.add("win");
               boxes[position[2]].classList.add("win");
          }
     });
     if(ans!==""){
          gameInfo.innerText = `Winner is - ${ans}`;
          button.classList.add("active");
          return;
     }
     let count = 0;
     box.forEach((box)=>{
          if(box !==""){
               count++;
          }
     })
     if(count === 9){
          gameInfo.innerText = `Game Tied Bro.`;
          button.classList.add("active");
     }
}


function handelClick(index){
     if(gameGrid[index] === ""){
          // update ui
          boxes[index].innerText = currentPlayer;
          // update game info
          gameGrid[index] = currentPlayer;
          //swap player
          swapTurn();
          //check if any one won
          checkGameOver();
     }
}

boxes.forEach((box,index) =>{
     box.addEventListener('click',() =>{
          handelClick(index);
     })
})

button.addEventListener('click',gameInit)