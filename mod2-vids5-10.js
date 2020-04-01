function sayHello() {
  console.log("--------------");
  console.log("Hello");
  console.log("--------------");
}

sayHello();
let a = sayHello;
a();

function sayHello(name) {
  console.log("--------------");
  console.log("Hello" + name + "!");
  console.log("--------------");
}

sayHello("Jim");
sayHello("Joe");
sayHello("Tom");

function calculateTax(amount) {
  let result = amount * 1.21;
  return result;
}

let afterTax = calculateTax(78);
console.log(afterTax);

let b = "first";

// Scope

function scopeTest() {
  b = `changed value`;
  let c = "second";
  if (b != "") {
      console.log('inside if' + b);
    }
}
// console.log(c); Error c is not defined, it is only inside the function

console.log(b);
scopeTest();


