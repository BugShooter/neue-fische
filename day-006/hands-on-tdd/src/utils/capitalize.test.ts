import { capitalize } from "./capitalize";

describe("capitalize()", () => {

    test('capitalizes a single lowercase word', () => {
        expect(capitalize('hello')).toBe('Hello');
    });

    test("h -> 'H'", () => {
        expect(capitalize('h')).toBe('H');
    })
    test("'' -> ''", () => {
        expect(capitalize('')).toBe('');
    })
    test("capitalize(‘javaScript’) → ‘JavaScript’", () => {
        expect(capitalize('javaScript')).toBe("JavaScript");
    })

    // Bonus
    test('"!test" -> "!test"', () => {
        expect(capitalize("!test")).toBe("!test");

    })
    test("' ' -> ' '", () => {
        expect(capitalize(' ')).toBe(' ');
    })
});