function targetTerdekat(arr) {
  // you can only write your code here!
  let indexO = "";
  let indexTargets = [];
  let distanceArray = [];

  arr.forEach((element, index) => {
    if (element === "o") indexO = index;
  });
  arr.forEach((element, index) => {
    if (element === "x") indexTargets.push(index);
  });
  if (indexTargets.length === 0) return 0;
  indexTargets.forEach(element => {
    distanceArray.push(Math.abs(element - indexO));
  });

  return Math.min(...distanceArray);
}

// function targetTerdekat(arr) {
//     // you can only write your code here!
//     let position_O = arr.indexOf('o');
//     let position_X = [];
//     for(let i = 0; i < arr.length; i++) {
//         if(arr[i] == 'x') {
//             position_X.push(i);
//         }
//     }

//     let resArr = [];
//     for(let i = 0; i < position_X.length; i++) {
//         resArr.push(Math.abs(position_X[i] - position_O));
//     }

//     if(resArr.length == 0) {
//         return 0
//     }
    
//     return resArr.sort()[0];
// }

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
