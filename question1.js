/* --------- 找出数组中出现次数超过一半的数字 --------- */
/* 尽量不使用 JS 特有的语法糖，尽量不使用如 Array.sort 等语言特有的方法。*/

/**
 * @param {number[]} arr - 元素内容全部为自然数的数组
 * @return {number} - 返回数组中出现次数超过数组长度一半的自然数，如果没有则返回 -1 
 */
function findMoreThanHalf(arr) {
  const map = {};
  const halfLen = Math.floor(arr.length / 2);
  for (let i = 0; i < arr.length; i++) {
    const val = arr[i];
    if (!map[val]) {
      map[val] = 1;
    } else {
      map[val]++;
    }
    if (map[val] > halfLen) return val;
  }
  return -1;
}

// 测试用例
console.log(findMoreThanHalf([0,1,2,2])) // -1
console.log(findMoreThanHalf([0,1,2,2,2])) // 2