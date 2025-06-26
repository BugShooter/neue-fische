function drawTree(height: number) {
    console.log(`Tree: ${height}`);
    const width = (height * 2) - 1;
    let halfPad = (width - 1) / 2;
    for (let i = 0; i < height; i++) {
        let line = ' '.repeat(halfPad) + '*'.repeat(i*2+1) + ' '.repeat(halfPad)
        halfPad--;
        console.log(line);
    }
    halfPad = (width - 1) / 2;
    let line = ' '.repeat(halfPad) + '*' + ' '.repeat(halfPad)
    console.log(line);
    console.log(line);
    console.log(line);
    console.log(line);
}

drawTree(1);
drawTree(2);
drawTree(3);
drawTree(10);