import { getCharacter, Character } from "../api/getCharacter";

export async function getCharacterName(id: number): Promise<string> {
    const character = await getCharacter(id) as Character;
    if (character !== undefined) {
        return character.name;
    }
    throw new Error("Character name not available")
}

export async function isCharacterAlive(id: number): Promise<boolean> {
    const character = await getCharacter(id);
    return character?.status === "Alive";
}