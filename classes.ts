import { login } from "./interfaces";
class Employee {
    // if we don't have constructor we need to put ! mark like this to avoid the initializer error
    // id!: number;
    // name!: string;
    // address!: string;

    // how to create public variables (by using private keyword or #)
    // private id: number;
    // private is not acessible outside this class
    #id : number
    // we can access this name only in this class or sub class of this class
    protected name: string;
    address: string;

    // getter and setter
    
    get empId(): number{
        return this.#id;
    }
    set empId(id: number){
        this.#id = id
    }


    // member function 
    getName(): string{
        // return this.name + " " + this.address
        return `${this.name} stays at ${this.address}`
    }
    // static function we can directly access this function with creating an intance of the class
    static getDetails(): number{
        // return this.name + " " + this.address
       return 50;
    }
    // just like other languages we don't use two constructor at a time in typescript,it will throw an error
    // constructor() {}
    constructor(id: number, name: string, address: string) {
        // this.#id is private
        this.#id = id;
        this.name = name;
        this.address = address;
    }

}

// static function we can directly access this function with creating an intance of the class
Employee.getDetails() // no need to create intence of the class

// getter and setter 



let john = new Employee(1,'santa', 'USA');
john.empId = 10;
console.log(john.empId)

// when we don't have constructor
// john.id = 1;
// john.name = "John";
// john.address = "USA";

// console.log(john)

console.log(john)

let address = john.getName();
console.log(address);

class manager extends Employee {
    // here as you can see we can extend the protected member in that class or sub-class of that class
    constructor(id: number, name: string, address: string) {
        super(id, name, address)
    }
    // if we don't declare getName() in this child class we can still access the getName function
    // as it is in the parent class it call the function directly from the parent class
    getName(): string {
        return `${this.name} is the manager of this ${this.address}`
    }
}

// we can't access private member directly but we can access using any function, which holds that member 
// here like getName()
let man = new manager(1, 'santa', 'USA');