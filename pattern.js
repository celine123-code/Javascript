

function pattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let rowPattern = '';
        for (let m = 0; m < cols; m++) {
            rowPattern += '* ';
        }
        console.log(rowPattern);
    }
}
pattern(4, 5);

