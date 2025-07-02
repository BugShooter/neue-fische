import { isPalindrome } from "./isPalindrome";

describe("isPalindrome(word:string):string", () => {
    test("'level' → true", () => {
        expect(isPalindrome('level')).toBe(true);
    });
    test("'test' → false", () => {
        expect(isPalindrome('test')).toBe(false);
    });
    test("'madam' → true", () => {
        expect(isPalindrome('madam')).toBe(true);
    });
    test("'' → true", () => {
        expect(isPalindrome('')).toBe(true);
    });
    test("' ' → true", () => {
        expect(isPalindrome(' ')).toBe(true);
    });
    test("'MadaM' → true", () => {
        expect(isPalindrome('MadaM')).toBe(true);
    });
    test("'Madam' → false", () => {
        expect(isPalindrome('Madam')).toBe(false);
    });
    test("'12321' → true", () => {
        expect(isPalindrome('12321')).toBe(true);
    });
    test("'12345' → false", () => {
        expect(isPalindrome('12345')).toBe(false);
    });
    test("'!@#@!' → true", () => {
        expect(isPalindrome('!@#@!')).toBe(true);
    });
});