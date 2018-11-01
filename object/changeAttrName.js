/**
 * 更改对象的属性名
 * @param {Object} obj 目标对象
 * @param {Array} aMatchAttr 二维数组
 * 注：该方法更改出入对象的属性值 (mutate)
 * 示例: [[oldAttrName, newAttrName], [oldAttrName, newAttrName], ...]
 *
 * eg:
 * let o = {'a': 111,'b': 222}
 *  changeAttrName(o, [['a', 'x'], ['b', 'y']])  ->   {x: 111, y: 222}
 *  o -> {x: 111, y: 222}
 */
function changeAttrName(obj = {}, aMatchAttr) {
  const m = new Map(aMatchAttr);

  for (const attr of Object.keys(obj)) {
    if (m.has(attr)) {

      // 获得新属性
      obj[m.get(attr)] = obj[attr];

      // 删除原属性
      delete obj[attr];
    }
  }

  return obj;
}

export default changeAttrName;