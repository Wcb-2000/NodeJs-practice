/*
 * Author: 吴楚标
 * Date: 2023-01-27 23:26:57
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-27 23:49:51
 * Description: 
*/
/* 
问题：使用fs模块操作文件时，若path是相对路径（./ 或 ../），容易出现路径拼接错误问题
原因：代码运行时，会以执行node命令时所处的目录与path拼接成完整路径

解决方式： 将相对路径方式改为完整路径，防止动态凭借问题
*/

const fs = require('fs')

// 绝对路径太长，移植性差，不利于维护
 /* 
 fs.readFile('/Users/wcb/Desktop/前端知识体系/nodeJs/NodeJs-practice/code/fs/1.txt', 'utf-8', function(err, data) {
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
 }) */

//  __dirname 当前目录路径
 console.log(__dirname);
 fs.readFile(__dirname + '/1.txt', 'utf-8', function(err, data) {
  if(err) {
    return console.log('文件读取失败：' + err);
  } else {
    console.log('读取文件成功：'+ data);
  }
 })