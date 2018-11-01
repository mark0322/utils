/** 
 * 创建格式为 YYYYMM 的 date list
 * @example 1: createDateList([2017, 2018]) ->
 * [
 *  "201701", "201702", "201703", "201704", "201705", "201706", 
 *  "201707", "201708", "201709", "201710", "201711", "201712", 
 *  "201801", "201802", "201803", "201804", "201805", "201806", 
 *  "201807", "201808", "201809", "201810", "201811", "201812"
 * ]
 *
 * @example 2: createDateList(2018, 5)  ->
 * ["201801", "201802", "201803", "201804", "201805"]
 * 
 * @param { Number || Array } yearList
 * @param { Number } maxMonth
 */
function createDateList(yearList, maxMonth = 12) {
  let result = [];
  yearList = [].concat(yearList);

  for (const year of yearList) {
    const dateList = Array(maxMonth)
      .fill(year)
      .reduce((acc, year, i) => {
        const month = i < 9 ? '0' + (i + 1) : i + 1;
        return acc.push(year + '' + month) && acc;
      }, []);

    result = result.concat(dateList);
  }

  return result;
}

export default createDateList;
