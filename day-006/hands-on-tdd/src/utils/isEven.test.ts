import { isEven } from "./isEven";

describe("isEven()", () => {

    test('returns true for even numbers', () => {
        expect(isEven(4)).toBe(true);
    });

    test('returns false for odd numbers', () => {
        expect(isEven(3)).toBe(false);
    });

    test("isEven(0) → true", () => {
        expect(isEven(0)).toBe(true);
    });
    test("isEven(-2) → true", () => {
        expect(isEven(-2)).toBe(true);
    });
    test("isEven(101) → false", () => {
        expect(isEven(101)).toBe(false);
    });

    test("isEven(2.56) → exeption", () => {
        expect(() => isEven(2.56)).toThrow();
    });
});