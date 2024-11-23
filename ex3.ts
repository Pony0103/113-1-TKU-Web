function printMultiplicationTable(): void {
    let result: string = '';
    for (let i: number = 1; i <= 9; i++) {
        for (let j: number = 1; j <= 9; j++) {
            result += `${i} x ${j} = ${i * j}\n`;
        }
    }
    console.log(result);
}

printMultiplicationTable();