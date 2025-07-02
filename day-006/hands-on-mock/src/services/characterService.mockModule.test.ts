import { getCharacterName, isCharacterAlive } from "./characterService";
import axios, { AxiosError } from "axios";

jest.mock('axios');

test("Mock axios module response", async () => {

    (axios.get as jest.Mock).mockResolvedValue({
        data: {
            id: 1,
            name: 'Rick Sanchez'
        }
    });
    const name = await getCharacterName(1);
    expect(name).toBe("Rick Sanchez");
});

test("Test Error Handling", async () => {
    const id = 1;

    // Restore some axios functions for error handling logic
    axios.isAxiosError = jest.requireActual('axios').isAxiosError;
    axios.AxiosError = jest.requireActual('axios').AxiosError;

    (axios.get as jest.Mock).mockRejectedValue(
        new AxiosError('Egal, welche Nachricht hier steht', "404")
    );

    await expect(getCharacterName(id)).rejects.toThrow(`getCharacter: request failed for ID: ${id}`);
});

describe("Task 5: Status-Based Logic", () => {

    // [x] Mock the character to have status "Alive" and expect true
    test("status is 'Alive' -> true", async () => {
        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                id: 1,
                name: "Test name",
                status: "Alive"
            }
        });

        const status = await isCharacterAlive(1);
        expect(status).toBe(true);
    });

    // [x] Mock status "Dead" and expect false
    test("status is 'Dead' -> false", async () => {
        (axios.get as jest.Mock).mockResolvedValue({
            data: {
                // id: 1,
                // name: "Test name",
                status: "Dead"
            }
        });

        const status = await isCharacterAlive(1);
        expect(status).toBe(false);
    });

    // [x] Mock Axios to throw and ensure an error is handled correctly
    test("isCaracterAlive() handled axios error", async () => {
        (axios.get as jest.Mock).mockRejectedValue(
            new Error("Some error")
        );

        await expect(isCharacterAlive(1)).rejects.toThrow();
    });
});