/** 
 * 作用：执行该函数，则 页面 scroll 至最顶端。
 * 使用document.documentElement.scrollTop或document.body.scrollTop获取到顶部的距离。
 * 从顶部滚动一小部分距离。
 * 使用window.requestAnimationFrame（）来滚动。
*/
const scrollToTop = _ => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
}

export default scrollToTop;
