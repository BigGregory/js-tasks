function flattenArray(arr) {
  const result = [];

  arr.forEach((item) => {
    if (Array.isArray(item)) {
      result.push(...flattenArray(item));
    } else {
      result.push(item);
    }
  });

  return result;
}

const testArr = [1, [2], [3, [4]], [5]];

console.log(flattenArray(testArr));
