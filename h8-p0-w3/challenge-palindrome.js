// function palindrome(kata) {
//   kataArray = kata.split("");
//   reverseArray = [];
//   for (let i = kataArray.length - 1; i >= 0; i--) {
//     reverseArray.push(kataArray[i]);
//   }
//   if (kataArray.join("") === reverseArray.join("")) {
//     return true;
//   } else {
//     return false;
//   }
// }

// function palindrome(kata) {
//   var kataTerbalik = "";
//   var statement;

//   // for loop to print kata reversed
//   for (var i = kata.length - 1; i >= 0; i--) {
//     kataTerbalik += kata[i];
//   }
//   // logic to identify palindrome words
//   if (kataTerbalik === kata) {
//     statement = true;
//   } else {
//     statement = false;
//   }
//   return statement;
// }

function palindrome(str) {
  var i;
  len = str.length;
  console.log(len/2)
  for (i = 0; i < len / 2; i++) {
    if (str[i] !== str[len - 1 - i]) return false;
  }
  return true;
}

// TEST CASES
console.log(palindrome("kattak")); // true
console.log(palindrome("blanket")); // false
console.log(palindrome("civic")); // true
console.log(palindrome("kasur rusak")); // true
console.log(palindrome("mister")); // false
