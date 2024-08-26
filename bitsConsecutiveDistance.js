function bitsDistance(numbers, k) {
  let distance = [];
  for (let num of numbers) {
    let binary = (num >>> 0).toString(2);
    let maxDist = -1;
    let count = 0;
    let currentBit = -1;
    for (let bit of binary) {
      if (currentBit === -1) {
        currentBit = bit;
      } else if (currentBit !== bit) {
        count++;
      } else {
        if (count > maxDist) {
          maxDist = count;
        }
        count = 0;
        currentBit = bit;
      }
    }
    distance.push([maxDist, num]);
  }
  distance.sort((a, b) => {
    if (a[0] === b[0]) {
      return b[1] - a[1];
    }
    return b[0] - a[0];
  });
  return distance;
}

console.log(bitsDistance([1036, 12, 4, 5, 10, 8], 3));
