/**
 * @param {number[]} order
 * @param {number[]} friends
 * @return {number[]}
 */
var recoverOrder = function(order, friends) {
    let set = new Set(friends);
    let result = [];
    for(let person of order){
        if(set.has(person)){
            result.push(person)
        }
    }
    return result
};