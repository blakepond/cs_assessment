//add to zero
let arr = [1,2];
addZero = false;

for (i = 0; i < arr.length; i++) {
  for (n = i+1; n < arr.length; n++) {
    // console.log(`${arr[n]} + ${arr[i]} = ${arr[n] + arr[i]}`)
    if(arr[n] + arr[i] === 0) {
      addZero = true;
    }
  };
};
console.log(addZero);
//time complexity O(2^n)

// unique characters
function isUnique(str) {
    return new Set(str).size == str.length
  }
  console.log(isUnique("monday"))
  //time complexity O(n)

//pangram
function isPangram(string) {
let strArr = string.toLowerCase();
let alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');

    for (let i = 0; i < alphabet.length; i++) {
        if (strArr.indexOf(alphabet[i]) < 0) {
            return false;
        } else {
             return true;
        }
    }
}
console.log(isPangram("The quick brown fox jumps over the lazy dog"))
//time complexity O(n) 

function findLongestWord(arr){
    let word = ""

    for (let i = 0; i < arr.length; i++) {
          if (word.length < arr[i].length) {
            word = arr[i];
          }
        }
        return word.length
}
console.log(findLongestWord(["hi", "hello","extradition"]))
// time complexity O(n)
