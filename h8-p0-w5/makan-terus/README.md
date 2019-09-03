# Logic Challenge - Makan Terus (Rekursif)

## Problem

Seorang customer sedang makan di sebuah restaurant AYCE(All You Can Eat). Dia akan terus makan sampai waktu yang diberikan oleh restaurant tersebut habis. Setiap customer memesan/mengambil makanan dan memakan pesanannya maka waktu customer berkurang 15 menit. Begitu seterusnya sampai waktunya habis .Customer masih bisa memesan/mengambil makanan selama waktunya belum 0.

Diberikan sebuah function makanTerusRekursif(waktu) yang menerima satu parameter berupa waktu. Function akan memproses jika waktu masih ada. Function akan mengembalikan/me-return berapa kali seorang customer memesan/mengambil makanan dalam waktu yang diberikan. Wajib menggunakan rekursif.

Contoh:

45 => 3

100 => 7

10 => 1

## English


Bahasa                                    | English
------------                              | -------------
Seorang customer sedang makan             | A person is eating
Di sebuah restaurant                      | In a restaurant
Dia akan terus makan                      | She will keep eating
Sampai waktu                              | Until time
Tersebut habis                            | It is exhausted
Setiap customer memesan                   | Every customer orders
Maka waktu customer berkurang 15 menit    | Then time of customer is reduced by 15min
Pesanannya                                | Order
Kali seorang customer memesan             | How many times customer orders

## Code

```JavaScript
function makanTerusRekursif(waktu) {
  // you can only write your code here!
}

// TEST CASES
console.log(makanTerusRekursif(66)); // 5
console.log(makanTerusRekursif(100)); // 7
console.log(makanTerusRekursif(90)); // 6
console.log(makanTerusRekursif(10)); // 1
console.log(makanTerusRekursif(0)); // 0
```
