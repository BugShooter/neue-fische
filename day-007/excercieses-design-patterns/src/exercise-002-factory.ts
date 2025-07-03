// Design Patterns in TypeScript

const log = console.log;
const err = console.error;

// 2. Shape Factory

// Task: Implement a ShapeFactory that returns different shapes(e.g., Circle, Square, Triangle) 
// based on a string input. Each shape should implement a draw() method.

interface Shape {
    draw: () => void;
}

class Circle implements Shape {
    consrtuctor() { }
    draw() {
        log("Drawing Circle")
    }
}

class Square implements Shape {
    consrtuctor() { }
    draw() {
        log("Drawing Square")
    }
}

class Triangle implements Shape {
    consrtuctor() { }
    draw() {
        log("Drawing Triangle")
    }
}

class ShapeFactory {
    static create(type: 'circle' | 'square' | 'triangle') {
        switch (type) {
            case 'circle':
                return new Circle()
                break;
            case 'square':
                return new Square()
                break;
            case 'triangle':
                return new Triangle()
                break;
            default:
                throw new Error('Unknown type of figure')
        }
    }
}

export function main() {
    log("2. Shape Factory");
    const shape1 = ShapeFactory.create('circle');
    shape1.draw(); // Output: Drawing Circle
    const shape2 = ShapeFactory.create('square');
    shape2.draw();
    const shape3 = ShapeFactory.create('triangle');
    shape3.draw();
}
