Create a function, killcount, that accepts two arguments:
an array of array pairs (the conselor's name and intellengence - ["Chad", 2]) and
an integer representing Jason's intellegence.

function killcount(counselors, jason){
  var willDie = [];

  for ( var key in counselors ) {
    if ( counselors[key][1] < jason ) {
      willDie.push( counselors[key][0] );
    }
  }
  return willDie;
}
