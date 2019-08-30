// function tukarBesarKecil(kalimat) {
//   // you can only write your code here!
//   let arr = kalimat.split("");
//   let newArr = [];
//   arr.forEach(el => {
//     if (el.toLowerCase().match(/[a-z]/i)) {
//       if (el === el.toLowerCase()) {
//         newArr.push(el.toUpperCase());
//       } else {
//         newArr.push(el.toLowerCase());
//       }
//     } else {
//       newArr.push(el);
//     }
//   });
//   return newArr.join("");
// }

// function tukarBesarKecil(kalimat) {
//     let newSentence = "";
//     for (let i = 0; i < kalimat.length; i++) {
//         newSentence += kalimat[i] !== kalimat[i].toLowerCase() ? kalimat[i].toLowerCase() :
//         kalimat[i].toUpperCase();
//     }
//     return newSentence;

// }

function tukarBesarKecil(kalimat) {
    return kalimat.split("").reduce((str, char)=> {
        return str + (char.toLowerCase() === char ? char.toUpperCase(): char.toLowerCase())
    },"")

}



// TEST CASES
console.log(tukarBesarKecil("Hello World")); // "hELLO wORLD"
console.log(tukarBesarKecil("I aM aLAY")); // "i Am Alay"
console.log(tukarBesarKecil("My Name is Bond!!")); // "mY nAME IS bOND!!"
console.log(tukarBesarKecil("IT sHOULD bE me")); // "it Should Be ME"
console.log(tukarBesarKecil("001-A-3-5TrdYW")); // "001-a-3-5tRDyw"
