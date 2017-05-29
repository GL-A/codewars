Check to see if a string has the same amount of 'x's and 'o's.
The method must return a boolean and be
case insensitive. The string can contains any char.

function XO(str) {
    //code here
    str = str.toLowerCase().split('');
    var trueOrFalse = 0;
    str.forEach( letter => {
      if ( letter === 'x' ) {
        trueOrFalse ++;
      } else if ( letter === 'o' ) {
        trueOrFalse --;
      }
    })
    return trueOrFalse === 0 ? true : false;
}

// solution I liked:
// function XO(str) {
//   let x = str.match(/x/gi);
//   let o = str.match(/o/gi);
//   return (x && x.length) === (o && o.length);
// }
