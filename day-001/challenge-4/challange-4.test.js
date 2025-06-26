
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { findMissingLetter } from './challenge-4.js';

describe('Challenge 4', () => {
    it("Test 1: ['a','b','c','d','f'] -> 'e'", () => {
        const inputData = ['a','b','c','d','f'];
        const expectation = 'e';
        const result = findMissingLetter(inputData);
        assert.equal(result, expectation);
    });
    it("Test 2: ['O','Q','R','S'] -> 'P'", () => {
        const inputData = ['O','Q','R','S'];
        const expectation = 'P';
        const result = findMissingLetter(inputData);
        assert.equal(result, expectation);
    });
});
