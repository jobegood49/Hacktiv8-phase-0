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

// TEST CASES
console.log(targetTerdekat([" ", " ", "o", " ", " ", "x", " ", "x"])); // 3
console.log(targetTerdekat(["o", " ", " ", " ", "x", "x", "x"])); // 4
console.log(targetTerdekat(["x", " ", " ", " ", "x", "x", "o", " "])); // 1
console.log(targetTerdekat([" ", " ", "o", " "])); // 0
console.log(targetTerdekat([" ", "o", " ", "x", "x", " ", " ", "x"])); // 2
