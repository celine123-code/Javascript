function AverageArray(arr) {
    let aver= 0;
  
    for (let i = 0; i < arr.length; i++) {
      aver += arr[i];
    }
  
    return aver/arr.length;
  }
  var numbers = [4, 5, 4, 6,8];
  var result = AverageArray(numbers);
  console.log(result); 