function foo(a, b) {
  if (a === null || b === null) {
    return null; //This is where the bug is, it doesn't handle undefined values
  }
  return a + b;
}

console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // null
console.log(foo(undefined, 2)); // NaN