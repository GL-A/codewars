// Find the number with the most digits.
// If two numbers in the argument array
// have the same number of digits,
// return the first one in the array.
function findLongest(array){
  // code here
  var answer = '';
  array.forEach( num => {
    var numLength = num.toString().split('').length;
    if( answer.toString().split('').length < numLength ) {
       answer = num;
    }
  })
  return answer;
}
