import { divide } from "./divide";

test("divide(10, 2) → 5", () => {
    expect(divide(10, 2)).toBe(5);
});
test("divide(7, -1) → -7", () => {
    expect(divide(7, -1)).toBe(-7);
});
test("divide(0, 10) → 0", () => {
    expect(divide(0, 10)).toBe(0);
});
test("divide(1, 0) → throws error (use .toThrow())", () => {
    expect(()=>divide(1, 0)).toThrow("Cannot divide by zero");
});