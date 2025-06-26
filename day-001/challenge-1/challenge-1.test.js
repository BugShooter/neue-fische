import assert from 'node:assert/strict';
import { describe, it } from 'node:test';

import { getUserStatusList } from './challenge-1.js';


describe('Challenge 1', () => {
    it('Test 1', () => {
        // The input data has the following structure:
        const inputData = [
            {
                username: 'David',
                status: 'online',
                lastActivity: 10
            },
            {
                username: 'Lucy',
                status: 'offline',
                lastActivity: 22
            },
            {
                username: 'Bob',
                status: 'online',
                lastActivity: 104
            }
        ];
        // The corresponding output should look as follows:
        const expectation = {
            online: [
                'David'
            ],
            offline: [
                'Lucy'
            ],
            away: [
                'Bob'
            ]
        };
        const result = getUserStatusList(inputData);
        assert.deepStrictEqual(result, expectation);
    });
    it('Offline und away only', () => {
        const inputData = [
            {
                username: 'Lucy',
                status: 'offline',
                lastActivity: 22
            },
            {
                username: 'Bob',
                status: 'online',
                lastActivity: 104
            }
        ];
        const expectation = {
            offline: ['Lucy'],
            away: ['Bob']
        };
        const result = getUserStatusList(inputData);
        assert.deepStrictEqual(result, expectation);
    });
    it('I have no friends', () => {
        const inputData = [
        ];
        const expectation = {
        };
        const result = getUserStatusList(inputData);
        assert.deepStrictEqual(result, expectation);
    });
});


