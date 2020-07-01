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