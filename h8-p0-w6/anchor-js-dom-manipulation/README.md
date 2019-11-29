#Manipulasi DOM Sederhana dengan JavaScript

Setelah mengetahui tentang DOM selection dan manipulation, kita akan coba berlatih tentang ini.


After learning about DOM selection and manipulation, we will try to practice this.


## Objectives

- Mengerti Tentang DOM
- Mengetahui Cara Menseleksi DOM
- Mengetahui Cara Memanipulasi DOM

- Understand About DOM
- Knowing How to Select DOM
- Knowing How to Manipulate the DOM

## Directions

- Buatlah suatu halaman HTML seperti berikut:
  
- Make an HTML page like this:

**index.html**
```html
<html>
  <head>
    <title>Tugas Anchor DOM!</title>
  </head>
  <body>
    <div id="container">
      <h1 id="fill-me"></h1>
      <p class="change-all-of-me"></p>
      <p class="change-all-of-me"></p>
      <p class="change-all-of-me"></p>
      <p class="change-all-of-me"></p>
      <h2>Change the Inside of H2!</h2>
    </div>
    <script src="script.js"></script>
  </body>
</html>
```

- Buatlah sebuah **script.js** yang berada relatif di sebelah index.html. Dengan memanfaatkan `getElementById()`, `getElementsByClassName()`, `getElementsByTagName()`, `innerHTML()`, dan teknik looping, buat perubahan berikut di file **script.js** untuk memanipulasi halaman HTML kita:


- Make a ** script.js ** relative next to index.html. By utilizing `getElementById ()`, `getElementsByClassName ()`, `getElementsByTagName ()`, `innerHTML ()`, and looping techniques, make the following changes in the ** script.js ** file to manipulate our HTML pages:

  - `<h1 id="fill-me"></h1>` menjadi `<h1 id="fill-me">HALO!</h1>`
  - `<p className="change-all-of-me"></p>` menjadi `<p className="change-all-of-me">HALO JUGA!</p>`
  - `<h2>Change the Inside of H2!</h2>` menjadi `<h2>Apa Kabar!</h2>`


## English

Bahasa                                    | English
------------                              | -------------
Setelah mengetahui tentang                | after knowing about
Bengan melakukan perkalian                | By doing multiplication
Menjadi satu digit                        | Into one digit
Bila masih lebih                          | When still more
Dari satu digit                           | From one digit
Terus lakukan perkalian setiap digit-nya  | Then keep multiplying each digit
Untuk pada akhirnya                       | Until finally
Mendapatkan satu digit                    | Get one digit
Wajib menggunakan                         | Required to use recursif