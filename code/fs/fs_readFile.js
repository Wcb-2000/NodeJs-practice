/*
 * Author: 吴楚标
 * Date: 2023-01-26 00:44:35
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-26 01:06:54
 * Description:
*/
/* 
fs-读取文件内容

fs.readFile()

fs.readFile(path[, option], callback)

参数1： 必选，字符串，文件路径
参数2： 可选，以什么编码格式读取文件
参数3： 必选，文件读取完的回调结果
*/    

 const fs = require('fs')

 fs.readFile('./1.txt', 'utf-8', function(err, data) {
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
 })

