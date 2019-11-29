# Transversing in Document Object Model (DOM)

## Objectives

Di layout HTML yang cukup kompleks, kita akan bertemu dengan banyak element HTML yang memiliki hubungan parent-child yang dalam, dan pada saat kita menggunakan JavaScript untuk menseleksi atau memanipulasinya, tidak mungkin kita harus memberikan id atau class ke semua element-nya. Kita bisa menseleksi element HTML dari parent atau dari childnya. Untuk lebih dalam memahami hal ini, kamu harus telah mengerti hierarki parent-child yang terjadi di susunan HTML. Tapi tenang saja, kita akan mengulas ulang hal tersebut.


In fairly complex HTML layouts, we will encounter a lot of HTML elements that have deep parent-child relationships, and when we use JavaScript to select or manipulate them, it is not possible to give IDs or classes to all of its elements. We can select HTML elements from the parent or child. To better understand this, you must have understood the parent-child hierarchy that occurs in the HTML layout. But take it easy, we will review it again.

**DOM Transversing**

- ▢ mereview Hierarki Parent-Child di HTML
- ▢ menjelajah DOM dengan hubungan Parent, Child, dan Sibling


- ▢ reviews the Parent-Child Hierarchy in HTML
- ▢ explore DOM with Parent, Child, and Sibling relationships
  
## Learnings

### 1. Hierarki Layout HTML

Hierarki layout HTML adalah bagaimana sebuah element HTML saling terkait satu sama lain. Untuk beberapa element, dapat terkandung di dalam element HTML lain. Hal inilah yang disebut sebagai element parent-child. Element HTML yang terkandung di dalam element HTML lain, adalah child/anak dari element induk nya tersebut.

The HTML layout hierarchy is how HTML elements are related to one another. For some elements, they can be contained in other HTML elements. This is called the parent-child element. HTML elements contained in other HTML elements, are children of the parent element.

![Hierarki dalam Layout HTML](assets/html-hierarcy.gif)

Contoh gambar di atas merupakan gambaran sederhana dari sebuah layout HTML. Apabila layout di atas kita coba konversikan ke dalam kode HTMl, akan seperti kode di bawah ini (untuk kebutuhan kode, ditambahkan id untuk beberapa div):


The example image above is a simple description of an HTML layout. If we try to convert the above layout into HTMl code, it will be like the code below (for code needs, add id for some divs):

**js-dom-transversing.html**
```html
<html>
  <head></head>
  <body>
    <h1></h1>
    <div id="contoh-div-1">
      <p id="contoh-p-1">
        <strong></strong>
        <em></em>
      </p>
    </div>
    <div id="contoh-div-2">
      <h2></h2>
      <p id="contoh-p-2"></p>
      <ul>
        <li></li>
        <li></li>
      </ul>
    </div>
    <script src="dom-transverse-1-intro.js"></script>
    <script src="dom-transverse-2-siblings.js"></script>
    <script src="dom-transverse-3-chaining-selectors.js"></script>
  </body>
</html>
```

Bisa kita lihat seperti visualisasi layout web page dan code di atas, satu element HTML menjadi child untuk yang lainnya. Terkait relasi parent-child, ada juga relasi yang dinamakan sibling. Sibling adalah "saudara" dari sebuah child, yang memiliki parent yang sama. Jika kita analogikan dalam sebuah keluarga sebagai seorang anak atau sebuah child, sibling adalah adik atau kakak kandung kita, dan parent adalah orang tua kandung kita. Di bawah ini di jelaskan peran masing-masing element HTML di atas dalam susunan hierarki nya.


We can see like visualizing the web page layout and code above, one HTML element becomes a child for another. Related to parent-child relations, there is also a relationship called sibling. Sibling is the "brother" of a child, which has the same parent. If we analogize in a family as a child or a child, sibling is our younger sibling or sibling, and the parent is our biological parent. Below is explained the role of each HTML element above in its hierarchical arrangement.

- **`<html>`**                  : merupakan parent paling atas
- is the topmost parent
- **`<head>`**                  : merupakan child dari `<html>`
- is a child of `<html>`
- **`<body>`**                  : merupakan child dari `<html>`, sibling dari `<head>`
- is a child of `<html>`, sibling of `<head>`
- **`<h1>`**                    : merupakan child dari `<body>`
- is a child of `<body>`
- **`<div id="contoh-div-1">`** : merupakan child dari `<body>`, sibling dari `<h1>`
- is a child of `<body>`, sibling of `<h1>`
- **`<p id="contoh-p-1"> `**    : merupakan child dari `<div id="contoh-div-1">`
- is a child of `<div id =" example-div-1 ">`
- **`<strong>`**                : merupakan child dari `<p id="contoh-p-1">`
- is the child of `<p id =" example-p-1 ">`
- **`<em>`**                    : merupakan child dari `<p id="contoh-p-1">`, sibling dari `<strong>`
- **`<div id="contoh-div-2">`** : merupakan child dari `<body>`, sibling dari `<h1>` dan `<div id="contoh-div-1">`
- is a child of `<p id =" example-p-1 ">`, sibling of `<strong>`
- **`<h2>`**                    : merupakan child dari `<div id="contoh-div-2">`
- is a child of `<div id =" example-div-2 ">`
- **`<p id="contoh-p-2">`**     : merupakan child dari `<div id="contoh-div-2">`, sibling dari `<h2>`
- ** `<p id =" example-p-2 ">` **: is the child of `<div id =" example-div-2 ">`, sibling of `<h2>`
- **`<ul>`**                    : merupakan child dari `<div id="contoh-div-2">`, sibling dari `<h2>` dan `<p id="contoh-p-2">`
- is a child of `<div id =" example-div-2 ">`, sibling of `<h2>` and `<p id =" example-p-2 ">`
- **`<li>`**                    : merupakan child dari `<ul>`
- is a child of `<ul>`

### 2. Menjelajah DOM

Saatnya kita belajar menjelajah DOM memanfaatkan parent, child, dan sibling.


It's time we learn to explore the DOM using parent, child, and sibling.

#### 2.1 Parent - Child

Untuk mulai mengenai transerving atau penjelajahan di dalam DOM, kita coba mulai dengan menjelajahi hubungan Parent - Child. Contoh pertama kita mulai dengan menseleksi `<body>` dan mendapatkan element HTML apa saja yang menjadi children dari `<body>`.


To begin with transerving in the DOM, we try to begin by exploring the Parent - Child relationship. The first example we start by selecting `<body>` and getting whatever HTML elements are children of `<body>`.

**dom-transverse-1-intro.js (part 1)**
```javascript
/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
====================================================
*/

// Menseleksi element <body>
// Selects the <body> element
var body = document.body;

// Mendapatkan element children dari <body>
// Getting element children from <body>

var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array

// Displays the DOM that is the child of <body> in the form of an array
console.log(bodyChilds); // h1, div id="contoh-div-1", div id="contoh-div-2", scripts js
```

Berdasarkan potongan kode di atas, kita berhasil mendapatkan children dari `<body>`, yaitu `<h1>`, `<div id="contoh-div-1">`, `<div id="contoh-div-2">` dan `<script>`.


Based on the code snippet above, we managed to get children from <body>, that is <h1>, <div id = "example-div-1">, <div id = "example-div-2"> and <script>.

Sekarang coba kita update lagi kode kita untuk mendapatkan contoh penjelajahan lain.

Now let's update our code again to get another example of browsing.
**dom-transverse-1-intro.js (part 2)**
```javascript
/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
 Selecting DOM based on the Parent - Child relationship
====================================================
*/

// Menseleksi element <body>
// Selects the <body> element
var body = document.body;

// Mendapatkan element children dari <body>
// Getting element children from <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
// Displays the DOM that is the child of <body> in the form of an array
console.log(bodyChilds);

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan element children dari <div id="contoh-div-1"> dalam bentuk array
// get the children element of <div id = "example-div-1"> in the form of an array
var contohDiv1Childs = contohDiv1.children;

// Mendapatkan child pertama dari <div id="contoh-div-1">
// get the first child from <div id = "example-div-1">
var contohDiv1FirstChild = contohDiv1Childs[0];
console.log(contohDiv1FirstChild); // <p id="contoh-p-1">...</p>

// Note: Walaupun children mungkin hanya 1 element, tetap tertampung dalam array!

// Note: Even though children may have only one element, they are still contained in an array!
```

Disini kita mencoba mengakses salah satu children dan menambilkannya ke console sebagai HTML element, dengan menakses index dari array children yang sesuai. Ingat, setiap kita menggunakan `.children`, kita pasti mendapatkan nilai berupa array yang berisikan berbagai HTML elements.


Here we try to access one of the children and bring it to the console as an HTML element, by accessing the index of the appropriate array of children. Remember, every time we use `.children`, we must get an array value containing various HTML elements.

Bagaimana mengakses semua nilai dari children? Kita tinggal menggunakan looping seperti contoh berikut:


How to access all values ​​of children? We just need to use looping like the following example:

**dom-transverse-1-intro.js (part 3)**
```javascript
/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
 Selecting DOM based on the Parent - Child relationship
====================================================
*/

// Menseleksi element <body>
// Selects the <body> element
var body = document.body;

// Mendapatkan element children dari <body>
// Getting element children from <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
// Displays the DOM that is the child of <body> in the form of an array
console.log(bodyChilds);

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">

var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan element children dari <div id="contoh-div-1"> dalam bentuk array
// get the children element of <div id = "example-div-1"> in the form of an array
var contohDiv1Childs = contohDiv1.children;

// Mendapatkan child pertama dari <div id="contoh-div-1">
// get the first child from <div id = "example-div-1">
var contohDiv1FirstChild = contohDiv1Childs[0];
console.log(contohDiv1FirstChild); // <p id="contoh-p-1">...</p>

// Note: Walaupun children mungkin hanya 1 element, tetap tertampung dalam array!
// Note: Even though children may have only one element, they are still contained in an array!

// Menseleksi element <div id="contoh-div-2">
// Select element <div id = "example-div-2">
var contohDiv2 = document.getElementById('contoh-div-2');

// Mendapatkan element children dari <div id="contoh-div-2"> dalam bentuk array
// get the children element of <div id = "example-div-2"> in the form of an array
var contohDiv2Childs = contohDiv2.children;

for(var n = 0; n < contohDiv2Childs.length; n++) {
  var contohDiv2NthChild = contohDiv2Childs[n];
  console.log(contohDiv2NthChild);
}
```

Kamu berhasil mendapatkan seluruh children dari `<div id="contoh-div-2">` dengan looping!

Dari awal kita mencoba mengakses children dari parent nya. Bagaimana dengan mengakses parent melalui child nya? tentu bisa!


You managed to get all the children from `<div id =" example-div-2 ">` by looping!

From the start we tried to access children from their parents. How about accessing the parent through its child? certainly can!

**dom-transverse-1-intro.js (part 4)**
```javascript
/*
====================================================
 Menseleksi DOM berdasarkan hubungan Parent - Child
 Selecting DOM based on the Parent - Child relationship
====================================================
*/

// Menseleksi element <body>
// Selects the <body> element
var body = document.body;

// Mendapatkan element children dari <body>
// Getting element children from <body>
var bodyChilds = body.children;

// Menampilkan DOM yang menjadi child dari <body> dalam bentuk array
// Displays the DOM that is the child of <body> in the form of an array
console.log(bodyChilds);

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan element children dari <div id="contoh-div-1"> dalam bentuk array
// get the children element of <div id = "example-div-1"> in the form of an array
var contohDiv1Childs = contohDiv1.children;

// Mendapatkan child pertama dari <div id="contoh-div-1">
// get the first child from <div id = "example-div-1">
var contohDiv1FirstChild = contohDiv1Childs[0];
console.log(contohDiv1FirstChild); // <p id="contoh-p-1">...</p>

// Note: Walaupun children mungkin hanya 1 element, tetap tertampung dalam array!

// Note: Even though children may have only one element, they are still contained in an array!

// Menseleksi element <div id="contoh-div-2">
// Select element <div id = "example-div-2">
var contohDiv2 = document.getElementById('contoh-div-2');

// Mendapatkan element children dari <div id="contoh-div-2"> dalam bentuk array
// get the children element of <div id = "example-div-2"> in the form of an array
var contohDiv2Childs = contohDiv2.children;

for(var n = 0; n < contohDiv2Childs.length; n++) {
  var contohDiv2NthChild = contohDiv2Childs[n];
  console.log(contohDiv2NthChild);
}

// Menseleksi element <p id="contoh-p-1">
// Select element <div id = "example-div-2">

var contohP1 = document.getElementById('contoh-p-1');
console.log(contohP1);

var contohP1Parent = contohP1.parentNode;
console.log(contohP1Parent); // <div id="contoh-div-1">
```

Selamat! Kamu telah berhasil mengkases parent -> child dan sebaliknya, child -> parent. Kamu mulai dapat memahami cara kerja penjelajahan DOM! Saatnya kita lanjut ke relasi selanjutnya, yaitu siblings!


Congratulations! You have successfully accessed parent -> child and vice versa, child -> parent. You can begin to understand how DOM browsing works! Now is the time for us to move on to our next relationship, siblings!

#### 2.2 Siblings

Apabila sebelumnya kita mempelajari hubungan DOM sebagai parent dan child, sekarang kita akan membahas tentang hubungan antar sibling. Sibling, layaknya saudara kandung dalam analogi keluarga, merupakan DOM yang merupakan child dari parent yang sama.

Tetap menggunakan halaman HTML yang sama dengan script js yang berbeda, kita coba buat beberapa kode yang menunjukkan hubungan antar sibling.


If we previously studied DOM relations as parent and child, we will now discuss the relationship between sibling. Sibling, like siblings in a family analogy, is a DOM which is the child of the same parent.

Keep using the same HTML page with different js scripts, we try to make some code that shows the relationship between sibling.

**dom-transverse-2-siblings.js (part 1)**
```javascript
/*
=============================================
 Menseleksi DOM berdasarkan hubungan Sibling
 Select DOM based on Sibling relationships
=============================================
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">

var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan sibling setelah <div id="contoh-div-1">
// Get sibling after <div id = "example-div-1">
var contohDiv1NextSibling = contohDiv1.nextElementSibling;

console.log(contohDiv1NextSibling); // <div id="contoh-div-2">...</div>
```

dengan menggunakan `.nextElementSibling`, kita bisa mendapatkan sibling yang berada setelah DOM yang kita seleksi. Selanjutnya, kita akan mencoba mendapatkan sibling yang berada sebelum DOM yang kita seleksi.


by using `.nextElementSibling`, we can get sibling that is after the DOM we selected. Next, we will try to get sibling that is before the DOM we selected.

**dom-transverse-2-siblings.js (part 2)**
```javascript
/*
=============================================
 Menseleksi DOM berdasarkan hubungan Sibling
 Select DOM based on Sibling relationships
=============================================
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">

var contohDiv1 = document.getElementById('contoh-div-1');

// Mendapatkan sibling setelah <div id="contoh-div-1">
// Get sibling after <div id = "example-div-1">
var contohDiv1NextSibling = contohDiv1.nextElementSibling;

console.log(contohDiv1NextSibling); // <div id="contoh-div-2">...</div>

// Mendapatkan sibling sebelum <div id="contoh-div-1">
// get sibling before <div id = "example-div-1">
var contohDiv1PrevSibling = contohDiv1.previousElementSibling;

console.log(contohDiv1PrevSibling); // <h1></h1>
```

Itu saja yang penting mengenai siblings. Ingat, jika kamu mencoba mengakses sibling yang tidak ada, akan menghasilkan nilai `null`!


That's all that matters about siblings. Remember, if you try to access a sibling that doesn't exist, it will return a `null` value!

### 2.3 Menjelajah DOM lebih dalam

Sebelumnya, untuk mengakses child, parent, atau sibling kita masih mengakses element yang satu tingkat didalam, diluar, atau disebelahnya. Bagaimana jika kita ingin menjelajah element dengan tingkat yang lebih dalam? Kamu bisa menggunakan cara biasa, dengan mengakses element satu tingkat satu per satu, atau menelusurinya lebih dalam sekaligus, dengan selector beruntun atau disebut juga chaining selectors.

Previously, to access child, parent, or sibling we still access elements that are one level inside, outside, or next to them. What if we want to explore elements with a deeper level? You can use the usual method, by accessing elements one level at a time, or exploring them more deeply at once, with continuous selector or also called chaining selectors.


**dom-transverse-3-chaining-selectors.js (Part 1)**
```javascript
/*
============================
 Menseleksi DOM Lebih Dalam
 Selection DOM deeper
============================
*/

/*
1. Parent -> Child -> Child cara biasa
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
// Get <p id = "example-p-1"> inside <div id = "example-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
// Get <strong> inside <p id = "example-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);
```

Cara ini tentu paling mudah dibaca, namun seringkali kita membutuhkan cara yang lebih cepat dan praktis, yaitu menggunakan chaining selectors!


This method is certainly the easiest to read, but often we need a faster and more practical way, using chaining selectors!

**dom-transverse-3-chaining-selectors.js (Part 2)**
```javascript
/*
============================
 Menseleksi DOM Lebih Dalam
 Selection DOM deeper
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">

var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
// Get <p id = "example-p-1"> inside <div id = "example-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
// Get <strong> inside <p id = "example-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);

/*
2. Parent -> Child -> Child dengan Chaining Selector
*/

// Menggunakan chaining selector atau selektor beruntun.
// Using chaining selector or streak selector.
console.log(contohDiv1.children[0].children[0]);
```

Lebih praktis dan mudah kan? Sekarang bagaimana dengan relasi siblings?

More practical and easy right? Now what about the siblings relation?

**dom-transverse-3-chaining-selectors.js (Part 3)**
```javascript
/*
============================
 Menseleksi DOM Lebih Dalam
 Selection DOM deeper
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
// Get <p id = "example-p-1"> inside <div id = "example-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
// Get <strong> inside <p id = "example-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);

/*
2. Parent -> Child -> Child dengan Chaining Selector
*/

// Menggunakan chaining selector atau selektor beruntun.
// Using chaining selector or streak selector.
console.log(contohDiv1.children[0].children[0]);

/*
3. Element -> previous sibling -> previous sibling cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
// Select element <div id = "example-div-1">
contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <h1></h1> yang berada sebelum <div id="contoh-div-1">
// Get the <h1> </h1> that was before <div id = "example-div-1">
var h1Elem = contohDiv1.previousElementSibling;
console.log(h1Elem); // <h1></h1>

// Mendapatkan null, dengan mengakses previous sibling dari <h1></h1>

// Getting null, by accessing previous sibling from <h1> </h1>
var justNull = h1Elem.previousElementSibling;
console.log(justNull); // null
```

Lalu, lanjut dengan cara method selectors untuk siblings!

Then, proceed with the method selectors for siblings!

**dom-transverse-3-chaining-selectors.js (Part 4)**
```javascript
/*
============================
 Menseleksi DOM Lebih Dalam
============================
*/

/*
1. Parent -> Child -> Child cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
var contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <p id="contoh-p-1"> di dalam <div id="contoh-div-1">
var contohP1 = contohDiv1.children[0];
console.log(contohP1);

// Mendapatkan <strong> di dalam <p id="contoh-p-1">
var strongElem = contohP1.children[0];
console.log(strongElem);

/*
2. Parent -> Child -> Child dengan Chaining Selector
*/

// Menggunakan chaining selector atau selektor beruntun.
console.log(contohDiv1.children[0].children[0]);

/*
3. Element -> previous sibling -> previous sibling cara biasa
*/

// Menseleksi element <div id="contoh-div-1">
contohDiv1 = document.getElementById('contoh-div-1');
console.log(contohDiv1);

// Mendapatkan <h1></h1> yang berada sebelum <div id="contoh-div-1">
var h1Elem = contohDiv1.previousElementSibling;
console.log(h1Elem); // <h1></h1>

// Mendapatkan null, dengan mengakses previous sibling dari <h1></h1>
var justNull = h1Elem.previousElementSibling;
console.log(justNull); // null


/*
4. Element -> previous sibling -> previous sibling dengan chaining selector
*/

// Penggunaan chaining selector
console.log(contohDiv1.previousElementSibling.previousElementSibling); // null
```

Selamat, kamu telah mampu menjelajah DOM! Kamu bisa memanfaatkan ilmu ini untuk membuat aplikasi web yang sangat interaktif! :tada:


Congratulations, you have been able to explore the DOM! You can use this knowledge to create highly interactive web applications! : tada: