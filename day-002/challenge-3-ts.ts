let numbers: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(numbers.map(v => v * 2));

let words: string[] = ['apple', 'banane', 'watermelone', 'milk', 'bread', 'cacke'];
console.log(words.filter(w => w.length > 5));

let numbersAgain: number[] = [1, 2, 3, 4, 5, 6, 7];
console.log(numbersAgain.reduce((acc, cur) => acc + cur, 0));

let numbersOnceMore: number[] = [1, 2, 3, 4, 5, 6, 7];
if (numbersOnceMore.some(v => v > 10))
    console.log('Array  contains a number greater then 10');
else
    console.log('Array doesn\'t contain a number greater then 10');

    