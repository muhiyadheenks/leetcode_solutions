/**
 * @param {string[]} words
 * @param {number[]} weights
 * @return {string}
 */
var mapWordWeights = function(words, weights) {
     let result = "";

    for (let word of words) {
        let sum = 0;

        for (let ch of word) {
            let index = ch.charCodeAt(0) - 'a'.charCodeAt(0);
            sum += weights[index];
        }

        let mod = sum % 26;

        let mappedChar = String.fromCharCode('z'.charCodeAt(0) - mod);

        result += mappedChar;
    }

    return result;
};