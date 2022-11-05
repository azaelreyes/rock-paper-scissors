function getComputerChoice(){
    let rnum = Math.floor(Math.random()*4);
    let choice ="";
    if(rnum == 1){
        choice = "Rock";
    } else if (rnum==2){
        choice = "Paper";
    } else{
        choice = "Scissors";
    }
    return choice;
}
function playRound(playerSelection, computerSelection){
    if(playerSelection.toUpperCase() == computerSelection.toUpperCase()){
        return "Tie!"
    }else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "Paper"){
        return "You Lose! Paper beats Rock."
    }else if(playerSelection.toUpperCase() == "ROCK" && computerSelection == "Scissors"){
        return "You Win! Rock beats Scissors."
    } else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "Rock"){
        return "You Win! Paper beats Rock."
    }else if(playerSelection.toUpperCase() == "PAPER" && computerSelection == "Scissors"){
        return "You Lose! Scissors beats Paper."
    }else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Paper"){
        return "You Win! Scissors beats Paper."
    }else if(playerSelection.toUpperCase() == "SCISSORS" && computerSelection == "Rock"){
        return "You Lose! Rock beats Scissors."
    };
}
function game(){
    for(let i =0;i<5;i++){
        let playerSelection = prompt("Rock, Paper, Scissors?");
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
       console.log("Round " +(i+1)+ " results: " + result );
    }
}

game();