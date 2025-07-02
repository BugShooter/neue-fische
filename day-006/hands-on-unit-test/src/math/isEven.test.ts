import { isEven } from "./isEven";

test("isEven(2) → true", () => {
    expect(isEven(2)).toBe(true);
})
test("isEven(3) → false", () => {
    expect(isEven(3)).toBe(false);
})
test("isEven(0) → true", () => {
    expect(isEven(0)).toBe(true);
})
test("isEven(-4) → true", () => {
    expect(isEven(-4)).toBe(true);
})

// Bonus: Add a test with a non - integer input(e.g. 2.5).What should happen ?
test("isEven(2.5) -> exceptioin", () => {
    // Wrong
    // expect(isEven(2.5)).toThrow("Must be an integer");
    // Right
    expect(() => isEven(2.5)).toThrow("Must be an integer");
})