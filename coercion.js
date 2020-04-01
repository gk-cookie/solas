let a = 7;
let b = '6';

// it logs out 76 because the 6 is a string

b = parseInt(b, 10);
let c = a + b;

console.log('Answer: ' + c);
console.log('it works');

let d = parseInt('bob', 10)
console.log(d);
// returns NaN - Not A Number
let e = isNaN(d);
// returns true d is not a number


