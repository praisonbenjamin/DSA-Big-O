function isWhat(n) {
  if (n < 2 || n % 1 !== 0) {
    return false;
  }
  for (let i = 2; i < n; ++i) {
    if (n % i === 0) return false;
  }
  return true;
}


// This function determines if the input number is a prime number. It is O(n) because the number of operations and iterations has a direct linear relationship with the size of the input number, since the validation always starts at 2

// The Big-O is probably O(log(n))