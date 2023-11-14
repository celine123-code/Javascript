// function smallest(arr) {
//     if (arr.length === 0) {
//       return undefined; 
//     }
  
//     let min = arr[0];
  
//     for (let i = 0; i < arr.length; i++) {
//       if (arr[i] < min) {
//         min = arr[i];
//       }
//     }
//     return min;
//   }
//   var numbers = [5, 6, 7, 8, 10];
//   var result = smallest(numbers);
//   console.log(result);
function smallest(arr){
  var sortedArray=arr.sort((a,b)=> b-a);
  return sortedArray[1];

}
var numbers = [5, 6, 7, 8, 10];
console.log(smallest(numbers));