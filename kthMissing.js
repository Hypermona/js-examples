//Q > find kth smallest missing element in an unordered list
// input [2,4,5,6,7] k=3

function smallestMissisngK(arr, k) {
  let set = new Set(arr);
  let max = Number.NEGATIVE_INFINITY;
  let min = Number.POSITIVE_INFINITY;
  for (let i of arr) {
    if (i < min) {
      min = i;
    }
    if (i > max) {
      max = i;
    }
  }

  let count = 0;
  for (let i = min; i <= arr.length + k; i++) {
    if (!set.has(i)) {
      count++;
    }
    if (count === k) {
      return i;
    }
  }
}
console.time("hey");
console.log(smallestMissisngK([222, 4, 9999999999, 5, 0, 345], 5));
console.timeEnd("hey");
