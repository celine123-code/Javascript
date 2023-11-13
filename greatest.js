function greatest(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let max = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] > max) {
        max = arr[i];
      }
    }
    return max;
  }
  var numbers = [5, 6, 7, 8, 10];
  var result = greatest(numbers);
  console.log(result);