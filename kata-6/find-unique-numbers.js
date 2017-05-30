// Write a function called findUnique which returns the only unique number from an array.
// All numbers in the unsorted array are present twice,
// except the one you have to find. The numbers are always valid integer
// values between 1 and 2147483647, so no need for type and error checking.
// The array contains at least one number and may contain millions of
// numbers. So make sure your solution is optimized for speed.

function findUnique(numbers) {
  numbers = numbers.sort();
  for ( var x = 0; x < numbers.length; x ++ ) {
    if ( numbers[x] !== numbers[x + 1] && numbers[x] !== numbers[x - 1] ) {
      return numbers[x];
    }
  }
}
