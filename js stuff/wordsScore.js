/*
Consider that vowels in the alphabet are a, e, i, o, u and y.
Function score_words takes a list of lowercase words as an argument and returns a score as follows:
The score of a single word is 2 if the word contains an even number of vowels. Otherwise, the score of this
word is 1. The score for the whole list of words is the sum of scores of all words in the list.
Create the function score_words

Your function will be tested on several cases by the locked template code.
 */

function score_words(s) {
    let count = 0;
    for (let i = 0; i < s.length; i++) {
        let item = s[i];
        let inner_count = 0;
        for (let j = 0; j < item.length; j++) {
            if (item[j].match(/[aeiouy]/)) {
                inner_count += 1;
            }
        }
        if (inner_count%2 === 0) {
            count += 2;
        }
        else {
            count += 1;
        }
    }
    return count;
}

// test input:
// console.log(score_words("programming is awesome".split(' ')));