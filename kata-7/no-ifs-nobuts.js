Write a function that accepts two parameters (a and b) and says whether
a is smaller than, bigger than, or equal to b. No ifs or ?;

var noIfsNoButs = function (a,b) {

  var greater = a > b;

  switch (greater){
    case true:
      return a + ' is greater than ' + b;
    case false:
      var less = a < b;
      switch(less) {
        case true:
          return a + ' is smaller than ' + b;
        case false:
          return  a + ' is equal to ' + b
      }
  }
}
solution I liked:
var noIfsNoButs = function (a,b) {
  switch (Math.sign(a-b)) {
    case 1: return `${a} is greater than ${b}`;
    case -1:return `${a} is smaller than ${b}`;
    case 0: return `${a} is equal to ${b}`;
  }
}
