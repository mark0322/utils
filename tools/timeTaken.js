// 测试函数的执行时间
function timeTaken(callback, ...args) {
  console.time('timeTaken');
  const r = callback(...args);
  console.timeEnd('timeTaken');
  return r;
}

export default timeTaken;
