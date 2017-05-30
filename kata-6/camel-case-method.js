// Write simple .camelcase method (camel_case function in PHP) for strings.
// All words must have their first letter capitalized without spaces.

String.prototype.camelCase=function(){

  var strArr = Array.from(this).join('').split(' ');

  return strArr.map( word => {
    var uppCase = word.charAt(0).toUpperCase();
    var replaced = word.charAt(0);
    word = word.replace( replaced, uppCase );
    return word;
  }).join('');
}
