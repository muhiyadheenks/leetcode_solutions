/**
 * @param {number} n
 * @return {number}
 */
var mirrorDistance = function(n) {
    let rev = 0;
    let temb = n;
    while(temb >0){
        let digit =temb % 10;
        rev = rev * 10 + digit;
        temb = Math .floor(temb/10); 
    }
    return Math.abs(n - rev)
};