const arr = [1, 5, 9, 15, 28, 33, 55, 78, 99];

/**
 * 返回最接近输入值的数字，如果有多个，返回最大的那个
 * @param {number} n
 * @return {number}
 */
function findNext(n, arr) {
  const clone = [...arr, n];
  clone.sort((a, b) => a - b);
  let left = 0, right = clone.length - 1;
  let i;
  while (left <= right) {
    i = Math.floor((left + right) / 2);
    if (clone[i] < n) {
      left = i + 1;
    } else if (clone[i] > n) {
      right = i - 1;
    } else {
      break;
    }
  }
  if (i === 0) {
    return clone[1];
  }
  if (i === clone.length - 1) {
    return clone[i - 1];
  }
  const leftVal = n - clone[i - 1];
  const rightVal = clone[i + 1] - n;
  return leftVal < rightVal ? clone[i - 1] : clone[i + 1];
}

console.log(findNext(44, arr)); // 55