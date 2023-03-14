# 1. List some features of JavaScript.

- Lightweight :- small memory footprint, simple syntax and semantics, easy to implement
- Interpreted programming language:- use software called interpreters to convert highlever source code in to machine language
- Complementary to Java
- Complementary to HTML
- Open source:- original source code is made freely available
- Cross-platform:- can work acrosss multiple type of operating environment

# 2. Who developed JavaScript, and what was the first name of JavaScript?

JavaScript was developed by Brendan Eich in 1995. The first name of JavaScript was Mocha. Then it changed to Live Script and later changed to JavaScript.

# 3. List some of the advantages of JavaScript.

`Some of the advantages of JavaScript are:`

- Server interaction is less
- Feedback to the visitors is immediate
- Interactivity is high
- Interfaces are richer

# 4. List some of the disadvantages of JavaScript.

`Some of the disadvantages of JavaScript are:`

- No support for multithreading
- No support for multiprocessing
- Reading and writing of files is not allowed
- No support for networking applications.

# 5. What is ECMAScript ?

ECMAScript is the JavaScript standard intended to ensure the interoperability(exchange information) of webpages across different browsers. Inshort it is a language specification.

===========================================

# 6. What is JSON ?

JSON (JavaScript Object Notation) is a lightweight format that is used for data interchanging. It is based on a subset of JavaScript language in the way objects are built in JavaScript.

# 7. What are the syntax rules of JSON?

Below are the list of syntax rules of JSON

- The data is in name/value pairs
- The data is separated by commas
- Curly braces hold objects
- Square brackets hold arrays

# 8. Why do you need JSON ?

When exchanging data between a browser and a server, the data can only be text. Since JSON is text only, it can easily be sent to and from a server, and used as a data format by any programming language.

# 9. What are PWAs ?

Progressive web applications (PWAs) are a type of mobile app delivered through the web, built using common web technologies including HTML, CSS and JavaScript. These PWAs are deployed to servers, accessible through URLs, and indexed by search engines.

# 10. What is V8 JavaScript engine ?

V8 is an open source high-performance JavaScript engine used by the Google Chrome browser, written in C++. It is also being used in the node.js project. It implements ECMAScript and WebAssembly, and runs on Windows 7 or later, macOS 10.12+, and Linux systems that use x64, IA-32, ARM, or MIPS processors. Note: It can run standalone, or can be embedded into any C++ application.

===========================================

# 11. What is jQuery ?

jQuery is a popular cross-browser JavaScript library that provides Document Object Model (DOM) traversal, event handling, animations and AJAX interactions by minimizing the discrepancies across browsers. It is widely famous with its philosophy of “Write less, do more”.

`cross-browser testing is a type of non-functional testing that lets you know whether your website works as intended when accessed through`

`AJAX- Asynchronous Javascript and XML, used to communicate with the server without refreshing the webpage and thus increasing the user experience and better performance`

# 12. What is the object type?

The object are a compound value where you can set properties that each hold their own values of any type. Objects are displayed in curly braces

```javascript
const person = {
  firstName: "Zareel",
  lastName: "Kalam",
  eyeColor: "brown",
};

// There are two ways to access object values.

person.firstName;
person.lastName;
person.eyeColor;

person["firstName"];
person["lastName"];
person["brown"];
```

# 13. Explain arrays in JavaScript

An array is a collection of data displayed in a square bracket, seperated with commas.

```javascript
let arr = ["shon", "shine", "zareel"];

console.log(arr[0]);
console.log(arr[1]);
console.log(arr[2]);

console.log(typeof arr); // output: object
```

# 14. What is typeof operator?

JavaScript `typeof` operator tells you what datatype it is:

```javascript
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
```

# 15. Explain equality in JavaScript

JavaScript has both strict and type–converting comparisons:
Strict comparison (e.g., ===) checks for value equality and the datatypes
Abstract comparison (e.g. ==) checks for value equality not datatypes

```javascript
var a = "90";
var b = 90;

a == b; // true
a === b; // false
```

===========================================

# 16. What is Scope in JavaScript?

Scope means from where the variable can be accessed.

- `function scope`: When a variable is declared inside a function, it is only accessible within that function and cannot be used outside that function.

```javaScript
function getName() {
  firstName = "zareel";
  console.log(firstName);//can be accessed from here
}
console.log(firstName);// can'
t be accessed from here
getName();

```

- `block scope`: A variable when declared inside the if or switch conditions or inside for or while loops, are accessible within that particular condition or loop.

```javascript
function getName() {
  let name = "Zareel";
  console.log(name);
  if (true) {
    let name = "Shon";
    console.log(name);
  }
}
getName();
```

---

# 17. What are Types in JavaScript

The following are built in data typesvailable:

- string
- number
- boolean
- null and undefined
- object
- symbol

---

# 18. Difference between let, var and const

- `var` variables can be updated and re-declared within its scope.
- `let` variables can be updated but not re-declared.
- `const` variables can neither be updated nor re-declared.

- `var`: has Global Scope, function scope, block scope
- `let`: has function scope, block scope
- `const`: has function scope, block scope

---

# 19. What is the difference between == and ===?

Both are used to compare values.
=== checks the datatypes as well

```javascript
1 == "1"; // true
1 == [1]; // true
1 == true; // true
0 == ""; // true
0 == "0"; // true
0 == false; // true
```

---

# 20. What's the difference between Host objects and Native objects?

- Native objects are objects that are part of the JavaScript language defined by the ECMAScript specification, such as String, Math, Object, Function, etc.
- Host objects are provided by the runtime environment (browser or Node), such as window.

==============================================

# 21. What is difference between document.getElementById() and document.querySelector()?

- ## document.getElementById():

Returns the element whose id matches the specified string.

- ## document.querySelector():

Returns the first element from the document that matches the specified selector or a group of selectors.

- ## document.querySelectorAll():

Returns all elements that matches the specified selector;

# 22. What is a callback?

- A callback is a function that is passed as a parameter in another function

```javascript
setTimeout(() => {});
```

# 23. What is Higher Order Function(HOF)?

HOF is a function that take another function as parameter

```javascript
let names = ["Zareel", "Shon", "Shine"];
let message = names.forEach((name){
  console.log("Hi " + name)
})
```

# 24. When to use reduce(), map(), foreach() and filter() in JavaScript?

- ## forEach():

It takes a callback function and run that callback function on each element of array one by one.

```javascript
var arr = [10, 20, 30];

arr.forEach(function (element, index) {
  console.log(element + " comes at " + index);
});
```

output

```javascript
10 comes at 0
20 comes at 1
30 comes at 2
```

- ## filter():

filter() returns a new array with the elements that passes a test provided by a function.
Note: filter does not modify the original array.

```javascript
var arr = [10, 20, 30];

var result = arr.filter(function (element) {
  return elem !== 20;
});
console.log(result);
```

- ## map():

map() like filter() & forEach() takes a callback and run it against every element on the array but whats makes it unique is it generate a new array based on your existing array.

```javascript
let arr = [1, 2, 3, 4, 5];
let mapped = arr.map((element) => {
  return element * 10;
});
console.log(mapped);
```

- ## reduce():
  reduce() method of the array object is used to reduce the array to one single value.

```javascript
var arr1 = [10, 20, 30];

var sum = arr.reduce(function (sum, element) {
  return sum + element;
});
console.log(sum); // Output: 60
```

# 25 What is Hoisting in JavaScript?

Hoisting is a JavaScript mechanism where the declaratio of variables and functions are moved to the top of their scope before the execution of the code.

Example 01: Variable Hoisting

```javascript
console.log(message); // output : undefined

var message = "The variable Has been hoisted";
```

Example 02: Function Hoisting

```javascript
function hoist() {
  a = 20;
  var b = 100;
}

hoist();

console.log(a);
/*
Accessible as a global variable outside hoist() function
Output: 20
*/

console.log(b);
/*
Since it was declared, it is confined to the hoist() function scope.
We can't print it out outside the confines of the hoist() function.
Output: ReferenceError: b is not defined
*/
```

All declarations (function, var, let, const and class) are hoisted in JavaScript, while the var declarations are initialized with undefined, but let and const declarations remain uninitialized.

```javascript
console.log(a);
let a = 3;

// Output: ReferenceError: a is not defined
```

==================================================================

# 26. What are closures?

A closure is the combination of a function and the lexical environment within which that function was declared.

```javascript
let outerFunction = () => {
  firstName = "zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let result = outerFunction();
result();
```

Here, when the outerFunction() gets called, an execution context of the outerFunction() comes up and it does its task and disappears from the callstack (memory) creating a reference of the innerFunction() in the memory. This reference is stored in the variable result. As it is a reference of a function, the result() becomes a function calling the innerfunction() which maintains a reference to its lexical environment, within which the variable firstName exists. For this reason, when the result() is invoked, the variable firstName remains available for use, and "Shine" is passed to console.log even after the parent function has closed.

# 27. How do you clone an object in JavaScript?

Using the object spread operator ..., the object that own enumerable properties can be copied into the new object. This creates a shallow clone of the object.

```Javascript
const obj = { a: 1, b: 2 };
const shallowClone = { ...obj };
```

# 28. What is an event flow?

Event flow in javascript has three important phases.

- Evert Capturing phace
- Target phase
- Event Bubbling phase

Event capturing is the first to occur, where the events are intercepted if necessary
This is followed by the event reaching the actual target
And the final phase is bubbling when the ultimate response to the event takes place

# 29 What is prototype chain?

Nearly all objects in JavaScript are instances of Object. That means all the objects in JavaScript inherit the properties and methods from Object.prototype. This is called Prototype chaining.
Prototype chaining is used to build new types of objects based on existing ones. It is similar to inheritance in a class based language.

```javascript
   function Person(firstName, lastName, age) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.age = age;
}
//Person class created
Person.prototype.getFullName = function() {
  return this.firstName + " " + this.lastName;
}

// we have added getFullName method in Person’s prototype.
var person = new Person("Zareel", "Kalam", 43);
// It will create an instance of the Person class
> person.hasOwnProperty("firstName");  // true
> person.hasOwnProperty("getFullName");  // false
> person.getFullName(); //

```

# 30 What is the difference between Call, Apply and Bind?

## call():

The call() method invokes a function with a given `this` value and arguments provided one by one

```javascript
var employee1 = { firstName: "Zareel", lastName: "Kalam" };
var employee2 = { firstName: "Shon", lastName: "Leo" };

function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

greet.call(employee1, "Hello", "How are you?"); // Hello Prabir Kumar, How are you?
greet.call(employee2, "Hello", "How are you?"); // Hello Kumar P, How are you?
```

## apply():

Invokes the function and allows you to pass in arguments as an array

```javascript
var employee1 = { firstName: "Prabir", lastName: "Kumar" };
var employee2 = { firstName: "Kumar", lastName: "P" };

function greet(greeting1, greeting2) {
  console.log(greeting1 + " " + this.firstName + " " + this.lastName);
}

greet.apply(employee1, ["Hello", "How are you?"]); // Hello Prabir Kumar, How are you?
greet.apply(employee2, ["Hello", "How are you?"]); // Hello Kumar P, How are you?
```

## bind():

returns a new function, allowing you to pass in an array and any number of arguments

```javascript
var employee1 = { firstName: "Prabir", lastName: "Kumar" };
var employee2 = { firstName: "Kumar", lastName: "P" };

function greet(greeting1, greeting2) {
  console.log(
    greeting1 + " " + this.firstName + " " + this.lastName + ", " + greeting2
  );
}

var inviteEmployee1 = greet.bind(employee1);
var inviteEmployee2 = greet.bind(employee2);
inviteEmployee1("Hello", "How are you?"); // Hello Prabir Kumar, How are you?
inviteEmployee2("Hello", "How are you?"); // Hello Kumar P, How are you?
```

========================================================================================

# 31. What is a higher order function?

HOF is a function that take another function as parameter

```javascript
setTimeout(() => {});
```

# 32. What is a unary function?

Unary function (i.e. monadic) is a function that accepts exactly one argument.

```javascript
const unaryFunction = (a) => console.log(a + 20);
```

# 33. What is currying function?

Currying is the process of taking a function with multiple arguments and turning it into a sequence of functions each with only a single argument.

```javascript
function volume(length) {
  return function (width) {
    return function (height) {
      return height * width * length;
    };
  };
}

volume(2)(6)(3); // 36
```

Curried functions are great to improve code re-usability and functional composition.

# 34. What are the restrictions of web workers on DOM?

Web Workers do not have access to below javascript objects since they are defined in an external files
Window object
Document object
Parent object

# 35. What is a promise?

Promises are used to handle asynchronous operations in JavaScript. They provide an alternative approach for callbacks by reducing the callback hell and writing the cleaner code.

`Promise object has four states:`

- Pending - Initial state of promise. This state represents that the promise has neither been fulfilled nor been rejected, it is in the pending state.

- Fulfilled - This state represents that the promise has been fulfilled, meaning the async operation is completed.

- Rejected - This state represents that the promise has been rejected for some reason, meaning the async operation has failed.

- Settled - This state represents that the promise has been either rejected or fulfilled.

```javascript
const promise = new Promise(function (resolve, reject) {
  // promise description
});
```

====================================================================================================

# 36. What is a callback function?

    A callback function is a function passed into another function as a parameter.

```javascript
setTimeout(() => {});
```

# 37. Why do we need callbacks?

The callbacks are needed because javascript is an event driven language. That means instead of waiting for a response javascript will keep executing while listening for other events.

Let us take an example with first function invoking an API call(simulated by setTimeout) and next function which logs the message

```javascript
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

Output;
// Second function called
// First function called
```

As observed from the output, javascript didnot wait for the response of first function and remaining code block get executed. So callbacks used in a way to make sure that certain code does not execute until other code finished execution.

# 38. What is a callback hell?

Callback Hell is an anti-pattern with multiple nested callbacks which makes code hard to read and debug when dealing with asynchronous logic. The callback hell looks like below,

```javascript
async1(function() {
    async2(function() {
        async3(function() {
            async4(function() {
                ....
            });
        });
    });
});
```

# 39. What is promise chaining?

The process of executing a sequence of asynchronous tasks one after another using promises is known as Promise chaining.

```javascript
new Promise(function (resolve, reject) {
  setTimeout(() => resolve(1), 1000);
})
  .then(function (result) {
    console.log(result); // 1
    return result * 2;
  })
  .then(function (result) {
    console.log(result); // 2
    return result * 3;
  })
  .then(function (result) {
    console.log(result); // 6
    return result * 4;
  });
```

In the above handlers, the result is passed to the chain of .then() handlers with the below work flow,

The initial promise resolves in 1 second, After that .then handler is called by logging the result(1) and then return a promise with the value of result _ 2. After that the value passed to the next .then handler by logging the result(2) and return a promise with result _ 3. Finally the value passed to the last .then handler by logging the result(6) and return a promise with result \* 4.

# 40. What is eval?

The eval() function evaluates JavaScript code represented as a string. The string can be a JavaScript expression, variable, statement, or sequence of statements.

```javascript
console.log(eval("3 + 2")); //  5
```

===============================================================================================================

# 41. What is isNaN?

The isNaN() function is used to determine whether a value NaN (Not-a-Number) or not. i.e, This function returns true if the value equates to NaN. Otherwise it returns false.

```javascript
console.log(isNaN("hi")); // true
console.log(isNaN("100")); // false
console.log(typeof NaN); // number
```

# 42. What are the pros and cons of promises over callbacks?

Below are the list of pros and cons of promises over callbacks,

## Pros:

- It avoids callback hell which is unreadable
- Easy to write sequential asynchronous code with .then()
- Easy to write parallel asynchronous code with Promise.all()
- Solves some of the common problems of callbacks(call the callback too late, too early, many times and swallow errors/exceptions)

## Cons:

- It makes little complex code
- You need to load a polyfill if ES6 is not supported

# 43. What is the difference between an attribute and a property?

Attributes are defined on the HTML markup whereas properties are defined on the DOM. For example, the below HTML element has 2 attributes type and value,

```javascript
<input type="text" value="Name:">
```

You can retrieve the attribute value as below,

```javascript
const input = document.querySelector('input');
console.log(input.getAttribute('value')); // Good morning
console.log(input.value); // Good morning
And after you change the value of the text field to "Good evening", it becomes like

console.log(input.getAttribute('value')); // Good morning
console.log(input.value); // Good evening
```

# 43. What is the purpose of void(0)?

- The void(0) is used to prevent the page from refreshing.
- This will be helpful to eliminate the unwanted side-effect, because it will return the undefined primitive value.
- It is commonly used for HTML document that uses href="JavaScript:void(0);" within an anchor(a) element.
- i.e, when you click a link, the browser loads a new page or refreshes the same page.
- But this behavior will be prevented using this expression. For example, the below link notify the message without reloading the page

```javascript
<a href="JavaScript:void(0);" onclick="alert('Well done!')">
  Click Me!
</a>
```

# 44. Is JavaScript a compiled or interpreted language?

- JavaScript is an interpreted language, not a compiled language.
- An interpreter in the browser reads over the JavaScript code, interprets each line, and runs it.
- Nowadays modern browsers use a technology known as Just-In-Time (JIT) compilation, which compiles JavaScript to executable byte-code just as it is about to run.

# 45. Is JavaScript a case-sensitive language?

- Yes, JavaScript is a case sensitive language.
- # The language keywords, variables, function & object names, and any other identifiers must always be typed with a consistent capitalization of letters.

# 46. What is BOM?

- The Browser Object Model (BOM) allows JavaScript to "talk to" the browser.
- It consists of the objects navigator, history, screen, location and document which are children of window.
- The Browser Object Model is not standardized and can change based on different browsers.

# 47. What is the use of setTimeout?

The setTimeout() method is used to call a function or evaluates an expression after a specified number of milliseconds. For example, let us log a message after 2 seconds using setTimeout method,

```javascript
setTimeout(function () {
  console.log("Heyy Zareel");
}, 2000);
```

========================================================================================================

# 48. What is the use of setInterval?

The setInterval() method is used to call a function or evaluates an expression at specified intervals (in milliseconds). For example, let us log a message after 2 seconds using setInterval method,

```javascript
setInterval(function () {
  console.log("Heyy Prabir");
}, 2000);
```

# 49. Why is JavaScript treated as Single threaded?

- JavaScript is a single-threaded language.
- Because the language specification does not allow the programmer to write code so that the interpreter can run parts of it or in parallel or in multiple threads processes.
- Whereas languages like java, go, C++ can make multi-threaded and multi-process programs.

# 50. What is an event delegation?

- Event delegation is a technique for listening to events, where you delegate a parent element as the listener for all of the events that happen inside it. For example, if you wanted to detect field changes in inside a specific form, you can use event delegation technique,

```javascript
var form = document.querySelector("#registration-form");

// Listen for changes to fields inside the form
form.addEventListener(
  "input",
  function (event) {
    // Log the field that was changed
    console.log(event.target);
  },
  false
);
```

# 51. What is the purpose JSON stringify?

When sending data to a web server, the data has to be in a string format. You can achieve this by converting JSON object into a string using

`stringify() method.`

```javascript
var userJSON = { name: "Zareel", age: 43 };
var userString = JSON.stringify(user);
console.log(userString);
```

# 52. How do you parse JSON string?

When receiving the data from a web server, the data is always in a string format. But you can convert this string value to javascript object using parse() method.

```javascript
var userString = '{"name":"Prabir","age":25}';
var userJSON = JSON.parse(userString);
console.log(userJSON); // {name: "Prabir", age: 25}
```

# 53. What is the purpose of clearTimeout method?

- The clearTimeout() function is used in javascript to clear the timeout which has been set by setTimeout() function before that.
- i.e, The return value of setTimeout() function is stored in a variable and it’s passed into the clearTimeout() function to clear the timer. For example, the below setTimeout method is used to display the message after 3 seconds.
- This timeout can be cleared by clearTimeout() method.

```javascript
let msg;
function greeting() {
  alert("Heyy Shon");
}
function start() {
  msg = setTimeout(greeting, 4000);
}
function stop() {
  clearTimeout(msg);
}
```

==============================================================================================================================================

# 54. What is the purpose of clearInterval method?

The clearInterval() function is used in javascript to clear the interval which has been set by setInterval() function.

```javascript
var msg;

function greeting() {
  alert("Heyy Prabir");
}
function start() {
  msg = setInterval(greeting, 4000);
}
function stop() {
  clearInterval(msg);
}
```

i.e, The return value returned by setInterval() function is stored in a variable and it’s passed into the clearInterval() function to clear the interval. For example, the below setInterval method is used to display the message for every 3 seconds. This interval can be cleared by clearInterval() method.

# 55. How do you redirect new page in javascript?

In vanilla javascript, you can redirect to a new page using location property of window object. The syntax would be as follows,

```javascript
function redirect() {
  window.location.href = "newPage.html";
}
```

# 56. How do you check whether a string contains a substring?

There are 3 possible ways to check whether a string contains a substring or not,

a.) Using includes: ES6 provided String.prototype.includes method to test a string contains a substring.

```javascript
let mainString = "zareel",
  subString = "zar";
mainString.includes(subString);
```

b.) Using indexOf: In an ES5 or older environments, you can use String.prototype.indexOf which returns the index of a substring. If the index value is not equal to -1 then it means the substring exist in the main string.

```javascript
let mainString = "Zareel",
  subString = "Zar";
mainString.indexOf(subString) !== -1;
```

c.) Using RegEx: The advanced solution is using Regular expression test method(RegExp.test), which allows for testing for against regular expressions

```javascript
let mainString = "Zareel",
  regex = "/Zar/";
regex.test(mainString);
```

# 57. What are break and continue statements?

The break statement is used to "jumps out" of a loop. i.e, It breaks the loop and continues executing the code after the loop.

```javascript
for (i = 0; i < 10; i++) {
  if (i === 5) {
    break;
  }
  text += "Number: " + i + "<br>";
}
```

The continue statement is used to "jumps over" one iteration in the loop. i.e, It breaks one iteration (in the loop), if a specified condition occurs, and continues with the next iteration in the loop.

```javascript
for (i = 0; i < 10; i++) {
  if (i === 5) {
    continue;
  }
  text += "Number: " + i + "<br>";
}
```

# 58. How do you define JSON arrays?

JSON arrays are written inside square brackets and array contain javascript objects. For example, the JSON array of users would be as below,

```javascript
"users":[
  {"firstName":"Shon", "lastName":"Leo"},
  {"firstName":"Shine", "lastName":"Leo"},
  {"firstName":"Zareel", "lastName":"Kalam"}
]
```

# 59. How do you generate random integers?

You can use Math.random() with Math.floor() to return random integers. For example, if you want generate random integers between 1 to 10, the multiplication factor should be 10,

```javascript
Math.floor(Math.random() * 10) + 1; // returns a random integer from 1 to 10
Math.floor(Math.random() * 100) + 1; // returns a random integer from 1 to 100
```

=======================================================================================================================================================

# 60. How do you change style of an HTML element in javascript?

You can change inline style or classname of an HTML element using javascript

- Using style property:

  You can modify inline style using style property

```javascript
document.getElementById("title").style.fontSize = "40px";
```

- Using ClassName property:

  It is easy to modify element class using className property

```javascript
document.getElementById("title").style.className = "custom-title";
```

# 61. What is a debugger statement?

- The debugger statement invokes any available debugging functionality, such as setting a breakpoint.
- If no debugging functionality is available, this statement has no effect.
- For example, in the below function a debugger statement has been inserted.
- So execution is paused at the debugger statement just like a breakpoint in the script source.

```javascript
function getProfile() {
  // code goes here
  debugger;
  // code goes here
}
```

# 62. What is the purpose of breakpoints in debugging?

- You can set breakpoints in the javascript code once the debugger statement is executed and debugger window pops up.
- At each breakpoint, javascript will stop executing, and let you examine the JavaScript values.
- After examining values, you can resume the execution of code using play button.

# 63. Can I use reserved words as identifiers?

No, you cannot use the reserved words as variables, labels, object or function names.

```javascript
var else = "hello"; // Uncaught SyntaxError: Unexpected token else
```

# 64. What is a conditional operator in javascript?

The conditional (ternary) operator is the only JavaScript operator that takes three operands which acts as a shortcut for if statement.

```javascript
var isAuthenticated = false;
console.log(
  isAuthenticated ? "Hello, welcome" : "Sorry, you are not authenticated"
);
```

# 65. Can you apply chaining on conditional operator?

Yes, you can apply chaining on conditional operator similar to if … else if … else if … else chain. The syntax is going to be as below,

```javascript
function traceValue(someParam) {
  return condition1
    ? value1
    : condition2
    ? value2
    : condition3
    ? value3
    : value4;
}

// The above conditional operator is equivalent to:

function traceValue(someParam) {
  if (condition1) {
    return value1;
  } else if (condition2) {
    return value2;
  } else if (condition3) {
    return value3;
  } else {
    return value4;
  }
}
```

================================================================================================================

# 66. What is the difference between proto and prototype?

- The **proto** object is the actual object that is used in the lookup chain to resolve methods, etc.
- Whereas **prototype** is the object that is used to build **proto** when you create an object with **new**

```
( new Employee ).__proto__ === Employee.prototype;
( new Employee ).prototype === undefined;
```

# 67. How can you get the list of keys of any object?

- You can use Object.keys() method which is used return an array of a given object's own property names, in the same order as we get with a normal loop.
- For example, you can get the keys of a user object,

```javascript
const user = {
  name: "Prabir",
  gender: "male",
  age: 40,
};

console.log(Object.keys(user)); //['name', 'gender', 'age']
```

# 68. How do you create an object with prototype?

- The Object.create() method is used to create a new object with the specified prototype object and properties.

```javascript
const user = {
  name: "Zareel",
  printInfo: function () {
    console.log(`My name is ${this.name}.`);
  },
};

const admin = Object.create(person);

admin.name = "Kalam"; // Remember that "name" is a property set on "admin" but not on "user" object
admin.printInfo(); // My name is Kumar
```

# 69. What is the difference between uneval and eval?

- The uneval() function returns the source of a given object;
- whereas the eval function evaluate that source code in a different memory area.

```javascript
let msg = uneval(function greeting() {
  return "Hello, Zareel Kalam";
});
let greeting = eval(msg);
greeting(); // returns "Hello, Prabir Kumar"
```

# 70. What is an anonymous function?

An anonymous function is a function without a name! Anonymous functions are commonly assigned to a variable name or used as a callback function. The syntax would be as below,

```javascript
function (optionalParameters) {
  //do something
}

const myFunction = function(){ //Anonymous function assigned to a variable
  //do something
};

[1, 2, 3].map(function(element){ //Anonymous function used as a callback function
  //do something
});
Example:

let x = function (a, b) {return a * b};
let z = x(2, 10);
console.log(z); // 20
```

==========================================================================================================================================================================

# 71. What is the precedence order between local and global variables?

A local variable takes precedence over a global variable with the same name.

```javascript
let msg = "Good morning";
function greeting() {
  msg = "Good Evening";
  console.log(msg);
}
greeting();
```

# 72. What are javascript accessors?

ECMAScript 5 introduced javascript object accessors or computed properties through getters and setters. Getters uses get keyword whereas Setters uses set keyword.

```javascript
let user = {
  firstName: "Zareel",
  lastName : "Kalam",
  language : "en",
  get lang() {
    return this.language;
  }
  set lang(lang) {
  this.language = lang;
  }
};
console.log(user.lang); // getter access lang as en
user.lang = 'fr';
console.log(user.lang); // setter used to set lang as fr
```

# 73. What are the various statements in error handling?

Below are the list of statements used in an error handling,

- try: This statement is used to test a block of code for errors
- catch: This statement is used to handle the error
- throw: This statement is used to create custom errors.
- finally: This statement is used to execute code after try and catch regardless of the result.

# 74. Explain event delegation?

- Event delegation is a technique of adding event listeners to a parent element instead of adding them to the descendant elements.
- The listener will fire whenever the event is triggered on the descendant elements due to event bubbling up the DOM.
- The benefits of this technique are:
- Memory footprint goes down because only one single handler is needed on the parent element, rather than having to attach event handlers on each descendant.
- There is no need to unbind the handler from elements that are removed and to bind the event for new elements.

# 75. What is the difference between .call and .apply?

- Both .call and .apply are used to invoke functions
- the first parameter will be used as the value of this within the function.
- However, .call takes in comma-separated arguments as the next arguments while .apply takes in an array of arguments as the next argument.
- An easy way to remember this is C for call and comma-separated and A for apply and an array of arguments.

```javascript
function add(a, b) {
  return a + b;
}

console.log(add.call(null, 3, 2)); // 5
console.log(add.apply(null, [3, 2])); // 5
```

===========================================================================================================================================================

# 76. Explain Function.prototype.bind?

- The bind() method creates a new function that, when called, has its `this` keyword set to the provided value, with a given sequence of arguments preceding any provided when the new function is called.
- it is most useful for binding the value of `this` in methods of classes that you want to pass into other functions. This is frequently done in React components.

```javascript
const module = {
  x: 42,
  getX: function () {
    return this.x;
  },
};

const unboundGetX = module.getX;
console.log(unboundGetX()); // The function gets invoked at the global scope
// Expected output: undefined

const boundGetX = unboundGetX.bind(module);
console.log(boundGetX());
// Expected output: 42
```

# 77. Explain the difference between synchronous and asynchronous functions?

- `Synchronous functions` are blocking because it stops the execution of further lines of code untill the current line of code completes its execution.

- `asynchronous functions` are called non-blocking because it doesn't block further code from running. eg: callback()

# 78. What is event loop? What is the difference between call stack and task queue?

- The event loop is a single-threaded loop that monitors the call stack and checks if there is any work to be done in the task queue.
- If the call stack is empty and there are callback functions in the task queue, a function is dequeued and pushed onto the call stack to be executed.

- `If you haven't already checked out Philip Robert's talk on the Event Loop, you should. It is one of the most viewed videos on JavaScript`

# 79. What is the difference between undefined and not defined in JavaScript?

```javascript
let x; // declaring x
console.log(x); // output: undefined
```

let x = 1 is both declaration and definition (also we can say we are doing initialisation),

- Here declaration and assignment of value happen inline for variable x, In JavaScript every variable declaration and function declaration brings to the top of its current scope in which It is declared then assignment happen in order this term is called hoisting.

A variable can be declared but not defined. When we try to access it, It will result undefined.

```javascript
var x; // Declaration
typeof x === "undefined"; // Will return true
```

A variable can be neither declared nor defined. When we try to reference such variable then the result will be not defined.

```javascript
console.log(y); // Output: ReferenceError: y is not defined
```

# 80. What is closures ?

- A closure is a function object that has access to variables in its enclosing lexical scope, even when the function is invoked outside that scope.
- In other words, a closure gives you access to an outer function's scope from an inner function.

```javascript
let outerFunction = () => {
  let firstName = "Zareel";
  let innerFunction = () => {
    console.log(firstName);
  };
  return innerFunction;
};
let closure = outerFunction();
closure();
```

In this example, the inner function innerFunction is a closure. It has access to the outerVariable variable from its enclosing scope (the outerFunction). When we invoke the closure by calling closure(5), it returns the value of outerVariable + y (10 + 5), which is 15.

A closure is created when an inner function is defined inside an outer function, and the inner function references variables defined in the outer function. The inner function is returned from the outer function, and when it's invoked it has access to the scope of the outer function.

===================================================================================================================================

# 81. What is the difference between typeof and instanceof?

`typeof` is an operator that returns a string with the type of whatever you pass.
The typeof operator checks if a value belongs to one of the seven basic types: number, string, boolean, object, function, undefined or Symbol.

typeof(null) will return object.

`instanceof` is much more intelligent: it works on the level of prototypes. `instanceof` doesn’t work with primitive types. The `instanceof` operator checks the current object and returns true if the object is of the specified type, for example:

```javascript
var dog = new Animal();
dog instanceof Animal; // Output : true
```

Here dog instanceof Animal is true since dog inherits from Animal.prototype

```javascript
var name = new String("xyz");
name instanceof String; // Output : true
```

# 82. What is the difference between a method and a function in javascript?

- In JS, difference between a method and a function is quite subtle.
- A function is a piece of code that is called by name and
- function itself not associated with any object and
- not defined inside any object.
- It can be passed data to operate on (i.e. parameter) and can optionally return data (the return value).

```javascript
// Function statement
function myFunc() {
  // Do some stuff;
}

// Calling the function
myFunc();
Here myFunc() function call is not associated with object hence not invoked through any object.

A function can take a form of immediately invoked function expression (IIFE):

// Anonymous Self-invoking Function
(function() {
  // Do some stuff;
})();
Finally there are also arrow functions:

const myFunc = arg => {
    console.log("hello", arg)
}
```

- A method is a piece of code that is called by its name and
- that is associated with the object.
- Methods are functions.
- When you call a method like this obj1.myMethod(), the reference to obj1 gets assigned (bound) to this variable.
- In other words, the value of this will be obj1 inside myMethod.

# 83. What are promises and how they are useful?

- We use promises for handling asynchronous interactions in a sequential manner.
- They are especially useful when we need to do an async operation and THEN do another async operation based on the results of the first one.
  -For example, if you want to request the list of all flights and then for each flight you want to request some details about it.
- The promise represents the future value. It has an internal state (pending, fulfilled and rejected) and works like a state machine.
  A promise object has then method, where you can specify what to do when the promise is fulfilled or rejected.

You can chain then() blocks, thus avoiding the callback hell. You can handle errors in the catch() block. After a promise is set to fulfilled or rejected state, it becomes immutable.

# 84 What is `this` keyword in javascript?

The following rules are applied when we use `this` keyword in javascript

- If the `new` keyword is used when calling the function, `this` inside the function is a brand new object.
- If `apply`, `call`, or `bind` are used to call/create a function, `this` inside the function is the object that is passed in as the argument.
- If a function is called as a method, such as obj.method() — `this` is the object that the function is a property of.
- If a function is invoked as a free function invocation, meaning it was invoked without any of the conditions present above, `this` is the global object.
- In a browser, it is the window object.
- If in strict mode ('use strict'), `this` will be undefined instead of the global object.
- If multiple of the above rules apply, the rule that is higher wins and will set the `this` value.
- If the function is an ES-2015 arrow function, it ignores all the rules above and receives the `this` value of its surrounding scope at the time it is created.

# 85 What is the purpose of array slice method?

The slice() method returns the selected elements in an array as a new array object. It selects the elements starting at the given start argument, and ends at the given optional end argument without excluding the last element. If you omit the second argument then it selects till the end. Some of the examples of this method are,

```javascript
let arrayIntegers = [1, 2, 3, 4, 5];
let arrayIntegers1 = arrayIntegers.slice(0, 2); // returns [1,2]
let arrayIntegers2 = arrayIntegers.slice(2, 3); // returns [3]
let arrayIntegers3 = arrayIntegers.slice(4); //returns [5]
```

# Note: Slice method wonot mutate the original array but it returns the subset as new array.

=============================================================================================================

# 86. What is shallow copy and deep copy in javascript?

`Shallow copy`: Shallow copy is a bit-wise copy of an object. A new object is created that has an exact copy of the values in the original object. If any of the fields of the object are references to other objects, just the reference addresses are copied i.e., only the memory address is copied.

`Deep copy`: A deep copy copies all fields, and makes copies of dynamically allocated memory pointed to by the fields. A deep copy occurs when an object is copied along with the objects to which it refers.

A Shallow copy of the object can be done using object.assign() method in javascript.

```javascript

let obj = {
  a: 1,
  b: 2,
};
let objCopy = Object.assign({}, obj);
console.log(objCopy); // Result - { a: 1, b: 2 }
A Deep copy of the object can be done using JSON.parse(JSON.stringify(object));

let obj = {
  a: 1,
  b: {
    c: 2,
  },
}
let newObj = JSON.parse(JSON.stringify(obj));
obj.b.c = 20;
console.log(obj); // { a: 1, b: { c: 20 } }
console.log(newObj); // { a: 1, b: { c: 2 } } (New Object Intact!)

```

# 87. How to avoid callback hell in javascript?

Callback hell is the using of callback back to back making the code difficult to read.

Techniques for avoiding callback hell

Write comments
Split functions into smaller functions
Using Async.js
Using Promises
Using Async-Await

# 88. How do you detect primitive or non primitive value type?

In JavaScript,
`primitive types` include boolean, string, number, BigInt, null, Symbol and undefined. Whereas
`non-primitive types` include the Objects and arrays. But you can easily identify them with the below function,

```javascript
var myPrimitive = 30;
var myNonPrimitive = {};
function isPrimitive(val) {
  return Object(val) !== val;
}

isPrimitive(myPrimitive);
isPrimitive(myNonPrimitive);
```

If the value is a primitive data type, the Object constructor creates a new wrapper object for the value. But If the value is a non-primitive data type (an object), the Object constructor will give the same object.

# 89. What is babel

Babel is a JavaScript transpiler to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Some of the main features are listed below,
Transform syntax
Polyfill features that are missing in your target environment (using @babel/polyfill)
Source code transformations (or codemods)

# 90. What are the different ways to deal with Asynchronous Code

Below are the list of different ways to deal with Asynchronous code.
Callbacks
Promises
Async/await
Third-party libraries such as async.js,bluebird etc
==============================================================================================================================

# 12/3/2023 Sunday

# 1. What is a thunk function

A thunk is just a function which delays the evaluation of the value. It doesn’t take any arguments but gives the value whenever you invoke the thunk. i.e, It is used not to execute now but it will be sometime in the future. Let's take a synchronous example,

```javascript
const add = (x, y) => x + y;

const thunk = () => add(2, 3);

thunk(); // 5
```

# 2. What are asynchronous thunks

The asynchronous thunks are useful to make network requests. Let's see an example of network requests,

```javascript
function fetchData(fn) {
  fetch("https://jsonplaceholder.typicode.com/todos/1")
    .then((response) => response.json())
    .then((json) => fn(json));
}

const asyncThunk = function () {
  return fetchData(function getData(data) {
    console.log(data);
  });
};

asyncThunk();
```

The getData function won't be called immediately but it will be invoked only when the data is available from API endpoint. The setTimeout function is also used to make our code asynchronous. The best real time example is redux state management library which uses the asynchronous thunks to delay the actions to dispatch.

# 3. Is JavaScript faster than server side script ?

Yes, JavaScript is faster than server side script. Because JavaScript is a client-side script it does not require any web server’s help for its computation or calculation.

# 4. What paradigm is Javascript

JavaScript is a multi-paradigm language, supporting procedural(top to bottom approach) programming, Object-Oriented Programming and functional programming. JavaScript supports Object-Oriented Programming with prototypical inheritance.

# 5. What are template literals

Template literals or template strings are string literals allowing embedded expressions. These are enclosed by the back-tick (`) character instead of double or single quotes. In E6, this feature enables using dynamic expressions as below,

```javascript
 let greeting = `Welcome to JS World, Mr. ${firstName} ${lastName}.`;

 //In ES5, you need break string like below,

 let greeting = 'Welcome to JS World, Mr. ' + firstName + ' ' + lastName.
```

# Note: You can use multi-line strings and string interpolation features with template literals.

# 14/3/2023

# 1. How do you write multi-line strings in template literals

In ES5, you would have to use newline escape characters('\n') and concatenation symbols(+) in order to get multi-line strings.

```javascript
console.log("This is string sentence 1\n" + "This is string sentence 2");
```

Whereas in ES6, You don't need to mention any newline sequence character,

```javascript
console.log(`This is string sentence
'This is string sentence 2`);
```

# 2. What is DOM?

- DOM stands for Document Object Model.
- DOM is a programming interface for HTML and XML documents.
- When the browser tries to render an HTML document, it creates an object based on the HTML document called DOM.
- Using this DOM, we can manipulate or change various elements inside the HTML document.
  Example of how HTML code gets converted to DOM:

```javascript
<html>
  <head>
    <title>JAVASCRIPT</title>
  </head>
  <body>
    <p>I love js</p>
  </body>
</html>
```

# 3. What is the difference between null and undefined

`Null`:

- It is an assignment value which indicates that variable points to no object.
- Type of null is object.
- The null value is a primitive value that represents the null, empty, or non-existent reference.
- Indicates the absence of a value for a variable.
- Converted to zero (0) while performing primitive operations.
  `Undefined`:
- It means a variable has been declared but has not yet been assigned a value.
- Type of undefined is undefined.
- The undefined value is a primitive value used when a variable has not been assigned a value.
- Indicates absence of variable itself.
- Converted to NaN while performing primitive operations

# 4. What is the difference between window and document

`Window`:

- It is the root level element in any web page.
- By default window object is available implicitly in the page.
- It has methods like alert(), confirm() and properties like document, location.
  `Document`:
- It is the direct child of the window object. This is also known as Document Object Model(DOM).
- You can access it via window.document or document.
- It provides methods like getElementById, getElementsByTagName, createElement etc.

# 5. What are modules

Modules refer to small units of independent, reusable code and also act as the foundation of many JavaScript design patterns. Most of the JavaScript modules export an object literal, a function, or a constructor.

===============================================================================================================================

Why do you need modules
Below are the list of benefits using modules in javascript ecosystem
Maintainability
Reusability
Namespacing

What is scope in javascript
Scope is the accessibility of variables, functions, and objects in some particular part of your code during runtime. In other words, scope determines the visibility of variables and other resources in areas of your code.
How do you compare Object and Map
Objects are similar to Maps in that both let you set keys to values, retrieve those values, delete keys, and detect whether something is stored at a key. Due to this reason, Objects have been used as Maps historically. But there are important differences that make using a Map preferable in certain cases.
The keys of an Object are Strings and Symbols, whereas they can be any value for a Map, including functions, objects, and any primitive.
The keys in Map are ordered while keys added to Object are not. Thus, when iterating over it, a Map object returns keys in order of insertion.
You can get the size of a Map easily with the size property, while the number of properties in an Object must be determined manually.
A Map is an iterable and can thus be directly iterated, whereas iterating over an Object requires obtaining its keys in some fashion and iterating over them.
An Object has a prototype, so there are default keys in the map that could collide with your keys if you're not careful. As of ES5 this can be bypassed by using map = Object.create(null), but this is seldom done.
A Map may perform better in scenarios involving frequent addition and removal of key pairs.

What is the difference between slice and splice
Slice:
Doesn't modify the original array(immutable) .
Returns the subset of original array.
Used to pick the elements from array.
Splice:
Modifies the original array(mutable).
Returns the deleted elements as array.
