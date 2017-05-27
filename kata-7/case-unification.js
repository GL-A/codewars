Given an initial string s, switch case of the minimal possible
number of letters to make the whole string written
in the upper case or in the lower case.

function caseUnification(s) {
  //coding and coding..
  s = s.split('');
  console.log(s);
  var uppCase = 0;
  var lowCase = 0;

  s.forEach( letter => {
      if( letter === letter.toUpperCase() ) {
        uppCase ++;
      } else {
        lowCase ++;
    }
  });

  return uppCase >= lowCase ? s.map( letter => {
    return letter.toUpperCase();
  }).join('') :  s.map( letter => {
    return letter.toLowerCase();
  }).join('');
}
