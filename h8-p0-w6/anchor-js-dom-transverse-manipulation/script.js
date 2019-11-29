const divEldestParent = document.getElementById("eldest-parent")
console.log(divEldestParent)

const divEldestParentChildren = divEldestParent.children
console.log(divEldestParentChildren)

divEldestParentChildren[0].innerHTML = "Diakses Melalui Eldest Parent"

const divAChildElement = document.getElementById("a-child")
console.log(divAChildElement)
const divAChildElementPrevSibling = divAChildElement.previousElementSibling
divAChildElementPrevSibling.innerHTML = "Diakses Melalui a Child"
const divAChildElementNextSibling = divAChildElement.nextElementSibling
divAChildElementNextSibling.innerHTML = "Diakses Melalui a Child"

const chainingSelector = divAChildElement.parentNode.parentNode.nextElementSibling
chainingSelector.innerHTML = "toto"