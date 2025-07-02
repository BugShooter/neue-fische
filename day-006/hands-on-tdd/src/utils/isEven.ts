export function isEven(a: number): boolean {
    if (!Number.isInteger(a))
        throw new Error("Must be an integer");
    return a % 2 === 0;
}