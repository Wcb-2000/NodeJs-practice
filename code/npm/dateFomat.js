/*
 * Author: 吴楚标
 * Date: 2023-02-13 23:53:33
 * LastEditors: 吴楚标
 * LastEditTime: 2023-02-14 00:02:35
 * Description: 
*/
 
function dateFormat(date) {
  const dt = new Date(date)

  const y = dt.getFullYear()
  const m = padZero(dt.getMonth() + 1)
  const d = padZero(dt.getDate())

  const hh = padZero(dt.getHours())
  const mm = padZero(dt.getMinutes())
  const ss = padZero(dt.getSeconds())

  return `${y}-${m}-${d} ${hh}:${mm}:${ss}`
}

function padZero(n) {
  return n>9 ? n: '0' + n
}

module.exports = {dateFormat}