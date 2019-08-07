// function konversiMenit(menit) {
//   // you can only write your code here!
//   const numHour = Math.floor(menit / 60);
//   let minutes = menit - 60 * numHour;
//   if (minutes < 10) {
//     minutes = `0${minutes}`;
//   }
//   const time = `${numHour}:${minutes}`;
//   return time;
// }

// Intit Minute converter function
function konversiMenit(menit) {
  var jam = Math.trunc(menit / 60); // var to contain converted minute to hour var, transformed into whole number
  var menitSisa = menit % 60; // var to contain remaining minutes not converted to hour
  var menitSisaStr = String(menitSisa); // var to contain str of menitSisa, changed to string so can detect if there is 2 digit or not
  if (menitSisaStr.length === 1) {
    menitSisa = "0" + menitSisa; // add 0 if var is only one digit
  }
  return jam + ":" + menitSisa;
}

// TEST CASES
console.log(konversiMenit(63)); // 1:03
console.log(konversiMenit(124)); // 2:04
console.log(konversiMenit(53)); // 0:53
console.log(konversiMenit(88)); // 1:28
console.log(konversiMenit(120)); // 2:00
