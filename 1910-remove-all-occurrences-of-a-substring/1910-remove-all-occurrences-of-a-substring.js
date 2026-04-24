/**
 * @param {string} s
 * @param {string} part
 * @return {string}
 */
var removeOccurrences = function(s, part) {
    
    const stack = []
    for(let ch of s){
        stack.push(ch)
        if(stack.length >= part.length){
            let last = stack.slice(-part.length).join("");
            if(last === part){
                for(let i = 0 ; i < part.length; i++){
                    stack.pop()
                }
            }
        }
    }
    return stack.join('')
};