// Given a set of numbers, return the additive inverse of
// each. Each positive becomes negatives, and the negatives
// become positives.

// function invert(array) {
//    return array.map((num)=>{
//      if(num > 0){
//        return num * -1;
//      }
//      if(num < 0 ){
//        return num * -1;
//      } else {
//        return -num;
//      }
//      return num + num;
//    });
// }
function invert(array) {
  return array.map(x => x === 0 ? x : -x);
}
invert([1,2,3,4,5]);// [-1,-2,-3,-4,-5])
