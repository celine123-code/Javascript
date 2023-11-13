function smallest(arr) {
    if (arr.length === 0) {
      return undefined; 
    }
  
    let min = arr[0];
  
    for (let i = 1; i < arr.length; i++) {
      if (arr[i] < min) {
        min = arr[i];
      }
    }
    return min;
  }
  var numbers = [5, 6, 7, 8, 10];
  var result = smallest(numbers);
  console.log(result);