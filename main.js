//1-Convert the string "123" to a number and add 7
let x = "123";
//1
let convertResult = Number(x) + 7;
//2
let convertResult2 = x * 1 + 7;
//3
let convertResult3 = +x + 7;
console.log(typeof convertResult);
console.log(typeof convertResult2);
console.log(typeof convertResult3);
console.log(convertResult);
console.log(convertResult2);
console.log(convertResult3);

//2-Check if the given variable is falsy and return "Invalid" if it is
let falsyvalue = 0;
if (
  falsyvalue == 0 ||
  falsyvalue == false ||
  falsyvalue == undefined ||
  falsyvalue == ""
) {
  console.log("Not Falsy Value");
} else {
  console.log("Invalid");
}

//3-Use for loop to print all numbers between 1 and 10, skipping even numbers using continue
for (let index = 0; index < 10; index++) {
  if (index % 2 == 0) {
    continue;
  }
  console.log({ odd: index });
}

//4-Create an array of numbers and return only the even numbers using filter method.
let number = [1, 2, 3, 4, 5];
let result = number.filter((Value) => {
  return Value % 2 == 0;
});
console.log({ evenNumber: result });

//5-Use the spread operator to merge two arrays, then return the merged array
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let spread = [...arr1, ...arr2];
console.log({ spread });
//6-Use a switch statement to return the day of the week given a number (1 = Sunday …., 7 = Saturday)
let numberOfDay = 2;
switch (numberOfDay) {
  case 1:
    console.log("Sunday");
    break;
  case 2:
    console.log("Monday");
    break;
  case 3:
    console.log("Tuesday");
    break;
  case 4:
    console.log("Wednesday");
    break;
  case 5:
    console.log("Thursday");
    break;
  case 6:
    console.log("Friday");
    break;
  case 7:
    console.log("Saturday");
    break;
  default:
    console.log("Input is not match");
}

//7-Create an array of strings and return their lengths using map method
let y = ["a", "ab", "abc"];
let o = y.map((Value) => {
  return Value.length;
});
console.log(o);

//8- Write a function that checks if a number is divisible by 3 and 5
function Check(Number) {
  if (Number % 5 == 0 && Number % 3 == 0) {
    console.log("Divisible by both");
  } else {
    console.log("Error");
  }
}
Check(15);

//9- Write a function using arrow syntax to return the square of a number
function square(Number) {
  return console.log(Number * Number);
}
square(5);

//10- Write a function that destructures an object to extract values and returns a formatted string
const person = { name: "John", age: 25 };
function destructuresObject(obj) {
  const { name, age } = obj;
  console.log(`${name} is ${age} years old`);
}
destructuresObject(person);

//11- Write a function that accepts multiple parameters (two or more) and returns their sum.
function sum(...numbers) {
  var total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return console.log({ total });
}
sum(1, 2, 3, 4, 5, 6);

//12-Write a function that returns a promise which resolves after 3 seconds with a 'Success' message.
function message() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Success");
    }, 3000);
  });
}
message().then((value) => {
  console.log({ PromiseFun: value });
});

//13- Write a function to find the largest number in an array.
let LargeNmber = [1, 3, 7, 2, 4];
function largest() {
  let lager = LargeNmber[0];

  for (let index = 0; index < LargeNmber.length; index++) {
    //store last number in varaible
    if (LargeNmber[index] > lager) {
      lager = LargeNmber[index];
    }
  }
  return lager;
}

console.log(largest());

//14-Write a function that takes an object and returns an array containing only its keys.

function objKey(obj) {
  let arrayOfObject = Object.entries(obj);
  var NewArr = [];
  for (let i = 0; i < arrayOfObject.length; i++) {
    element = arrayOfObject[i];
    NewArr.push(element[0]);
  }
  console.log({ Keys: NewArr });
}
objKey({ name: "John", age: 30 });

//15-Write a function that splits a string into an array of words based on spaces.
let string = "The quick brown fox";
console.log(string.split(" "));


//================================================================================
//Essay Questions

//1-What is the difference between forEach and for...of? When would you use each?

/*
====================================================================================
The first difference between for...of and forEach is their syntax.

for...of syntax:

for (const element of arr) {
  // Use the element here.
}

Like a regular for loop, a for...of loop processes one element at a time.
You can use break to stop the loop or continue to skip to the next element.

forEach syntax:

arr.forEach((value, index, array) => {
  // Use the value, its index, or the array here.
});

Like find, map, and filter, forEach takes a callback. It calls the
callback for each element in order.

I use forEach when I want to do something with every element, such as
printing its value and index. I use for...of when I need to stop early
or wait for one operation to finish before starting the next.

Inside an async function, a for...of loop can use await to wait for each
operation to finish. forEach can take an async callback, but it doesn't
wait for the promise that the callback returns.
=====================================================================================
*/

//2-What is hoisting and what is the Temporal Dead Zone (TDZ)? Explain with examples.
/*
Hoisting make declarations before the code runs. A variable declared with var starts with the value undefined.

Example:
consloe.log('x') ==> o/p undefine becauce it delcate in first code 
var x = 1;


The Temporal Dead Zone (TDZ) is the time from the start of a scope
until a variable declared with let or const is initialized.
console.log("x")
let x = 1
*/

//3-What are the main differences between == and ===?

/* 
== compare value 

=== compare value and type 

*/

//4-Explain how try-catch works and why it is important in async operations.

/*
In the try block, we use await to wait for a promise.
If the operation succeeds, we get the result and continue.
If the promise rejects or the code throws an error, the catch block runs.
We can use catch to show an error message if the operation fails.
*/

//5-What’s the difference between type conversion and coercion? Provide examples of each.

/*
Type conversion means I change the type 'myself'.
Example: Number("5") returns the number 5.

Type coercion means JavaScript changes the type 'automatically'.
Example: "5" + 2 returns "52" because JavaScript converts 2 to "2"
and joins the two strings.
*/
