import { add } from './add';

describe('add()', () => {
    test("add(1, 2) → 3", () => {
        expect(add(1, 2)).toBe(3);
    })

    test("add(-4, 5) → 1", () => {
        expect(add(-4, 5)).toBe(1);
    })

    test("add(0, 0) → 0", () => {
        expect(add(0, 0)).toBe(0);
    })

    test('adds positive numbers', () => {
        expect(add(2, 3)).toBe(5);
    });

    test('adds negative numbers', () => {
        expect(add(-1, -2)).toBe(-3);
    });
})
