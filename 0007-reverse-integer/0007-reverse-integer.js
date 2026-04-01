/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
   let sign = Math.sign(x)
   let reversed = Math.abs(x)
   .toString()
   .split("")
   .reverse()
   .join("")
   let result = sign * parseInt(reversed)
   if(result < -2147483648 || result > 2147483647){
    return 0

   }
   return result
   
};