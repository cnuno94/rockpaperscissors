function getComputerChoice (){
    let computer_choice;
    let expression = Math.floor(Math.random()*3);
    switch(expression) {
        case 0:
          computer_choice = "rock";
          break;
        case 1:
        computer_choice = "paper";
          break;
        case 2:
        computer_choice = "scissors";
      }
    return computer_choice
}

function getHumanChoice (){
    let human_choice = prompt("Choice between rock, paper, scissors");
    return human_choice;
}

function playRound (humanChoice, computerChoice){
    let choice;
    switch (humanChoice.toLowerCase()){
        case "rock":
            if (computerChoice == "rock"){
                console.log("It's a tie");
            }
            else if (computerChoice == "paper"){
                console.log("You lost. Paper beats rock.");
                choice = 0;
            }
            else {
                console.log("You won. Rock beats scissors.");
                choice = 1;
            }
            break;
        case "paper":
            if (computerChoice == "rock"){
                console.log("You won. Paper beats rock.");
                choice = 1;
            }
            else if (computerChoice == "paper"){
                console.log("It's a tie");
            }
            else {
                console.log("You lost. Scissors beats paper.");
                choice = 0;
            }
            break;
        case "scissors":
            if (computerChoice == "rock"){
                console.log("You lost. Rock beats scissors.");
                choice = 0;
            }
            else if (computerChoice == "paper"){
                console.log("You won. Scissors beats paper.");
                choice = 1;
            }
            else {
                console.log("It's a tie");
            }
            break;
    }
    return choice;
}

function playGame (){
    let humanScore = 0;
    let computerScore = 0;
    let rounds = 0;
    while (rounds < 5){
        switch(playRound(getHumanChoice(),getComputerChoice())){
            case 0:
                computerScore++;
                break;
            case 1:
                humanScore++;    
        }
        rounds++;
    }
    console.log("This is human score: " + humanScore + " This is the computer score: " + computerScore);
}

playGame();