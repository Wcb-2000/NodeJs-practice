/*
 * Author: 吴楚标
 * Date: 2023-01-26 01:27:51
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-26 01:48:50
 * Description: 
*/
const fs = require('fs')

function write(err) {
console.log(err);
}

// 写入文件 封装一层
function writeFile(path, data){
  fs.writeFile(path, data, write)
}

// 测试
// 将 小红-99 小白-100 小黄-70 小黑-88  写入新文件 并换行
function read(err, data) {
  console.log(err);
  console.log(data);
  if(err) {
    console.log('文件读取失败:' + err);
  } else {
    const string = data.split(' ')
    const arr = []
    string.forEach(item => {
      arr.push(item.replace('-', ': '))
    })
    const newStr = arr.join('\r\n')
    console.log(newStr);
    // 写入内容
    writeFile('./2.txt', newStr)
  }
}

// 读取文件
fs.readFile('./1.txt', 'utf8', read)


