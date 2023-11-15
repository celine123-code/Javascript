

// function pattern(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let rowPattern = '';
//         for (let m = 0; m < cols; m++) {
//             rowPattern += '* ';
//         }
//         console.log(rowPattern);
//     }
// }
// pattern(4, 5);
// function pattern(rows, cols) {
//     for (let i = 0; i < rows; i++) {
//         let rowPattern = '';
//         for (let m = 0; m < cols; m++) {
//             rowPattern += '1 ';
//         }
//         console.log(rowPattern);
//     }
// }
// pattern(4, 5);

let n = 5;
let string = "";
for (let i = 1; i <= n; i++) {
  // printing spaces
  for (let j = 0; j < n - i; j++) {
    string += " ";
  }
  // printing star
  for (let k = 0; k < i; k++) {
    string += "*";
  }
  string += "\n";
}
console.log(string);


