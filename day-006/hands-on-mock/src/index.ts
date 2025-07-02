import { getCharacter } from './api/getCharacter';
import { getCharacterName, isCharacterAlive } from './services/characterService';

function log(...args: any[]) {
    console.log(...args);
}

async function main() {
    try {
        const character = await getCharacter(1);
        log('Character:', character);

        const name = await getCharacterName(1);
        const status = await isCharacterAlive(1);
        log(`name: ${name}, status: ${status}`);
    } catch (error) {
        console.error('Error:', error);
    }
}

main();
