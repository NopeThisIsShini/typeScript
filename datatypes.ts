// string datatype
let lname = 'John';
// typeScript has the ability to determine the type of the variable by it's value 
console.log(lname);
// the write way to declare a variable with types always
let fname: string = 'santa'
console.log(fname)
// number datatype
let age: number;
age = 25;
// typecasting in javascript 
let result = parseInt("25");
console.log(result);

// boolean datatype
let isValid: number;
// in java or dotnet if i don't define any value it will be false, but in type script it will be undefined if i don't define any value
// console.log(isValid);

// array datatype

let empList: string[];
// this <string> is called generic type, 
let depList: Array<string>;

let numlist: Array<number>;
numlist = [1, 2, 3, 4, 5];

let res = numlist.filter((num) => num > 2);
console.log(res)
let num = numlist.find((fi) => fi === 2);
console.log(num)
let sum = numlist.reduce((acc, num) => acc + num)
// here how reduce works in javascript and typescript acc + num = acc, so in this array 
// 1+2 = 3 , now in acc = 3, so now in num = 2,
//  again acc + num = 5(acc),
//  again acc =5, num = 3 so acc =5+3 = 8...
console.log(sum);

// enum datatype //FIXME: need to check this

enum Color {
    Red,
    Green,
    Blue
}
let c: Color = Color.Blue;
console.log(c)

// angular don't have lots of usecase in angular but react has lots of usecase //FIXME: skip this for now

// any type
// Always try to avoid any datatype in codebase 
let dept: any;
dept = 'IT';
dept = "10";


function test (){
    // numm: number =5
    
}
 // console.log(numm)