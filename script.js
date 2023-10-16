var choices = ["rock", "paper", "scissors"];

function game() {
    playRound();
}

function playRound() {
    const playerSelection = playerChoice();
    const compSelection = compChoice();
}

function playerChoice() {
    let input = prompt("Type rock, paper or scissors");
    while(input == null) {
        input = prompt("Type rock, paper or scissors");
    }
    input = input.toLowerCase();

    let check = validate(input);
    while (check == false) {
        prompt("Type rock, paper, or scissors. Spelling needs to be exact. Capitalization doesn't matter")
    }
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

game();