/** 
 * 求两点间的距离
 * @return {Number}
 */
function getDistance(x1, y1, x2 = 0, y2 = 0) {
	const w = x1 - x2;
	const h = y1 - y2;
	return Math.sqrt(w ** 2 + h ** 2);
}

export default getDistance;
