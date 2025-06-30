/*
Mash Two Arrays Together
Write a function mashArrays() that takes two arrays of the same length and returns a new array with alternating elements from each array.
Example:
[1, 2, 3] + ['a', 'b', 'c'] → [1, 'a', 2, 'b', 3, 'c']
*/

export function mashArrays<T1, T2>(array1: T1[], array2: T2[]): (T1 | T2)[] {
    if (array1.length != array2.length) throw new Error("Arrays must have a same length");
    let result: (T1 | T2)[] = [];
    for (let i = 0; i < array1.length; i++) {
        result.push(array1[i]);
        result.push(array2[i]);
    }
    return result;
}
