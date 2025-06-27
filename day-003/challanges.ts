function log(...args: any[]): void {
    console.log(...args);
}
/*
Exercise 1: Basic Types and Interfaces
Define an interface User with properties:
    id (number)
    name (string)
    email (string)

Create a function getUserInfo(user: User): string 
that returns a formatted string like "User 1: John (john@example.com)".

Test the function with an example user object.
*/
log("Exercise 1: Basic Types and Interfaces")
interface User {
    id: number;
    name: string;
    email: string;
}
function getUserInfo(user: User): string {
    return `User ${user.id}: ${user.name} (${user.email})`;
}
const user1 = {
    id: 1,
    name: "Elon Musk",
    email: "elone.musk@x.ai"
};
log(getUserInfo(user1));

/*
Exercise 2: Union Types and Optional Properties
Create a type alias Status that can be either "active", "inactive", or "pending".
Define an interface Account with:

username (string)
status (Status)
lastLogin? (optional Date)
Write a function isActive(account: Account): boolean that returns true if status is "active".
Create several account objects with different statuses and optional lastLogin values 
and test your function.
*/
log("\nExercise 2: Union Types and Optional Properties");
type Status = "active" | "inactive" | "pending"
interface Account {
    username: string;
    status: Status;
    lastLogin?: Date;
}
function isActive(account: Account): boolean {
    return account.status === "active";
}
const account1: Account = {
    username: "Elone Musk",
    status: "active",
    lastLogin: new Date("2025-06-27 12:40"),
}
const account2: Account = {
    username: "Bill Gates",
    status: "inactive",
    lastLogin: new Date("1998-12-01 23:45")
}
const account3: Account = {
    username: "Bob Luis",
    status: "pending"
}

Array(account1, account2, account3).forEach(account => {
    log(`${account.username} is ${account.status}${account.lastLogin ? ' ' + account.lastLogin.toLocaleString() : ''}`);
});

/*
Exercise 3: Type Assertions
Write a function getLength(input: string | number): number
that returns the length of the input if it’s a string, or the number itself if it’s a number.
Use type assertions to safely handle both types.
*/
log("\nExercise 3: Type Assertions");
function getLength(input: string | number): number {
    if (typeof input === "string") {
        return input.length;
    }

    return input;
}
const str = "Ramstein Air Base";
const num = 33;
log(`${typeof str} (${str}):`, getLength(str));
log(`${typeof num} (${num}):`, getLength(num));

/*
Exercise 4: Index Signatures
Define an interface StringMap that allows any string key with a string value.
Create a function printValues(obj: StringMap): void that prints all key-value pairs in the object.
Test it with an object like {foo: "bar", baz: "qux"}.
*/
log("\nExercise 4: Index Signatures");
interface StringMap {
    [key: string]: string;
}
function printValues(obj: StringMap): void {
    Object.entries(obj).forEach(([key, value]) => {
        log(`${key} => ${value}`);
    });
}
printValues({ foo: "bar", baz: "qux" });

/*
Exercise 5: Higher-Order Functions
Write a higher-order function applyOperation that takes two numbers and a function (operation) as parameters:

function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number
Use applyOperation to perform addition, subtraction, multiplication, and division by passing appropriate functions.
Test the results with example inputs.
*/
log("\nExercise 5: Higher-Order Functions");
function applyOperation(a: number, b: number, operation: (x: number, y: number) => number): number {
    return operation(a, b);
}
log(`Addition: `, applyOperation(1, 2, (x, y) => x + y));
log(`Substraction: `, applyOperation(3, 4, (x, y) => x - y));
log(`Multiplication: `, applyOperation(5, 6, (x, y) => x * y));
log(`Division: `, applyOperation(7, 8, (x, y) => x / y));

/*
Exercise 6: Combining Interfaces and Union Types
Create an interface Square with a kind property "square" and a size property (number).
Create an interface Rectangle with a kind property "rectangle", width and height (numbers).
Define a union type Shape = Square | Rectangle.
Write a function getArea(shape: Shape): number that computes the area based on the kind property.
Test with both shapes.
*/
log("\nExercise 6: Combining Interfaces and Union Types");
interface Square {
    kind: "square";
    size: number;
}
interface Rectangle {
    kind: "rectangle";
    width: number;
    height: number;
}
type Shape = Square | Rectangle;
function getArea(shape: Shape): number {
    let area;
    switch
    (shape.kind) {
        case "square":
            area = shape.size * shape.size;
            break;
        case "rectangle":
            area = shape.width * shape.height;
            break;
        default:
            throw new Error("Unknown type of Shape");
    }
    return area;
}
const square: Square = {
    kind: "square",
    size: 10,
}
const rectangle: Rectangle = {
    kind: "rectangle",
    width: 10,
    height: 20,
}
log("Square: ", getArea(square));
log("Rectangle: ", getArea(rectangle));



/*
Exercise 7: Optional Chaining and Nullish Coalescing (Bonus)
Define an interface Profile with an optional nested property contact that may have an optional email string.
Write a function getEmail(profile: Profile): string that safely returns the email or "No email provided" using optional chaining and nullish coalescing.
*/
log("\nExercise 7: Optional Chaining and Nullish Coalescing (Bonus)");
interface Profile {
    id: number;
    contact?: {
        email?: string;
    };
}
function getEmail(profile: Profile): string {
    return profile?.contact?.email || "No email provided";
}
const profile1 = { id: 1, };
const profile2 = { id: 2, contact: {} };
const profile3 = { id: 3, contact: { email: "" } };
const profile4 = { id: 4, contact: { email: "profile4@email.example" } };
[profile1, profile2, profile3, profile4].forEach(profile =>
    log(`Profile ${profile.id}: `, getEmail(profile))
);
