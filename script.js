var choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
    console.log(compSelection);
    const winner = checkWinner(playerSelection, compSelection);
    console.log(winner);
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

game();