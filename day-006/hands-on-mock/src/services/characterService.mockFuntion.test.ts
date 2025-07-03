import { Character } from "../api/getCharacter";
import { getCharacterName } from "./characterService";
import axios from "axios";

test("Mock axios response", async () => {
    const data: Character = {
        id: 1,
        name: 'Rick Sanchez',
        status: 'Alive'
    }
    const axiosMock = jest.spyOn(axios, 'get').mockResolvedValue({ data });
    const name = await getCharacterName(1);
    expect(name).toBe("Rick Sanchez");
});
