import { getCharacterName } from "./characterService";
import axios from "axios";

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
