export function isEven(n: number): boolean {
    if (!Number.isInteger(n))
        throw new Error("Must be an integer");
    return n % 2 === 0;
}
