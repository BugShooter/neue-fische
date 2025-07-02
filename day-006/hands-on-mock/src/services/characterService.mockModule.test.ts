import { getCharacterName } from "./characterService";
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
