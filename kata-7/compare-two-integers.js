// Compare two integers given as strings. 'less' if integer a < integer b,
// 'equal' if integer a = integer b, and 'greater' if integer a > integer b, where
// integer x is equal to integer represented by the string x.
function compareIntegers(a, b) {
  return a.length > b.length ? 'greater' : a.length < b.length ? 'less': a < b ? 'less': a > b ? "greater":'equal'
}
