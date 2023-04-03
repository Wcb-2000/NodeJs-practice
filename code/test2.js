/*
 * Author: 吴楚标
 * Date: 2023-04-02 17:42:21
 * LastEditors: 吴楚标
 * LastEditTime: 2023-04-02 18:17:03
 * Description: 
*/
function test() {
  let a = []
  let result = []

  let b = []
  let blue = 0

  for(let i = 1; i < 34; i++) {
    a.push(i)
    if(i < 17) b.push(i)
  }

  while(result.length < 6) {
    let num = Math.floor(Math.random() * a.length) + 1
    let index = a.findIndex(e => e === num)
    result.push(...a.splice(index, 1))
  }

  result.sort((a, b) => a - b)

  blue = Math.floor(Math.random() * b.length) + 1

  // return `本期特码是：${result.join(',')} + ${blue}`
  return { result: result.join(','), blue}

}

function getObj() {
  let arr = []
  while(arr.length < 5) {
    let a = test()
    if(arr.find(e => e.blue === a.blue)) continue
    arr.push(a)
  }
  // 根据特码排个序号
  arr.sort((a, b) => a.blue - b.blue)
  // 拼接好复制
  let str = ''
  arr.forEach((e, i) => {
    str += `${e.result} + ${e.blue}\n`
  })
  return str
}

console.log(getObj());