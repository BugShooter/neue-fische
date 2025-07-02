export function isPalindrome(word: string): boolean {
    return word === word.split('').reverse().join('');
}
