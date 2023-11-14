function displayPattern(rows, cols) {
    for (let i = 0; i < rows; i++) {
        let row = '';
        for (let j = 0; j < cols; j++) {
            
            row += j >= (cols - i) ? '0 ' : '1 ';
        }
      
        console.log(row.trim());
    }
}


displayPattern(4, 4);

