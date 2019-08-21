/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

/********************************************************************************************
 * Initialize new game
 *  - Set scores to 0
 *  - Set Player 1 to active
 *  - Hide dice
 *  - Set gamePlaying to true
 * Tie in new game button - Clicking it runs init function
 * Tie in roll dice
 *  - Roll dice
 *  - Update scores as necessary or switch active player
 * Tie in hold button
 *  - Current score moves to global score
 *  - Call next player
*/
const MAX_SCORE = 25;

let activePlayer;
let roundScore;
let gamePlaying;

let playerOneGlobalScore = document.querySelector('#score-0');
let playerOneRoundScore = document.querySelector('#current-0');
let playerOnePanel = document.querySelector('.player-0-panel');

let playerTwoGlobalScore = document.querySelector('#score-1');
let playerTwoRoundScore = document.querySelector('#current-1');
let playerTwoPanel = document.querySelector('.player-1-panel');

init();

document.querySelector('.btn-new').addEventListener('click', init);

document.querySelector('.btn-hold').addEventListener('click', hold);

document.querySelector('.btn-roll').addEventListener('click', rollDice);

function hold()
{
    if(activePlayer === 0)
    {
        playerOnePanel.classList.remove('active');
        playerTwoPanel.classList.add('active');

        playerOneGlobalScore.textContent = roundScore;
        playerOneRoundScore.textContent = 0;
        roundScore = 0;

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice').src = '';

        activePlayer = 1;
    }
    else
    {
        playerOnePanel.classList.add('active');
        playerTwoPanel.classList.remove('active');

        playerTwoGlobalScore.textContent = roundScore;
        playerTwoRoundScore.textContent = 0;
        roundScore = 0;

        document.querySelector('.dice').style.display = 'none';
        document.querySelector('.dice').src = '';

        activePlayer = 0;
    }
}

function init()
{
    activePlayer = 0;
    roundScore = 0;
    gamePlaying = true;
    
    // Set player scores to 0
    playerOneGlobalScore.textContent = 0;
    playerOneRoundScore.textContent = 0;
    playerTwoGlobalScore.textContent = 0;
    playerTwoGlobalScore.textContent = 0;

    // Set player panels to starting positions
    playerOnePanel.classList.remove('winner');
    playerTwoPanel.classList.remove('winner');
    playerOnePanel.classList.remove('active');
    playerTwoPanel.classList.remove('active');
    playerOnePanel.classList.add('active');

    document.querySelector('.dice').style.display = 'none';
}

function rollDice()
{
    if(gamePlaying)
    {
        var roll = getRandom(6);

        document.querySelector('.dice').style.display = 'block';
        document.querySelector('.dice').src = 'dice-' + roll + '.png';

        if(roll === 1)
        {
            roundScore = 0;
            hold();
        }
        else
        {
            roundScore += roll;

            if(activePlayer === 0)
            {
                playerOneRoundScore.textContent = roundScore;
                
                if(roundScore + playerOneGlobalScore.textContent >= MAX_SCORE)
                {
                    playerOneGlobalScore.textContent += roundScore;
                }
            }
        }
    }
}

function getRandom(number)
{
    return Math.floor(Math.random() * number) + 1;
}