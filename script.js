//? objets
/*
const obj = {
  name: "Zareel",
  favAnimal: "Parrot",
  age: 43,
};

console.log(obj.name);
console.log(obj.age);
console.log(obj.favAnimal);

console.log(obj["name"]);
console.log(obj["age"]);

*/

//? array
/*
let arr = ["shon", "shine", "zareel"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr);
*/

//? typeof operator
/*
let name = "Zareel";
console.log(typeof name);

let age = 43;
console.log(typeof age);

let val = false;
console.log(typeof val);

let num = null;
console.log(typeof num);

let cat;
console.log(typeof cat);
*/

//? comparison operaton:- there are strict comparison (===) and abstract comparison (==)
/*
function getName() {
  fName = "Zareel";
  console.log(fName);
}
console.log(fName)
getName();
*/
//function scope: variables declared inside the fuction cannot be used outside function
/*
function getName() {
  let firstName = "Zareel";
  console.log(firstName);
  if (true) {
    let firstName = "shine";
    console.log(firstName);
  }
}
getName();
*/
//? Block scope: a variable declared inside if or switch condition or for or while loop can be?
//? accessible within the condition of loop

//? forEach()

/*
let arr = [1, 2, 3];
arr.forEach((elem, index) => {
  console.log(elem + " comes at " + index);
});
*/

//? filter()
/*
let arr = [10, 20, 30];
let result = arr.filter(function (element) {
  return element !== 20;
});
console.log(result);
*/

//? map()
/*
let arr = [1, 2, 3, 4, 5];
let mapped = arr.map((element) => {
  return element * 10;
});
console.log(mapped);
*/
//? reduce()
/*
let arr = [1, 2, 3, 4, 5];
let sum = arr.reduce((sum, element) => {
  return sum + element;
});
console.log(sum);
*/

//?hoisting
/*
console.log(message);
var message = "this has been hoisted";
*/
/*
function hoist() {
  a = 20;
  let b = 100;
}
hoist();
console.log(a);
console.log(b);
*/
/*
console.log(a);
let a = 100;
*/

//?closure
/*
let outerFunction = () => {
  firstName = "zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let value = outerFunction();
value();
*/

//? spread operators
/*
let obj = { a: 1, b: 2 };
let shadowclone = { ...obj };
console.log(shadowclone);
*/

//?closure
/*
let outerFunction = () => {
  let firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction();
result();
*/

//? ...spread operator
/*
let obj = { a: 1, b: 2, c: 3 };
let shadowobj = { ...obj };
console.log(shadowobj);
*/

//? prototype chaining
/*
function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}

Person.prototype.getFullName = function () {
  return this.firstName + " " + this.lastName;
};

var person = new Person("Zareel", "Kalam", 43);
console.log(person);

person.hasOwnProperty("fristName");
person.hasOwnProperty("getFullName");
person.getFullName();
*/

//? call()
/*
let employee1 = { firstName: "Zareel", lastName: "Kalam" };
let employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}
greet.call(employee1, "hello how are you?");
greet.call(employee2, "hello how are you?");
*/

//? bind()
/*
let employee1 = { firstName: "Zareel", lastName: "Kalam" };
let employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}

var first = greet.bind(employee1);
var second = greet.bind(employee2);

first("hello");
second("hello");
*/

//? apply()
/*
let employee1 = { firstName: "Zareel", lastName: "Kalam" };
let employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}

greet.apply(employee1, ["Hello", "How are you?"]);
*/
//? higher order function
/*
setTimeout(() => {});
*/
//? unani function
/*
let unaniFunction = (a) => console.log(a + 10);

function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}
volume(2)(6)(3);
*/
//?callback
/*
function add(a, b, callback) {
  const result = a + b;
  callback(result);
}

function logResult(result) {
  console.log(result);
}

add(2, 3, logResult); // logs "5"
*/
//?callback
/*
function firstFunction() {
  // Simulate a code delay
  setTimeout(function () {
    console.log("First function called");
  }, 1000);
}
function secondFunction() {
  console.log("Second function called");
}
firstFunction();
secondFunction();
*/
/*
function shine() {
  setTimeout(() => {
    console.log("shine is the first child");
  }, 1000);
}

function shon() {
  console.log("shon is the second child");
}

shine();
shon();
*/

//?callback
/*
setTimeout(()=>{})
*/
//? callback is important
/*
let firstFuncion = () => {
  setTimeout(() => {
    console.log("This is first");
  }, 2000);
};

let secondFunction = () => {
  console.log("This is second");
};

firstFuncion();
secondFunction();
*/

//? callback hell
/*
async1(function () {
  async2(function () {
    async3(function () {
      async4(function () {});
    });
  });
});
*/
//? promise
/*
new Promise(function (resolve, reject) {
  setTimeout(resolve(1), 1000);
})
  .then(function (result) {
    console.log(result);
    return result * 2;
  })

  .then(function (result) {
    console.log(result);
    return result * 3;
  })

  .then(function (result) {
    console.log(result);
    return result * 4;
  });
*/

//?eval
/*
console.log(eval("2+3"));
*/
/* 
isNaN("hello");
console.log(isNaN());

isNaN("100");
console.log(isNaN());

console.log(typeof NaN);
*/

//?setInterval
/*
setInterval(() => {
  console.log("Zareel");
}, 2000);
*/

//? event delegation
/*
let form = document.querySelector("registration-form");

form.addEventListener(
  "input",
  (event) => {
    console.log(event.target);
  },
  false
);
*/

//? json stringify
/*
var user = { name: "Zareel", age: 43 };
var userString = JSON.stringify(user);
console.log(userString);
*/

//?setInterval
/*
setInterval(() => {
  console.log("hey shon");
}, 2000);
*/

//? delegation technique
/*
let form = document.querySelector("#registration-form");

form.addEventListener("input", (event) => {
  console.log(event.target)
}, false)

*/

//? json stringify
/*
let userjson = { name: "zareel", age: 43 };
let userString = JSON.stringify(userjson);
console.log(userString);
*/
/*
let userString = '{"name":"Prabir","age":25}';
let userJSON = JSON.parse(userString);
console.log(userJSON);
*/
//? clearTimeout()
/*
let msg;
function greeting() {
  alert("Hey Shon");
}

function start() {
  msg = setTimeout(greeting, 4000);
}

function stop() {
  clearTimeout(msg);
}
*/
/* 
function myFun() {
  console.log("Hello");
  return "World";
  console.log("bye bye");
}
myFun();
*/

//? clearInterval()
/*
var msg;

function greeting(){
  alert("HeyShon")
}

function start(){
  msg = setInterval(greeting, 4000)
}

function stop(){
  clearInterval(msg)
}
*/

//? redirect
/*
function redirect(){
  window.location.href="newpage.html"
}
*/

//? how to check if a string contains a substring

//? includes() method
/*
let mainstring = "Zareel";
let substring = mainstring.includes("Zar");
console.log(substring);
*/
/*
let mainString = "Zareel";
let subString = "Zar";
console.log(mainString.includes(subString));
*/

//? indexOf
/*
let mainString = "Zareel";
let subString = "Zar";
console.log(mainString.indexOf(subString) !== -1);
*/

//? regex
//! not working
/*
let mainString = "Zareel";
RegExp = "/Zar/";
console.log(RegExp.test.mainString);
*/

//? break
/*
for (i = 1; i < 10; i++) {
  if (i === 5) {
    break;
  }
  console.log(i);
}
*/

//? continue
/*
for (i = 1; i <= 10; i++) {
  if (i === 5) {
    continue;
  }
  console.log(i);
}
*/

//? json array
/*
let jsonArray = [{ firstName: "Shon" }, { lastName: "Leo" }, { age: 15 }];
*/

//? how will you generate random numbers between 1 to 10
/*
let random  = Math.floor(Math.random() * 10 + 1);
console.log(random)
*/
/*
let randomNumber = Math.floor(Math.random() * 100 + 1);
console.log(randomNumber);
*/

//?Changing style of an html element using javascript
// using style property
/*
document.getElementById("title").style.fontSize = "50px"
*/
//using className property
/*
document.getElementById("title").style.className = "custom title"
*/
//? debugger statement
/*
function getProfile(){
  // code goes here
  debugger;
  //code goes here
}*/

//? ternary operators
/*
let isAuthenticated = true;

console.log(
  isAuthenticated ? "Hello, welcome" : "sorry you are not authenticated"
);
*/

//? to get the keys of objects
/*
let user = {
  name: "Zareel",
  gender: "female",
  age: 43,
};
console.log(Object.keys(user));
*/

//? to get the values
/*
let user = {
  name: "Zareel",
  gender: "female",
  age: 43,
};
console.log(Object.values(user));
*/
//?What is object in javascript

//*Anything inside the curly baces is known as an object
//* Objects are in key- value pairs

//? create an object with prototype
//!not working
/*
let user = {
  name: "Zareel",
  printInfo: function () {
    console.log(`My name is ${this.name}`);
  },
};
let admin = Object.create(Person);
*/

//? anonimous function
/*
function(optionaParameter){
  //do something
}
let myFunction = function(){
  //do something
}
*/
/*
[1, 2, 3].map(function (element) {
  // do something
});
*/
/*
let x = function (a, b) {
  return a * b;
};
let z = x(2, 10);
console.log(z);
*/

//? precedence order
/*
let msg = "Good Morning";

function greeting() {
  msg = "Good Evening";
  console.log(msg);
}
greeting();
*/

//? javascript accessors, getters and setters
/*
let user = {
  firstName: "Zareel",
  lastName: "Kalam",
  language: "en",
  get lang() {
    return this.language;
  },
  set lang(lang) {
    this.language = lang;
  },
};
console.log(user.lang); // getter access lang as en
user.lang = "fr";
console.log(user.lang); // setter used to set lang as fr
*/

//?.call and .apply
/*
function add(a, b) {
  return a + b;
}
console.log(add.call(null, 1, 2));
console.log(add.apply(null, [5, 8]));
*/
/*
let arr = [1, 2, 3];

let total = 0;

for (let i = 0; i < arr.length; i++) {
  total += arr[i];
}
console.log(total);
*/
/*
function multiplyAll(arr) {
  var product = 1;
  // Only change code below this line

  for (var i = 0; i < arr.length; i++) {
    for (var x = 0; x < arr[i].length; x++) {
      product *= arr[i][x];
    }
  }

  // Only change code above this line
  return product;
}

// Modify values below to test your code
multiplyAll([
  [1, 2],
  [3, 4],
  [5, 6, 7],
]);
*/

//? undefined
/*
let x;
console.log(x);
console.log(x === undefined);
*/
/*
let x = 11;
console.log(x);
console.log(x === undefined);
*/
/*
let outerFunction = () => {
  let firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction();
result();
*/

//? typeof
/*
let fname = "Zareel";
console.log(typeof fname);

let number = 100;
console.log(typeof number);
*/

//? instanceof
/*
var dog = new Animal();
dog instanceof Animal;
*/

//? slice()

let numbers = [1, 2, 3, 4, 5, 6];
console.log(numbers.slice(2));
