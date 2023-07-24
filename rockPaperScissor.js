
const result = document.querySelector(".results"); 
const buttons = document.querySelectorAll("btn");    
const playerScore = document.querySelector("#player");
const computerScore = document.querySelector("#computer");


let pScore = 0;
let cScore = 0; 
let playerChoice = ""; 





buttons.forEach(button => {
    button.addEventListener('click', function() {
        if (pScore >= 5 || cScore >= 5) {
            return; 
        }
        playerChoice = button.id; 
        playRound(playerChoice, getComputerChoice()); 
    })
}); 



//selects rock, paper, scissor randomly
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    const result = Math.floor(Math.random() * choices.length);
    return choices[result]; 
}


//play five round and reports the final winner
function game() {
    let playerSelection, computerSelection, result; 
    let winCount = 0; 
    let loseCount = 0; 
    let drawCount = 0; 
    for (let i = 0; i < 5; i++) {
        playerSelection = prompt("player choice");
        computerSelection = getComputerChoice();  
        result = playRound(playerSelection, computerSelection);
        console.log(result);
        if (result.substring(4, 5) === "w") {
            winCount += 1; 
        } else if (result.substring(4, 5) === "l"){ 
            loseCount += 1; 
        } else {
            drawCount += 1;  
        }
    } 
    if (winCount > loseCount) {
        return "You win the match!"; 
    } else if (winCount === drawCount) {
        return "Draw!";
    } else {
        return "You lose the match!"; 
    }
}

//console.log(game());




//play one round of rock, paper, scissor 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        result.textContent = "You lose! Paper beats rock.";
        cScore++;  
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        result.textContent = "You win! Rock beats scissor."; 
        pScore++; 
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        result.textContent = "You lose! Scissor beats paper."; 
        cScore++; 
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        result.textContent = "You win! Paper beats rock."; 
        pScore++; 
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        result.textContent = "You lose! Rock beats scissor."; 
        cScore++; 
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        result.textContent = "You win! Paper beats scissor."; 
        pScore++; 
    } else if (playerSelection === computerSelection) {
        result.textContent = "Draw!";  
    } else {
        result.textContent = "Invalid input";    
    }

    playerScore.textContent = "Player score: " + pScore;
    computerScore.textContent = "Computer score: " + cScore; 

    if (pScore === 5) {
        result.textContent = "You win the match! Click here to restart.";
        result.onclick = () => {
            window.location.reload();  
        }  
        
    }

    if (cScore === 5) {
        result.textContent = "You win the match! Click here to restart."; 
        result.onclick = () => {
            window.location.reload();  
        }  
    }

    
}
