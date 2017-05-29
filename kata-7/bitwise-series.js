// If the numbers is even return true. If it's odd, return false.
// Oh yeah... the following symbols/commands have been disabled!

var isEven = function (n) {

  if(n & 1)
    {
        return false;
    }
  else
    {
        return true;
    }

}

solution I like:
var isEven = function (n) { //if n is even return true, otherwise, return false
  return (n & 1) == 0
}
