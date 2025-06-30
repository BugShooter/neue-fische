import assert from 'node:assert';
function log(...args: any[]): void {
    if (console.log) console.log(...args);
}

// Beginner Level

log("1. Generic Identity Function");
function identity<T>(arg: T): T {
    return arg;
}
log("2. Generic Array Function");
function getFirst<T>(arr: T[]): T {
    return arr[0];
}

log("3. Generic Interface");
interface Box<T> {
    value: T;
}
const numberBox: Box<number> = { value: 42 }; // This should be allowed

// Intermediate Level

log("4. Generic Constraint");
function printLength<T extends { length: number }>(item: T): number {
    return item.length;
}

log("5. Using Multiple Type Parameters")

function createPair<K, V>(key: K, value: V): [K, V] {
    return [key, value];
}

// Advanced Level

log("6. Generic with Default Type");
function wrapValue<T = string >(val?: T): (T|undefined)[] {
    return [val];
}
const defaultWrapped3 = wrapValue();
const defaultWrapped1 = wrapValue("Si vis pacem, para bellum"); // should infer type
const defaultWrapped2 = wrapValue(123); // should infer type

log("7. Generic Utility Type");
// TODO: Use Partial<T> to make all properties optional
type Todo = {
    title: string;
    completed: boolean;
};

type PartialTodo = Partial<Todo>

log("8. Conditional Type with Generics");
type TypeCheck<T> = T extends string ? string : number;

type A = TypeCheck<'hello'>; // string
type B = TypeCheck<42>;      // number
