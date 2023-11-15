// function stars(rows, cols) {
//     for(i=0; i<rows; i++){
//         let row='1 '.repeat(rows-i) .trim();
//         console.log(row);
//     }
//    }
//    stars(4, 4);
// function stars(rows,cols){
// for(var i=0;i<4;i++){
//     for(var j=0;j<=i;j++)
//     { 
//         console.log("1 "); 
        
//     } console.log("1"); 
// }    
// }

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