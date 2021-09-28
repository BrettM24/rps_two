//Game function which runs if player selects to play
//Will call round functions

//Delete later - Commented out game function to follow the process of making a UI, please see README
/*
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
*/

//Round function which runs a round
//Calls other functions to play a round
//Update 1: Takes parameter, which will be text-content of user's current choice
function round(userChoice){

    // Variable which stores move of computer for a round, being the return value of the computerPlay function.
    let compChoiceLocal = computerPlay();

    // Display computer's choice on the screen
    let compChoiceDOM = document.querySelector("#attack-choice-displayed-computer");
    compChoiceDOM.textContent = compChoiceLocal;

    // Variable which stores "winner" of the round, being the return value of compareMoves
    let roundWinner = compareMoves(compChoiceLocal, userChoice);    
    return roundWinner;
}

//Computer's choice is randomly generated through the computerPlay function
function computerPlay(){
    //Generate a random number between zero and three
    let compChoiceNum = 0;
    compChoiceNum = ((Math.random())*3)

    // Number is converted to the corresponding phrase, and is returned to round function
    let compChoicePhrase = NumToPhrase(compChoiceNum);
    return compChoicePhrase;
}

//Function to convert random number into phrase (rock, paper or scissors)
function NumToPhrase(num){

    //Declare the variable for the phrase, which is eventually returned to the computerPlay function
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

// Function which compares player and computer moves, returns number(see README) which identifies winner
function compareMoves(compChoice, userChoice){
    // Declare variable for winner
    let winner;

    // Remaining code evaluates who wins the round by comparing moves played
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

/* 
Question here is, where in code is better to declare and store variables for decrementing?
Don't think I have choice, would have to probably have some form of a global variable which is passed in and out.
    Can this be avoided?
    Don't think so, because we would have them passing in and out of the game function
    DOM manipulation? Can do the same. Store it in the DOM and then re-read every game.
    Would read it, update it, input it back in the DOM.
    
From above, decided to build functions to decrement lives, and within the functions call the current value of lives
from the DOM, update it based on the game result, and update the DOM with the new score.
*/
function decrementPlayer(){

    let playerLivesVariable = document.querySelector('#playerLives');
    
    let playerLivesStringBefore = playerLivesVariable.textContent;
    console.log(playerLivesStringBefore);

    let playerLivesNumberBefore = parseInt(playerLivesStringBefore, 10);

    let playerLivesNumberAfter = playerLivesNumberBefore - 1;

    playerLivesVariable.textContent = playerLivesNumberAfter;
    
}

function decrementComputer(){

    let computerLivesVariable = document.querySelector('#computerLives');
    
    let computerLivesStringBefore = computerLivesVariable.textContent;
    console.log(computerLivesStringBefore);

    let computerLivesNumberBefore = parseInt(computerLivesStringBefore, 10);

    let computerLivesNumberAfter = computerLivesNumberBefore - 1;

    computerLivesVariable.textContent = computerLivesNumberAfter;
    
}

/*
How am I going to change the round number and the figures in the result statement?
  Result statement:
    Update statement whenever the attack button is pressed
    Use functions which update elements on the DOM
    Reads current text content of DOM element from DOM using query selector
    Get moves used by each and the winner of the round
    Moves - Can get from DOM
    Winner - pass in from attackButton callback function (Winner is determined when round function is pressed)
  Round number:
    Start at 0
    Increment for each round
    Read from DOM and update whenever attack button is pressed
*/ 

// "Will use functions which update elements on the DOM"
function resultUpdater(roundWinner){

    //"Will call current text content of DOM element from DOM using query selector"
    let resultInfo = document.querySelector("#resultInfo");

    /*"Will update results
    Get winner of the round
    - passed in from callback when attack button is pressed"
    Get moves used
    - Will call from DOM
    */

    //"Get moves used
    //- Will call from DOM"
    let playerMove = document.querySelector("#attack-choice-displayed-player");
    let computerMove = document.querySelector("#attack-choice-displayed-computer");

    
    // Below code is used to convert winner of the round information into a string form, and update DOM with it
    // Look at README for explanation of what the integer held in roundWinner means
    if(roundWinner == 0){
      resultInfo.textContent = "Result: Draw"
    }
    else if(roundWinner == 1){ //Computer has won round
      resultInfo.textContent = ("Result: You Lose, " + computerMove.textContent + " beats " + playerMove.textContent);
    }
    else{ //Player has won round
      resultInfo.textContent = ("Result: You Win, " + playerMove.textContent + " beats " + computerMove.textContent);
    }
    
}

//Function to update round number
function roundNumberUpdater(){

  //Create variable for DOM Element
  let roundNumber = document.querySelector("#roundNumber");
  let roundNumberInt = parseInt(roundNumber.textContent);
  
  //Increment round number and display on screen
  roundNumberInt++;
  roundNumber.textContent = roundNumberInt;
}

/*
After each round will check if either's lives is zero
If either is zero:
    - Remove attack button using DOM manipulation so that it cannot be pressed again (See removeAttack function).
    - Display statment which details who wins overall game.
*/
function endRound(){
    
    let gameResult = document.querySelector("#gameResult");
    let playerLives = document.querySelector("#playerLives");
    let computerLives = document.querySelector("#computerLives");

    // "Display statment which details who wins overall game."
    if(playerLives.textContent == "0" || computerLives.textContent == "0"){
        if(playerLives.textContent == "0"){
            gameResult.textContent = "KO - You lose the game";
        }else{
            gameResult.textContent = "KO - You win the game";
        }
        // If either has zero lives then remove attack button, by running below function
        removeAttack();
    }
}

//Function which uses DOM manipulation to remove the attack button
//Attack button is removed when either opponent has lost all their lives, prevents further rounds from being played
function removeAttack(){
    let footerNode = document.querySelector(".footer");
    let attackBtn = document.querySelector(".attackButton");
    let nodeBefore = document.querySelector("#playerLives");

    footerNode.removeChild(attackBtn); //Removing of attack button

    //Create a node, inserted into grid where attack button was previously placed:
    const buttonReplace = document.createElement('div');
    footerNode.insertBefore(buttonReplace, nodeBefore); 
}

// Event listners for when move buttons are clicked by player
// When one of the three buttons is pressed, player's move choice updated
// The current move choice is displayed on the screen, and is used by round function when round is played
const rockBtn = document.querySelector('.rockBtn');
rockBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
    const attackDis = document.querySelector('#attack-choice-displayed-player');
    attackDis.textContent = "Rock";
});

const paperBtn = document.querySelector('.paperBtn');
paperBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
    const attackDis = document.querySelector('#attack-choice-displayed-player');
    attackDis.textContent = "Paper";
});

const scissorsBtn = document.querySelector('.scissorsBtn');
scissorsBtn.addEventListener('click', (e) => {
    console.log(e.target.id);
    const attackDis = document.querySelector('#attack-choice-displayed-player');
    attackDis.textContent = "Scissors";
});

// Declare variable which will be assigned the return value of the round function
let roundWinner;

// When the attack button is pressed, event listner is run
const attackBtn = document.querySelector('.attackButton');
attackBtn.addEventListener('click', () => {

    // Variable which gets the player's current move choice (stored within the text content)
    // The move choice is passed as an argument into the round function, and is used to play a round
    const playerChoice = document.querySelector('#attack-choice-displayed-player');

    // Code which plays round when attack button is pressed
    let roundWinner = round(playerChoice.textContent); 
    
    /*
    We already have the bar where the lives will update.
    Will use DOM Manipulation to update.
    Could possibly use decrements and then check each time when it goes down.
        - Would need a varible for player's/computer's lives, with a total of 5 at first
        - After round, appropriate variable would be updated with a decrement(or none if its a draw)
        - Will use if/else statement below. Each round played passes through statement, and from there text content of
          lives incremented/decremented. 
        - Then will test if either is zero; whichever is zero is then used to identify which opponent it is, 
          and loser/winner is displayed. 
    */

// Note: Brett you've forgotton about breaking down actions into seperate functions.
// To be fair, the reworking code thing is lame, difficult to do when the original design was based around using
// different functionality

    if(roundWinner == 0){
        console.log("draw");
        console.log(playerLives.textContent);
    }
    else if(roundWinner == 1){ //Computer has won round, will decrement player
        console.log("Computer wins");
        decrementPlayer();
    }
    else{ //Player has won round, will decrement computer
        console.log("Player wins");
        decrementComputer();
    }

    // Updating result information
    resultUpdater(roundWinner); 

    // Updating round number
    roundNumberUpdater();

    // Run at the end of each round
    // If either's lives at zero then will end the game
    endRound();
});


