function changeMe(arr) {
  // you can only write your code here!
  let currentTime = new Date();
  let year = currentTime.getFullYear();
  let newArr = [];
  arr.forEach(el => {
    let age = 0;
    if (year > el[3]) {
      age = year - el[3];
    } else {
        age = 'Invalid Birth Year' 
    }

    newArr.push({
      firstName: el[0],
      lastName: el[1],
      gender: el[2],
      age: age
    });
  });
  
  console.log(newArr);

  return newArr;
}

// TEST CASES
changeMe([["Christ", "Evans", "Male", 1982], ["Robert", "Downey", "Male"]]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
