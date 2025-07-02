import { getCharacterName } from "./characterService";
import axios from "axios";

test("Mock axios response", async () => {
    const axiosMock = jest.spyOn(axios, 'get').mockResolvedValue({
        data: {
            id: 1,
            name: 'Rick Sanchez'
        }
    });
    const name = await getCharacterName(1);
    expect(name).toBe("Rick Sanchez");
});
