function stars(rows, cols) {
    for(i=0; i<rows; i++){
        let row='1 '.repeat(rows-i) .trim();
        console.log(row);
    }
   }
   stars(4, 4);