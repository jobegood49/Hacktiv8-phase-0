function ubahHuruf(kata) {
    // you can only write your code here!
    let arr = kata.split("")
    let arrChar = []
    let arrNew = []
    arr.forEach(element => {
        let n = element.charCodeAt(0)
        arrChar.push(n)
    });

    arrChar.forEach(n => {
        arrNew.push(String.fromCharCode(n + 1))
    })

    return arrNew.join("")

  }
  
  // TEST CASES
  console.log(ubahHuruf('wow')); // xpx
  console.log(ubahHuruf('developer')); // efwfmpqfs
  console.log(ubahHuruf('javascript')); // kbwbtdsjqu
  console.log(ubahHuruf('keren')); // lfsfo
  console.log(ubahHuruf('semangat')); // tfnbohbu