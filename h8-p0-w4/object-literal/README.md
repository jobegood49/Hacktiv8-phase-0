# Logic Challenge - Change Me!

## Problem

Diberikan sebuah function changeMe(arr) yang menerima satu parameter berupa array multidimensi dimana array tersebut berisi value (pasti berurut dari kiri ke kanan) First Name, Last Name, Gender dan Birth Year .
Fungsi ini akan menampilkan object literal yang memiliki property firstName, lastName, gender dan age. Nilai age didapatkan dari tahun sekarang dikurang tahun lahir. Jika tahun lahir tidak diisi atau tahun lahir lebih besar dibandingkan tahun sekarang maka age akan berisi 'Invalid Birth Year'

Contoh jika arr inputan adalah [['Platinum', 'Fox', 'female', 1995], ['John', 'Doe', 'male', 2000]]
maka output:
1. Platinum Fox:
{ firstName: 'Platinum',
  lastName: 'Fox',
  gender: 'female',
  age: 23 }
2. John Doe:
{ firstName: 'John', lastName: 'Doe', gender: 'male', age: 18 }


## English


Bahasa                                    | English
------------                              | -------------
Dari                                      | From
Fungsi ini                                | This function
Yang memiliki property                    | Who owns property
Nilai age didapatkan                      | Age value is obtained
Dari tahun sekarang                       | From current year
Dikurang tahun lahir                      | Minus year of birth
Tidak diisi                               | Not filled
Atau                                      | Or
Tahun lahir lebih besar                   | Birth year is large
Dibandingkan tahun sekarang               | Compared to current year
maka age akan berisi 'Invalid Birth Year' | Then age will contain 'Invalid Birth Year'

## Code

```JavaScript
function changeMe(arr) {
  // you can only write your code here!
}

// TEST CASES
changeMe([['Christ', 'Evans', 'Male', 1982], ['Robert', 'Downey', 'Male']]); // 1. Christ Evans:
// { firstName: 'Christ',
//   lastName: 'Evans',
//   gender: 'Male',
//   age: 37 }
// 2. Robert Downey:
// { firstName: 'Robert',
//   lastName: 'Downey',
//   gender: 'Male',
//   age: 'Invalid Birth Year' }
changeMe([]); // ""
```
