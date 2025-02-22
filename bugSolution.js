function foo(a, b) {
  // Handle null values by assigning a default value (e.g., 0)
  a = a === null ? 0 : a;
  b = b === null ? 0 : b;

  return a + b;
}

console.log(foo(null, 1)); // Output: 1
console.log(foo(1, null)); // Output: 1
console.log(foo(null, null)); // Output: 0
console.log(foo(1, 2)); // Output: 3

//Alternative Solution: Throw an error for null inputs
function foo2(a, b) {
  if (a === null || b === null) {
    throw new Error('Null values are not allowed.');
  }
  return a + b;
}

//console.log(foo2(null,1)); //Throws an Error
console.log(foo2(1,2)); //Output: 3