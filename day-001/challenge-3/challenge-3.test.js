
import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { orderWords } from './challenge-3.js';


describe('Challenge 3', () => {
    it('Test 1: "is2 Thi1s T4est 3a"  -->  "Thi1s is2 3a T4est"', () => {
        const inputData = "is2 Thi1s T4est 3a";
        const expectation = "Thi1s is2 3a T4est";
        const result = orderWords(inputData);
        assert.equal(result, expectation);
    });
    it('Test 2: "4of Fo1r pe6ople g3ood th5e the2"  -->  "Fo1r the2 g3ood 4of th5e pe6ople"', () => {
        const inputData = "4of Fo1r pe6ople g3ood th5e the2";
        const expectation = "Fo1r the2 g3ood 4of th5e pe6ople";
        const result = orderWords(inputData);
        assert.equal(result, expectation);
    });
    it('Empty string test', () => {
        const inputData = "";
        const expectation = "";
        const result = orderWords(inputData);
        assert.equal(result, expectation);
    });
});
