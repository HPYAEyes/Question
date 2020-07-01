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