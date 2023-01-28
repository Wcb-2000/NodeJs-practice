/*
 * Author: 吴楚标
 * Date: 2023-01-29 00:05:42
 * LastEditors: 吴楚标
 * LastEditTime: 2023-01-29 00:06:47
 * Description: 
*/
/* 
path.extname(path) 获取文件扩展名
*/

const path = require('path')

const name = '/a/v/d/s/index.js'

const fileName = path.extname(name)
console.log(fileName);