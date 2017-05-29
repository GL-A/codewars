Given array of integers sequence and some integer fixedElement,
output the number of even values in sequence before the first
occurrence of fixedElement or -1 if and only if fixedElement is not contained in sequence.

function evenNumbersBeforeFixed(sequence, fixedElement) {
  //coding and coding..
  let evensBeforeFixed = 0;

  if( sequence.includes( fixedElement ) ) {

    for ( var x = 0; x < sequence.length; x ++ ) {
      if ( sequence[x] === fixedElement ) {
        return evensBeforeFixed;
      }

      else if( sequence[x] % 2 === 0 ) {
        evensBeforeFixed ++;
      }
    }

  } else {

    return -1;

  }

}

// solution i liked
// function evenNumbersBeforeFixed(sequence, fixedElement) {
//   if(sequence.indexOf(fixedElement) == 0) return 0;
//   let s = sequence.splice(0, sequence.indexOf(fixedElement));
//   if(s.length == 0)return -1;
//   return s.filter((a)=>(a%2 == 0)).length;
// }
