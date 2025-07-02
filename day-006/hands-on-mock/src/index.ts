import { getCharacter } from './api/getCharacter';
import { getCharacterName } from './services/characterService';

function log(...args: any[]) {
    console.log(...args);
}

async function main() {
    try {
        // const character = await getCharacter(1);
        // console.log(character);

        const name= await getCharacterName(1);
        log('name:',name);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
