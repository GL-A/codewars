Your task is to write function findSum.
Upto and including n, this function will
return the sum of all multiples of 3 and 5.

function findSum(n) {
  var sumArr = [];
  
  for ( var x = 0; x <= n; x ++ ) {

  if ( x % 3 === 0 || x % 5 === 0 ) {
      sumArr.push( x );
    }
  }

  return sumArr.reduce( ( a, b ) => a + b, 0 );
}
