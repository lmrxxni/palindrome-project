// javaScript. 
// palindrome learning part. 
// lmrxxni.
function isPalindrome(str)
{
  const reversed = str.split('').reverse().join('');
  return str === reversed;
}
console.log(isPalindrome("follow"));    
console.log(isPalindrome("dad"));    
console.log(isPalindrome("mom"));
console.log(isPalindrome("project"));
console.log(isPalindrome("wow"));
console.log(isPalindrome("JavaScript"));

// Output ....

//false.
//true.
//true.
//false.
//true.
//false.