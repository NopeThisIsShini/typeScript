"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
class Employee {
    // member function 
    getName() {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`;
    }
    // just like other languages we don't use two constructor at a time in typescript,it will throw an error
    // constructor() {}
    constructor(id, name, address) {
        // if we don't have constructor we need to put ! mark like this to avoid the initializer error
        // id!: number;
        // name!: string;
        // address!: string;
        // how to create public variables (by using private keyword or #)
        // private id: number;
        // private is not acessible outside this class
        _Employee_id.set(this, void 0);
        // this.#id is private
        __classPrivateFieldSet(this, _Employee_id, id, "f");
        this.name = name;
        this.address = address;
    }
}
_Employee_id = new WeakMap();
let john = new Employee(1, 'santa', 'USA');
// when we don't have constructor
// john.id = 1;
// john.name = "John";
// john.address = "USA";
// console.log(john)
console.log(john);
let address = john.getName();
console.log(address);
class manager extends Employee {
    // here as you can see we can extend the protected member in that class or sub-class of that class
    constructor(id, name, address) {
        super(id, name, address);
    }
    getName() {
        return `${this.name} is the manager of this ${this.address}`;
    }
}
let man = new manager(1, 'santa', 'USA');
