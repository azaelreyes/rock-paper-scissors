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
};




const lastMatch= document.getElementById('lastMatch');
const runScore = document.getElementById("runScore");
const results = document.getElementById("results");
const btnList = document.querySelectorAll('#btn');//to access what button is clicked
let playerScore = 0;
let computerScore=0;
let roundsPlayed =0;


btnList.forEach(function(btn){
    btn.addEventListener('click', function(){
            let playerSelection = btn.innerHTML;
            
            let computerSelection = getComputerChoice();
            console.log(playerSelection + " Clicked, Computer Selected: "+computerSelection);
            let result = playRound(playerSelection, computerSelection);
            
            lastMatch.innerHTML = "Round Results: "+ result;

                if (result == "You Win! Rock beats Scissors." || result == "You Win! Paper beats Rock." || result == "You Win! Scissors beats Paper." ){
                   
                    playerScore++;
                    roundsPlayed++;
                    console.log("PlayerScore: "+ playerScore +" rounds: "+ roundsPlayed);

                }else if(result == "You Lose! Rock beats Scissors." || result == "You Lose! Scissors beats Paper." || result == "You Lose! Paper beats Rock." ){
                    
                    roundsPlayed++;
                    computerScore++;
                    console.log("Computer Score: "+ computerScore+" rounds: "+ roundsPlayed);

                }else if(result == "Tie!"){
                    
                    roundsPlayed++;
                    console.log("Tie, rounds: "+ roundsPlayed);
                };    
                
                runScore.innerHTML = "Player: " + playerScore + " Computer: " +computerScore;

                if (playerScore > computerScore && roundsPlayed==5){
                        results.innerHTML = "Congrats, You Win!!!!!!!!!"
                        playerScore=0;
                        computerScore=0
                        roundsPlayed=0;
                        
                    } else if (computerScore>playerScore && roundsPlayed==5){
                        results.innerHTML = "Computer Wins! You lose!!"
                        playerScore=0;
                        computerScore=0
                        roundsPlayed=0;
                        
                    }else{
                        results.innerHTML = "Results";
                    };

        });

});




