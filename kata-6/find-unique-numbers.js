// Write a function called findUnique which returns the only unique number from an array.
// All numbers in the unsorted array are present twice,
// except the one you have to find. The numbers are always valid integer
// values between 1 and 2147483647, so no need for type and error checking.
// The array contains at least one number and may contain millions of
// numbers. So make sure your solution is optimized for speed.

function findUnique(numbers) {
  var checker = [];
  for ( var x = numbers.length - 1; x >= 0; x -- ) {
    if (!checker.includes(numbers[x]) ) {
      checker.push(numbers[x]);
      numbers.splice(x, 1);
    }
  }

  return checker.filter( num => {
    return numbers.indexOf( num ) == -1;
  })[0]
}
