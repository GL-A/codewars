// As a step towards achieving this; you have decided to
// create a function that will produce a multi-dimensional
// array out of the hit count value. Each inner dimension of the
// array represents an individual digit in the hit count, and will include
// all numbers that come before it, going back to 0.
function counterEffect(hitCount) {
 //do your thing
 hitCount = hitCount.split('');
  hitCount = hitCount.map( num => {
    num = parseInt(num, 10);
    numArr = [];
    for( var x = 0; x <= num; x++ ) {
      numArr.push(x);
    }
    return numArr;
 })
 return hitCount;
}
