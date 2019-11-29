// const pageHeadingH1 = document.getElementsByTagName("h1")[0];
// console.log(pageHeadingH1);
// pageHeadingH1.innerHTML = "toto"

//this gives an array!!!!

// SOLUTION

const pageHeadingH1 = document.getElementById("fill-me");
console.log(pageHeadingH1);
pageHeadingH1.innerHTML = "HALO!";

const changeAllOfMeElement = document.getElementsByClassName(
  "change-all-of-me"
);
console.log(changeAllOfMeElement);

for (let i = 0; i < 4; i++) {
    changeAllOfMeElement[i].innerHTML = "Halo Juga"
}

const h2Element = document.getElementsByTagName("h2")

console.log(h2Element[0])

h2Element[0].innerHTML = "Apa Kabar!"

// // const pageHeadingH1Id = document.getElementById("fill-me")
// console.log(pageHeadingH1.innerHTML, "test");
// let h1ElementContent = pageHeadingH1.innerHTML;
// h1ElementContent = "Halo";

// var h1Element = document.getElementById("fill-me");

// console.log(h1Element)

// var h1ElementContent = h1Element.innerHTML;

// console.log("lama -> " + h1ElementContent);

// h1Element.innerHTML = "HALO!";

// var newh1ElementContent = h1Element.innerHTML;

// // console.log("baru -> " + newh1ElementContent);

// var changeAllOfMeElement = document.getElementsByClassName("change-all-of-me");

// // console.log(changeAllOfMeElement.length);

// for (var i = 0; i < changeAllOfMeElement.length; i++) {
//   var currentChangeAllOfMe = changeAllOfMeElement[i];
//   currentChangeAllOfMe.innerHTML = "HALO JUGA!";
// }

// var h2Element = document.getElementsByTagName("h2");

// h2Element[0].innerHTML = "Apa Kabar!";
