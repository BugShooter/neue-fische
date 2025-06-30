import assert from 'node:assert/strict';
import test, { describe, it } from 'node:test';
import { findNeedle } from './needle_in_a_haystack';

describe("Needle in a Haystack test", () => {
    test("Test 1: the needle at position 3", () => {
        const result = findNeedle(["hay", "junk", "random", "needle", "more junk"]);
        assert.equal(result, "found the needle at position 3");
    });

    test("Test 2: the needle at position 0", () => {
        const result = findNeedle(["needle"]);
        assert.equal(result, "found the needle at position 0");
    });

    test("Test 3:  the needle at position 3", () => {
        const result = findNeedle(["foo", "bar", "baz", "needle", "qux"]);
        assert.equal(result, "found the needle at position 3");
    });
    test("Test 4:  the needle at position 4", () => {
        const result = findNeedle(["one", "two", "three", "four", "needle"]);
        assert.equal(result, "found the needle at position 4");
    });

    test("Test 5:  the needle at position 2", () => {
        const result = findNeedle(["junk", "more junk", "needle", "even more junk"])
        assert.equal(result, "found the needle at position 2");
    });
});
