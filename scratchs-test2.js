let x = 7;
let y = true;
let z = 'hello world';

console.log(typeof x, y);
console.log(typeof z);

let a;
console.log(a);
console.log(typeof a);

let ridLong = "This is just a ridiculously long string";
document.write(ridLong.indexOf("s"));
console.log("Barry's");

let things = ["toys", "teddys", "cars", "hoops"];
let elementRemoved = things.shift();
alert(elementRemoved);

let randomDate = new Date(2018, 1, 7);
console.log(randomDate.getDate());
console.log(Math.pow(2,4));
console.log(Math.sqrt(9));

var months = [
  "jan",
  "feb",
  "march",
  "april",
  "may",
  "jun",
  "jul",
  "aug",
  "sept",
  "oct",
  "nov",
  "dec"
];

alert("the month is:" + months[randomDate.getMonth()]);

let min = Math.max(-2, 7.9, 8.7, 6, 1.1);
alert(Math.round(min));

function doesItChange(number, origDate) {
  number++;
  origDate.setDate(origDate.getDate() + 1);
}

let num = 1;
var originalDate = new Date ();
doesItChange(num, originalDate);
alert("num: " + num + "\noriginalDate: " + originalDate);