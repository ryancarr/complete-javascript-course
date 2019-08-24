/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
const MAX_SCORE = 25;

let activePlayer = 0;
let gamePlaying = true;
let roundScore = 0;
let score = [0,0];


document.querySelector('.btn-new').addEventListener('click', init);
document.querySelector('.btn-hold').addEventListener('click', hold);
document.querySelector('.btn-roll').addEventListener('click', rollDice);

init();

function hold()
{
    if(gamePlaying)
    {
        score[activePlayer] += roundScore;
        roundScore = 0;

        let other;

        activePlayer === 0 ? other = 1 : other = 0;

        document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
        document.querySelector('.player-' + other + '-panel').classList.add('active');

        document.getElementById('score-' + activePlayer).textContent = score[activePlayer];
        document.getElementById('current-' + activePlayer).textContent = roundScore;
        
        document.querySelector('.dice').style.display = 'none';

        activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
    }

    checkWinner();
}

function init()
{
    activePlayer = 0;
    score = [0,0];
    gamePlaying = true;
    
    for(let i = 0; i < 2; i++)
    {
        // Unset winner and active states for panel
        document.querySelector('.player-' + i + '-panel').classList.remove('winner');
        document.querySelector('.player-' + i + '-panel').classList.remove('active');

        // Set scores to 0
        document.getElementById('score-' + i).textContent = 0;
        document.getElementById('current-' + i).textContent = 0;
    }

    document.querySelector('.player-0-panel').classList.toggle('active');

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

            document.getElementById('current-' + activePlayer).textContent = roundScore;
        }
    }
}

function checkWinner()
{
    let winner, loser;

    if(score[0] >= MAX_SCORE)
    {
        winner = 0;
        loser = 1;
    }
    else if(score[1] >= MAX_SCORE)
    {
        winner = 1;
        loser = 0;
    }

    if(winner !== undefined)
    {

        for(let i = 0; i < 2; i++)
        {
            // Set global scores
            document.getElementById('score-' + i).textContent = score[i];
            document.querySelector('.player-' + i + '-panel').classList.remove('active');
        }

        document.querySelector('.player-' + winner + '-panel').classList.add('winner');
        gamePlaying = false;
    }
}

function getRandom(number)
{
    return Math.floor(Math.random() * number) + 1;
}