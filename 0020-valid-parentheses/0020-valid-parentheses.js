/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
const stack = [];
const map = {
        ')': '(',
        '}': '{',
        ']': '['
}
for(let ch of s){
    if(map[ch]){
        let top =stack.pop()
        if(top !== map[ch]){
            return false;   
        }
    }else{
        stack.push(ch)

    }
}
 return stack.length === 0;   
};