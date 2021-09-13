Rock Paper Scissors:

HTML and CSS:



Javascript:

"Do you want to play?" screen generated
- Will design this later with the GUI
- Not sure yet how I would go from this screen to the gaming screen. Thinking about it, it could be loaded using an event listner...when the play button is selected then the game screen is generated...but not yet sure how the whole screen could be generated in such way...could use the grids where by they are blank before and then get filled with content when the game is wanting to be played.

Website loads and game is initiated
- game function
- runs multiple round functions
- updates player scores
- when either gets to zero, other player announced as winner and game ends 

Player selects choice of weapon - Not yet programmed, for now prompting player for input

- will use event listner
- player will select radio button
- when attack is hit will result in compare function running

Player presses attack
Round is played:

    Computer's choice is randomly generated as a number

    - computerPlay function
    - use math.random to generate a number between 1 and 3

    Computer's choice as a number is converted to a string
    - now to consider: Use numbers to compare or compare strings of the different values?
    - I think lets use strings. Numbers may become confusing. And there is also no issue with comparing the string values as it is not user inputted.
    - The math.random function is exclusive of one. In our case it will be exclusive of three. Therefore, and getting technical, to have each choice getting the exact same chance of being selected, we will have the following groups(First letter of string is a captial, rest are lower case):
        1) Rock: smaller than 1(0 to 1 but exclusive of one)
        2) Paper: 1 to 2, inclusive of 1 but exclusive of 2
        3) Scissors: 2 to 3, inclusive of 2 but exclusive of 3 (As per the function's capabilities)



    Comparison and winner decided

    - Going to use a number system:
      - Tie = 0, will be what variable's value is initially declared at
      - Computer wins = 1
      - User wins = 2
    - Will compare computer's move to user's move
    

    Winner announced
    - For now will leave until GUI is done
    - Will use a console.log for now

Lives updated

- Within the game function
- Lose a life if lose a round
- When either competitor gets to 0 lives, they loose and their opponent wins the game

When game ends:
    Announce winner/loser
    Ask if want to play again
