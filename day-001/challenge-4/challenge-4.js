export function findMissingLetter(letters)
{
    let missingLetter = null;
    letters.sort();
    for(let i=0;i<letters.length;i++){
        if(letters[i].charCodeAt(0)+1!=letters[i+1].charCodeAt(0)){
            missingLetter = String.fromCharCode(letters[i].charCodeAt(0)+1);
            break;
        }
    }
    return missingLetter;
}