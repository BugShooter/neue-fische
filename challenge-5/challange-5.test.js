

import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getLikesAsText } from './challenge-5.js';

describe('Challenge 5', () => {
    it("Test 1: No one", () => {
        const inputData = [];
        const expectation = "no one likes this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
    it('Test 2: ["Peter"]  -->  "Peter likes this"', () => {
        const inputData = ["Peter"];
        const expectation = "Peter likes this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
    it('Test 3: ["Jacob", "Alex"] -->  "Jacob and Alex like this"', () => {
        const inputData = ["Jacob", "Alex"];
        const expectation = "Jacob and Alex like this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
    it('Test 4: ["Max", "John", "Mark"] -->  "Max, John and Mark like this', () => {
        const inputData = ["Max", "John", "Mark"];
        const expectation = "Max, John and Mark like this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
    it('Test 5: ["Alex", "Jacob", "Mark", "Max"] --> "Alex, Jacob and 2 others like this"', () => {
        const inputData = ["Alex", "Jacob", "Mark", "Max"];
        const expectation = "Alex, Jacob and 2 others like this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
    it('Test 6: ["Alex", "Jacob", "Mark", "Max", "A","B"] --> "Alex, Jacob and 4 others like this"', () => {
        const inputData = ["Alex", "Jacob", "Mark", "Max", "A","B"];
        const expectation = "Alex, Jacob and 4 others like this";
        const result = getLikesAsText(inputData);
        assert.equal(result, expectation);
    });
});

