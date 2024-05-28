//task #1

// function isWorkingAgePerson(age) {
//   const userAge = +prompt("Input age", 0);
//   return userAge >= 16 && userAge <= 64;
// }
// console.log(isWorkingAgePerson());

//task#2

// function checkMultiplicity(a, b) {
//   return a % b === 0;
// }
// console.log(checkMultiplicity(75, 4));

//task#3

// /**
//  * function checkExistTriangle
//  * @param {number} a - length of a side of a triangle
//  * @param {number} b - length of a side of a triangle
//  * @param {number} c - length of a side of a triangle
//  * @returns {number} Checking of existing a triangle
//  */
// function checkExistTriangle(a, b, c) {
//   if (a > b && a > c) {
//     return b + c > a;
//   } else if (b > a && b > c) {
//     return a + c > b;
//   } else if (c > a && c > b) {
//     return a + b > c;
//   }
// }

// console.log(checkExistTriangle(1, 2, 10));

//task#4

// /**
//  * function calcAreaSquare
//  * @param {number} a - length of a side of a square
//  * @returns {number} Calculating an area of a square
//  */

//function-declaration
// function calcAreaSquare(a) {
//   return a ** 2;
// }
// console.log(calcAreaSquare(10));

//function-expression
// const areaSquare = function calcAreaSquare(a) {
//   return a ** 2;
// };
// console.log("areaSquare:>>", areaSquare(5));

//task#5

function checkNumber(n) {
  const number = +prompt("Input number", 1);

  for (let i = 2; i < number; i++) if (number % i === 0) return false;

  return true;
}
console.log(checkNumber());

//   let i = 2;
//   return number >= 1 && number % i && number % number === 0 ? true : false;
// }
// console.log(checkNumber());

// const simpleNumber = function checkNumber(n) {
//   const number = +prompt("Input number", 1);
//   let i = 2;
//   return number >= 1 && number % i && number % number === 0 ? true : false;
// };
// console.log("simpleNumber:>>", simpleNumber());
