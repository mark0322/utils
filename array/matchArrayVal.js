/**
 * 将一维arr中每个值所占sum(arr)的百分比 * matchVal
 * @param {Array} arr
 * @param {Number} matchVal
 * @param {Function} [iteratee] 可选参
 * @return {Array}
 * eg1 matchArrayVal([1, 2, 3, 4, 5], 100)
 *      ->  [6.6667, 13.3334, 20, 26.6668, 33.3333]
 *
 * eg2 matchArrayVal([{val:1},{val:2},{val:3}], 100, o => o.val)
 *      ->  [16.6667, 33.3333, 50]
*/
function matchArrayVal(arr, matchVal, iteratee) {
  (typeof iteratee === 'function') && (arr = arr.map(iteratee));
  let sum = arr.reduce((a, b) => a + b);
  return arr.map(d => d / sum * matchVal);
}

export default matchArrayVal;
