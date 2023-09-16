/*
Kevin and Stuart want to play the 'The Minion Game'.

Game Rules

Both players are given the same string, .
Both players have to make substrings using the letters of the string .
Stuart has to make words starting with consonants.
Kevin has to make words starting with vowels.
The game ends when both players have made all possible substrings.

Scoring
A player gets +1 point for each occurrence of the substring in the string.

BANANA
 */

function minionGame(word) {
    let Stuart = 0; Kevin = 0;
    let vowels = "AEIOU";

    for (let i = 0; i < word.length; i++) {
        if (!vowels.includes(word[i])) {
            Stuart += word.length - i;
        }
        else {
            Kevin += word.length - i;
        }
    }
    if (Stuart > Kevin) {
        console.log(`Stuart ${Stuart}`);
    }
    else if (Kevin > Stuart) {
        console.log(`Kevin ${Kevin}`);
    }
    else {
        console.log(`The game ends in a draw`);
    }
}

minionGame("BANANANAAAS");