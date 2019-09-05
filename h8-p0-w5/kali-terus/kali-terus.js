function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let numArray = angka.toString().split("");

  if (numArray.length === 1) return numArray[0];

  let buffer = numArray[0] ;
  let updatedString = numArray.slice(1).join("");
  let newNum = parseInt(updatedString);
  return buffer * kaliTerusRekursif(newNum);
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
