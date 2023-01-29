/*
 * Author: 吴楚标
 * Date: 2023-01-29 00:37:34
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-29 23:19:37
 * Description: 
*/
// 解析文件 并 分别写入新文件中
// 将html文件不太组成拆解
const fs = require('fs')
const path = require('path')

const regStyle = /<style>[\s\S]*<\/style>/
const regScript = /<script>[\s\S]*<\/script>/

function callBackWrite(err, type) {
  console.log(err);
  console.log(type);
  if(err) return console.log(`写入${type}文件失败:` + err);
  console.log(`写入${type}文件成功！`);
}

function resolveCss(data) {
  const obj = regStyle.exec(data)

  const newObj = obj[0].replace('<style>', '').replace('</style>', '')

  fs.writeFile(path.join(__dirname, './test/index.css'), newObj,(e) => {callBackWrite(e, 'css')})
}

function resolveJs(data){
  const obj = regScript.exec(data)

  const newObj = obj[0].replace('<script>', '').replace('</script>', '')

  fs.writeFile(path.join(__dirname, './test/index.js'), newObj, (e) => {callBackWrite(e, 'js')})
}

function resolveHtml(data){

  const newObj = data.replace(regStyle, '<link rel="stylesheet" href="./index.css"/>').replace(regScript, '<script src="./index.js"></script>')

  fs.writeFile(path.join(__dirname, './test/index.html'), newObj, (e) => {callBackWrite(e, 'html')})
}

function callbackRead(err, data) {
  if(err) return console.log("读文件失败！" + err);
  console.log("读取文件成功");
  resolveCss(data)
  resolveJs(data)
  resolveHtml(data)
}

fs.readFile(path.join(__dirname, './test2.html'), 'utf8', callbackRead)

