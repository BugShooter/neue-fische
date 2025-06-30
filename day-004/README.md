🧠 Exercises: Object - Oriented Programming in TypeScript
🔹 1. Creating Basic Classes
Objective: Practice class creation and constructors.

// Task: Define a class called `Car` with the following properties:
// - make (string)
// - model (string)
// - year (number)
// Add a method `getDetails()` that returns a string like: "2022 Toyota Corolla"

class Car {
    // Your code here
}

// Test
const myCar = new Car("Toyota", "Corolla", 2022);
console.log(myCar.getDetails());
🔹 2. Working with Access Modifiers
Objective: Use private, public, and protected for encapsulation.

// Task: Create a `BankAccount` class with:
// - private balance: number
// - public readonly accountNumber: string
// - public deposit(amount: number): void
// - public withdraw(amount: number): void
// - public getBalance(): number

class BankAccount {
        // Your code here
    }

// Test
const account = new BankAccount("123ABC", 500);
account.deposit(200);
account.withdraw(100);
console.log(account.getBalance()); // Should log: 600
🔹 3. Getters and Setters
Objective: Encapsulate data using getter and setter methods.

// Task: Create a `UserProfile` class with a private property `_email`.
// Use getter and setter for `email` with basic validation (must include '@').

class UserProfile {
    // Your code here
}

// Test
const user = new UserProfile("john@example.com");
console.log(user.email); // Should return valid email
user.email = "wrongemail"; // Should throw an error
🔹 4. Inheritance and Method Overriding
Objective: Implement inheritance and override base class methods.

// Task: Create a base class `Employee` with:
// - name: string
// - getDetails(): string

// Create a derived class `Manager` that adds:
// - department: string
// - Overrides getDetails() to include department

class Employee {
    // Your code here
}

class Manager extends Employee {
    // Your code here
}

// Test
const manager = new Manager("Alice", "Engineering");
console.log(manager.getDetails());
🔹 5. Static Members
Objective: Use static methods and properties.

// Task: Create a `MathHelper` class with:
// - static PI = 3.14
// - static method `circleArea(radius: number): number`

class MathHelper {
    // Your code here
}

// Test
console.log(MathHelper.circleArea(5)); // Should log: 78.5

🔹 6. Abstract Classes
Objective: Implement abstract classes and enforce contract in subclasses.

// Task: Create an abstract class `Shape` with:
// - abstract method `getArea(): number`
// - name: string

// Create subclasses `Rectangle` and `Circle` that implement getArea.

abstract class Shape {
    // Your code here
}

class Rectangle extends Shape {
    // Your code here
}

class Circle extends Shape {
    // Your code here
}

// Test
const shapes: Shape[] = [new Rectangle(4, 5), new Circle(3)];
shapes.forEach(shape => console.log(`${shape.name} area: ${shape.getArea()}`));
🔹 7. Interfaces and Class Implementation
Objective: Use interfaces to enforce structure.

// Task: Define an interface `Animal` with:
// - name: string
// - makeSound(): string

// Create a class `Dog` that implements `Animal`.

interface Animal {
    // Your code here
}

class Dog implements Animal {
    // Your code here
}

// Test
const dog = new Dog("Rex");
console.log(dog.makeSound()); // "Rex says Woof!"
🔹 8. Function Interfaces
Objective: Define function types with interfaces.

// Task: Define an interface `MathOperation` that describes a function:
// (x: number, y: number) => number

// Implement two variables `add` and `multiply` that match the interface.

interface MathOperation {
    // Your code here
}

// Your code
const add: MathOperation = (x, y) => { /* ... */ };
const multiply: MathOperation = (x, y) => { /* ... */ };

// Test
console.log(add(2, 3));       // 5
console.log(multiply(2, 3));  // 6
🔹 9. Interface vs Type Alias
Objective: Understand when and how to use interfaces vs type aliases.

// Task:
// - Create a type alias `Coordinates` with `x` and `y` properties.
// - Create an interface `Movable` with method `move(dx: number, dy: number): void`
// - Implement a class `Point` that uses both.

type Coordinates = {
    x: number;
    y: number;
};

interface Movable {
    move(dx: number, dy: number): void;
}

class Point implements Coordinates, Movable {
    // Your code here
}

// Test
const point = new Point(0, 0);
point.move(5, 3);
console.log(point); // Should show updated x and y