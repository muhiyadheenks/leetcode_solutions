nums = [1,2,3,4]
fn = function sum(accum, curr) { return accum + curr; }

var reduce = function(nums, fn, init) {
    let val=init;
    for(i=0;i<nums.length;i++){
      val=fn(val,nums[i])
    }
    return val;
};