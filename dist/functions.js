"use strict";
// Different ways to write functions
// 1. Generic functions
// 2. Optional Parameters
// 3. Required Parameters
// 4. Rest Parameters
// due to inference typescript can indentify the types
// ways to declare functions
// 1. with function keyword
// function fun_name (param1: type, param2: type): return_type{
//     // body
// }
function add(num1, num2) {
    return num1 + num2;
}
console.log(add(1, 2));
// 2. with arrow function
const sub = (num1, num2) => {
    return num1 - num2;
};
const summ = (num1, num2) => num1 + num2;
console.log(sub(1, 2));
// 3. with const and fucntion keyword
const mult = function (num1, num2) {
    return num1 * num2;
};
// optional parameter                     optional param
function addd(num1, num2, num3) {
    return num3 ? num1 + num2 + num3 : num1 + num2;
}
console.log(addd(1, 3));
// required parameter                      required param
function adddd(num1, num2, num3 = 10) {
    return num1 + num2 + num3;
}
console.log(adddd(1, 2)); // if i don't pass num3 it will be 10, and result will be 13
console.log(adddd(1, 2, 4)); // if i pass num3 it will be 4, and result will be 7
// rest parameters                           rest param
function add2(num1, num2, ...num3) {
    return num1 + num2 + num3.reduce((acc, num) => acc + num);
}
let numbers = [1, 2, 3, 4, 5];
//  ... spread operator 
console.log(add2(1, 2, ...numbers));
// do can pass any ammount of number to rest parameter
// 1,2,//rest
console.log(add2(1, 2, 4, 5, 6, 7, 2, 1));
// Generic Function 
function getItems(items) {
    return new Array().concat(items);
}
let concatNumber = getItems([1, 2, 3, 4, 5]);
let concatString = getItems(['a', 'b', 'c']);
//# sourceMappingURL=functions.js.map