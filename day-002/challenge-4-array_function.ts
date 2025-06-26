const list = [15, 6, 3213, 9, 0, 12, 8464, 1, 1264, 481, 186, 1031, 194];

let result = list
    .sort((a, b) => b - a)
    .map(v => v * v)
    .slice(4, -2)
    .filter(v=>v%4!==0)
    .reduce((acc,cur)=>acc+cur,0)


console.log(result);