function isPalindrome(word) {
  // const word = 'bob'
  // const word = 'alien'
  let startWordArray = Array.from(word)
  // console.log(startWordArray)
  let reversedWordArray = startWordArray.reverse()
  // console.log(reversedWordArray)
  let reversedWord = reversedWordArray.join('')
  // console.log(reversedWord)
  const palindromeChecker = (word === reversedWord) ? true : false
  // console.log(palindromeChecker)
  return palindromeChecker
}

/* 
  Add your pseudocode here

  take word and use a method to reverse letters of word to create the reversedWord

  maybe:
  regex or reverse loop through word string and return reverse string
  do a while loop to go through a string and slice one letter at a time until all letters are done
  concact together 
  
  test if palindrome:
  if (word === reverse) {
    return true
  } else {
    false
  } <-- write as ternary
  let palindromeChecker = (word === reverse) ? 'true' : 'false'
*/

/*
  Add written explanation of your solution here
  see above ^^
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true")
  console.log("=>", isPalindrome("racecar"))

  console.log("")

  console.log("Expecting: false")
  console.log("=>", isPalindrome("robot"))
}

module.exports = isPalindrome
