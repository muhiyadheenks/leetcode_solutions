const arr = [1, 2, 3];

function plusone(n) {
  return n + 1;
}

var map = function (arr, fn) {
  const result = [];

  for (let i = 0; i < arr.length; i++) {
    result.push(fn(arr[i], i));
  }

  return result;
};

let newarray = map(arr, plusone);
console.log(newarray); 
