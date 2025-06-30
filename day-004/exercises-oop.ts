import assert from 'node:assert';
// Exercises: Object - Oriented Programming in TypeScript

function log(...args: any[]): void {
    if (console.log) console.log(...args);
}

// 1. Creating Basic Classes
log("1. Creating Basic Classes");
class Car {
    make: string;
    model: string;
    year: number;
    constructor(make: string, model: string, year: number) {
        this.make = make;
        this.model = model;
        this.year = year;
    }
    getDetails(): string {
        return `${this.year} ${this.make} ${this.model}`;
    };
}

// Test
const myCar = new Car("Toyota", "Corolla", 2022);
log(myCar.getDetails());
log();

// 2. Working with Access Modifiers
log("2. Working with Access Modifiers")

class BankAccount {
    private balance: number;
    public readonly accountNumber: string;
    constructor(accountNumber: string, balance: number) {
        this.accountNumber = accountNumber;
        this.balance = balance;
    }
    public deposit(amount: number): void {
        if (amount <= 0) throw new Error("Amount muss be greater that 0");
        this.balance += amount;
    }
    public withdraw(amount: number): void {
        if (amount <= 0) throw new Error("Amount muss be greater that 0");
        if (amount > this.balance) throw new Error("Amount muss be lower or equal a balance");
        this.balance -= amount;
    }
    public getBalance(): number {
        return this.balance;
    }

}

// Test
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
const balance = account.getBalance();
assert.equal(balance, 600, 'Account balance should be 600');
log(balance);
log();

// 3. Getters and Setters
log("3. Getters and Setters");
// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').

class UserProfile {
    private _email: string;
    constructor(email: string) {
        if (!email.includes('@')) throw new Error("Email muss contain '@' sign.");
        this._email = email;
    }
    get email(): string {
        return this._email;
    }
    set email(email: string) {
        if (!email.includes('@')) throw new Error("Email muss contain '@' sign.");
        this._email = email;
    }
}

// Test
const user = new UserProfile("john@example.com");
log(user.email); // Should return valid email
assert.throws(() => {
    user.email = "wrongemail"; // Should throw an error
}, Error, "'user.email = \"wrongemail\"; // Should throw an error'");
log();


// 4. Inheritance and Method Overriding
log("4. Inheritance and Method Overriding");

class Employee {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    getDetails(): string {
        return `Name: ${this.name}`;
    }
}
class Manager extends Employee {
    department: string;
    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }
    getDetails(): string {
        return `Name: ${this.name}, Department: ${this.department}`;
    }
}

// Test
const employee = new Employee("Bob");
const manager = new Manager("Alice", "Engineering");
log(`Instance: ${employee.constructor.name}\n`, employee.getDetails());
log(`Instance: ${manager.constructor.name}\n`, manager.getDetails());
log();

// 5. Static Members
log("5. Static Members");

class MathHelper {
    static PI = 3.14;
    static circleArea(radius: number): number {
        return Math.pow(radius, 2) * 3.14;
    }
}

// Test
log(MathHelper.circleArea(5)); // Should log: 78.5
log();


// 6. Abstract Classes
log("6. Abstract Classes");

abstract class Shape {
    name: string;
    abstract getArea(): number;
    constructor(name: string) {
        this.name = name;
    }
}

class Rectangle extends Shape {
    constructor(public width: number, public height: number) {
        super("rectangle");
    }
    getArea(): number {
        return this.width * this.height;
    }
}

class Circle extends Shape {
    constructor(public radius: number) {
        super("circle");
    }
    getArea(): number {
        return MathHelper.circleArea(this.radius);
    }
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));
log();

// 7. Interfaces and Class Implementation
log("7. Interfaces and Class Implementation");

// Task: Define an interface `Animal` with:
// - name: string
// - makeSound(): string

// Create a class `Dog` that implements `Animal`.

interface Animal {
    name: string;
    makeSound(): string;
}

class Dog implements Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    makeSound(): string {
        return `${this.name} says Woof!`;
    }
}

// Test
const dog = new Dog("Rex");
log(dog.makeSound()); // "Rex says Woof!"
log();

// 8. Function Interfaces
log("8. Function Interfaces")

// Task: Define an interface `MathOperation` that describes a function:
// (x: number, y: number) => number

// Implement two variables `add` and `multiply` that match the interface.

interface MathOperation {
    (x: number, y: number): number;
}

// Your code
const add: MathOperation = (x: number, y: number) => { return x + y };
const multiply: MathOperation = (x: number, y: number) => { return x * y };

// Test
log(add(2, 3));       // 5
log(multiply(2, 3));  // 6
log();

// 9. Interface vs Type Alias
log("9. Interface vs Type Alias");

type Coordinates = {
    x: number;
    y: number;
};

interface Movable {
    move(dx: number, dy: number): void;
}

class Point implements Coordinates, Movable {
    x: number;
    y: number;
    constructor(x: number, y: number) {
        this.x = x;
        this.y = y;
    }
    move(dx: number, dy: number): void {
        this.x += dx;
        this.y += dy;
    }
}

// Test
const point = new Point(0, 0);
point.move(5, 3);
log(point); // Should show updated x and y