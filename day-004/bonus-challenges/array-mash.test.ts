import assert from 'node:assert/strict';
import test, { describe } from 'node:test';
import { mashArrays } from './array-mash';

describe("Array Mash test", () => {
    test("Test 1: mash numbers and letters", () => {
        const result = mashArrays([1, 2, 3], ['a', 'b', 'c']);
        assert.deepEqual(result, [1, 'a', 2, 'b', 3, 'c']);
    });

    test("Test 2: mash letters and numbers", () => {
        const result = mashArrays(['x', 'y'], [10, 20]);
        assert.deepEqual(result, ['x', 10, 'y', 20]);
    });

    test("Test 3: mash booleans and strings", () => {
        const result = mashArrays([true, false], ['yes', 'no']);
        assert.deepEqual(result, [true, 'yes', false, 'no']);
    });

    test("Test 4: mash strings and numbers", () => {
        const result = mashArrays(['left', 'right', 'center'], [0, 1, 2]);
        assert.deepEqual(result, ['left', 0, 'right', 1, 'center', 2]);
    });
});