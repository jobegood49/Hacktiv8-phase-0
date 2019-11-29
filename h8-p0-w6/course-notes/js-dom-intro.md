# Introduction to Document Object Model (DOM)

## Objectives

Dalam mengembangkan web, kita harus menyadari bahwa kita sekaligus membuat Document Object Model (DOM) yang tersusun dalam dokumen HTML. Dengan pengetahuan DOM, kita bisa secara lebih lengkap mengetahui dan mampu untuk membuat interaksi pada halaman web menggunakan JavaScript.

## Objectives-English


In developing the web, we must realize that we also create a Document Object Model (DOM) arranged in HTML documents. With DOM knowledge, we can more fully know and be able to make interactions on web pages using JavaScript.

**DOM**

- ▢ Memahami Document Object Model (DOM)
- ▢ Memahami DOM selector
- ▢ memanipulasi isi HTML dari DOM yang telah di select

**DOM-English**
- ▢ Understand Document Object Model (DOM)
- ▢ Understand DOM selector
- ▢ manipulates the HTML content of the selected DOM

## Learnings

### 1. Mengenal DOM

Document Object Model (DOM) merupakan antarmuka pemrograman untuk dokumen HTML dan XML (juga SVG) terkait. Dengan DOM, kita bisa mengetahui dan mengatur struktur representasi dokumen melalui program terutama JavaScript. Program dapat mengolah struktur, style, dan isi dari dokumen tersebut. Maka dari itu DOM membutuhkan dan menghubungkan antara dokumen dan kode pemrograman.

The Document Object Model (DOM) is a programming interface for HTML and XML (also SVG)related documents. With DOM, we can find out and manage the structure of document representation through programs, especially JavaScript. The program can process the structure, style, and contents of the document. Therefore the DOM requires and connects between documents and programming code.

Seperti yang telah diketahui sebelumnya bahwa hampir semua hal di JavaScript adalah objek, maka begitupun pada HTML yang kita ketahui melalui DOM. Kombinasi interaksi antarmuka antara DOM dan JavaScript ini juga dapat dilakukan karena adanya Application Programming Interface (API). API memungkinkan sebuah program berkomunikasi dengan program yang lain dengan cara tertentu.
Dengan API, bahasa selain JavaScript seperti Python dan Ruby jadi bisa juga mengakses dokumen HTML dan XML.

As you know before, almost everything in JavaScript is an object, so is the HTML we know through DOM. This combination of interface interaction between DOM and JavaScript can also be done because of the Application Programming Interface (API). API allows a program to communicate with other programs in a certain way.
With APIs, languages ​​other than JavaScript such as Python and Ruby can also access HTML and XML documents.

DOM API di HTML umumnya adalah untuk node ataupun objek `element`, `document`, dan `window`. Setiap hal tersebut memiliki berbagai property (nilai) dan method (aksi), bahkan bisa juga dipasang sebuah penangan kejadian (event handler) sehingga jika ada kejadian tertentu dilakukan suatu statement akan dijalankan. Urutan atau strukturnya diatur secara hierarkis seperti pohon berikut.


DOM APIs in HTML are generally for nodes or `element`,` document`, and `window` objects. Each of these has various properties (values) and methods (actions), even an event handler can also be installed so that if there is a specific event a statement will be executed. The order or structure is arranged hierarchically like the following tree.

- `window`: `frame`, `parent`, `self`, `top`
  - `history`
  - `location`
  - `document`
    - `element`: `body`, `h1`, `p`, `button`, dll

![Visualisasi DOM Tree](assets/html-dom.png)

Hubungan antar berbagai "object" tersebut atau yang akan kita sebut seterusnya dengan "node" adalah antara _parent_ untuk yang di atasnya, _children_ untuk yang di bawahnya, dan _sibling_ yang hierarkinya sama.


The relationship between these "objects" or what we will call "nodes" is between _parent_ above, _children_ below, and _sibling_ in the same hierarchy.

### 2. Seleksi DOM dari HTML

**Mulai dari bagian ini, snippet atau potongan kode ini akan berlanjut/bersambung.**
Sebelum mencoba melakukan seleksi dan manipulasi, kita coba asumsikan penggunaan
Kita bisa melakukan seleksi terhadap DOM dengan mengunakan beberapa sintaks berikut:


** Starting from this section, this snippet will be continued / continued. **
Before trying to make selections and manipulations, we try to assume usage
We can select DOM by using the following syntax:

**js-simple-dom.html**
```html
<html>
  <head>
    <title>Contoh Webpage Standard</title>
  </head>
  <body>
    <div id="page-title">Sample Page Title</div>
    <h1>Test Sample Heading</h1>
    <div class="page-box">Page Box 1</div>
    <div class="page-box">Page Box 2</div>
    <div class="page-box">Page Box 3</div>
    <script src="js-simple-dom-script.js"></script>
  </body>
</html>
```

**js-simple-dom-script.js (part 1)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

// Selects DOM based on Id element and holds it in the variable. The contents are HTML element objects

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.


// Selects the DOM based on the name of the class element and holds it in the variable. The contents are arrays of HTML element objects, even though <h1> there is only 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element


// Selects the DOM based on the <h1> tag and holds it in the variable. The contents are arrays of HTML element objects
```

Untuk memberikan gambaran apa yang didapatkan dan ditampung oleh variabel tersebut, kamu dapat menggunakan `console.log()` di variabel tersebut. variabel pageTitleElement akan menampung object HTML element, sedangkan variabel pageBoxElements akan menampung array dari tiga object HTML element.


To give an idea of ​​what the variable gets and holds, you can use `console.log ()` in that variable. the pageTitleElement variable will hold HTML element objects, while the pageBoxElements variable will hold arrays of three HTML element objects.

### 3. Mengakses isi HTML dari DOM

Kita bisa mengakses isi HTML dari DOM yang telah kita seleksi dengan sintaks berikut:


We can access the HTML contents of the DOM that we have selected with the following syntax:
**js-simple-dom-script.js (part 2)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element


// Selects DOM based on Id element and holds it in the variable. The contents are HTML element objects

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.


// Selects the DOM based on the name of the class element and holds it in the variable. The contents are arrays of HTML element objects, even though <h1> there is only 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element


// Selects the DOM based on the <h1> tag and holds it in the variable. The contents are arrays of HTML element objects

var pageTitleElementsContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementsContent);
// isi <div id="page-title"> adalah Sample Page Title

var pageBoxElementsContent = pageBoxElements.innerHTML;
console.log('isi <div class="page-box"> :' + pageBoxElementsContent);
// isi <div class="page-box"> adalah undefined!
```

isi `<div class="page-box">` adalah `undefined`! Kenapa? pageBoxElements adalah array, dan saat kita melakukan `innerHTML` ke array, maka hasilnya adalah undefined!


the contents of `<div class =" page-box ">` are `undefined`! Why? pageBoxElements is an array, and when we do `innerHTML` to an array, the result is undefined!

Kita bisa melakukan perubahan DOM dengan JavaScript seperti berikut:


We can make DOM changes with JavaScript as follows:

**js-simple-dom-script.js (part 3)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element


// Selects DOM based on Id element and holds it in the variable. The contents are HTML element objects

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.


// Selects the DOM based on the name of the class element and holds it in the variable. The contents are arrays of HTML element objects, even though <h1> there is only 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element


// Selects the DOM based on the <h1> tag and holds it in the variable. The contents are arrays of HTML element objects

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Mengambil isi elemen pageBoxElements yang pertama, yaitu index ke 0


// Retrieve the contents of the first pageBoxElements element, i.e. index 0

var firstPageBoxElement         = pageBoxElements[0];
var firstpageBoxElementContent  = firstPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang kedua, yaitu index ke 1
var secondPageBoxElement         = pageBoxElements[1];
var secondpageBoxElementContent  = secondPageBoxElement.innerHTML;

// Mengambil isi elemen pageBoxElements yang ketiga, yaitu index ke 2
var thirdPageBoxElement         = pageBoxElements[2];
var thirdpageBoxElementContent  = thirdPageBoxElement.innerHTML;

// Menampilkan isi elemen dengan console.log
console.log('isi <div class="page-box"> yang pertama:' + firstpageBoxElementContent);
console.log('isi <div class="page-box"> yang kedua:' + secondpageBoxElementContent);
console.log('isi <div class="page-box"> yang ketiga:' + thirdpageBoxElementContent);
```

Agar lebih efisien, kamu bisa mengaksesnya juga menggunakan looping!

**js-simple-dom-script.js (part 4)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Meloop array pageBoxElements
for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML;
  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}
```

### 3. Memanipulasi isi HTML dari DOM

Setelah kita dapat mengakses isi HTML dari sebuah DOM, kita juga dapat memanipulasi isinya. Cara manipulasinya serupa dengan mengakses, tapi kita menggunakan operator assignment `=`.


After we can access the HTML contents from a DOM, we can also manipulate the contents. The method of manipulation is similar to access, but we use the `=` operator assignment.

**js-simple-dom-script.js (part 5)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Meloop array pageBoxElements
for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML;
  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}

// Mengubah isi pageTitleElement
pageTitleElement.innerHTML = 'Updated Content of Page Title Element';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);
```

Kamu juga bisa mengisi innerHTML tidak hanya dengan teks, namun juga dengan element HTML.


You can also fill in innerHTML not only with text, but also with HTML elements.

**js-simple-dom-script.js (part 6)**
```javascript
var pageTitleElement = document.getElementById("page-title");
// Menyeleksi DOM berdasarkan Id element dan menampungnya ke dalam variabel. Isinya merupakan object HTML element

var pageBoxElements = document.getElementsByClassName("page-box");
// Menyeleksi DOM berdasarkan nama class element dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element, walau <h1> hanya ada 1.

var pageHeadings = document.getElementsByTagName("h1");
// Menyeleksi DOM berdasarkan tag <h1> dan menampungnya ke dalam variabel. Isinya merupakan array dari object HTML element

var pageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi <div id="page-title"> :' + pageTitleElementContent);
// isi <div id="page-title"> adalah Sample Page Title

// Meloop array pageBoxElements
for(var i = 0; i < pageBoxElements.length; i++) {
  var currentPageBoxElement         = pageBoxElements[i];
  var currentPageBoxElementContent  = currentPageBoxElement.innerHTML;
  console.log('isi <div class="page-box"> index ke ' + i + ': ' + currentPageBoxElementContent);
}

// Mengubah isi pageTitleElement dengan tag HTML
pageTitleElement.innerHTML = '<h2>Updated Content of Page Title Element</h2>';
var newPageTitleElementContent = pageTitleElement.innerHTML;
console.log('isi baru dari <div id="page-title"> :' + newPageTitleElementContent);
```

Kamu telah bisa menggunakan selector untuk memilih dan mengakses sebuah element HTML. Kamu juga telah bisa mengubah isi HTML dari element yang telah kamu pilih. Saatnya mulai latihan tentang selector dan askes nilai! :smile:


You can already use the selector to select and access an HTML element. You have also been able to change the HTML contents of the elements that you have selected. It's time to start training about selector and health insurance grades! : smile: