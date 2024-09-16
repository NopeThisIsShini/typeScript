"use strict";
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Employee_id;
Object.defineProperty(exports, "__esModule", { value: true });
class Employee {
    // getter and setter
    get empId() {
        return __classPrivateFieldGet(this, _Employee_id, "f");
    }
    set empId(id) {
        __classPrivateFieldSet(this, _Employee_id, id, "f");
    }
    // member function 
    getName() {
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`;
    }
    // static function we can directly access this function with creating an intance of the class
    static getDetails() {
        // return this.name + " " + this.address
        return 50;
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
// static function we can directly access this function with creating an intance of the class
Employee.getDetails(); // no need to create intence of the class
// getter and setter 
let john = new Employee(1, 'santa', 'USA');
john.empId = 10;
console.log(john.empId);
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
    // if we don't declare getName() in this child class we can still access the getName function
    // as it is in the parent class it call the function directly from the parent class
    getName() {
        return `${this.name} is the manager of this ${this.address}`;
    }
}
// we can't access private member directly but we can access using any function, which holds that member 
// here like getName()
let man = new manager(1, 'santa', 'USA');
//# sourceMappingURL=classes.js.map