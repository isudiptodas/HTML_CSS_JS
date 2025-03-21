let boxes = document.querySelectorAll(".main .button-box button");
let chooseBtn = document.querySelectorAll(".btn-box button");
let welcomePage = document.querySelector(".welcome-page");
let restartBtn = document.querySelector(".restart button")
let playAgainBtn = document.querySelector(".winner-name button");
let winnerPage = document.querySelector(".winner-name");
let winnerName = document.querySelector(".winner-name h4");
let playerTurn = document.querySelector(".player-turn h4");
let drawPage = document.querySelector(".main .draw-page");
let drawPageBtn = document.querySelector(".draw-page button");

let currentTurn;
let winner = null;

chooseBtn.forEach(button => {
    button.addEventListener("click", () => {
        currentTurn = button.textContent;
        playerTurn.innerHTML = currentTurn;
        playerTurn.textContent = `Current Turn : ${currentTurn}`;
        welcomePage.style.transition = 'transform 0.5s ease-out'
        welcomePage.style.transform = 'translateY(-100%)';
    });
});

let winPatterns = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 4, 8],
    [2, 4, 6],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8]
];

const checkWinner = () => {
    let draw = true;
    for(pattern of winPatterns){
        let pos0 = boxes[pattern[0]].innerText;
        let pos1 = boxes[pattern[1]].innerText;
        let pos2 = boxes[pattern[2]].innerText;

        if(pos0 != '' && pos1 != '' && pos2 != ''){
            if(pos0 == pos1 && pos1 == pos2){
                winner = pos0;

                for(let i=0; i<pattern.length; i++) {
                    boxes[pattern[i]].style.backgroundColor = 'black';
                    boxes[pattern[i]].style.color = 'white';
                }
                
                winnerPage.classList.add('visible');
                if(pos0 == "X"){
                    winnerName.innerHTML = "X is winner";
                }
                else{
                    winnerName.innerHTML = "O is winner";
                }
                restartBtn.disabled = true;
                draw = false;
                break;
            }
        }
        else{
            draw = false;
        }
    }

    if(draw){
        let boxFilled = true;
        for(let box of boxes){
            if(box.innerHTML = ''){
                boxFilled = false;
                break;
            }
        }
    
        if(boxFilled && !winner){
            drawPage.classList.add('visible');
        }
    }
};


boxes.forEach(button => {
    button.addEventListener("click", () => {
        if(currentTurn == "X"){
            button.innerHTML = "X";
            button.style.color = 'black';
            currentTurn = "O";
        }
        else{
            button.innerHTML = "O";
            button.style.color = 'black';
            currentTurn = "X";
        }
        button.disabled = true;
        playerTurn.textContent = `Current Turn : ${currentTurn}`;
        checkWinner();
    });
});

playAgainBtn.addEventListener("click", () => {
    boxes.forEach(button => {
        button.innerText = '';
        button.style.backgroundColor = '';
        button.style.color = '';
        button.disabled = false;

        welcomePage.style.transition = 'transform 0.5s ease-out';
        welcomePage.style.transform = 'translateY(0)';
        winnerPage.classList.remove('visible');
        currentTurn = null;
        winner = null;
        restartBtn.disabled = false;
    });
});

// Button to restart game
restartBtn.addEventListener("click", () => {
    boxes.forEach(button => {
        button.innerText = '';
        button.style.backgroundColor = '';
        button.style.color = '';
        button.disabled = false;
    });
    
    welcomePage.style.transition = 'transform 0.5s ease-out';
    welcomePage.style.transform = 'translateY(0)'; 
    winnerPage.classList.remove('visible');
    currentTurn = null;
    winner = null;
});

drawPageBtn.addEventListener("click", () => {
    drawPage.classList.remove('visible');
    playAgainBtn.click();
});