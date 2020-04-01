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
    console.log("inside if" + b);
  }
}
// console.log(c); Error c is not defined, it is only inside the function

console.log(b);
scopeTest();

// Object Leterals

let car = {
  make: "bmw",
  model: "745",
  year: 2015,
  getPrice: function() {
    return 15000;
  },
  printDescription: function() {
    console.log(this.make + " " + this.model);
  }
};

car.printDescription();
console.log(car.year);

console.log(car["year"]);

let anotherCar = {};
anotherCar.whatever = "bob";
console.log(anotherCar.whatever);

let house = {
  myProperty: { b: "hi" }
};

console.log(house.myProperty.b);

let house2 = {
  propertyTwo: [
    { aa: "this" },
    { bb: "can" },
    { cc: "get" },
    { gg: "complicated" }
  ]
};

console.log(house2.propertyTwo[3]);

let carLot = [
  { year: 2015, make: "Toyota", model: "avensis" },
  { year: 2018, make: "opel", model: "corsa" },
  { year: 2013, make: "audi", model: "a4" }
];

console.log(carLot);

// Null Type

let aaa;
console.log(aaa);
console.log(typeof aaa);

let pattern = "xyz";
let value = "This is just a test";
let result = value.match(pattern);

console.log(result);
console.log(typeof result);
// returns an object, its a fault in js

if (result === null) {
  console.log("No match was found");
}
