/*
 * Author: 吴楚标
 * Date: 2023-01-26 01:09:34
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-26 01:18:36
 * Description: 
*/
/* 
fs-写入文件内容

fs.writeFile()

fs.writeFile(file, data[, option], callback)

参数1： 必选，字符串，文件路径
参数2： 必选，写入内容
参数3： 可选，编码格式，默认utf8
参数4： 必选，文件读取完的回调结果
*/

const fs = require('fs')

function fsWrite(err) {
  if(err) {
    return console.log('文件写入失败：' + err);
  } else {
    console.log('文件写入成功');
  }
}

function fsRead(err, data) {
  // 读取成功 err 为 null
  // 读取失败 err 为 错误对象， data 为 undefined
  console.log(err);
  console.log(Boolean(err));
  console.log(data);
  console.log('111');

  if(err) {
    return console.log('文件读取失败：' + err);
  } else {
    console.log('读取文件成功：'+ data);
  }
}

fs.writeFile('../1.txt', 'writeFile text', fsWrite)

fs.readFile('./1.txt', 'utf-8', fsRead)