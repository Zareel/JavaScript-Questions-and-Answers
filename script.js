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

let outerFunction = () => {
  firstName = "zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let value = outerFunction();
value();
