let numbers = [1, 2, 3, 4, 5];

// function sum(numbers) {
//   let runningTotal = 0;

//   for (let num of numbers) {
//     runningTotal += num;
//   }

//   return runningTotal;
// }

// console.log(sum(numbers));

/* 
Fist we initiate and define runningTotal to 0
Then we use a for loop construct to iterate the array and keep adding
the current number to runningTotal
When we are done with the numbers, the loop breaks, and the runningTotal is returned

this method is imperative because it uses statements and mutable variable to keep track
of a changing state of the program

This time we will try to write a variation that does not store a total running sum in any variable

For example lets build a string from an array of characters
*/

function buildWord(chars) {
  //base code
  console.log(chars);
  if (chars.length === 1) return chars[0];

  let firstChar = chars[0];
  chars.shift();

  return firstChar + buildWord(chars);
}

// console.log(buildWord(["f", "o", "o"]));

/*
buildWord(['f', 'o', 'o'])
'f' + buildWord(['o', 'o'])
'f' + ('o' + buildWord(['o']))    // base case! return 'o' and fold
'f' + ('o' + ('o'))
'f' + ('oo')
'foo'

another solution:

function buildWord(chars) {
  if (chars.length == 1) return chars[0];
  return chars[0] + (chars.slice(1));
}
*/

function sumRecursion(numbers) {
  if (numbers.length === 1) return numbers[0];

  return numbers[0] + sumRecursion(numbers.slice(1));
}

// console.log("recursion example", sumRecursion(numbers));

function sumRecES6(numbers) {
  let [first, ...rest] = numbers;
  console.log(rest);
  if (rest.length == 0) return first;
  return first + sumRecES6(rest);
}

console.log("recursion example es6", sumRecES6(numbers));

/* 
Base Case: This bracnch is mandatory as it provides the way out from the recurring loop.
The base case must provide a condition that will eventually become true and returns from
the function or the program's stack will quickly overflow

Induction Case: This branch returns a recursive call to itself or an espression consisting
of the recursive call. This breaks down the problem into smaller chunks that can be solved
over and over by the same function provided the input to the subsequent call gets induced
gradually. In the above case, as sum is being called each time, the array provided as the numbers
the argument is being induced by one starting element at a time

*/

/* Tail recursion for sum */

function sum(numbers, runningTotal = 0) {
  if (numbers.length == 0) return runningTotal;
  return sum(numbers.slice(1), runningTotal + numbers[0]);
}
