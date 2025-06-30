/*
Write a function findNeedle() that takes an array full of junk but containing one "needle".
After your function finds the needle, it should return a message (as a string) that says:
"found the needle at position " + the index it found the needle
*/

export function findNeedle(list: string[]): string {
    const index = list.findIndex((value) => {
        return value == "needle";
    });

    return index >= 0 ? `found the needle at position ${index}` : 'the needle not found';
}





