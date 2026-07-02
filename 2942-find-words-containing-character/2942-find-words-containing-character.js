/**
 * @param {string[]} words
 * @param {character} x
 * @return {number[]}
 */
var findWordsContaining = function (words, x) {
    let result = [];
    for (let i = 0; i < words.length; i++) {
        let word = words[i];

        for (let j of word) {
            if (j.includes(x)) {
               result.push(i)
               break;

            }
        }
    }
    return result
}; 