// Exercise_1
let x = 32243
console.log(String(x).split('').reverse().join(''))

// Exercise_2
function palidrome(strg) {
  let matching = /[\w]/g
  let newWord
  let rev
  let wording = strg.match(matching)
  newWord = wording.join('').toLowerCase()
  rev = wording.reverse().join('').toLowerCase()
  if (rev === newWord) {
    return 'is palindrome'
  }
  return 'is not palindrome'
}
console.log(palidrome('madam'))

//Exercise_3
let word = 'dog'
let w = word.split('')
let arr = [word]
for (let i = 1; i < w.length; i++) {
  arr.push(w.slice(0, i).join(''))
  arr.push(word.substr(i))
}
console.log(arr)

//Exercise_4
function order(str) {
  match = /[\w]/g
  arr = str.match(match)
  return arr.sort().join('')
}
console.log(order('webmaster'))

//Exercise_5
function title(str) {
  let arr = str.split(' ')
  let arr2 = []
  for (let i = 0; i < arr.length; i++) {
    arr2.push(arr[i][0].toUpperCase().concat(arr[i].slice(1)))
  }
  return arr2.join(' ')
}
console.log(title('the quick brown fox'))

//Exercise_6
function longest(str) {
  let arr = str.split(' ')
  let max = 0
  let maxima
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length
      maxima = arr[i]
    }
  }
  return maxima
}
console.log(longest('Web Development Tutorial'))

//Exercise_7
function vowels(str) {
  let vowel = /[aieou]/g
  let arr = str.match(vowel)
  return arr.length
}
console.log(vowels('The quick brown fox'))

//Exercise_8
function prime(numb) {
  for (let i = 2; i < numb; i++) {
    if (numb % i === 0) {
      return 'is not prime'
    }
  }
  return 'is prime'
}
console.log(prime(127))

//Exercise_9
function type(args) {
  return typeof (args)
}
console.log(type([false]))

//Exercise_10
function matrix(n) {
  let i;
  let j;
  for (i = 0; i < n; i++) {
    for (j = 0; j < n; j++) {
      if (i === j) {
        console.log(' 1 ');
      }
      else {
        console.log(' 0 ');
      }
    }
    console.log('-------');
  }
}
matrix(3);

//Exercise_11
function numbOrd(arr) {
  let newArr = arr.sort((a, b) => a - b)
  let result = []
  let seconMax = newArr[arr.length - 2]
  let seconMin = newArr[1]
  result.push(seconMin, seconMax)
  return result.join()
}
console.log(numbOrd([5, 4, 3, 2, 1]))

//Exercise_12
function is_perfect(number) {
  let temp = 0;
  for (let i = 1; i <= number / 2; i++) {
    if (number % i === 0) {
      temp += i;
    }
  }
  if (temp === number && temp !== 0) {
    console.log("It is a perfect number.");
  }
  else {
    console.log("It is not a perfect number.");
  }
}
is_perfect(7);

//Exercise_13
function factors(num) {
  let arr = []
  for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
      arr.push(i)
    }
  }
  return arr
}
console.log(factors(17))

//Exercise_14
function amountTocoins(amount, coins) {
  if (amount === 0) {
    return [];
  }
  else {
    if (amount >= coins[0]) {
      change = (amount - coins[0]);
      return [coins[0]].concat(amountTocoins(change, coins));
    }
    else {
      coins.shift();
      return amountTocoins(amount, coins);
    }
  }
}
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

//Exercise_15
function expo(base, expo) {
  return Math.pow(base, expo)
}
console.log(expo(4, 2))

//Exercise_16
function uniq(str) {
  let letter = str.split('')
  let mySet = new Set(letter)
  uniqWords = Array.from(mySet)
  return uniqWords.join('')
}
console.log(uniq("thequickbrownfoxjumpsoverthelazydog"))

//Exercise_17
function count(str) {
  string = str.match(/\S/g)
  return string.reduce((occ, letter) => {
    if (occ[letter] > 0) {
      occ[letter] = occ[letter] + 1;
    } else {
      occ[letter] = 1;
    }
    return occ;
  }, {});
}
console.log(count("The quick brown fox jumps over the lazy dog"));

//Exercise_18
function binarySearch(arr, number) {
  while (arr.length > 1) {
    if (arr.indexOf(number) === -1) {
      console.log(number, " is not in the array")
      break
    }
    else if (number >= arr[Math.ceil(arr.length / 2)]) {
      arr = arr.splice(Math.ceil(arr.length / 2))
      console.log(arr)
    }
    else if (number < arr[Math.ceil(arr.length / 2)]) {
      arr = arr.splice(0, Math.ceil(arr.length / 2))
      console.log(arr)
    }
  }
}
binarySearch([1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23], 6)

//Exercise_19
function largerNumbers(arr, numb) {
  let newArr = []
  for (let i = 0; i < arr.length; i++) {
    if (numb < arr[i]) {
      newArr.push(arr[i])
    }
  }
  return newArr
}
console.log(largerNumbers([12, 4, 6, 4, 8, 1], 4))

//Exercise_20
function generatorOfID(length) {
  let characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789"
  chars = characters.split('')
  let string = ''
  for (let i = 0; i < length; i++) {
    string += chars[Math.floor(Math.random() * chars.length)]
  }
  return string
}
console.log(generatorOfID(5))

//Exercise_21
const combinations = arr => arr.reduce((acc, item) => {
  return acc.concat(acc.map(x => [...x, item]));
}, [[]]);
console.log(combinations([1, 2, 3]).filter(a => a.length > 1));

//Exercise_22
function counting(string, l) {
  let count = 0
  let str = string.split('')
  for (let i = 0; i < str.length; i++) {
    if (str[i] === l) {
      count += 1
    }
  }
  return count
}
console.log(counting('microsoft.com', 'o'))

//Exercise_23
function firstUniq(string) {
  let str = string.split('')
  let count = 0
  let character
  for (let i = 0; i < str.length; i++) {
    count = 0
    for (let j = 0; j < str.length; j++) {
      if (str[i] === str[j]) {
        count += 1
      }
    }
    if (count < 2) {
      character = str[i]
      break
    }
  }
  console.log(character)
}
firstUniq('abacddbec')

//Exercise_24
function bubbleSort(arr) {
  return arr.sort((a, b) => b - a)
}
console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]))

//Exercise_25
function longName(arr) {
  let max = 0
  let val
  for (let i = 0; i < arr.length; i++) {
    if (arr[i].length > max) {
      max = arr[i].length
      val = arr[i]
    }
  }
  return val
}
console.log(longName(["Australia", "Germany", "United States of America"]))

//Exercise_26
function subString(str) {
  let string = "";
  let sbs = "";
  let namestring = str.split("");
  for (j = 0; j < namestring.length; j++) {
    for (i = j; i < namestring.length; i++) {
      if (string.includes(namestring[i]))
        break;
      else
        string += namestring[i];
    }
    if (sbs.length < string.length)
      sbs = string;
    string = "";
  }
  return sbs;
}
console.log(subString("example.com"));

//Exercise_27
function is_Palindrome(str1) {
  let rev = str1.split("").reverse().join("");
  return str1 == rev;
}
function longest_palindrome(str1) {
  let max_length = 0,
    maxp = '';

  for (let i = 0; i < str1.length; i++) {
    let subs = str1.substr(i, str1.length);

    for (let j = subs.length; j >= 0; j--) {
      let sub_subs_str = subs.substr(0, j);
      if (sub_subs_str.length <= 1)
        continue;

      if (is_Palindrome(sub_subs_str)) {
        if (sub_subs_str.length > max_length) {
          max_length = sub_subs_str.length;
          maxp = sub_subs_str;
        }
      }
    }
  }

  return maxp;
}
console.log(longest_palindrome("bananas"));


//Exercise_28
function func1(callback) {
  callback()
}
function func2() {
  console.log('Hey There!')
}
func1(func2)

//Exercise_29
function sampleFunction() {
  return sampleFunction.name
}
console.log(sampleFunction())