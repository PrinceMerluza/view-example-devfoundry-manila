/**
 * @file Manages the contestants of the online game show
 * @author Wally Revillame
 */

import poker from './games/poker.js';
import quiz from './games/quiz.js';

// Constants
const clientId = '12345-67890-12345';

// Variables 
let contestants = [];
let winner = '';

/**
 * Plays and shows the opening theme of the game show
 */
function playOpeningTheme(){ 
    // Code here
}

/**
 * Declares the winner of the entire competition
 * @param {String} contestantName the name of the winner
 */
function declareWinner(contestantName){ 
    // Code here
}

/**
 * Determines if the game is finished
 * @returns {Boolean} 
 */
function isGameFinished(){
    // Code here
}

// Auto-run section
playOpeningTheme();
console.log('Welcome to Wowoweewee!');
console.log('Let\'s start the game');
// More Code here.....

export default {
    /**
     * Returns the name of the winner
     * @returns {String} Name of the winner, null if noone won yet
     */
    getWinner(){
        if(isGameFinished())  return winner;
    }
}