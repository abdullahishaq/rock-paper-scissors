var choices = ["rock", "paper", "scissors"];
var winners = [];

function game() {
    for (let i = 1; i <= 5; i++) {
       playRound(i);
    }
    logWins();
}

function playRound(round) {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
    const winner = checkWinner(playerSelection, compSelection);
    winners.push(winner);
    logRound(playerSelection, compSelection, winner, round);

}

function playerChoice() {
    let input = prompt("Type rock, paper or scissors");
    while(input == null) {
        input = prompt("Type rock, paper or scissors");
    }
    input = input.toLowerCase();
    let check = validate(input);
    while (check == false) {
        input = prompt
        ("Type rock, paper, or scissors. Spelling needs to be exact. Capitalization doesn't matter")
        
        while(input == null) {
            input = prompt("Type rock, paper or scissors");
        }
        input = input.toLowerCase();
        check = validate(input);
    }
    return input;
}

function compChoice() {
    return choices[Math.floor(Math.random()*choices.length)]
}

function validate(choice) {
    if (choices.includes(choice)) {
        return true;
    }
    return false;
}

function checkWinner(choiceP, choiceC) {
    if (choiceP === choiceC){
        return "Tie";
    } else if (
        (choiceP === 'rock' && choiceC === 'scissors') ||
        (choiceP === 'paper' && choiceC === 'rock') ||
        (choiceP === 'scissors' && choiceC === 'paper')
        ){
        return "Player";
    } else{
        return "Computer";
    }
}

function logWins() {
     let playerWins = winners.filter((item) => item == "Player").length;
     let compWins = winners.filter((item) => item == "Computer").length;
     let ties = winners.filter((item) => item == "Tie").length;
     console.log('Results:');
     console.log('Player Wins:', playerWins);
     console.log('Computer Wins:', compWins);
     console.log('Tie:', ties);
}

function logRound(playerChoice, compChoice, winner, round) {
    console.log('Round: ', round);
    console.log('Player chose: ', playerChoice);
    console.log('Computer chose: ', compChoice);
    console.log(winner, 'won the round!');
    console.log('---------------------');
}