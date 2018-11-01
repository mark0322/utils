/** 
 * 返回随机反色（默认返回 16 进制的随机颜色）
 * @param {Boolean} isRGB 当为 true 时， 返回 rgb 格式颜色
 * @return {String}
 */
function randomColor(isRGB) {
	const r = random255(),
				g = random255(),
				b = random255();

	if (isRGB) {
		return `rgb(${r},${g},${b})`;
	}

	return '#' + toHex(r) + toHex(g) + toHex(b);
}

export default randomColor;

function toHex(n) {
	return n = n < 17 ? '0' + n.toString(16) : n.toString(16);
}

function random255() {
	return Math.random() * 256 | 0;
}
