// function kaliTerusRekursif(angka) {
//   // you can only write your code here!
//   let numArray = angka.toString().split("");

//   if (numArray.length === 1) return numArray[0];

//   let buffer = numArray[0];
//   let updatedString = numArray.slice(1).join("");
//   let newNum = parseInt(updatedString);
//   return buffer * kaliTerusRekursif(newNum);
// }

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let str = angka.toString();

  if (str.length === 1) return str;

  return str[0] * kaliTerusRekursif(parseInt(str.slice(1)));
}

// function kaliTerusRekursif(angka) {
//   if (angka.toString().length === 1) {
//     return angka;
//   } else {
//     var hasilKali = Number(angka.toString().substring(0, 1));

//     for (var i = 1; i < angka.toString().length; i++) {
//       hasilKali = hasilKali * Number(angka.toString()[i]);
//     }

//     return kaliTerusRekursif(hasilKali);
//   }
// }

// function kaliTerusRekursif(angka) {
//   // you can only write your code here!
//   var str = angka.toString();
//   //console.log(typeof str);
//   //console.log(str.slice(1, angka.length));
//   if (str.length === 1) {
//     return parseInt(str);
//   } else {
//     return kaliTerusRekursif(
//       parseInt(str[0]) * kaliTerusRekursif(parseInt(str.slice(1, angka.length)))
//     );
//   }
// }

function kaliTerusRekursif(angka) {
  // you can only write your code here!
  let str = angka.toString();

  if (str.length === 1) return str;

  return kaliTerusRekursif(str[0] * kaliTerusRekursif(parseInt(str.slice(1))));
}

// TEST CASES
console.log(kaliTerusRekursif(66)); // 8
console.log(kaliTerusRekursif(3)); // 3
console.log(kaliTerusRekursif(24)); // 8
console.log(kaliTerusRekursif(654)); // 0
console.log(kaliTerusRekursif(1231)); // 6
