import { isString } from "./isString"

// Test for:
describe("isString", () => {

    test("type of hello → true", () => {
        expect(isString("hello")).toBe(true);
    });

    test("type of number → false", () => {
        expect(isString(123)).toBe(false);
    });

    test("empty object {} → false", () => {
        expect(isString({})).toBe(false);
    });

    test("empty string → true", () => {
        expect(isString('')).toBe(true);
    });

    test("undefined → false", () => {
        expect(isString(undefined)).toBe(false);
    });
});
