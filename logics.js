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


function reset_f(){
    human_score = 0;
    computer_score = 0; 
    human_scorecard.textContent = "Human Score: " + human_score;
    computer_scorecard.textContent = "Computer Score: " + computer_score;
    result.textContent = "";
    announcement.textContent = "";
}

function playRound (humanChoice, computerChoice){
    let choice;
    console.log(humanChoice);
    switch (humanChoice.toLowerCase()){
        case "rock":
            if (computerChoice == "rock"){
                result.textContent = "It's a tie";
            }
            else if (computerChoice == "paper"){
                result.textContent = "You lost. Paper beats rock.";
                choice = 0;
            }
            else {
                result.textContent = "You won. Rock beats scissors.";
                choice = 1;
            }
            break;
        case "paper":
            if (computerChoice == "rock"){
                result.textContent = "You won. Paper beats rock.";
                choice = 1;
            }
            else if (computerChoice == "paper"){
                result.textContent = "It's a tie";
            }
            else {
                result.textContent = "You lost. Scissors beats paper.";
                choice = 0;
            }
            break;
        case "scissors":
            if (computerChoice == "rock"){
                result.textContent = "You lost. Rock beats scissors.";
                choice = 0;
            }
            else if (computerChoice == "paper"){
                result.textContent = "You won. Scissors beats paper.";
                choice = 1;
            }
            else {
                result.textContent = "It's a tie";
            }
            break;
    }
    return choice;
}

function playGame (){
    if (computer_score >= 5 || human_score >= 5){
        reset_f();
    }
    else{
        switch(playRound(event.target.textContent,getComputerChoice())){
            case 0:
                computer_score++;
                computer_scorecard.textContent = "Computer Score: " + computer_score;
                if (computer_score == 5){
                    announcement.textContent = "COMPUTER WINS!";
                    div_2.appendChild(announcement);
                }
                break;
            case 1:
                human_score++; 
                human_scorecard.textContent = "Human Score: " + human_score;
                if (human_score == 5){
                    announcement.textContent = "HUMAN WINS!";
                    div_2.appendChild(announcement);
                }
                break;   
        }
    }
}


//buttons logic
const div_1 = document.createElement("div");
div_1.style.width = "400px";
div_1.style.margin = "100px auto";
div_1.style.display = "flex";
div_1.style.justifyContent = "space-around";
document.body.appendChild(div_1);

const div_2 = document.createElement("div");
div_2.style.width = "400px";
div_2.style.margin = "100px auto";
div_2.style.textAlign = "center";
document.body.appendChild(div_2);

const div_3 = document.createElement("div");
div_3.style.width = "400px";
div_3.style.margin = "100px auto";
div_3.style.textAlign = "center";
document.body.appendChild(div_3);

for (i=0;i<=2;i++){
    let buttons = document.createElement("button");
    if (i == 0){
        buttons.textContent = "Scissors";
    }
    else if (i == 1){
        buttons.textContent = "Rock";
    }
    else{
        buttons.textContent = "Paper";
    }
    buttons.style.fontSize = "30px";
    buttons.style.padding = "10px";
    div_1.appendChild(buttons);
}

const all_buttons = document.querySelectorAll('button');

// Loop through the NodeList of buttons
for (let i = 0; i < all_buttons.length; i++) {
  const button = all_buttons[i];

  button.addEventListener('click', playGame);
}

let human_score = 0, computer_score = 0;

let human_scorecard = document.createElement("p");
human_scorecard.textContent = "Human Score: " + human_score;
div_2.appendChild(human_scorecard);

let computer_scorecard = document.createElement("p");
computer_scorecard.textContent = "Computer Score: " + computer_score;
div_2.appendChild(computer_scorecard);

let result = document.createElement("p");
div_2.appendChild(result);

let announcement = document.createElement("p");
announcement.style.fontSize = "48px";
announcement.style.fontWeight = "bold";
//

let reset = document.createElement("button");
reset.textContent = "Reset"
reset.style.fontSize = "30px";
reset.style.marginTop = "100px";
reset.style.padding = "10px";
div_3.appendChild(reset);
reset.addEventListener('click', reset_f);