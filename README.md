
## 前端笔试题

### 题目一：找出数组中出现次数超过一半的数字

```js
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
```

### 题目二：实现一个方法，拆解URL参数中queryString

```js
// 入参格式参考：
const url = 'http://sample.com/?a=1&b=2&c=xx&d#hash';
// 出参格式参考：
const result = { a: '1', b: '2', c: 'xx', d: '' };

/*拆解URL参数中queryString，返回一个 key - value 形式的 object*/
function querySearch(url) {
  const obj = {};
  const [, params] = url.split('?');
  if (!params) return obj;
  params.split('#')
    .shift()
    .split('&')
    .forEach((item) => {
      const [key, val] = item.split('=');
      obj[key] = val || '';
    })
  return obj;
}
```

### 题目三：实现一个函数，可以将数组转化为树状数据结构
```js
// 入参格式参考：
const arr = [
  { id: 1, name: 'i1' },
  { id: 2, name: 'i2', parentId: 1 },
  { id: 4, name: 'i4', parentId: 3 },
  { id: 3, name: 'i3', parentId: 2 },
  { id: 5, name: 'i5', parentId: 3 },
  { id: 8, name: 'i8', parentId: 7 }
];

/* 可以将数组转化为树状数据结构，要求程序具有侦测错误输入的能力*/
function buildTree(arr) {
  let result, treeMap = {};
  arr.forEach((item) => {
    treeMap[item.id] = item;
  });
  for (let key of Object.keys(treeMap)) {
    const node = treeMap[key];
    if (node.parentId) {
      const parent = treeMap[node.parentId];
      if (!parent) continue;
      if (parent.children) {
        parent.children.push(node);
      } else {
        parent.children = [node];
      }
    } else {
      result = node;
    }
  }
  return result;
}
```

### 题目四：返回最接近输入值的数字，如果有多个，返回最大的那个

```js
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
```
