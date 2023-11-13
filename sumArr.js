function sumArray(arr) {
    let sum = 0;
  
    for (let i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
  
    return sum;
  }
  var numbers = [2, 3, 4, 5,7];
  var result = sumArray(numbers);
  console.log(result); 