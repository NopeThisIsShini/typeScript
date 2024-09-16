"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let user = { name: "John", id: 1, email: "santa@us.com" };
// object Destructuring
let { name: userName, email: UserLogin } = { name: "John", email: "santa@us.com" };
let employee = { name: "John", id: 1, email: "santa@us.com", salary: 1000 };
// in javascript 
// var Users = {
//     name : '',
//     age: 1,
//     id: 1,
//     email: ''
// }
// better understanding of interface use of interface in class  
// interface address {
//     city: string;
//     state: string;
//     country: string;
// }
// class Emp {
//     name!: string;
//     address!: address
//     constructor(name: string, address: address) {
//         this.name = name;
//         this.address = address
//     }
// }
// let EmpObj = new Emp('santa ', { city: 'tamluk', state: 'tamluk', country: '' });
// console.log(EmpObj);
// array Destructuring
let [user1, user2, ...restUsers] = [
    { name: "John", id: 1, email: "santa@us.com" },
    { name: "santa", id: 2, email: "santa@us.com" },
    { name: "santa1", id: 3, email: "santa@us1.com" },
    { name: "santa2", id: 4, email: "santa@us2.com" },
    { name: "santa3", id: 5, email: "santa@us3.com" },
];
console.log(user1);
console.log(user2);
console.log(restUsers);
// o/p 
// this two are object 
// { name: 'John', id: 1, email: 'santa@us.com' }
// { name: 'santa', id: 2, email: 'santa@us.com' }
// rest are in the array 
// [
//   { name: 'santa1', id: 3, email: 'santa@us1.com' },
//   { name: 'santa2', id: 4, email: 'santa@us2.com' },
//   { name: 'santa3', id: 5, email: 'santa@us3.com' }
// ]
// array filtering
let result = restUsers.filter(user => user.id > 5);
console.log(result);
