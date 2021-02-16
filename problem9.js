function findRandomElement(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

// O(1) because it is looking for a specific index in an array.