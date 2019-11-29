const body = document.body
console.log(body)

const mainDiv = document.createElement('div')
console.log(mainDiv, "this is the maindiv")
const mainDivAttrId = document.createAttribute('id')
console.log(mainDivAttrId)
mainDivAttrId.value = "main"
mainDiv.setAttributeNode(mainDivAttrId)
body.appendChild(mainDiv)

// Part 2

// const body = document.body;
// const mainDiv = document.createElement('div')
// const mainDivAttrId = document.createAttribute('id')
// mainDivAttrId.value="main"
// mainDiv.setAttributeNode(mainDivAttrId)
// body.appendChild(mainDiv)

const insideMainDiv = document.createElement('div')
insideMainDiv.setAttribute('id', 'inside-main')
mainDiv.appendChild(insideMainDiv)

//Part 3

const h1 = document.createElement('h1')
const h1text = document.createTextNode('Heading Sample 1')
h1.appendChild(h1text)
insideMainDiv.appendChild(h1)

//Part 4
const button = document.createElement('button')
const buttonText = document.createTextNode('Click Me!')
button.appendChild(buttonText)
button.addEventListener('click', function() {
    alert('Hello')
})

insideMainDiv.appendChild(button)



