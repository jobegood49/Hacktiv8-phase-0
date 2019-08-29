function tentukanDeretAritmatika(arr) {
  // you can only write your code here!
  for (let i = 1; i < arr.length - 1; i++) {
    if (arr[i] - arr[i - 1] !== arr[i + 1] - arr[i]) return false;
  }
  return true;
}

function tentukanDeretAritmatika(arr) {
  // Init variables
  var bedaInit = arr[1] - arr[0];
  var bedaDeteksi;

  // loop to inspect elements in array
  for (var i = 0; i < arr.length - 1; i++) {
    bedaDeteksi = arr[i + 1] - arr[i];
    // logic to determine if array is indeed arithmetically true
    if (bedaDeteksi !== bedaInit) {
      return false;
    }
  }
  return true;
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])); // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])); // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])); // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])); // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])); // false
