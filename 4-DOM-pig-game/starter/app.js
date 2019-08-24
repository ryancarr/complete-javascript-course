// Change this value to change score required to win
const MAX_SCORE = 25;

// Create global variables and assign a starting value
let activePlayer = 0;
let gamePlaying = true;
let roundScore = 0;
let score = [0,0];

// Attach click event listeners to each button
document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-roll').addEventListener('click', rollDice);

// Call the init function to set the board to New Game state
init();

/**
 * @summary This method contains the logic for when a player clicks the hold button.
 * @see checkWinner()
 */
function hold()
{
    // Only do something if the game is in the play state
    if(gamePlaying)
    {
        // Add round score to the total score for the player
        score[activePlayer] += roundScore;
        roundScore = 0;

        // Temp variable to represent the non active player
        // Ensure non active player is opposite of active player
        let other;
        activePlayer === 0 ? other = 1 : other = 0;

        // Move active state to next player
        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + other + '-panel').classList.add('active');

        // Update score card of current player
        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        // Hide the dice
        document.querySelector('.dice').style.display = 'none';

        // Set next player as active player
        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;

        // Check if there is a winner
        checkWinner();
    }    
}

/**
 * @summary Initializes the game to New Game settings.
 */
function init()
{
    activePlayer = 0;
    score = [0,0];
    gamePlaying = true;
    
    // Loop over both players and remove winner and active states from the panels
    for(let i = 0; i < 2; i++)
    {
        // Unset winner and active states for panel
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
        document.querySelector('.player-' + i + '-panel').classList.remove('active');

        // Set scores to 0
        document.getElementById('score-' + i).textContent = 0;
        document.getElementById('current-' + i).textContent = 0;

        // Set name
        document.getElementById('name-' + i).textContent = 'Player ' + (i + 1);
    }

    // Set player 1 panel to active
    document.querySelector('.player-0-panel').classList.toggle('active');

    // Hide the dice
    document.querySelector('.dice').style.display = 'none';
}

/**
 * @summary Called when the player clicks Roll Dice button.
 * @see getRandom()
 * @see hold()
 */
function rollDice()
{
    // Only do something if the game is in the play state
    if(gamePlaying)
    {
        // Get a random number between 1 and 6 (inclusive)
        var roll = getRandom(6);

        // Ensure the dice will be displayed and show the correct image
        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + roll + '.png';

        // If the player rolls a 1 they lose their turn and current score
        if(roll === 1)
        {
            // Set current score to 0 so a player isn't incorrectly awarded points
            roundScore = 0;
            // All needed logic already exists in hold()
            hold();
        }
        else
        {
            // Add last roll to roundScore and update the DOM
            roundScore += roll;
            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
}

/**
 * @summary Checks if anyone has won the game.
 */
function checkWinner()
{
    // Create placeholder winner and loser variables
    // by default they will be set to undefined
    let winner, loser;

    // Check if player 1 has a large enough score to win
    if(score[0] >= MAX_SCORE)
    {
        // Set winner and loser
        winner = 0;
        loser = 1;
    }
    // Check if player 2 has a large enough score to win
    else if(score[1] >= MAX_SCORE)
    {
        // Set winner and loser
        winner = 1;
        loser = 0;
    }

    // If winner has been changed from undefined we know someone won the game
    if(winner !== undefined)
    {
        // Make sure correct score is shown for each player
        // Make sure both players have their active state turned off
        for(let i = 0; i < 2; i++)
        {
            document.getElementById('score-' + i).textContent = score[i];
            document.querySelector('.player-' + i + '-panel').classList.remove('active');
        }

        // Set winner's panel to winner state
        document.querySelector('.player-' + winner + '-panel').classList.add('winner');
        document.getElementById('name-' + winner).textContent = 'Winner!';
        // Set gamePlaying state to false so roll dice and hold button are disabled
        gamePlaying = false;
    }
}

/**
 * @summary Generates a random number between 1 and the number (inclusive) passed in.
 * @param {number} number
 */
function getRandom(number)
{
    // Math.floor gets rid of any decimal values
    // Math.random generates a number between 0 and 1 (exclusive)
    // We multiple that random float by number to get a number between 0 and number-1
    // By adding 1 to the new number we ensure we return a value between 1 and number (inclusive)
    return Math.floor(Math.random() * number) + 1;
}