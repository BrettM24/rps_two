//Game function which runs if player selects to play
//Will call round functions
function game(){
    
    //Declaring variables for the number of lives left for each competitor
    let compLives = 3;
    let userLives = 3;

    //Declare undefined variable, will store the return value from calling the round function
    //and therefore stores locally within the game function the winner of the round.
    let roundWinner;

    while(compLives > 0 && userLives > 0){
        
        roundWinner = round();
        switch(roundWinner){
            case 0:
                alert("Draw"); 
                break;
            case 1: 
                userLives -= 1;
                alert("You lost the round.")
                break;
            case 2:
                compLives -= 1;
                alert("You won the round")
                break;
        }
        alert("Your lives:")
        alert(userLives);
        alert("Computer's lives");
        alert(compLives);
    }
    if(userLives == 0){
        alert("You lose the game, computer wins.");
    }else{
        alert("You win the game, computer loses.");
    }

}

//Round function which runs a round
//Will call the other functions to play a round
function round(){

    //Variables which store which move each player plays the round with.
    let compChoice = computerPlay();
    let userChoice = prompt("Rock, Paper or Scissors?");
    
    alert("You chose " + userChoice);
    alert("Computer's choice is " + compChoice);

    //roundwinner is variable which stores winner of round, and is returned to the game function
    let roundWinner = compareMoves(compChoice, userChoice);    
    return roundWinner; 
}

//Computer's choice is randomly generated through the computerPlay function
function computerPlay(){
    //Generate a random number between zero and three
    let compChoiceNum = 0;
    compChoiceNum = ((Math.random())*3)

    let compChoicePhrase = NumToPhrase(compChoiceNum);

    //Value returned to round function
    return compChoicePhrase;
}

//Function to convert random number into phrase (rock, paper or scissors)
function NumToPhrase(num){

    //Declare the variable for the phrase, which is at eventually returned to the computerPlay function
    let compChoicePhrase;

    //Use an if/elif/else to assign string to number, look for further explanation in README
    if(num<1){ //Rock
        compChoicePhrase = "Rock"; 
    }else if(num >= 1 && num < 2){ //Paper
        compChoicePhrase = "Paper";
    }else{ //Scissors
        compChoicePhrase = "Scissors";
    }

    //Returned to computerPlay function
    return compChoicePhrase
}

function compareMoves(compChoice, userChoice){
    //Declare variable for winner
    let winner;

    //Remaining code evaluates who wins the round based off of player choices made
    if(compChoice == "Rock"){
        if(userChoice == "Rock"){
            winner = 0;
        }
        else if(userChoice == "Paper"){
            winner = 2;
        }
        else{
            winner = 1;
        }
    }
    if(compChoice == "Paper"){
        if(userChoice == "Rock"){
            winner = 1;
        }
        else if(userChoice == "Paper"){
            winner = 0;
        }
        else{
            winner = 2;
        } 
    }
    if(compChoice == "Scissors"){
        if(userChoice == "Rock"){
            winner = 2;
        }
        else if(userChoice == "Paper"){
            winner = 1;
        }
        else{
            winner = 0;
        } 
    }
    return winner;

}

game();