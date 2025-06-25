import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { maskCreditCard } from './challenge-2.js';


describe('Challenge 2', () => {
    it('Test 1: 4556364607935616', () => {
        const inputData = "4556364607935616";
        const expectation = "############5616";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
    it('Test 2: 64607935616', () => {
        const inputData = "64607935616";
        const expectation = "#######5616";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
    it('Test 3: 1', () => {
        const inputData = "1";
        const expectation = "1";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
    it('Test 4: Empty', () => {
        const inputData = "";
        const expectation = "";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
    it('Skippy test', () => {
        const inputData = "Skippy";
        const expectation = "##ippy";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
    it('Batman test', () => {
        const inputData = "Nananananananananananananananana Batman!";
        const expectation = "####################################man!";
        const result = maskCreditCard(inputData);
        assert.equal(result, expectation);
    });
});
