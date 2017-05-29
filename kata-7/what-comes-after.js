// You will be given two inputs: a string of words and
// a letter.For each string, return the alphabetic character
// after every instance of letter(case insensitive).
// If there is a number, punctuation or underscore following
// the letter, it should not be returned.
function comes_after(str,l) {
  var indexOfR = [];
  l = l.toLowerCase();
  str = str.split('');
  str.forEach( (letter, index) => {
    if ( letter === l || letter === l.toUpperCase() ) {
      indexOfR.push(index);
    }
  });
  indexOfR = indexOfR.map( convert => {
    if ( str[convert + 1].match(/[a-z,A-Z]/i) ){
      return str[convert + 1]
    }
  })
  return indexOfR.join('');
}

// INCOMPLETE 
