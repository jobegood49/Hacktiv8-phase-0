function hitungJumlahKata(kalimat) {
  const words = kalimat.split(" ");
  const count = words.reduce((acc, curr) => {
    return acc + 1;
  }, 0);
  return count;
}

//Add another solution
// function hitungJumlahKata(kalimat) {
//   var wordCount = kalimat.split(" "); // words separated every space found
//   return wordCount.length;
// }

// TEST CASES
console.log(hitungJumlahKata("I have a dream")); // 4
console.log(hitungJumlahKata("Never eat shredded wheat or cake")); // 6
console.log(hitungJumlahKata("A song to sing")); // 4
console.log(hitungJumlahKata("I")); // 1
console.log(hitungJumlahKata("I believe I can code")); // 5
