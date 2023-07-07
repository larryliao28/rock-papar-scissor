
//selects rock, paper, scissor randomly
function getComputerChoice() {
    let choices = ["Rock", "Paper", "Scissor"];
    const result = Math.floor(Math.random() * choices.length);
    return choices[result]; 
}

//play one round of rock, paper, scissor 
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection === "rock" && computerSelection === "paper") {
        return "You lose! Paper beats rock.";
    } else if (playerSelection === "rock" && computerSelection === "scissor") {
        return "You win! Rock beats scissor."
    } else if (playerSelection === "paper" && computerSelection === "scissor") {
        return "You lose! Scissor beats paper.";
    } else if (playerSelection === "paper" && computerSelection === "rock") {
        return "You win! Paper beats rock.";  
    } else if (playerSelection === "scissor" && computerSelection === "rock") {
        return "You lose! Rock beats scissor.";
    } else if (playerSelection === "scissor" && computerSelection === "paper") {
        return "You win! Paper beats scissor.";
    } else if (playerSelection === computerSelection) {
        return "Draw!";
    } else {
        return "Invalid input";  
    }
    
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

// const playerSelection = "rock";
// const computerSelection = getComputerChoice();
// console.log("user: " + playerSelection);
// console.log("computer: " + computerSelection); 
// console.log(playRound(playerSelection, computerSelection));
console.log(game()); 
