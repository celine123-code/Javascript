// function displayPattern(row, cols) {
//     for (let i = 0; i < row; i++) {
//         let row = '';
//         for (let j = 0; j < cols; j++) {
            
//             row += (i === j || i + j === row - 1) ? "1 " : " ";
            
//         }
      
//         console.log(row);
//     }
// }


// displayPattern(4, 4);
// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k< n - i; k++) {
//  string += (i === k) ? "1 " : "0 ";
//   }
//   string += "\n";
// }
// console.log(string);
// let n = 5;
// let string = "";
// for (let i = 0; i < n; i++) {
//   // printing star
//   for (let k = 0; k < n - i; k++) {
//     string += "*";
//   }

// string += "\n";
// }
// console.log(string);
let n = 5;
let string = "";

for (let i = 0; i < n; i++) {
  // printing stars
  for (let k = 0; k < n - i; k++) {
    if (k === n - i - 1) {
      string += "*";
    } else {
      string += " ";
    }
  }
  string += "\n";
}

console.log(string);

