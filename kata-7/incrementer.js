// Given an input of an array of digits num, return the array
// with each digit incremented by its position in the array.
// For example, the first digit will be incremented by 1, the second digit by 2 etc. Make sure
// to start counting your positions from 1 and not 0.
// Your result can only contain single digit numbers, so if adding
// a digit with it's position gives you a multiple-digit number, only the last digit of
// the number should be returned

function incrementer(num) {
  //code goes here
  var incrementNum = 0;
  var incrementBy = 1;

  num = num.map( n => {

    incrementNum ++;
    return n + incrementNum;
  });
  return num.map( n => {
    if ( n >= 10 ) {
      n = n.toString().split('');
      n = Number(n[ n.length - 1 ]);
    }
    return n;
  });
}

solution I liked:
function incrementer(num) {
  return num.map((n,i)=>(n+i+1)%10);
}
